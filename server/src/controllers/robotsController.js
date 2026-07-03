export const getRobotsTxt = (req, res) => {
  const SITE_URL = 'https://swastik-creations-catlog.vercel.app';

  const content = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;

  res.set('Content-Type', 'text/plain');
  res.send(content);
};
