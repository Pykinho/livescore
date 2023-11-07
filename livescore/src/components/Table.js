import { Link } from "react-router-dom";

function Table({ data }) {
  return (
    <div className="bg-gray-400 grid grid-cols-1 divide-y text-black">
      {data.map((fixture) => (
        <Link to={`/fixture/${fixture.fixture.id}`} key={fixture.fixture.id}>
          <div className="bg-white py-2">
            <div align="center">
              <img
                src={fixture.league.logo}
                width={25}
                alt={fixture.league.name}
              />
              {fixture.league.name}
            </div>

            <div className="text-center">{fixture.fixture.status.long}</div>

            <div className="w-full flex p-1 text-center">
              <div className="w-[10%]" align="center">
                <img
                  src={fixture.teams.home.logo}
                  width={30}
                  alt={fixture.teams.home.name}
                />
              </div>
              <div className="w-[32%]" align="text-right">
                {fixture.teams.home.name}
              </div>

              <div className="w-[16%]" align="text-center">
                {fixture.goals.home} : {fixture.goals.away}
              </div>

              <div className="w-[32%]" align="text-left">
                {fixture.teams.away.name}
              </div>
              <div className="w-[10%]" align="center">
                <img
                  src={fixture.teams.away.logo}
                  width={30}
                  alt={fixture.teams.away.name}
                />
              </div>
            </div>
            <div className="text-center text-green-600">
              {fixture.fixture.status.elapsed}'
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Table;
