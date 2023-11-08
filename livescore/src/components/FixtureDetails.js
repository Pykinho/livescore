import { useParams } from "react-router-dom";
import BALLIMG from "../assets/images/ball.png";
import YELLOWIMG from "../assets/images/yellow.png";
import REDIMG from "../assets/images/red.png";

function FixtureDetails({ data }) {
  const params = useParams();

  const matchID = params.matchID;
  const results = data.response.filter((match) => {
    return match.fixture.id === Number(matchID);
  });

  const fixture = results[0];

  const eventIcon = (event) => {
    if (event.type === "Goal") {
      return (
        <div>
          <img src={BALLIMG} width={15} alt={"GOAL"}></img>
        </div>
      );
    }
    if (event.type === "Card" && event.detail === "Yellow Card") {
      return (
        <div>
          <img src={YELLOWIMG} width={15} alt={"YELLOW CARD"}></img>
        </div>
      );
    }

    if (event.type === "Card" && event.detail === "Red Card") {
      return (
        <div>
          <img src={REDIMG} width={15} alt={"RED CARD"}></img>
        </div>
      );
    }
    return <div className="badge badge-secondary">{event.type}</div>;
  };

  return (
    <div className="h-screen">
      <div className="bg-white py-2">
        <div align="center">
          <img src={fixture.league.logo} width={25} alt={fixture.league.name} />
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

      <div align="center" className="grid grid-cols-1 divide-y">
        <h1 className="bg-gray-700 p-1 text-gray-300 text-xl"> Events</h1>

        {fixture.events
          ? fixture.events.map((event) => (
              <div className="p-5" key={event.team.id}>
                {eventIcon(event)}
                {event.time.elapsed}' {event.player.name}{" "}
                <small>({event.team.name})</small>
              </div>
            ))
          : null}
      </div>
      <div align="center" className="grid grid-cols-1 divide-y">
        <h1 className="bg-gray-700 p-1 text-gray-300 text-xl">Score</h1>
        <div className="p-2">
          First Half <br />
          {fixture.score.halftime.home} : {fixture.score.halftime.away}
        </div>

        {fixture.score.fulltime.home ? (
          <div className="p-2">
            Full Time <br />
            {fixture.score.fulltime.home} : {fixture.score.fulltime.away}
          </div>
        ) : null}

        {fixture.score.extratime.home ? (
          <div className="p-2">
            Extra Time <br />
            {fixture.score.extratime.home} : {fixture.score.extratime.away}
          </div>
        ) : null}

        {fixture.score.penalty.home ? (
          <div className="p-2">
            Penalties
            <br />
            {fixture.score.penalty.home} : {fixture.score.penalty.away}
          </div>
        ) : null}
      </div>
      <div align="center" className="grid grid-cols-1 divide-y">
        <h1 className="bg-gray-700 p-1 text-gray-300 text-xl">Match Details</h1>

        <div className="p-2"> {fixture.fixture.venue.name}</div>
        <div className="p-2"> {fixture.league.country}</div>
        <div className="p-2"> {fixture.league.round}</div>
        <div className="p-2"> {fixture.league.season}</div>
      </div>
    </div>
  );
}
export default FixtureDetails;
