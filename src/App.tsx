import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppProvider } from "./context";
import { HomePage } from "./pages/home";
import { SuccessPage } from "./pages/successPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c843c",
      light: "#9c843c",
      dark: "#9c843c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffff",
      light: "#ffff",
      dark: "#ffff",
      contrastText: "#ffff",
    },
  },
});

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/submited" element={<SuccessPage />} />
            </Routes>
          </Router>
        </AppProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
