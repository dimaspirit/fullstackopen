import z from 'zod';
import { NewPatientEntry, Gender } from "./types/patients";

const newPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().date(),
  ssn: z.string(),
  gender: z.nativeEnum(Gender),
  occupation: z.string(),
});

export const toNewDiaryEntry = (object:unknown): NewPatientEntry => {
  return newPatientSchema.parse(object);
};