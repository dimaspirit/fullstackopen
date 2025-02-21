import patientData from '../data/patients';
import { IPatient, PublicPatient } from '../types/patients';

const getPatients = ():IPatient[] => {
  return patientData;
};

const getPublicpatients = (): PublicPatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, 
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getPatients,
  getPublicpatients,
};