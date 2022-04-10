import "./App.css";

import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Overview from "./pages/Overview";
import Ongoing from "./pages/Ongoing";
import RiderList from "./pages/RiderList";
import UserList from "./pages/UserList";
import Packages from "./pages/Packages";
import Complains from "./pages/Complains";
const { Content } = Layout;

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/overview" element={<Overview/>}/>
              <Route path="/ongoing" element={<Ongoing/>}/>
              <Route path="/riderlist" element={<RiderList/>}/>
              <Route path="/userlist" element={<UserList/>}/>
              <Route path="/packages" element={<Packages/>}/>
              <Route path="/complains" element={<Complains/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
