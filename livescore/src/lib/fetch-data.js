export const fetchFixtures = async (date) => {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchFixtureDetails = async (matchId) => {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?id=${matchId}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchStandings = async (leagueId, season) => {
  const url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=${season}&league=${leagueId}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
