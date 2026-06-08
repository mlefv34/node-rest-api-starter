// centralized error handler — clean JSON response for all error types
export function errorHandler(err, req, res, next) {
  console.error(`[error] ${req.method} ${req.path}`, err.stack || err);
  const status = err.status || 500;
  res.status(status).json({
    // 404 → forward err.message, 500 → hide internals
    error: status === 500 ? 'Internal server error' : err.message,
    path: req.path,
  });
}
