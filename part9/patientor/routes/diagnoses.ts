import express, {Response} from 'express';
import diagnosesServices from '../services/diagnoses';
import { IDiagnosis } from '../types/diagnoses';

const router = express.Router();

router.get('/', (_req, res:Response<IDiagnosis[]>) => {
  res.send(diagnosesServices.getDiagnoses());
});

export default router;