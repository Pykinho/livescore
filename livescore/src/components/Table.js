import Fixture from "./Fixture";
import FixtureDatePicker from "./FixtureDatePicker";

function Table({ data }) {
  let prevLeagueId = null;

  const activeFixtures = data.response;
  activeFixtures.sort((a, b) => a.league.id - b.league.id);

  return (
    <div className="grid grid-cols-1 divide-y divide-indigo-900  mt-2 rounded-2xl">
      <FixtureDatePicker />
      {activeFixtures.map((fixture) => {
        if (prevLeagueId !== fixture.league.id) {
          prevLeagueId = fixture.league.id;
          return (
            <div
              className=" grid grid-cols-1 divide-y divide-indigo-900 "
              data-theme="synthwave"
            >
              <div align="center" className="flex my-4 mx-4 text-lg">
                <img
                  src={fixture.league.logo}
                  width={25}
                  alt={fixture.league.name}
                />
                <div className="mx-4"> {fixture.league.name}</div>
              </div>
              <Fixture fixture={fixture} />
            </div>
          );
        } else {
          prevLeagueId = fixture.league.id;
          return <Fixture fixture={fixture} />;
        }
      })}
    </div>
  );
}
export default Table;
