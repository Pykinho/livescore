import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchStandings } from "../lib/fetch-data";
import { leagueData } from "../lib/dummy-data";

function LeagueDetails({}) {
  const params = useParams();
  console.log(params);

  const [league, setLeague] = useState(leagueData.response[0]);
  const fetchData = async () => {
    const result = await fetchStandings(params.leagueID, params.season);
    setLeague(result.response[0]);
  };
  console.log(league);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="md:w-[800px] lg:w-[800px] h-screen ">
      <div className=" h-screen grid grid-cols-1 divide-y divide-indigo-900 rounded-2xl ">
        <div className="" data-theme="synthwave">
          <div align="center" className="flex my-4 mx-4 text-lg">
            <img
              src={league.league?.logo}
              width={25}
              alt={league.league.name}
            />
            <div className="mx-4"> {league.league.name}</div>
          </div>
        </div>
        {league.league.standings.map((standing) => (
          <div data-theme="synthwave">
            <h1 class="text-lg text-gray-400 font-medium mt-5">
              {standing[0].group}
            </h1>
            <table className=" text-xs text-gray-400 my-10 ">
              <thead className="bg-base-100 text-xs uppercase font-medium rounded-lg">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    Club
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    MP
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    W
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    D
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    L
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    GF
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    GA
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    GD
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    Pts
                  </th>
                </tr>
              </thead>

              {standing.map((group) => (
                <tbody className="bg-base-100">
                  <tr className="bg-base-100 bg-opacity-20">
                    <td className="pl-4">{group.rank}</td>
                    <td className="flex px-6 py-4 whitespace-nowrap">
                      <img className="w-5" src={group.team.logo} alt="" />
                      <span className="ml-2 font-medium">
                        {group.team?.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {group.all.played}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {group.all.win}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {group.all.draw}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {group.all.lose}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {group.all.goals.for}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {group.all.goals.against}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {group.goalsDiff}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {group.points}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LeagueDetails;
