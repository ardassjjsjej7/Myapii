export default function handler(req, res) {
  const count = parseInt(req.query.count) || 1;
  const links = [];

  for (let i = 0; i < count; i++) {
    const code = [...Array(16)].map(() => Math.random().toString(36)[2]).join('');
    links.push(`https://discord.com/gifts/${code}`);
  }

  res.status(200).json({ generated: links });
}
