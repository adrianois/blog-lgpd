/**
 * /api/inscricao.js  — Vercel Serverless Function
 *
 * Recebe os dados do formulário (POST JSON), valida e repassa
 * para o Google Apps Script usando a URL armazenada como
 * variável de ambiente no Vercel (nunca exposta no HTML).
 *
 * Variável de ambiente necessária no Vercel:
 *   APPS_SCRIPT_URL = https://script.google.com/macros/s/.../exec
 */

export default async function handler(req, res) {
  /* ── Só aceita POST ─────────────────────────────────────── */
  if (req.method !== 'POST') {
    return res.status(405).json({ resultado: 'erro', erro: 'Método não permitido.' });
  }

  /* ── Lê a URL do ambiente (nunca vai para o cliente) ────── */
  const SCRIPT_URL = process.env.APPS_SCRIPT_URL;
  if (!SCRIPT_URL) {
    console.error('[inscricao] Variável APPS_SCRIPT_URL não configurada no Vercel.');
    return res.status(500).json({ resultado: 'erro', erro: 'Serviço temporariamente indisponível.' });
  }

  /* ── Valida o body ──────────────────────────────────────── */
  const { nome, email, telefone, curso, dataHora } = req.body || {};

  if (!nome || !email || !telefone || !curso) {
    return res.status(400).json({ resultado: 'erro', erro: 'Campos obrigatórios ausentes.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ resultado: 'erro', erro: 'E-mail inválido.' });
  }

  if (nome.trim().length < 3) {
    return res.status(400).json({ resultado: 'erro', erro: 'Nome muito curto.' });
  }

  /* ── Monta query string e chama o Apps Script (doGet) ───── */
  const params = new URLSearchParams({
    nome:     nome.trim(),
    email:    email.trim().toLowerCase(),
    telefone: telefone.trim(),
    curso:    curso.trim(),
    dataHora: dataHora || new Date().toLocaleString('pt-BR', { timeZone: 'America/Campo_Grande' })
  });

  const urlFinal = `${SCRIPT_URL}?${params.toString()}`;

  try {
    const appsResp = await fetch(urlFinal, {
      method: 'GET',
      // Apps Script não exige headers especiais para doGet
    });

    // Apps Script retorna JSON via ContentService
    const json = await appsResp.json();

    if (json.resultado === 'ok') {
      return res.status(200).json({ resultado: 'ok' });
    } else {
      console.error('[inscricao] Apps Script retornou erro:', json);
      return res.status(500).json({ resultado: 'erro', erro: json.erro || 'Erro no Apps Script.' });
    }

  } catch (err) {
    console.error('[inscricao] Falha ao chamar Apps Script:', err.message);
    return res.status(500).json({ resultado: 'erro', erro: 'Não foi possível registrar a inscrição.' });
  }
}
