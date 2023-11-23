import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import { useAppContext } from "../../context";
import { ReplacementPage } from "../replacement";
import { NewHirePage } from "../newHire";
import { SalaryAdjustmentPage } from "../salaryAdjustment";
import { Header } from "../../components/header";

export const HomePage = (): JSX.Element => {
  const { type, handleTypeChange } = useAppContext();

  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-center bg-gray-200">
      <div className="bg-white sm:w-[60vw] w-[35vw] 2xl:w-[40vw] rounded-xl px-5 h-[90vh] overflow-scroll scroll sm:no-scrollbar">
        <Header />
        <Box sx={{ width: "100%" }}>
          <TabContext value={type}>
            <Box sx={{ mx: 3 }}>
              <Tabs
                value={type}
                onChange={(event, newValue) => handleTypeChange(newValue)}
                aria-label="basic tabs example"
                centered
                className="my-5"
                variant="fullWidth"
              >
                <Tab value="newHire" label="Nuevo recurso" />
                <Tab value="replacement" label="Reemplazo" />
                <Tab value="salaryAdjustment" label="Ajuste salarial" />
              </Tabs>
            </Box>
            <TabPanel value="newHire">
              <NewHirePage />
            </TabPanel>
            <TabPanel value="replacement">
              <ReplacementPage />
            </TabPanel>
            <TabPanel value="salaryAdjustment">
              <SalaryAdjustmentPage />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};
