import React, { createContext, useState, useContext, ReactNode } from "react";
import { SelectChangeEvent } from "@mui/material/Select/Select";

interface FormStates {
  agency: string;
  team: string;
  job: string;
  areaLeader: string;
  searchManager: string;
  jobDescription: string;
  personToReplace: string;
  newHireDate: Date | null;
  replacementDate: Date | null;
  requestingUser: string;
  teamChangeValue: string;
  reportChangeValue: string;
  jobChangeValue: string;
  motive: string;
}

interface AppContextProps {
  form: {
    agency: string;
    team: string;
    job: string;
    areaLeader: string;
    searchManager: string;
    jobDescription: string;
    personToReplace: string;
    newHireDate: Date | null;
    replacementDate: Date | null;
    requestingUser: string;
    teamChangeValue: string;
    reportChangeValue: string;
    jobChangeValue: string;
    motive: string;
  };
  type: string;
  paymentType: string;
  clientsToWorkWith: string;
  teamChangeRadio: string;
  reportChangeRadio: string;
  jobChangeRadio: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setPaymentType: React.Dispatch<React.SetStateAction<string>>;
  setClientsToWorkWith: React.Dispatch<React.SetStateAction<string>>;
  setTeamChangeRadio: React.Dispatch<React.SetStateAction<string>>;
  setReportChangeRadio: React.Dispatch<React.SetStateAction<string>>;
  setJobChangeRadio: React.Dispatch<React.SetStateAction<string>>;
  handleTypeChange: (newValue: string) => void;
  handleFormChange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
      | Date
      | null
  ) => void;
  resetForm: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const initialFormState = {
    agency: "",
    team: "",
    job: "",
    areaLeader: "",
    searchManager: "",
    jobDescription: "",
    personToReplace: "",
    newHireDate: null,
    replacementDate: null,
    requestingUser: "",
    teamChangeValue: "",
    reportChangeValue: "",
    jobChangeValue: "",
    motive: "",
  };

  const initialType = "newHire";
  const initialPaymentType = "";
  const initialClientsToWorkWith = "";
  const initialTeamChangeRadio = "";
  const initialReportChangeRadio = "";
  const initialJobChangeRadio = "";

  const [form, setForm] = useState<FormStates>({
    agency: "",
    team: "",
    job: "",
    areaLeader: "",
    searchManager: "",
    jobDescription: "",
    personToReplace: "",
    newHireDate: null,
    replacementDate: null,
    requestingUser: "",
    teamChangeValue: "",
    reportChangeValue: "",
    jobChangeValue: "",
    motive: "",
  });
  const [type, setType] = useState<string>("newHire");
  const [paymentType, setPaymentType] = useState<string>("");
  const [clientsToWorkWith, setClientsToWorkWith] = useState<string>("");
  const [teamChangeRadio, setTeamChangeRadio] = useState<string>("");
  const [reportChangeRadio, setReportChangeRadio] = useState<string>("");
  const [jobChangeRadio, setJobChangeRadio] = useState<string>("");

  const handleFormChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.SyntheticEvent
      | SelectChangeEvent<string>
      | Date
      | null
  ) => {
    if (e instanceof Date) {
      setForm((prev) => ({
        ...prev,
        fecha: e,
      }));
    } else if (e && "target" in e) {
      const target = e.target as HTMLInputElement;
      setForm((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    }
  };

  const handleTypeChange = (newValue: string) => {
    setType(newValue);
  };

  const resetForm = () => {
    setForm(initialFormState);
    setType(initialType);
    setPaymentType(initialPaymentType);
    setClientsToWorkWith(initialClientsToWorkWith);
    setTeamChangeRadio(initialTeamChangeRadio);
    setReportChangeRadio(initialReportChangeRadio);
    setJobChangeRadio(initialJobChangeRadio);
  };

  return (
    <AppContext.Provider
      value={{
        form,
        type,
        paymentType,
        clientsToWorkWith,
        teamChangeRadio,
        reportChangeRadio,
        jobChangeRadio,
        setType,
        setPaymentType,
        setClientsToWorkWith,
        setTeamChangeRadio,
        setReportChangeRadio,
        setJobChangeRadio,
        handleTypeChange,
        handleFormChange,
        resetForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext debe ser utilizado dentro de un AppProvider"
    );
  }
  return context;
};

export { AppProvider, useAppContext };
