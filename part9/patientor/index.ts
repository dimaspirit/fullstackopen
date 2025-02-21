import express from 'express';
import cors from 'cors';

import diagnosesRoutes from './routes/diagnoses';
import patientsRoutes from './routes/patients';

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

app.use('/api/diagnoses', diagnosesRoutes);
app.use('/api/patients', patientsRoutes);

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('ping');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});