import { useParams } from "react-router-dom";
import BALLIMG from "../assets/images/ball.png";
import YELLOWIMG from "../assets/images/yellow.png";
import REDIMG from "../assets/images/red.png";
import GoalEvents from "./GoalEvents";
import { fixtureDetails } from "../lib/dummy-data";
import { fetchFixtureDetails } from "../lib/fetch-data";
import { useState } from "react";
import { useEffect } from "react";

function FixtureDetails({ data }) {
  const params = useParams();

  const [fixture, setFixture] = useState(fixtureDetails.response[0]);
  // const fetchData = async () => {
  //   const result = await fetchFixtureDetails(params.matchID);
  //   setFixture(result.response[0]);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log(fixture);
  const homeEvents = fixture.events.filter((event) => {
    return event.team.id === fixture.teams.home.id;
  });
  const awayEvents = fixture.events.filter((event) => {
    return event.team.id === fixture.teams.away.id;
  });
  const homeGoals = homeEvents.filter((event) => {
    return event.type === "Goal";
  });
  const awayGoals = awayEvents.filter((event) => {
    return event.type === "Goal";
  });

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
    // <div className=""></div>
    <div className="h-screen md:w-[600px] lg:w-[600px]">
      <div className=" grid grid-cols-1 divide-y divide-indigo-900  bg-base-100 py-2 mt-2 rounded-2xl">
        <div className="my-3">
          <div align="center">
            <img
              src={fixture.league.logo}
              width={25}
              alt={fixture.league.name}
            />
            {fixture.league.name}
          </div>
        </div>
        <div className="my-2">
          <div className="w-full flex p-1 text-center">
            <div className="w-[32%] mt-2" align="text-right">
              {fixture.teams.home.name}
            </div>
            <div className="w-[10%] mt-2" align="center">
              <img
                src={fixture.teams.home.logo}
                width={30}
                alt={fixture.teams.home.name}
              />
            </div>

            <div className="w-[16%]" align="text-center">
              <div>
                {fixture.goals.home} : {fixture.goals.away}
              </div>
              <div className="text-green-600">
                {fixture.fixture.status.elapsed}'
              </div>
            </div>

            <div className="w-[10%] mt-2" align="center">
              <img
                src={fixture.teams.away.logo}
                width={30}
                alt={fixture.teams.away.name}
              />
            </div>
            <div className="w-[32%] mt-2" align="text-left">
              {fixture.teams.away.name}
            </div>
          </div>
          {homeGoals || awayGoals ? (
            <div align="center">
              <img src={BALLIMG} width={15} alt={"GOAL"} className="mt-6"></img>
            </div>
          ) : null}
          <div className="w-full flex content-center justify-center ">
            <GoalEvents data={homeGoals} />

            <GoalEvents data={awayGoals} />
          </div>
        </div>
        <div className="w-full flex content-center justify-between p-1 text-center text-xs">
          <div className="p-2 bg-base-100">
            {" "}
            {new Date(fixture.fixture.date).toLocaleDateString("en-GB", {
              timeZone: "UTC",
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="p-2 bg-base-100"> {fixture.fixture.venue.name}</div>
          <div className="p-2 bg-base-100"> {fixture.league.country}</div>
          <div className="p-2 bg-base-100"> {fixture.fixture.referee}</div>
          <div className="p-2 bg-base-100 rounded-b-2xl">
            Season {fixture.league.season}
          </div>
        </div>
      </div>

      <div
        align="center"
        className="grid grid-cols-1 divide-y divide-indigo-900  divide-y"
      >
        <h1 className="bg-accent p-1 text-base-200 text-xl"> Events</h1>
        {fixture.events
          ? fixture.events.map((event) => (
              <div className="p-5 bg-base-100" key={event.team.id}>
                {eventIcon(event)}
                {event.time.elapsed}' {event.player.name}{" "}
                <small>({event.team.name})</small>
              </div>
            ))
          : null}
      </div>
      <div
        align="center"
        className="grid grid-cols-1 divide-y divide-indigo-900  divide-y"
      >
        <h1 className="bg-accent p-1 text-base-200 text-xl">Score</h1>
        <div className="p-2 bg-base-100">
          First Half <br />
          {fixture.score.halftime.home} : {fixture.score.halftime.away}
        </div>

        {fixture.score.fulltime.home ? (
          <div className="p-2 bg-base-100">
            Full Time <br />
            {fixture.score.fulltime.home} : {fixture.score.fulltime.away}
          </div>
        ) : null}

        {fixture.score.extratime.home ? (
          <div className="p-2 bg-base-100">
            Extra Time <br />
            {fixture.score.extratime.home} : {fixture.score.extratime.away}
          </div>
        ) : null}

        {fixture.score.penalty.home ? (
          <div className="p-2 bg-base-100">
            Penalties
            <br />
            {fixture.score.penalty.home} : {fixture.score.penalty.away}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default FixtureDetails;
