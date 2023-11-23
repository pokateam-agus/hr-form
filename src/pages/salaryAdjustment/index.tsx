import { Button } from "@mui/material";
import { useAppContext } from "../../context";
import { DropdownComponent } from "../../components/dropdown";
import { CheckboxDropdownComponent } from "../../components/checkboxDropdown";
import { FilteredDropdownComponent } from "../../components/filteredDropdown";
import { InputComponent } from "../../components/input";
import { DynamicInputComponent } from "../../components/dynamicInput";
import { RadioComponent } from "../../components/radioGroup";
import { TextAreaComponent } from "../../components/textArea";
import {
  uniqueAgencies,
  uniqueTeams,
  uniqueJobs,
  motiveData,
} from "../../context/data";
import { DynamicFilteredDropdownComponent } from "../../components/dynamicFilteredDropdown";
import { paymentTypeData } from "../../context/data";
import { useNavigate } from "react-router-dom";

export const SalaryAdjustmentPage = (): JSX.Element => {
  const {
    form,
    handleFormChange,
    paymentType,
    teamChangeRadio,
    reportChangeRadio,
    jobChangeRadio,
    setPaymentType,
    setTeamChangeRadio,
    setReportChangeRadio,
    setJobChangeRadio,
  } = useAppContext();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/submited");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full items-center justify-center h-fit"
    >
      <div className="grid grid-cols-2 grid-rows-8 gap-8 w-full">
        <DropdownComponent
          value={form.motive}
          setValue={handleFormChange}
          options={motiveData}
          label="Motivo"
          name="motive"
        />
        <DropdownComponent
          value={form.agency}
          setValue={handleFormChange}
          options={uniqueAgencies}
          label="Agencia"
          name="agency"
        />
        <FilteredDropdownComponent
          value={form.team}
          setValue={handleFormChange}
          options={uniqueTeams}
          label="Área"
          filterValue={form.agency}
          name="team"
        />
        <FilteredDropdownComponent
          value={form.job}
          setValue={handleFormChange}
          options={uniqueJobs}
          label="Cargo"
          filterValue={form.team}
          name="job"
        />
        <InputComponent
          label="Nombre del líder del área"
          value={form.areaLeader}
          setValue={handleFormChange}
          name="areaLeader"
        />
        <InputComponent
          label="Nombre de la persona a reemplazar"
          value={form.personToReplace}
          setValue={handleFormChange}
          name="personToReplace"
        />
        <InputComponent
          label="Nombre del solicitante"
          value={form.requestingUser}
          setValue={handleFormChange}
          name="requestingUser"
        />
        <CheckboxDropdownComponent
          options={paymentTypeData}
          label="Remuneración a cargo de"
          value={paymentType}
          setValue={setPaymentType}
          name="paymentType"
        />
        <RadioComponent
          label="¿Cambia de equipo?"
          value={teamChangeRadio}
          setValue={setTeamChangeRadio}
        />
        <DynamicInputComponent
          label="¿A cual?"
          value={form.teamChangeValue}
          setValue={handleFormChange}
          referedValue={teamChangeRadio}
          name="teamChangeValue"
        />
        <RadioComponent
          label="¿Cambia de reporte?"
          value={reportChangeRadio}
          setValue={setReportChangeRadio}
        />
        <DynamicInputComponent
          label="¿A cual?"
          value={form.reportChangeValue}
          setValue={handleFormChange}
          referedValue={reportChangeRadio}
          name="reportChangeValue"
        />

        <RadioComponent
          label="¿Cambia de puesto?"
          value={jobChangeRadio}
          setValue={setJobChangeRadio}
        />
        <DynamicFilteredDropdownComponent
          value={form.jobChangeValue}
          setValue={handleFormChange}
          options={uniqueJobs}
          label="¿A cual?"
          filterValue={form.team}
          name="jobChangeValue"
          referedValue={jobChangeRadio}
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-1 gap-8 w-full mt-5 items-center justify-center h-fit">
        <TextAreaComponent
          label="Comentarios y/o claraciones"
          value={form.jobDescription}
          setValue={handleFormChange}
          name="jobDescription"
        />
        <Button
          className="font-extrabold uppercase"
          color="primary"
          variant="contained"
          type="submit"
        >
          enviar formulario
        </Button>
      </div>
    </form>
  );
};
