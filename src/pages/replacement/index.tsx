import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAppContext } from "../../context";
import { uniqueAgencies, uniqueTeams, uniqueJobs } from "../../context/data";
import { DropdownComponent } from "../../components/dropdown";
import { FilteredDropdownComponent } from "../../components/filteredDropdown";
import { InputComponent } from "../../components/input";
import { TextAreaComponent } from "../../components/textArea";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ReplacementPage = (): JSX.Element => {
  const { form, handleFormChange } = useAppContext();

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
      <div className="grid grid-cols-2 grid-rows-4 gap-8 w-full">
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
          name="team"
        />
        <FilteredDropdownComponent
          value={form.job}
          setValue={handleFormChange}
          options={uniqueJobs}
          label="Puesto a reemplazar"
          name="job"
        />
        <InputComponent
          label="Nombre de la persona a reemplazar"
          value={form.personToReplace}
          setValue={handleFormChange}
          name="personToReplace"
        />
        <DatePicker label="Fecha de reemplazo" />
        <InputComponent
          label="Nombre del lider del área"
          value={form.areaLeader}
          setValue={handleFormChange}
          name="areaLeader"
        />
        <InputComponent
          label="Nombre del solicitante"
          value={form.requestingUser}
          setValue={handleFormChange}
          name="requestingUser"
        />
        <InputComponent
          label="Nombre del encargado de la busqueda"
          value={form.searchManager}
          setValue={handleFormChange}
          name="searchManager"
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-1 gap-8 w-full mt-5 items-center justify-center">
        <TextAreaComponent
          label="Comentarios y/o aclaraciones"
          value={form.jobDescription}
          setValue={handleFormChange}
          name="jobDescription"
        />
        <Button
          className="font-bold uppercase"
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
