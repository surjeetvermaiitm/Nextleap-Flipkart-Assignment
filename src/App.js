import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import theme from "./theme";
import FlipkartPage from "./Component/FlipkartPage";

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<FlipkartPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
