import { v1 as uuidv1 } from 'uuid';
import patientData from '../data/patients';
import { IPatient, PublicPatient, NewPatientEntry } from '../types/patients';

const getPatients = ():IPatient[] => {
  return patientData;
};

const getPatient = (id: string):IPatient => {
  const patient = patientData.find(patient => patient.id === id);

  if(!patient) {
    throw new Error('Patient not found');
  }

  return patient;
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
  getPatient,
  getPublicpatients,
  addPatient,
};