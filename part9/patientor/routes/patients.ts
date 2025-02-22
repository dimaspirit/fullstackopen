import express from 'express';
import z from 'zod';
import { toNewDiaryEntry } from '../utils';
import patientsServices  from '../services/patients';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsServices.getPatients());
});

router.post('/', (req, res) => {
  try {
    const newPatient = toNewDiaryEntry(req.body);
    const addedPatient = patientsServices.addPatient(newPatient);

    res.json(addedPatient);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.issues });
    } else {
      res.status(400).send({ error: 'unknown error' });
    }
  }
});

export default router;