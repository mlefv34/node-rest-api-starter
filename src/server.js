import express from 'express';
import { config } from 'dotenv';
import { healthRouter } from './routes/health.js';
import { exampleRouter } from './routes/example.js';
import { requestLogger } from './middleware/logger.js';
import { errorHandler } from './middleware/errors.js';

config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '1mb' }));
app.use(requestLogger);

app.use('/health', healthRouter);
app.use('/example', exampleRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found', path: req.path });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
});
