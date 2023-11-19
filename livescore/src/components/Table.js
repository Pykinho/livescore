import Fixture from "./Fixture";
import FixtureDatePicker from "./FixtureDatePicker";
import League from "./League";
import { useState, useEffect } from "react";
import { fetchFixtures } from "../lib/fetch-data";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Table({ data }) {
  let prevLeagueId = null;

  const [fixtures, setFixtures] = useState(null);
  const [matchDate, setMatchDate] = useState(new Date());

  const fetchData = async () => {
    const result = await fetchFixtures(
      `${matchDate.getUTCFullYear()}-${matchDate.getUTCMonth()}-${matchDate.getUTCDate()}`
    );
    setFixtures(result.response);
    console.log(fixtures);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const activeFixtures = fixtures.response;
  // fixtures?.sort((a, b) => a.league.id - b.league.id);

  return fixtures ? (
    <div className="md:w-[600px] lg:w-[600px]" align="center">
      <div className="grid grid-cols-1 divide-y divide-indigo-900 rounded-2xl">
        <FixtureDatePicker matchDate={matchDate} setMatchDate={setMatchDate} />
        {fixtures.map((fixture) => {
          if (prevLeagueId !== fixture.league.id) {
            prevLeagueId = fixture.league.id;
            return (
              <div
                className=" grid grid-cols-1 divide-y divide-indigo-900 "
                data-theme="synthwave"
              >
                <League league={fixture.league} />
                <Fixture fixture={fixture} />
              </div>
            );
          } else {
            prevLeagueId = fixture.league.id;
            return <Fixture fixture={fixture} />;
          }
        })}
      </div>
    </div>
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
  );
}
export default Table;
