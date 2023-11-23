import { PublicisLogo } from "../../utils/publicisLogo";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context";

export const SuccessPage = (): JSX.Element => {
  const { resetForm } = useAppContext();

  const navigate = useNavigate();

  const handleSubmit = () => {
    resetForm();
    navigate("/");
  };

  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-center bg-gray-200">
      <div className="bg-white sm:w-[60vw] w-[35vw] rounded-xl px-5 h-[90vh] overflow-scroll scroll sm:no-scrollbar">
        <div className="flex flex-col w-full h-3/4 gap-10 justify-start items-center mt-20">
          <PublicisLogo className="w-36 h-36" />
          <h2 className="font-bold text-3xl">¡Formulario enviado con éxito!</h2>
          <Button variant="contained" onClick={handleSubmit} className="w-1/2">
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
};
