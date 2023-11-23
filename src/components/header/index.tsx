import { PublicisLogo } from "../../utils/publicisLogo";

export const Header = (): JSX.Element => {
  return (
    <header className="mt-4 mb-8 flex flex-col items-center justify-center z-10">
      <PublicisLogo className="md:w-26 h-26 sm:w-16 h-16" />
      <h1 className="font-bold mt-5 sm:text-sm md:text-xl">
        Publicis Argentina - Recursos Humanos - Solicitudes
      </h1>
    </header>
  );
};
