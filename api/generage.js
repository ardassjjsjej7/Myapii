export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: "URL yok" });

  try {
    const response = await fetch(url, { method: 'HEAD' });
    const headers = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    res.status(200).json(headers);
  } catch (e) {
    res.status(500).json({ error: "HEAD isteği başarısız" });
  }
}
