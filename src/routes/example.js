import { Router } from 'express';

export const exampleRouter = Router();

const ITEMS = ['alpha', 'beta', 'gamma', 'delta'];

exampleRouter.get('/', (req, res) => {
  res.json({
    message: 'Hello from the example route — v2',
    items: ITEMS,
    count: ITEMS.length,
  });
});

exampleRouter.get('/:id', (req, res) => {
  const idx = Number(req.params.id);
  if (Number.isNaN(idx) || idx < 0 || idx >= ITEMS.length) {
    return res.status(404).json({ error: 'item not found' });
  }
  res.json({ id: idx, value: ITEMS[idx] });
});

exampleRouter.post('/', (req, res) => {
  const { name } = req.body || {};
  if (!name || typeof name !== 'string' || name.length === 0) {
    return res.status(400).json({ error: 'name is required (non-empty string)' });
  }
  res.status(201).json({
    id: Date.now(),
    name: name.trim(),
    createdAt: new Date().toISOString(),
  });
});
