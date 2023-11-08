import "./App.css";
import { useEffect, useState } from "react";
import { fetchFixtures } from "./lib/fetch-data";
import { data } from "./lib/dummy-data";
import Table from "./components/Table";
import NavBar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FixtureDetails from "./components/FixtureDetails";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import FixtureDatePicker from "./components/FixtureDatePicker";

function App() {
  const [fixtures, setFixtures] = useState(data);

  // const fetchData = async () => {
  //   const result = await fetchFixtures();
  //   setFixtures(result);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const activeFixtures = fixtures.response;
  // activeFixtures.sort((a, b) => a.league.id - b.league.id);
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

      <div className="w-full md:w-[600px] lg:w-[600px] m-auto">
        {fixtures ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Table data={fixtures} />}></Route>
              <Route
                path="/fixture/:matchID"
                element={<FixtureDetails data={fixtures} />}
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
