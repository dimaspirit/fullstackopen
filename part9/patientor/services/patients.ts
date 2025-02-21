import { v1 as uuidv1 } from 'uuid';
import patientData from '../data/patients';
import { IPatient, PublicPatient, NewPatientEntry } from '../types/patients';

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

const addPatient = (patienRaw: NewPatientEntry): IPatient => {
  const newPatient = {
    id: uuidv1(),
    ...patienRaw
  };

  patientData.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getPublicpatients,
  addPatient,
};