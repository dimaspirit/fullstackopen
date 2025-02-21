import express from 'express';
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
    let errorMessage = 'An error occurred.';

    if(error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;