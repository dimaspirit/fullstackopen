import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
const PORT = 3003;

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if(isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: 'malformatted parameters' });
    return;
  } else {
    res.send(calculateBmi(height, weight));
  }
});

app.get('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    res.status(400).json({ error: 'parameters missing' });
    return;
  }

  if (!Array.isArray(daily_exercises) || !daily_exercises.every(e => !isNaN(Number(e))) || isNaN(Number(target))) {
    res.status(400).json({ error: 'malformatted parameters' });
    return;
  }

  const dailyExercises = daily_exercises.map(e => Number(e));

  res.send(calculateExercises(dailyExercises, Number(target))).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});