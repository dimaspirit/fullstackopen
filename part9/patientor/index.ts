import express from 'express';
import cors from 'cors';

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('ping');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});