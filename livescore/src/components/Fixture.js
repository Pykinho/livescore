import { Link } from "react-router-dom";

function Fixture({ fixture }) {
  let prevLeagueId = null;
  return (
    <Link to={`/fixture/${fixture.fixture.id}`} key={fixture.fixture.id}>
      <div className=" py-2" data-theme="synthwave">
        <div className="w-full flex p-1">
          <div className="w-[32%] text-right text-sm mr-2">
            {fixture.teams.home.name}
          </div>
          <div className="w-[5%]">
            <img
              src={fixture.teams.home.logo}
              width={25}
              alt={fixture.teams.home.name}
            />
          </div>

          <div className="w-[16%] text-center text-xs">
            {fixture.goals.home} : {fixture.goals.away}
            <div className="text-green-600 text-xs">
              {fixture.fixture.status.elapsed}'
            </div>
          </div>

          <div className="w-[5%]">
            <img
              src={fixture.teams.away.logo}
              width={25}
              alt={fixture.teams.away.name}
            />
          </div>
          <div className="w-[32%] text-left text-sm ml-2">
            {fixture.teams.away.name}
          </div>
        </div>
      </div>
    </Link>
    // </div>
  );
}
export default Fixture;
