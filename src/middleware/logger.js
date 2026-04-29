export function requestLogger(req, res, next) {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    const stamp = new Date().toISOString();
    console.log(`[${stamp}] ${req.method} ${req.path} → ${res.statusCode} (${ms}ms)`);
  });
  next();
}
