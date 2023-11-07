import "./App.css";
import { useEffect } from "react";
import { fetchFixtures } from "./lib/fetch-data";
import { data } from "./lib/dummy-data";
import Table from "./components/Table";
import NavBar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fixture from "./components/Fixture";

function App() {
  // const fetchData = async () => {
  //   const fixtures = await fetchFixtures();
  //   console.log(fixtures);
  // };

  // useEffect(() => {
  //   fetchData();
  // });

  return (
    <div className="w-full md:w-[700px] lg:w-[800px] m-auto">
      <NavBar title={"LiveScore"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table data={data.response} />}></Route>
          <Route
            path="/fixture/:matchID"
            element={<Fixture data={data.response} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
