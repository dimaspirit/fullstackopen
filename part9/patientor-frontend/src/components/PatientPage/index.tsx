import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import patientServices from "../../services/patients";
import { Patient } from "../../types";

const PatientPage = () => {
  const [patient, setPatient] = useState<Patient | undefined>();
  const params = useParams();

  useEffect(() => {
    const fetchPatient = async (id: string) => {
      const data = await patientServices.getPatient(id);
      setPatient(data);
    };

    if(params.id) {
      fetchPatient(params.id);
    }
  }, [params.id]);
  return (
    <div>
      <h2>Patient {patient?.name}</h2>
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
    </div>
  );
};

export default PatientPage;