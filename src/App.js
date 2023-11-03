import "./App.css";
import HamburgerMenu from "./Components/Hamburgermenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Admin from "./Pages/Admin";
import Buzz from "./Pages/Buzz";
import Leave from "./Pages/Leave";
import Directory from "./Pages/Directory";
import Dashboard from "./Pages/Dashboard";
import Time from "./Pages/Time";
import MyInfo from "./Pages/MyInfo";
import PIM from "./Pages/PIM";
import Maintenance from "./Pages/Maintenance";
// import Topbar from "./Components/Toolbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Box component="main" height="100vh" className="pages">
          <Box><HamburgerMenu /></Box>
          <Grid container>
            <Routes>
              <Route exact path="/" element={<Admin />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/buzz" element={<Buzz />} />
              <Route exact path="/leave" element={<Leave />} />
              <Route exact path="/directory" element={<Directory />} />
              <Route exact path="/maintenance" element={<Maintenance />} />
              <Route exact path="/myinfo" element={<MyInfo />} />
              <Route exact path="/pim" element={<PIM />} />
              <Route exact path="/time" element={<Time />} />

              {/* <Route exact path="*" element={<h1>No Routes Matches</h1>} /> */}
            </Routes>
          </Grid>
        </Box>
      </Router>
    </div>
  );
}

export default App;
