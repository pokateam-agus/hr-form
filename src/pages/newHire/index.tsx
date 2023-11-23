import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { useAppContext } from "../../context";
import { DropdownComponent } from "../../components/dropdown";
import { CheckboxDropdownComponent } from "../../components/checkboxDropdown";
import { FilteredDropdownComponent } from "../../components/filteredDropdown";
import { InputComponent } from "../../components/input";
import { useNavigate } from "react-router-dom";
import { TextAreaComponent } from "../../components/textArea";
import {
  uniqueAgencies,
  uniqueTeams,
  uniqueJobs,
  paymentTypeData,
  clientsData,
} from "../../context/data";

export const NewHirePage = (): JSX.Element => {
  const {
    form,
    paymentType,
    clientsToWorkWith,
    setPaymentType,
    setClientsToWorkWith,
    handleFormChange,
    // handleSubmit,
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
        <CheckboxDropdownComponent
          options={clientsData}
          label="Clientes a los que brindará servicio"
          value={clientsToWorkWith}
          setValue={setClientsToWorkWith}
          name="clientes-a-dar-servicio"
        />
        <DatePicker
          label="Fecha de ingreso deseada"
          value={form.newHireDate}
          onChange={handleFormChange}
        />
        <CheckboxDropdownComponent
          options={paymentTypeData}
          label="Remuneración a cargo de"
          value={paymentType}
          setValue={setPaymentType}
          name="paymentType"
        />
        <InputComponent
          label="Nombre del líder del área"
          value={form.areaLeader}
          setValue={handleFormChange}
          name="areaLeader"
        />
        <InputComponent
          label="Nombre del encargado de la busqueda"
          value={form.searchManager}
          setValue={handleFormChange}
          name="searchManager"
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-1 gap-8 w-full mt-5 items-center justify-center h-fit">
        <TextAreaComponent
          label="Descripción del puesto"
          value={form.jobDescription}
          setValue={handleFormChange}
          name="jobDescription"
        />
        <Button
          className="font-extrabold uppercase"
          color="primary"
          type="submit"
          variant="contained"
        >
          enviar formulario
        </Button>
      </div>
    </form>
  );
};
