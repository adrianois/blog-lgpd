export default async function handler(req, res) {
  const { file } = req.query;

  if (!file) {
    return res.status(400).json({ error: 'Nenhum arquivo especificado' });
  }

  // Sanitizar caminho do arquivo para evitar travessia de diretórios
  const cleanPath = file.replace(/^\/blog-lgpd\//, '').replace(/^\.\.\//g, '');
  
  const githubUser = process.env.GITHUB_USER || 'adrianois';
  const githubRepo = process.env.GITHUB_REPO || 'blog-lgpd';
  const githubBranch = process.env.GITHUB_BRANCH || 'main';
  const token = process.env.GITHUB_TOKEN;

  // Monta a URL do raw do GitHub
  const rawUrl = `https://raw.githubusercontent.com/${githubUser}/${githubRepo}/${githubBranch}/${cleanPath}`;

  const headers = {};
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  try {
    const response = await fetch(rawUrl, { headers });
    
    if (!response.ok) {
      return res.status(response.status).json({ error: `Erro ao buscar no GitHub: ${response.statusText}` });
    }

    const text = await response.text();
    
    // Configura os headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate'); // Cache no Vercel Edge

    res.status(200).send(text);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
