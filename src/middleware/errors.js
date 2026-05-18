// centralized error handler — clean JSON response for all error types
export function errorHandler(err, req, res, next) {
  console.error(`[error] ${req.method} ${req.path}`, err.stack || err);
  const status = err.status || 500;
  res.status(status).json({
    error: status === 500 ? 'Internal server error' : err.message,
    path: req.path,
  });
}
