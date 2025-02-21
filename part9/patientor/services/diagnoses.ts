import diagnoses from '../data/diagnoses';
import { IDiagnosis } from '../types/diagnoses';

const getDiagnoses = ():IDiagnosis[]  => {
  return diagnoses;
};

export default {
  getDiagnoses
};

