import { NewPatientEntry } from "./types/patients";

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
  if(!isString(name)) {
    throw new Error('Incorrect or missing name: ' + name);
  }

  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
      throw new Error('Incorrect date: ' + date);
  }
  return date;
};

const parseSSN = (ssn: unknown): string => {
  if(!isString(ssn)) {
    throw new Error('Incorrect or missing name: ' + ssn);
  }

  return ssn;
};

const parseGender = (gender: unknown): string => {
  if(!isString(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }

  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if(!isString(occupation)) {
    throw new Error('Incorrect or missing occupation: ' + occupation);
  }

  return occupation;
};

export const toNewDiaryEntry = (object:unknown): NewPatientEntry => {
  if(!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
    const newPatient: NewPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation)
    };

    return newPatient;
  }

  throw new Error('Incorrect or missing data');
};