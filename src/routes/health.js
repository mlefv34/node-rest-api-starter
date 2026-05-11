import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (req, res) => {
  res.json({
    ok: true,
    uptime: process.uptime(),
    timestamp: Date.now(),
    version: process.env.npm_package_version || '1.2.0',
    memory: process.memoryUsage().rss,
  });
});
