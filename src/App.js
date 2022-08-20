import "./App.css";

import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MapOngoing from "./pages/Ongoing";
import Completed from "./pages/Completed";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Ongoing from "./pages/Ongoing";

function App() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/ongoing" element={<Ongoing />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
