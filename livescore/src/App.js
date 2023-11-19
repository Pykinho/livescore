import "./App.css";
import { useState } from "react";

import Table from "./components/Table";
import NavBar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FixtureDetails from "./components/FixtureDetails";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import LeagueDetails from "./components/LeagueDetails";
import { plData } from "./lib/dummy-data";

function App() {
  const [fixtures, setFixtures] = useState(plData);

  const refresh = () => window.location.reload(true);

  return (
    <div>
      <NavBar title={"LiveScore"} />
      <button
        className="btn btn-sm fixed bottom-3 right-2 z-40"
        onClick={refresh}
      >
        Refresh
      </button>

      <div className="w-full m-auto" align="center">
        {fixtures ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Table data={fixtures} />}></Route>
              <Route
                path="/fixture/:matchID"
                element={<FixtureDetails data={fixtures} />}
              ></Route>

              <Route
                path="/league/:leagueID/:season"
                element={<LeagueDetails />}
              ></Route>
            </Routes>
          </BrowserRouter>
        ) : (
          <div
            className=" h-screen w-full p-10"
            align="center"
            data-theme="synthwave"
          >
            <Box>
              <CircularProgress />
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
