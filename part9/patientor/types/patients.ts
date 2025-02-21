export interface IPatient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export type PublicPatient = Omit<IPatient, 'ssn'>;

export type NewPatientEntry = Omit<IPatient, 'id'>;