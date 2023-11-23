interface Data {
  Equipo: string;
  PUESTO: string;
  agencia: string;
}

interface simpleData {
  id: number;
  value: string;
}

interface relatedData {
  id: number;
  value: string;
  relatedTo: string;
}

let dataList: Data[] = [];

const getAllData = async (): Promise<void> => {
  try {
    const response = await fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }

    const data = await response.json();
    dataList = data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const useUniqueAgencies = (data: Data[]): simpleData[] => {
  const uniqueAgencies = [...new Set(data.map((item) => item.agencia))];

  return uniqueAgencies.map((agency, index) => ({
    id: index,
    value: agency,
  }));
};

const useUniqueTeams = (data: Data[]): relatedData[] => {
  const uniqueTeams = [...new Set(data.map((item) => item.Equipo))];

  return uniqueTeams.map((team, index) => {
    const relatedTo = data.find((item) => item.Equipo === team)?.agencia || "-";
    return {
      id: index,
      value: team,
      relatedTo,
    };
  });
};

const useUniqueJobs = (data: Data[]): relatedData[] => {
  const uniqueJobs: { [job: string]: string } = {};

  data.forEach((item) => {
    const job = item.PUESTO;
    const relatedTeam = item.Equipo;

    if (!uniqueJobs[job]) {
      uniqueJobs[job] = relatedTeam;
    }
  });

  return Object.keys(uniqueJobs).map((job, index) => ({
    id: index,
    value: job,
    relatedTo: uniqueJobs[job], // Se actualiza para devolver el nombre del equipo
  }));
};

const getPaymentTypeData = async (): Promise<simpleData[]> => {
  try {
    const response = await fetch("/paymentTypeData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }

    const paymentTypeData: simpleData[] = await response.json();
    return paymentTypeData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getClientsData = async (): Promise<simpleData[]> => {
  try {
    const response = await fetch("/cliente_titular.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }

    const clientsData: simpleData[] = await response.json();
    return clientsData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getMotiveData = async (): Promise<simpleData[]> => {
  try {
    const response = await fetch("/motivo.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }

    const motiveData: simpleData[] = await response.json();
    return motiveData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

await getAllData();
const paymentTypeData = await getPaymentTypeData();
const clientsData = await getClientsData();
const motiveData = await getMotiveData();

const uniqueAgencies = useUniqueAgencies(dataList);
const uniqueTeams = useUniqueTeams(dataList);
const uniqueJobs = useUniqueJobs(dataList);

export {
  uniqueAgencies,
  uniqueTeams,
  uniqueJobs,
  paymentTypeData,
  clientsData,
  motiveData,
};
