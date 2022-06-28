import "./App.css";

import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Ongoing from "./pages/Ongoing";
import RiderList from "./pages/RiderList";
import UserList from "./pages/UserList";
import Packages from "./pages/Packages";
import Complains from "./pages/Complains";
import Completed from "./pages/Completed";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
              <Route path="/riderlist" element={<RiderList />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/complains" element={<Complains />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
