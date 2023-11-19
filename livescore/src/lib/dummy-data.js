export const fixtureDetails = {
  get: "fixtures",
  parameters: {
    id: "1035137",
  },
  errors: [],
  results: 1,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      fixture: {
        id: 1035137,
        referee: "T. Bramall",
        timezone: "UTC",
        date: "2023-11-04T15:00:00+00:00",
        timestamp: 1699110000,
        periods: {
          first: 1699110000,
          second: 1699113600,
        },
        venue: {
          id: 10503,
          name: "Gtech Community Stadium",
          city: "Brentford, Middlesex",
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90,
        },
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11",
      },
      teams: {
        home: {
          id: 55,
          name: "Brentford",
          logo: "https://media-4.api-sports.io/football/teams/55.png",
          winner: true,
        },
        away: {
          id: 48,
          name: "West Ham",
          logo: "https://media-4.api-sports.io/football/teams/48.png",
          winner: false,
        },
      },
      goals: {
        home: 3,
        away: 2,
      },
      score: {
        halftime: {
          home: 1,
          away: 2,
        },
        fulltime: {
          home: 3,
          away: 2,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 11,
            extra: null,
          },
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
          },
          player: {
            id: 2284,
            name: "Emerson Palmieri",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Argument",
        },
        {
          time: {
            elapsed: 11,
            extra: null,
          },
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
          },
          player: {
            id: 19364,
            name: "N. Maupay",
          },
          assist: {
            id: 15799,
            name: "F. Onyeka",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 19,
            extra: null,
          },
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
          },
          player: {
            id: 15911,
            name: "M. Kudus",
          },
          assist: {
            id: 18819,
            name: "M. Antonio",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 24,
            extra: null,
          },
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
          },
          player: {
            id: 1119,
            name: "Kristoffer Ajer",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: {
            elapsed: 26,
            extra: null,
          },
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
          },
          player: {
            id: 19428,
            name: "J. Bowen",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 46,
            extra: null,
          },
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
          },
          player: {
            id: 26232,
            name: "M. Flekken",
          },
          assist: {
            id: 1835,
            name: "T. Strakosha",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 52,
            extra: null,
          },
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
          },
          player: {
            id: 1243,
            name: "Tomáš Souček",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: {
            elapsed: 55,
            extra: null,
          },
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
          },
          player: {
            id: 1445,
            name: "K. Mavropanos",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Own Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 62,
            extra: null,
          },
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
          },
          player: {
            id: 1445,
            name: "Konstantinos Mavropanos",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: {
            elapsed: 64,
            extra: null,
          },
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
          },
          player: {
            id: 19361,
            name: "S. Benrahma",
          },
          assist: {
            id: 1697,
            name: "Pablo Fornals",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 64,
            extra: null,
          },
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
          },
          player: {
            id: 18819,
            name: "M. Antonio",
          },
          assist: {
            id: 18955,
            name: "D. Ings",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 69,
            extra: null,
          },
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
          },
          player: {
            id: 19495,
            name: "N. Collins",
          },
          assist: {
            id: 47438,
            name: "M. Jensen",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 79,
            extra: null,
          },
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
          },
          player: {
            id: 1119,
            name: "K. Ajer",
          },
          assist: {
            id: 15745,
            name: "M. Roerslev",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 79,
            extra: null,
          },
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
          },
          player: {
            id: 47438,
            name: "M. Jensen",
          },
          assist: {
            id: 263538,
            name: "Y. Yarmolyuk",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 89,
            extra: null,
          },
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
          },
          player: {
            id: 20649,
            name: "Y. Wissa",
          },
          assist: {
            id: 2699,
            name: "S. Ghoddos",
          },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: 1,
          },
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
          },
          player: {
            id: 25073,
            name: "V. Janelt",
          },
          assist: {
            id: 18917,
            name: "B. Mee",
          },
          type: "subst",
          detail: "Substitution 5",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: 5,
          },
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
          },
          player: {
            id: 18955,
            name: "Danny Ings",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Argument",
        },
      ],
      lineups: [
        {
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
            colors: {
              player: {
                primary: "ff0000",
                number: "000000",
                border: "ff0000",
              },
              goalkeeper: {
                primary: "0099cc",
                number: "000000",
                border: "0099cc",
              },
            },
          },
          coach: {
            id: 90,
            name: "T. Frank",
            photo: "https://media-4.api-sports.io/football/coachs/90.png",
          },
          formation: "4-3-3",
          startXI: [
            {
              player: {
                id: 26232,
                name: "M. Flekken",
                number: 1,
                pos: "G",
                grid: "1:1",
              },
            },
            {
              player: {
                id: 1119,
                name: "K. Ajer",
                number: 20,
                pos: "D",
                grid: "2:4",
              },
            },
            {
              player: {
                id: 19495,
                name: "N. Collins",
                number: 22,
                pos: "D",
                grid: "2:3",
              },
            },
            {
              player: {
                id: 19789,
                name: "E. Pinnock",
                number: 5,
                pos: "D",
                grid: "2:2",
              },
            },
            {
              player: {
                id: 25073,
                name: "V. Janelt",
                number: 27,
                pos: "D",
                grid: "2:1",
              },
            },
            {
              player: {
                id: 15799,
                name: "F. Onyeka",
                number: 15,
                pos: "M",
                grid: "3:3",
              },
            },
            {
              player: {
                id: 30407,
                name: "C. Nørgaard",
                number: 6,
                pos: "M",
                grid: "3:2",
              },
            },
            {
              player: {
                id: 47438,
                name: "M. Jensen",
                number: 8,
                pos: "M",
                grid: "3:1",
              },
            },
            {
              player: {
                id: 20589,
                name: "B. Mbeumo",
                number: 19,
                pos: "F",
                grid: "4:3",
              },
            },
            {
              player: {
                id: 19364,
                name: "N. Maupay",
                number: 7,
                pos: "F",
                grid: "4:2",
              },
            },
            {
              player: {
                id: 20649,
                name: "Y. Wissa",
                number: 11,
                pos: "F",
                grid: "4:1",
              },
            },
          ],
          substitutes: [
            {
              player: {
                id: 1835,
                name: "T. Strakosha",
                number: 21,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 15745,
                name: "M. Roerslev",
                number: 30,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 263538,
                name: "Y. Yarmolyuk",
                number: 33,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 2699,
                name: "S. Ghoddos",
                number: 14,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 18917,
                name: "B. Mee",
                number: 16,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 153422,
                name: "E. Brierley",
                number: 38,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 281975,
                name: "V. Adedokun",
                number: 42,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 284474,
                name: "M. Olakigbe",
                number: 37,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 2731,
                name: "M. Jørgensen",
                number: 13,
                pos: "D",
                grid: null,
              },
            },
          ],
        },
        {
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
            colors: {
              player: {
                primary: "f5f9ff",
                number: "000000",
                border: "f5f9ff",
              },
              goalkeeper: {
                primary: "c5e73a",
                number: "000000",
                border: "c5e73a",
              },
            },
          },
          coach: {
            id: 5662,
            name: "D. Moyes",
            photo: "https://media-4.api-sports.io/football/coachs/5662.png",
          },
          formation: "4-4-2",
          startXI: [
            {
              player: {
                id: 253,
                name: "A. Areola",
                number: 23,
                pos: "G",
                grid: "1:1",
              },
            },
            {
              player: {
                id: 1231,
                name: "V. Coufal",
                number: 5,
                pos: "D",
                grid: "2:4",
              },
            },
            {
              player: {
                id: 1445,
                name: "K. Mavropanos",
                number: 15,
                pos: "D",
                grid: "2:3",
              },
            },
            {
              player: {
                id: 21694,
                name: "N. Aguerd",
                number: 27,
                pos: "D",
                grid: "2:2",
              },
            },
            {
              player: {
                id: 2284,
                name: "Emerson",
                number: 33,
                pos: "D",
                grid: "2:1",
              },
            },
            {
              player: {
                id: 15911,
                name: "M. Kudus",
                number: 14,
                pos: "M",
                grid: "3:4",
              },
            },
            {
              player: {
                id: 2938,
                name: "J. Ward-Prowse",
                number: 7,
                pos: "M",
                grid: "3:3",
              },
            },
            {
              player: {
                id: 1243,
                name: "T. Souček",
                number: 28,
                pos: "M",
                grid: "3:2",
              },
            },
            {
              player: {
                id: 19361,
                name: "S. Benrahma",
                number: 22,
                pos: "M",
                grid: "3:1",
              },
            },
            {
              player: {
                id: 19428,
                name: "J. Bowen",
                number: 20,
                pos: "F",
                grid: "4:2",
              },
            },
            {
              player: {
                id: 18819,
                name: "M. Antonio",
                number: 9,
                pos: "F",
                grid: "4:1",
              },
            },
          ],
          substitutes: [
            {
              player: {
                id: 1697,
                name: "Pablo Fornals",
                number: 8,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 18955,
                name: "D. Ings",
                number: 18,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 18823,
                name: "B. Johnson",
                number: 2,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 284409,
                name: "D. Mubama",
                number: 45,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 261,
                name: "T. Kehrer",
                number: 24,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 2997,
                name: "Ł. Fabiański",
                number: 1,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 18817,
                name: "A. Ogbonna",
                number: 21,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 665,
                name: "M. Cornet",
                number: 17,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 18813,
                name: "A. Cresswell",
                number: 3,
                pos: "D",
                grid: null,
              },
            },
          ],
        },
      ],
      statistics: [
        {
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
          },
          statistics: [
            {
              type: "Shots on Goal",
              value: 4,
            },
            {
              type: "Shots off Goal",
              value: 6,
            },
            {
              type: "Total Shots",
              value: 16,
            },
            {
              type: "Blocked Shots",
              value: 6,
            },
            {
              type: "Shots insidebox",
              value: 10,
            },
            {
              type: "Shots outsidebox",
              value: 6,
            },
            {
              type: "Fouls",
              value: 12,
            },
            {
              type: "Corner Kicks",
              value: 4,
            },
            {
              type: "Offsides",
              value: 2,
            },
            {
              type: "Ball Possession",
              value: "59%",
            },
            {
              type: "Yellow Cards",
              value: 1,
            },
            {
              type: "Red Cards",
              value: null,
            },
            {
              type: "Goalkeeper Saves",
              value: null,
            },
            {
              type: "Total passes",
              value: 560,
            },
            {
              type: "Passes accurate",
              value: 450,
            },
            {
              type: "Passes %",
              value: "80%",
            },
            {
              type: "expected_goals",
              value: "1.63",
            },
          ],
        },
        {
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
          },
          statistics: [
            {
              type: "Shots on Goal",
              value: 2,
            },
            {
              type: "Shots off Goal",
              value: 8,
            },
            {
              type: "Total Shots",
              value: 12,
            },
            {
              type: "Blocked Shots",
              value: 2,
            },
            {
              type: "Shots insidebox",
              value: 9,
            },
            {
              type: "Shots outsidebox",
              value: 3,
            },
            {
              type: "Fouls",
              value: 14,
            },
            {
              type: "Corner Kicks",
              value: 3,
            },
            {
              type: "Offsides",
              value: null,
            },
            {
              type: "Ball Possession",
              value: "41%",
            },
            {
              type: "Yellow Cards",
              value: 4,
            },
            {
              type: "Red Cards",
              value: null,
            },
            {
              type: "Goalkeeper Saves",
              value: 2,
            },
            {
              type: "Total passes",
              value: 373,
            },
            {
              type: "Passes accurate",
              value: 265,
            },
            {
              type: "Passes %",
              value: "71%",
            },
            {
              type: "expected_goals",
              value: "1.82",
            },
          ],
        },
      ],
      players: [
        {
          team: {
            id: 55,
            name: "Brentford",
            logo: "https://media-4.api-sports.io/football/teams/55.png",
            update: "2023-11-08T04:14:14+00:00",
          },
          players: [
            {
              player: {
                id: 26232,
                name: "Mark Flekken",
                photo:
                  "https://media-4.api-sports.io/football/players/26232.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 45,
                    number: 1,
                    position: "G",
                    rating: "6.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 2,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 21,
                    key: null,
                    accuracy: "17",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 1,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: 0,
                  },
                },
              ],
            },
            {
              player: {
                id: 1119,
                name: "Kristoffer Ajer",
                photo:
                  "https://media-4.api-sports.io/football/players/1119.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 79,
                    number: 20,
                    position: "D",
                    rating: "6.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 52,
                    key: null,
                    accuracy: "41",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 8,
                    won: 4,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 3,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 19495,
                name: "Nathan Collins",
                photo:
                  "https://media-4.api-sports.io/football/players/19495.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 22,
                    position: "D",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: 1,
                  },
                  goals: {
                    total: 1,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 78,
                    key: null,
                    accuracy: "71",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 8,
                    won: 4,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 19789,
                name: "Ethan Pinnock",
                photo:
                  "https://media-4.api-sports.io/football/players/19789.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 5,
                    position: "D",
                    rating: "6.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 78,
                    key: null,
                    accuracy: "62",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 12,
                    won: 10,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 25073,
                name: "Vitaly Janelt",
                photo:
                  "https://media-4.api-sports.io/football/players/25073.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 89,
                    number: 27,
                    position: "D",
                    rating: "6.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 63,
                    key: 2,
                    accuracy: "48",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 5,
                    won: 2,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 15799,
                name: "Frank Onyeka",
                photo:
                  "https://media-4.api-sports.io/football/players/15799.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 15,
                    position: "M",
                    rating: "7.5",
                    captain: false,
                    substitute: false,
                  },
                  offsides: 2,
                  shots: {
                    total: 1,
                    on: 1,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 1,
                    saves: null,
                  },
                  passes: {
                    total: 39,
                    key: 2,
                    accuracy: "32",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 10,
                    won: 6,
                  },
                  dribbles: {
                    attempts: 3,
                    success: 1,
                    past: null,
                  },
                  fouls: {
                    drawn: 2,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 30407,
                name: "Christian Nørgaard",
                photo:
                  "https://media-4.api-sports.io/football/players/30407.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 6,
                    position: "M",
                    rating: "6.9",
                    captain: true,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 59,
                    key: 1,
                    accuracy: "47",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 8,
                    won: 5,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 47438,
                name: "Mathias Jensen",
                photo:
                  "https://media-4.api-sports.io/football/players/47438.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 78,
                    number: 8,
                    position: "M",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 1,
                    saves: null,
                  },
                  passes: {
                    total: 48,
                    key: 2,
                    accuracy: "44",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 8,
                    won: 3,
                  },
                  dribbles: {
                    attempts: 1,
                    success: 1,
                    past: 1,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 3,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 20589,
                name: "Bryan Mbeumo",
                photo:
                  "https://media-4.api-sports.io/football/players/20589.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 19,
                    position: "F",
                    rating: "7.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 4,
                    on: 1,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 47,
                    key: null,
                    accuracy: "32",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 12,
                    won: 6,
                  },
                  dribbles: {
                    attempts: 3,
                    success: 1,
                    past: 1,
                  },
                  fouls: {
                    drawn: 4,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 19364,
                name: "Neal Maupay",
                photo:
                  "https://media-4.api-sports.io/football/players/19364.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 7,
                    position: "F",
                    rating: "7.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: 1,
                  },
                  goals: {
                    total: 1,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 26,
                    key: 1,
                    accuracy: "19",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 12,
                    won: 6,
                  },
                  dribbles: {
                    attempts: 2,
                    success: 1,
                    past: null,
                  },
                  fouls: {
                    drawn: 3,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 20649,
                name: "Yoane Wissa",
                photo:
                  "https://media-4.api-sports.io/football/players/20649.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 89,
                    number: 11,
                    position: "F",
                    rating: "6.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 15,
                    key: 1,
                    accuracy: "9",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 9,
                    won: 4,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1835,
                name: "Thomas Strakosha",
                photo:
                  "https://media-4.api-sports.io/football/players/1835.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 45,
                    number: 21,
                    position: "G",
                    rating: "6.9",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 20,
                    key: null,
                    accuracy: "17",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: 0,
                  },
                },
              ],
            },
            {
              player: {
                id: 15745,
                name: "Mads Roerslev",
                photo:
                  "https://media-4.api-sports.io/football/players/15745.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 11,
                    number: 30,
                    position: "D",
                    rating: "6.6",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 3,
                    key: null,
                    accuracy: "1",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 1,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 263538,
                name: "Yehor Yarmoliuk",
                photo:
                  "https://media-4.api-sports.io/football/players/263538.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 12,
                    number: 33,
                    position: "M",
                    rating: "6.5",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 5,
                    key: null,
                    accuracy: "5",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 4,
                    won: 1,
                  },
                  dribbles: {
                    attempts: 1,
                    success: 1,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2699,
                name: "Saman Ghoddos",
                photo:
                  "https://media-4.api-sports.io/football/players/2699.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 1,
                    number: 14,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 4,
                    key: null,
                    accuracy: "4",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 18917,
                name: "Ben Mee",
                photo:
                  "https://media-4.api-sports.io/football/players/18917.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 1,
                    number: 16,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 2,
                    key: null,
                    accuracy: "1",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 281975,
                name: "Val Adedokun",
                photo:
                  "https://media-4.api-sports.io/football/players/281975.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 42,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2731,
                name: "Zanka",
                photo:
                  "https://media-4.api-sports.io/football/players/2731.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 13,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 153422,
                name: "Ethan Brierley",
                photo:
                  "https://media-4.api-sports.io/football/players/153422.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 38,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 284474,
                name: "Michael Olakigbe",
                photo:
                  "https://media-4.api-sports.io/football/players/284474.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 37,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
          ],
        },
        {
          team: {
            id: 48,
            name: "West Ham",
            logo: "https://media-4.api-sports.io/football/teams/48.png",
            update: "2023-11-08T04:14:14+00:00",
          },
          players: [
            {
              player: {
                id: 253,
                name: "Alphonse Aréola",
                photo: "https://media-4.api-sports.io/football/players/253.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 23,
                    position: "G",
                    rating: "6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 3,
                    assists: null,
                    saves: 2,
                  },
                  passes: {
                    total: 21,
                    key: null,
                    accuracy: "9",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: 0,
                  },
                },
              ],
            },
            {
              player: {
                id: 1231,
                name: "Vladimír Coufal",
                photo:
                  "https://media-4.api-sports.io/football/players/1231.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 5,
                    position: "D",
                    rating: "7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 47,
                    key: 1,
                    accuracy: "30",
                  },
                  tackles: {
                    total: 3,
                    blocks: 1,
                    interceptions: 3,
                  },
                  duels: {
                    total: 10,
                    won: 5,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1445,
                name: "Konstantinos Mavropanos",
                photo:
                  "https://media-4.api-sports.io/football/players/1445.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 15,
                    position: "D",
                    rating: "6.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 37,
                    key: null,
                    accuracy: "26",
                  },
                  tackles: {
                    total: 1,
                    blocks: 1,
                    interceptions: 2,
                  },
                  duels: {
                    total: 12,
                    won: 8,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 3,
                    committed: 3,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 21694,
                name: "Nayef Aguerd",
                photo:
                  "https://media-4.api-sports.io/football/players/21694.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 27,
                    position: "D",
                    rating: "6.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 41,
                    key: null,
                    accuracy: "29",
                  },
                  tackles: {
                    total: null,
                    blocks: 2,
                    interceptions: null,
                  },
                  duels: {
                    total: 7,
                    won: 4,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2284,
                name: "Emerson Palmieri",
                photo:
                  "https://media-4.api-sports.io/football/players/2284.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 33,
                    position: "D",
                    rating: "6.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 37,
                    key: 1,
                    accuracy: "27",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: 3,
                  },
                  duels: {
                    total: 6,
                    won: 3,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: 2,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 15911,
                name: "Mohammed Kudus",
                photo:
                  "https://media-4.api-sports.io/football/players/15911.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 14,
                    position: "M",
                    rating: "7.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 4,
                    on: 1,
                  },
                  goals: {
                    total: 1,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 27,
                    key: 2,
                    accuracy: "24",
                  },
                  tackles: {
                    total: 3,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 15,
                    won: 9,
                  },
                  dribbles: {
                    attempts: 2,
                    success: 1,
                    past: null,
                  },
                  fouls: {
                    drawn: 4,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2938,
                name: "James Ward-Prowse",
                photo:
                  "https://media-4.api-sports.io/football/players/2938.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 7,
                    position: "M",
                    rating: "6.9",
                    captain: true,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 47,
                    key: 1,
                    accuracy: "38",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 5,
                    won: 2,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1243,
                name: "Tomáš Souček",
                photo:
                  "https://media-4.api-sports.io/football/players/1243.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 28,
                    position: "M",
                    rating: "6.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 44,
                    key: null,
                    accuracy: "35",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 10,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 2,
                  },
                  fouls: {
                    drawn: null,
                    committed: 2,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 19361,
                name: "Saïd Benrahma",
                photo:
                  "https://media-4.api-sports.io/football/players/19361.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 64,
                    number: 22,
                    position: "M",
                    rating: "6.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 14,
                    key: 1,
                    accuracy: "10",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 4,
                    won: 2,
                  },
                  dribbles: {
                    attempts: 2,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 2,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 19428,
                name: "Jarrod Bowen",
                photo:
                  "https://media-4.api-sports.io/football/players/19428.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 20,
                    position: "F",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: 1,
                  },
                  goals: {
                    total: 1,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 23,
                    key: 2,
                    accuracy: "18",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 11,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 18819,
                name: "Michail Antonio",
                photo:
                  "https://media-4.api-sports.io/football/players/18819.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 64,
                    number: 9,
                    position: "F",
                    rating: "7.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 1,
                    saves: null,
                  },
                  passes: {
                    total: 14,
                    key: 2,
                    accuracy: "6",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 12,
                    won: 8,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 2,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1697,
                name: "Pablo Fornals",
                photo:
                  "https://media-4.api-sports.io/football/players/1697.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 26,
                    number: 8,
                    position: "M",
                    rating: "6.9",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 19,
                    key: null,
                    accuracy: "13",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 4,
                    won: 3,
                  },
                  dribbles: {
                    attempts: 2,
                    success: 2,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 18955,
                name: "Danny Ings",
                photo:
                  "https://media-4.api-sports.io/football/players/18955.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 26,
                    number: 18,
                    position: "F",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 2,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 2,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2997,
                name: "Łukasz Fabiański",
                photo:
                  "https://media-4.api-sports.io/football/players/2997.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 1,
                    position: "G",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 261,
                name: "Thilo Kehrer",
                photo: "https://media-4.api-sports.io/football/players/261.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 24,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 18823,
                name: "Ben Johnson",
                photo:
                  "https://media-4.api-sports.io/football/players/18823.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 2,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 18817,
                name: "Angelo Ogbonna",
                photo:
                  "https://media-4.api-sports.io/football/players/18817.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 21,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 18813,
                name: "Aaron Cresswell",
                photo:
                  "https://media-4.api-sports.io/football/players/18813.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 3,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 665,
                name: "Maxwel Cornet",
                photo: "https://media-4.api-sports.io/football/players/665.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 17,
                    position: "F",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 284409,
                name: "Divin Mubama",
                photo:
                  "https://media-4.api-sports.io/football/players/284409.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 45,
                    position: "F",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const plData = {
  get: "fixtures",
  parameters: {
    league: "39",
    date: "2023-11-04",
    status: "FT",
    season: "2023",
  },
  errors: [],
  results: 7,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      fixture: {
        id: 1035137,
        referee: "T. Bramall",
        timezone: "UTC",
        date: "2023-11-04T15:00:00+00:00",
        timestamp: 1699110000,
        periods: {
          first: 1699110000,
          second: 1699113600,
        },
        venue: {
          id: 10503,
          name: "Gtech Community Stadium",
          city: "Brentford, Middlesex",
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90,
        },
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11",
      },
      teams: {
        home: {
          id: 55,
          name: "Brentford",
          logo: "https://media-4.api-sports.io/football/teams/55.png",
          winner: true,
        },
        away: {
          id: 48,
          name: "West Ham",
          logo: "https://media-4.api-sports.io/football/teams/48.png",
          winner: false,
        },
      },
      goals: {
        home: 3,
        away: 2,
      },
      score: {
        halftime: {
          home: 1,
          away: 2,
        },
        fulltime: {
          home: 3,
          away: 2,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
    },
    {
      fixture: {
        id: 1035138,
        referee: "P. Bankes",
        timezone: "UTC",
        date: "2023-11-04T15:00:00+00:00",
        timestamp: 1699110000,
        periods: {
          first: 1699110000,
          second: 1699113600,
        },
        venue: {
          id: 512,
          name: "Turf Moor",
          city: "Burnley",
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90,
        },
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11",
      },
      teams: {
        home: {
          id: 44,
          name: "Burnley",
          logo: "https://media-4.api-sports.io/football/teams/44.png",
          winner: false,
        },
        away: {
          id: 52,
          name: "Crystal Palace",
          logo: "https://media-4.api-sports.io/football/teams/52.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 2,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: 0,
          away: 2,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
    },
    {
      fixture: {
        id: 1035139,
        referee: "T. Robinson",
        timezone: "UTC",
        date: "2023-11-04T15:00:00+00:00",
        timestamp: 1699110000,
        periods: {
          first: 1699110000,
          second: 1699113600,
        },
        venue: {
          id: 8560,
          name: "Goodison Park",
          city: "Liverpool",
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90,
        },
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11",
      },
      teams: {
        home: {
          id: 45,
          name: "Everton",
          logo: "https://media-4.api-sports.io/football/teams/45.png",
          winner: null,
        },
        away: {
          id: 51,
          name: "Brighton",
          logo: "https://media-4.api-sports.io/football/teams/51.png",
          winner: null,
        },
      },
      goals: {
        home: 1,
        away: 1,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: 1,
          away: 1,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
    },
    {
      fixture: {
        id: 1035140,
        referee: "J. Brooks",
        timezone: "UTC",
        date: "2023-11-04T12:30:00+00:00",
        timestamp: 1699101000,
        periods: {
          first: 1699101000,
          second: 1699104600,
        },
        venue: {
          id: 535,
          name: "Craven Cottage",
          city: "London",
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90,
        },
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11",
      },
      teams: {
        home: {
          id: 36,
          name: "Fulham",
          logo: "https://media-4.api-sports.io/football/teams/36.png",
          winner: false,
        },
        away: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-4.api-sports.io/football/teams/33.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 0,
          away: 1,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
    },
    {
      fixture: {
        id: 1035142,
        referee: "C. Pawson",
        timezone: "UTC",
        date: "2023-11-04T15:00:00+00:00",
        timestamp: 1699110000,
        periods: {
          first: 1699110000,
          second: 1699113600,
        },
        venue: {
          id: 555,
          name: "Etihad Stadium",
          city: "Manchester",
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90,
        },
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11",
      },
      teams: {
        home: {
          id: 50,
          name: "Manchester City",
          logo: "https://media-4.api-sports.io/football/teams/50.png",
          winner: true,
        },
        away: {
          id: 35,
          name: "Bournemouth",
          logo: "https://media-4.api-sports.io/football/teams/35.png",
          winner: false,
        },
      },
      goals: {
        home: 6,
        away: 1,
      },
      score: {
        halftime: {
          home: 3,
          away: 0,
        },
        fulltime: {
          home: 6,
          away: 1,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
    },
    {
      fixture: {
        id: 1035143,
        referee: "S. Attwell",
        timezone: "UTC",
        date: "2023-11-04T17:30:00+00:00",
        timestamp: 1699119000,
        periods: {
          first: 1699119000,
          second: 1699122600,
        },
        venue: {
          id: 562,
          name: "St. James' Park",
          city: "Newcastle upon Tyne",
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90,
        },
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11",
      },
      teams: {
        home: {
          id: 34,
          name: "Newcastle",
          logo: "https://media-4.api-sports.io/football/teams/34.png",
          winner: true,
        },
        away: {
          id: 42,
          name: "Arsenal",
          logo: "https://media-4.api-sports.io/football/teams/42.png",
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 1,
          away: 0,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
    },
    {
      fixture: {
        id: 1035145,
        referee: "R. Jones",
        timezone: "UTC",
        date: "2023-11-04T15:00:00+00:00",
        timestamp: 1699110000,
        periods: {
          first: 1699110000,
          second: 1699113600,
        },
        venue: {
          id: 581,
          name: "Bramall Lane",
          city: "Sheffield",
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90,
        },
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11",
      },
      teams: {
        home: {
          id: 62,
          name: "Sheffield Utd",
          logo: "https://media-4.api-sports.io/football/teams/62.png",
          winner: true,
        },
        away: {
          id: 39,
          name: "Wolves",
          logo: "https://media-4.api-sports.io/football/teams/39.png",
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: 2,
          away: 1,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
    },
  ],
};

export const leagueData = {
  get: "standings",
  parameters: {
    league: "17",
    season: "2023",
  },
  errors: [],
  results: 1,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      league: {
        id: 17,
        name: "AFC Champions League",
        country: "World",
        logo: "https://media-4.api-sports.io/football/leagues/17.png",
        flag: null,
        season: 2023,
        standings: [
          [
            {
              rank: 1,
              team: {
                id: 2865,
                name: "Al Ain",
                logo: "https://media-4.api-sports.io/football/teams/2865.png",
              },
              points: 12,
              goalsDiff: 9,
              group: "Group A",
              form: "WWWW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 4,
                draw: 0,
                lose: 0,
                goals: {
                  for: 14,
                  against: 5,
                },
              },
              home: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 8,
                  against: 3,
                },
              },
              away: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 6,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 4220,
                name: "Pakhtakor",
                logo: "https://media-4.api-sports.io/football/teams/4220.png",
              },
              points: 4,
              goalsDiff: -2,
              group: "Group A",
              form: "DWLL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 1,
                draw: 1,
                lose: 2,
                goals: {
                  for: 4,
                  against: 6,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 3,
                  against: 3,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 1,
                lose: 1,
                goals: {
                  for: 1,
                  against: 3,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 8020,
                name: "Ahal",
                logo: "https://media-4.api-sports.io/football/teams/8020.png",
              },
              points: 4,
              goalsDiff: -4,
              group: "Group A",
              form: "DLLW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 1,
                draw: 1,
                lose: 2,
                goals: {
                  for: 4,
                  against: 8,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 1,
                lose: 0,
                goals: {
                  for: 2,
                  against: 1,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 2,
                  against: 7,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 2944,
                name: "Al-Fayha",
                logo: "https://media-4.api-sports.io/football/teams/2944.png",
              },
              points: 3,
              goalsDiff: -3,
              group: "Group A",
              form: "LLWL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 1,
                draw: 0,
                lose: 3,
                goals: {
                  for: 5,
                  against: 8,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 4,
                  against: 3,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 1,
                  against: 5,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
          ],
          [
            {
              rank: 1,
              team: {
                id: 2874,
                name: "Sharjah FC",
                logo: "https://media-4.api-sports.io/football/teams/2874.png",
              },
              points: 8,
              goalsDiff: 2,
              group: "Group B",
              form: "DWWD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 2,
                lose: 0,
                goals: {
                  for: 3,
                  against: 1,
                },
              },
              home: {
                played: 3,
                win: 3,
                draw: 0,
                lose: 0,
                goals: {
                  for: 4,
                  against: 0,
                },
              },
              away: {
                played: 3,
                win: 1,
                draw: 2,
                lose: 0,
                goals: {
                  for: 4,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 4215,
                name: "Nasaf",
                logo: "https://media-4.api-sports.io/football/teams/4215.png",
              },
              points: 7,
              goalsDiff: 2,
              group: "Group B",
              form: "DLWW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 1,
                lose: 1,
                goals: {
                  for: 5,
                  against: 3,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 1,
                lose: 0,
                goals: {
                  for: 4,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 1,
                  against: 1,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 2895,
                name: "Al Sadd",
                logo: "https://media-4.api-sports.io/football/teams/2895.png",
              },
              points: 4,
              goalsDiff: 2,
              group: "Group B",
              form: "LWLD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 1,
                draw: 1,
                lose: 2,
                goals: {
                  for: 7,
                  against: 5,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 1,
                lose: 0,
                goals: {
                  for: 6,
                  against: 0,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 1,
                  against: 5,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 2930,
                name: "Al-Faisaly FC",
                logo: "https://media-4.api-sports.io/football/teams/2930.png",
              },
              points: 3,
              goalsDiff: -6,
              group: "Group B",
              form: "WLLL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 1,
                draw: 0,
                lose: 3,
                goals: {
                  for: 2,
                  against: 8,
                },
              },
              home: {
                played: null,
                win: null,
                draw: null,
                lose: null,
                goals: {
                  for: null,
                  against: null,
                },
              },
              away: {
                played: null,
                win: null,
                draw: null,
                lose: null,
                goals: {
                  for: null,
                  against: null,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
          ],
          [
            {
              rank: 1,
              team: {
                id: 2938,
                name: "Al-Ittihad FC",
                logo: "https://media-4.api-sports.io/football/teams/2938.png",
              },
              points: 9,
              goalsDiff: 5,
              group: "Group C",
              form: "LWWW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 3,
                draw: 0,
                lose: 1,
                goals: {
                  for: 7,
                  against: 2,
                },
              },
              home: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 4,
                  against: 0,
                },
              },
              away: {
                played: 1,
                win: 0,
                draw: 0,
                lose: 1,
                goals: {
                  for: 0,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 2744,
                name: "Sepahan FC",
                logo: "https://media-4.api-sports.io/football/teams/2744.png",
              },
              points: 7,
              goalsDiff: 8,
              group: "Group C",
              form: "WWLD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 1,
                lose: 1,
                goals: {
                  for: 14,
                  against: 6,
                },
              },
              home: {
                played: 1,
                win: 1,
                draw: 0,
                lose: 0,
                goals: {
                  for: 9,
                  against: 0,
                },
              },
              away: {
                played: 2,
                win: 1,
                draw: 1,
                lose: 0,
                goals: {
                  for: 5,
                  against: 3,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 8009,
                name: "Al Quwa Al Jawiya",
                logo: "https://media-4.api-sports.io/football/teams/8009.png",
              },
              points: 7,
              goalsDiff: 2,
              group: "Group C",
              form: "WLWD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 1,
                lose: 1,
                goals: {
                  for: 6,
                  against: 4,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 1,
                lose: 0,
                goals: {
                  for: 4,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 2,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 4219,
                name: "Olmaliq",
                logo: "https://media-4.api-sports.io/football/teams/4219.png",
              },
              points: 0,
              goalsDiff: -15,
              group: "Group C",
              form: "LLLL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 0,
                draw: 0,
                lose: 4,
                goals: {
                  for: 2,
                  against: 17,
                },
              },
              home: {
                played: 3,
                win: 1,
                draw: 0,
                lose: 2,
                goals: {
                  for: 3,
                  against: 5,
                },
              },
              away: {
                played: 3,
                win: 1,
                draw: 0,
                lose: 2,
                goals: {
                  for: 1,
                  against: 12,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
          ],
          [
            {
              rank: 1,
              team: {
                id: 2932,
                name: "Al-Hilal Saudi FC",
                logo: "https://media-4.api-sports.io/football/teams/2932.png",
              },
              points: 10,
              goalsDiff: 11,
              group: "Group D",
              form: "WWWD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 3,
                draw: 1,
                lose: 0,
                goals: {
                  for: 12,
                  against: 1,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 1,
                lose: 0,
                goals: {
                  for: 7,
                  against: 1,
                },
              },
              away: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 5,
                  against: 0,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 4216,
                name: "Navbahor",
                logo: "https://media-4.api-sports.io/football/teams/4216.png",
              },
              points: 10,
              goalsDiff: 6,
              group: "Group D",
              form: "WWWD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 3,
                draw: 1,
                lose: 0,
                goals: {
                  for: 9,
                  against: 3,
                },
              },
              home: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 5,
                  against: 1,
                },
              },
              away: {
                played: 3,
                win: 2,
                draw: 1,
                lose: 0,
                goals: {
                  for: 5,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 2719,
                name: "Nassaji Mazandaran",
                logo: "https://media-4.api-sports.io/football/teams/2719.png",
              },
              points: 3,
              goalsDiff: -4,
              group: "Group D",
              form: "LLLW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 1,
                draw: 0,
                lose: 3,
                goals: {
                  for: 4,
                  against: 8,
                },
              },
              home: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 1,
                  against: 6,
                },
              },
              away: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 3,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 3478,
                name: "Mumbai City",
                logo: "https://media-4.api-sports.io/football/teams/3478.png",
              },
              points: 0,
              goalsDiff: -13,
              group: "Group D",
              form: "LLLL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 0,
                draw: 0,
                lose: 4,
                goals: {
                  for: 0,
                  against: 13,
                },
              },
              home: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 0,
                  against: 4,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 0,
                  against: 9,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
          ],
          [
            {
              rank: 1,
              team: {
                id: 2939,
                name: "Al-Nassr",
                logo: "https://media-4.api-sports.io/football/teams/2939.png",
              },
              points: 12,
              goalsDiff: 6,
              group: "Group E",
              form: "WWWW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 4,
                draw: 0,
                lose: 0,
                goals: {
                  for: 12,
                  against: 6,
                },
              },
              home: {
                played: 3,
                win: 3,
                draw: 0,
                lose: 0,
                goals: {
                  for: 11,
                  against: 6,
                },
              },
              away: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 5,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 2742,
                name: "Persepolis FC",
                logo: "https://media-4.api-sports.io/football/teams/2742.png",
              },
              points: 7,
              goalsDiff: 1,
              group: "Group E",
              form: "DWWL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 1,
                lose: 1,
                goals: {
                  for: 4,
                  against: 3,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 2,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 1,
                draw: 1,
                lose: 0,
                goals: {
                  for: 2,
                  against: 1,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 8012,
                name: "Istiqlol",
                logo: "https://media-4.api-sports.io/football/teams/8012.png",
              },
              points: 2,
              goalsDiff: -4,
              group: "Group E",
              form: "DLLD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 0,
                draw: 2,
                lose: 2,
                goals: {
                  for: 2,
                  against: 6,
                },
              },
              home: {
                played: 2,
                win: 0,
                draw: 2,
                lose: 0,
                goals: {
                  for: 1,
                  against: 1,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 1,
                  against: 5,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 2904,
                name: "Al-Duhail SC",
                logo: "https://media-4.api-sports.io/football/teams/2904.png",
              },
              points: 1,
              goalsDiff: -3,
              group: "Group E",
              form: "LLLD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 0,
                draw: 1,
                lose: 3,
                goals: {
                  for: 5,
                  against: 8,
                },
              },
              home: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 2,
                  against: 4,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 1,
                lose: 1,
                goals: {
                  for: 3,
                  against: 4,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
          ],
          [
            {
              rank: 1,
              team: {
                id: 2770,
                name: "Bangkok United",
                logo: "https://media-4.api-sports.io/football/teams/2770.png",
              },
              points: 10,
              goalsDiff: 3,
              group: "Group F",
              form: "DWWW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 3,
                draw: 1,
                lose: 0,
                goals: {
                  for: 8,
                  against: 5,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 1,
                lose: 0,
                goals: {
                  for: 4,
                  against: 3,
                },
              },
              away: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 4,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 2762,
                name: "Jeonbuk Motors",
                logo: "https://media-4.api-sports.io/football/teams/2762.png",
              },
              points: 6,
              goalsDiff: 1,
              group: "Group F",
              form: "LWLW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 0,
                lose: 2,
                goals: {
                  for: 7,
                  against: 6,
                },
              },
              home: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 5,
                  against: 1,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 2,
                  against: 5,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 4204,
                name: "Home United",
                logo: "https://media-4.api-sports.io/football/teams/4204.png",
              },
              points: 6,
              goalsDiff: -1,
              group: "Group F",
              form: "WLWL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 0,
                lose: 2,
                goals: {
                  for: 5,
                  against: 6,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 3,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 2,
                  against: 4,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 4453,
                name: "Kitchee",
                logo: "https://media-4.api-sports.io/football/teams/4453.png",
              },
              points: 1,
              goalsDiff: -3,
              group: "Group F",
              form: "DLLL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 0,
                draw: 1,
                lose: 3,
                goals: {
                  for: 4,
                  against: 7,
                },
              },
              home: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 2,
                  against: 4,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 1,
                lose: 1,
                goals: {
                  for: 2,
                  against: 3,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
          ],
          [
            {
              rank: 1,
              team: {
                id: 296,
                name: "Yokohama F. Marinos",
                logo: "https://media-4.api-sports.io/football/teams/296.png",
              },
              points: 9,
              goalsDiff: 3,
              group: "Group G",
              form: "WWWL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 3,
                draw: 0,
                lose: 1,
                goals: {
                  for: 8,
                  against: 5,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 5,
                  against: 4,
                },
              },
              away: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 3,
                  against: 1,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 844,
                name: "Shandong Luneng",
                logo: "https://media-4.api-sports.io/football/teams/844.png",
              },
              points: 9,
              goalsDiff: 5,
              group: "Group G",
              form: "WWLW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 3,
                draw: 0,
                lose: 1,
                goals: {
                  for: 8,
                  against: 3,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 3,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 5,
                  against: 1,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 2763,
                name: "Incheon United",
                logo: "https://media-4.api-sports.io/football/teams/2763.png",
              },
              points: 6,
              goalsDiff: 2,
              group: "Group G",
              form: "LLWW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 0,
                lose: 2,
                goals: {
                  for: 9,
                  against: 7,
                },
              },
              home: {
                played: 3,
                win: 2,
                draw: 0,
                lose: 1,
                goals: {
                  for: 7,
                  against: 3,
                },
              },
              away: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 5,
                  against: 5,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 8030,
                name: "Kaya",
                logo: "https://media-4.api-sports.io/football/teams/8030.png",
              },
              points: 0,
              goalsDiff: -10,
              group: "Group G",
              form: "LLLL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 0,
                draw: 0,
                lose: 4,
                goals: {
                  for: 2,
                  against: 12,
                },
              },
              home: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 2,
                  against: 5,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 0,
                  against: 7,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
          ],
          [
            {
              rank: 1,
              team: {
                id: 308,
                name: "Ventforet Kofu",
                logo: "https://media-4.api-sports.io/football/teams/308.png",
              },
              points: 7,
              goalsDiff: 2,
              group: "Group H",
              form: "WLWD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 1,
                lose: 1,
                goals: {
                  for: 5,
                  against: 3,
                },
              },
              home: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 5,
                  against: 1,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 1,
                lose: 1,
                goals: {
                  for: 0,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 945,
                name: "Melbourne City",
                logo: "https://media-4.api-sports.io/football/teams/945.png",
              },
              points: 7,
              goalsDiff: 2,
              group: "Group H",
              form: "LWWD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 1,
                lose: 1,
                goals: {
                  for: 4,
                  against: 2,
                },
              },
              home: {
                played: 2,
                win: 0,
                draw: 1,
                lose: 1,
                goals: {
                  for: 0,
                  against: 1,
                },
              },
              away: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 4,
                  against: 1,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 2780,
                name: "Buriram United",
                logo: "https://media-4.api-sports.io/football/teams/2780.png",
              },
              points: 6,
              goalsDiff: 1,
              group: "Group H",
              form: "WLLW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 0,
                lose: 2,
                goals: {
                  for: 5,
                  against: 4,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 4,
                  against: 3,
                },
              },
              away: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 1,
                  against: 1,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 848,
                name: "Hangzhou Greentown",
                logo: "https://media-4.api-sports.io/football/teams/848.png",
              },
              points: 3,
              goalsDiff: -5,
              group: "Group H",
              form: "LWLL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 1,
                draw: 0,
                lose: 3,
                goals: {
                  for: 5,
                  against: 10,
                },
              },
              home: {
                played: 3,
                win: 2,
                draw: 0,
                lose: 1,
                goals: {
                  for: 4,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 2,
                  against: 8,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
          ],
          [
            {
              rank: 1,
              team: {
                id: 294,
                name: "Kawasaki Frontale",
                logo: "https://media-4.api-sports.io/football/teams/294.png",
              },
              points: 12,
              goalsDiff: 6,
              group: "Group I",
              form: "WWWW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 4,
                draw: 0,
                lose: 0,
                goals: {
                  for: 10,
                  against: 4,
                },
              },
              home: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 5,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 5,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 2767,
                name: "Ulsan Hyundai FC",
                logo: "https://media-4.api-sports.io/football/teams/2767.png",
              },
              points: 6,
              goalsDiff: 2,
              group: "Group I",
              form: "LWLW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 0,
                lose: 2,
                goals: {
                  for: 7,
                  against: 5,
                },
              },
              home: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 6,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 1,
                  against: 3,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 2523,
                name: "Johor Darul Takzim FC",
                logo: "https://media-4.api-sports.io/football/teams/2523.png",
              },
              points: 6,
              goalsDiff: 0,
              group: "Group I",
              form: "WLWL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 2,
                draw: 0,
                lose: 2,
                goals: {
                  for: 7,
                  against: 7,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 2,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 5,
                  against: 5,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 2769,
                name: "Bangkok Glass",
                logo: "https://media-4.api-sports.io/football/teams/2769.png",
              },
              points: 0,
              goalsDiff: -8,
              group: "Group I",
              form: "LLLL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 0,
                draw: 0,
                lose: 4,
                goals: {
                  for: 7,
                  against: 15,
                },
              },
              home: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 4,
                  against: 8,
                },
              },
              away: {
                played: 3,
                win: 1,
                draw: 0,
                lose: 2,
                goals: {
                  for: 6,
                  against: 9,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
          ],
          [
            {
              rank: 1,
              team: {
                id: 2764,
                name: "Pohang Steelers",
                logo: "https://media-4.api-sports.io/football/teams/2764.png",
              },
              points: 12,
              goalsDiff: 7,
              group: "Group J",
              form: "WWWW",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 4,
                draw: 0,
                lose: 0,
                goals: {
                  for: 11,
                  against: 4,
                },
              },
              home: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 5,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 2,
                draw: 0,
                lose: 0,
                goals: {
                  for: 6,
                  against: 2,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 287,
                name: "Urawa",
                logo: "https://media-4.api-sports.io/football/teams/287.png",
              },
              points: 4,
              goalsDiff: 3,
              group: "Group J",
              form: "LLWD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 1,
                draw: 1,
                lose: 2,
                goals: {
                  for: 9,
                  against: 6,
                },
              },
              home: {
                played: 3,
                win: 2,
                draw: 0,
                lose: 1,
                goals: {
                  for: 9,
                  against: 2,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 1,
                lose: 1,
                goals: {
                  for: 3,
                  against: 4,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 5695,
                name: "Wuhan Three Towns",
                logo: "https://media-4.api-sports.io/football/teams/5695.png",
              },
              points: 4,
              goalsDiff: -2,
              group: "Group J",
              form: "LWLD",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 1,
                draw: 1,
                lose: 2,
                goals: {
                  for: 6,
                  against: 8,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 1,
                lose: 0,
                goals: {
                  for: 4,
                  against: 3,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 2,
                  against: 5,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 3670,
                name: "Ha Noi",
                logo: "https://media-4.api-sports.io/football/teams/3670.png",
              },
              points: 3,
              goalsDiff: -8,
              group: "Group J",
              form: "WLLL",
              status: "same",
              description: null,
              all: {
                played: 4,
                win: 1,
                draw: 0,
                lose: 3,
                goals: {
                  for: 5,
                  against: 13,
                },
              },
              home: {
                played: 2,
                win: 1,
                draw: 0,
                lose: 1,
                goals: {
                  for: 4,
                  against: 5,
                },
              },
              away: {
                played: 2,
                win: 0,
                draw: 0,
                lose: 2,
                goals: {
                  for: 1,
                  against: 8,
                },
              },
              update: "2023-11-09T00:00:00+00:00",
            },
          ],
        ],
      },
    },
  ],
};

export const data = {
  get: "fixtures",
  parameters: {
    live: "all",
  },
  errors: [],
  results: 36,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      fixture: {
        id: 996768,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: null,
          city: null,
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 23,
        },
      },
      league: {
        id: 906,
        name: "Reserve League",
        country: "Argentina",
        logo: "https://media-4.api-sports.io/football/leagues/906.png",
        flag: "https://media-4.api-sports.io/flags/ar.svg",
        season: 2023,
        round: "2nd Phase - 14",
      },
      teams: {
        home: {
          id: 18700,
          name: "Tigre Res.",
          logo: "https://media-4.api-sports.io/football/teams/18700.png",
          winner: true,
        },
        away: {
          id: 18701,
          name: "Unión Santa Fe Res.",
          logo: "https://media-4.api-sports.io/football/teams/18701.png",
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 9,
            extra: null,
          },
          team: {
            id: 18700,
            name: "Tigre Res.",
            logo: "https://media-4.api-sports.io/football/teams/18700.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 996769,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: null,
          city: null,
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 23,
        },
      },
      league: {
        id: 906,
        name: "Reserve League",
        country: "Argentina",
        logo: "https://media-4.api-sports.io/football/leagues/906.png",
        flag: "https://media-4.api-sports.io/flags/ar.svg",
        season: 2023,
        round: "2nd Phase - 14",
      },
      teams: {
        home: {
          id: 20817,
          name: "Belgrano Córdoba Res.",
          logo: "https://media-4.api-sports.io/football/teams/20817.png",
          winner: true,
        },
        away: {
          id: 18694,
          name: "Racing Club Res.",
          logo: "https://media-4.api-sports.io/football/teams/18694.png",
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 21,
            extra: null,
          },
          team: {
            id: 20817,
            name: "Belgrano Córdoba Res.",
            logo: "https://media-4.api-sports.io/football/teams/20817.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 996770,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: null,
          city: null,
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 24,
        },
      },
      league: {
        id: 906,
        name: "Reserve League",
        country: "Argentina",
        logo: "https://media-4.api-sports.io/football/leagues/906.png",
        flag: "https://media-4.api-sports.io/flags/ar.svg",
        season: 2023,
        round: "2nd Phase - 14",
      },
      teams: {
        home: {
          id: 18690,
          name: "Lanús Res.",
          logo: "https://media-4.api-sports.io/football/teams/18690.png",
          winner: null,
        },
        away: {
          id: 18685,
          name: "Estudiantes La Plata Res",
          logo: "https://media-4.api-sports.io/football/teams/18685.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 996771,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: null,
          city: null,
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 21,
        },
      },
      league: {
        id: 906,
        name: "Reserve League",
        country: "Argentina",
        logo: "https://media-4.api-sports.io/football/leagues/906.png",
        flag: "https://media-4.api-sports.io/flags/ar.svg",
        season: 2023,
        round: "2nd Phase - 14",
      },
      teams: {
        home: {
          id: 18682,
          name: "Central Córdoba SdE Res.",
          logo: "https://media-4.api-sports.io/football/teams/18682.png",
          winner: null,
        },
        away: {
          id: 18697,
          name: "San Lorenzo Res.",
          logo: "https://media-4.api-sports.io/football/teams/18697.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 996773,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: null,
          city: null,
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 24,
        },
      },
      league: {
        id: 906,
        name: "Reserve League",
        country: "Argentina",
        logo: "https://media-4.api-sports.io/football/leagues/906.png",
        flag: "https://media-4.api-sports.io/flags/ar.svg",
        season: 2023,
        round: "2nd Phase - 14",
      },
      teams: {
        home: {
          id: 18681,
          name: "Boca Juniors Res.",
          logo: "https://media-4.api-sports.io/football/teams/18681.png",
          winner: false,
        },
        away: {
          id: 18687,
          name: "Godoy Cruz Res.",
          logo: "https://media-4.api-sports.io/football/teams/18687.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 7,
            extra: null,
          },
          team: {
            id: 18687,
            name: "Godoy Cruz Res.",
            logo: "https://media-4.api-sports.io/football/teams/18687.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1092866,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: 18629,
          name: "Arena Khimki",
          city: "Khimki",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 23,
        },
      },
      league: {
        id: 236,
        name: "First League",
        country: "Russia",
        logo: "https://media-4.api-sports.io/football/leagues/236.png",
        flag: "https://media-4.api-sports.io/flags/ru.svg",
        season: 2023,
        round: "Regular Season - 17",
      },
      teams: {
        home: {
          id: 3985,
          name: "Torpedo Moskva",
          logo: "https://media-4.api-sports.io/football/teams/3985.png",
          winner: false,
        },
        away: {
          id: 2004,
          name: "Volgar Astrakhan",
          logo: "https://media-4.api-sports.io/football/teams/2004.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 23,
            extra: null,
          },
          team: {
            id: 2004,
            name: "Volgar Astrakhan",
            logo: "https://media-4.api-sports.io/football/teams/2004.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1099931,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: 19402,
          name: "Caizcoin Arena",
          city: "Novi Pazar",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 24,
        },
      },
      league: {
        id: 286,
        name: "Super Liga",
        country: "Serbia",
        logo: "https://media-4.api-sports.io/football/leagues/286.png",
        flag: "https://media-4.api-sports.io/flags/rs.svg",
        season: 2023,
        round: "Regular Season - 14",
      },
      teams: {
        home: {
          id: 2643,
          name: "Novi Pazar",
          logo: "https://media-4.api-sports.io/football/teams/2643.png",
          winner: false,
        },
        away: {
          id: 573,
          name: "FK Partizan",
          logo: "https://media-4.api-sports.io/football/teams/573.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 2,
            extra: null,
          },
          team: {
            id: 573,
            name: "FK Partizan",
            logo: "https://media-4.api-sports.io/football/teams/573.png",
          },
          player: {
            id: 308839,
            name: "X. Severina",
          },
          assist: {
            id: 2305,
            name: "A. Filipovic",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 22,
            extra: null,
          },
          team: {
            id: 2643,
            name: "Novi Pazar",
            logo: "https://media-4.api-sports.io/football/teams/2643.png",
          },
          player: {
            id: 66850,
            name: "N. Karaklajic",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1123858,
        referee: "Mohammed Khled Hoish, Saudi Arabia",
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: "Markaziy Stadium Qarshi",
          city: "Qarshi",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 25,
        },
      },
      league: {
        id: 17,
        name: "AFC Champions League",
        country: "World",
        logo: "https://media-4.api-sports.io/football/leagues/17.png",
        flag: null,
        season: 2023,
        round: "Group B - 4",
      },
      teams: {
        home: {
          id: 4215,
          name: "Nasaf",
          logo: "https://media-4.api-sports.io/football/teams/4215.png",
          winner: false,
        },
        away: {
          id: 2874,
          name: "Sharjah FC",
          logo: "https://media-4.api-sports.io/football/teams/2874.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 7,
            extra: null,
          },
          team: {
            id: 4215,
            name: "Nasaf",
            logo: "https://media-4.api-sports.io/football/teams/4215.png",
          },
          player: {
            id: 20752,
            name: "J. Jigauri",
          },
          assist: {
            id: 20752,
            name: "J. Jigauri",
          },
          type: "Goal",
          detail: "Missed Penalty",
          comments: null,
        },
        {
          time: {
            elapsed: 16,
            extra: null,
          },
          team: {
            id: 2874,
            name: "Sharjah FC",
            logo: "https://media-4.api-sports.io/football/teams/2874.png",
          },
          player: {
            id: 393,
            name: "M. Marega",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1123859,
        referee: "Yusuke Araki, Japan",
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: "Azadi Stadium",
          city: "Tehran",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 16,
        },
      },
      league: {
        id: 17,
        name: "AFC Champions League",
        country: "World",
        logo: "https://media-4.api-sports.io/football/leagues/17.png",
        flag: null,
        season: 2023,
        round: "Group D - 4",
      },
      teams: {
        home: {
          id: 2719,
          name: "Nassaji Mazandaran",
          logo: "https://media-4.api-sports.io/football/teams/2719.png",
          winner: false,
        },
        away: {
          id: 4216,
          name: "Navbahor",
          logo: "https://media-4.api-sports.io/football/teams/4216.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 9,
            extra: null,
          },
          team: {
            id: 4216,
            name: "Navbahor",
            logo: "https://media-4.api-sports.io/football/teams/4216.png",
          },
          player: {
            id: 73537,
            name: "I. Golban",
          },
          assist: {
            id: 72127,
            name: "O. Urunov",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1123860,
        referee: "Adham Mohammad, Jordan",
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: "DY Patil Stadium",
          city: "Mumbai",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 25,
        },
      },
      league: {
        id: 17,
        name: "AFC Champions League",
        country: "World",
        logo: "https://media-4.api-sports.io/football/leagues/17.png",
        flag: null,
        season: 2023,
        round: "Group D - 4",
      },
      teams: {
        home: {
          id: 3478,
          name: "Mumbai City",
          logo: "https://media-4.api-sports.io/football/teams/3478.png",
          winner: null,
        },
        away: {
          id: 2932,
          name: "Al-Hilal Saudi FC",
          logo: "https://media-4.api-sports.io/football/teams/2932.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 1136142,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: "Stade de Bonamoussadi",
          city: "Douala",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 20,
        },
      },
      league: {
        id: 411,
        name: "Elite One",
        country: "Cameroon",
        logo: "https://media-4.api-sports.io/football/leagues/411.png",
        flag: "https://media-4.api-sports.io/flags/cm.svg",
        season: 2024,
        round: "Regular Season - 6",
      },
      teams: {
        home: {
          id: 5412,
          name: "UMS de Loum",
          logo: "https://media-4.api-sports.io/football/teams/5412.png",
          winner: null,
        },
        away: {
          id: 16526,
          name: "Fauve Azur Elite",
          logo: "https://media-4.api-sports.io/football/teams/16526.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 1136144,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: "Stade Annexe 1 Omnisport",
          city: "Yaoundé",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 24,
        },
      },
      league: {
        id: 411,
        name: "Elite One",
        country: "Cameroon",
        logo: "https://media-4.api-sports.io/football/leagues/411.png",
        flag: "https://media-4.api-sports.io/flags/cm.svg",
        season: 2024,
        round: "Regular Season - 6",
      },
      teams: {
        home: {
          id: 5398,
          name: "APEJES Academy",
          logo: "https://media-4.api-sports.io/football/teams/5398.png",
          winner: null,
        },
        away: {
          id: 5410,
          name: "Stade Renard",
          logo: "https://media-4.api-sports.io/football/teams/5410.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 1138886,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T14:00:00+00:00",
        timestamp: 1699279200,
        periods: {
          first: 1699279200,
          second: null,
        },
        venue: {
          id: null,
          name: "Stadion Trud Makhachkala",
          city: "Makhachkala",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 24,
        },
      },
      league: {
        id: 651,
        name: "Second League - Group 1",
        country: "Russia",
        logo: "https://media-4.api-sports.io/football/leagues/651.png",
        flag: "https://media-4.api-sports.io/flags/ru.svg",
        season: 2023,
        round: "Group 1 - 2nd Phase - 3",
      },
      teams: {
        home: {
          id: 6810,
          name: "Legion Dynamo",
          logo: "https://media-4.api-sports.io/football/teams/6810.png",
          winner: null,
        },
        away: {
          id: 6806,
          name: "Kuban Kholding",
          logo: "https://media-4.api-sports.io/football/teams/6806.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 1009695,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T13:00:00+00:00",
        timestamp: 1699275600,
        periods: {
          first: 1699275600,
          second: 1699279200,
        },
        venue: {
          id: 160,
          name: "Stadyen DASK Brestski",
          city: "Brest",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 67,
        },
      },
      league: {
        id: 116,
        name: "Premier League",
        country: "Belarus",
        logo: "https://media-4.api-sports.io/football/leagues/116.png",
        flag: "https://media-4.api-sports.io/flags/by.svg",
        season: 2023,
        round: "Regular Season - 27",
      },
      teams: {
        home: {
          id: 386,
          name: "Dinamo Brest",
          logo: "https://media-4.api-sports.io/football/teams/386.png",
          winner: false,
        },
        away: {
          id: 394,
          name: "Dinamo Minsk",
          logo: "https://media-4.api-sports.io/football/teams/394.png",
          winner: true,
        },
      },
      goals: {
        home: 1,
        away: 2,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 7,
            extra: null,
          },
          team: {
            id: 394,
            name: "Dinamo Minsk",
            logo: "https://media-4.api-sports.io/football/teams/394.png",
          },
          player: {
            id: 384400,
            name: "D. Zorin",
          },
          assist: {
            id: 7804,
            name: "A. Bykov",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 16,
            extra: null,
          },
          team: {
            id: 386,
            name: "Dinamo Brest",
            logo: "https://media-4.api-sports.io/football/teams/386.png",
          },
          player: {
            id: 138563,
            name: "E. Kortsov",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 37,
            extra: null,
          },
          team: {
            id: 386,
            name: "Dinamo Brest",
            logo: "https://media-4.api-sports.io/football/teams/386.png",
          },
          player: {
            id: 372546,
            name: "I. Bogdanovich",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 42,
            extra: null,
          },
          team: {
            id: 394,
            name: "Dinamo Minsk",
            logo: "https://media-4.api-sports.io/football/teams/394.png",
          },
          player: {
            id: 66782,
            name: "D. Bakic",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 52,
            extra: null,
          },
          team: {
            id: 394,
            name: "Dinamo Minsk",
            logo: "https://media-4.api-sports.io/football/teams/394.png",
          },
          player: {
            id: 76308,
            name: "P. Sedko",
          },
          assist: {
            id: 7804,
            name: "A. Bykov",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 61,
            extra: null,
          },
          team: {
            id: 386,
            name: "Dinamo Brest",
            logo: "https://media-4.api-sports.io/football/teams/386.png",
          },
          player: {
            id: 2309,
            name: "D. Baga",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1041869,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T13:00:00+00:00",
        timestamp: 1699275600,
        periods: {
          first: 1699275600,
          second: 1699279200,
        },
        venue: {
          id: 3352,
          name: "Športni park Ilirija",
          city: "Ljubljana",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 72,
        },
      },
      league: {
        id: 374,
        name: "2. SNL",
        country: "Slovenia",
        logo: "https://media-4.api-sports.io/football/leagues/374.png",
        flag: "https://media-4.api-sports.io/flags/si.svg",
        season: 2023,
        round: "Regular Season - 16",
      },
      teams: {
        home: {
          id: 4381,
          name: "Ilirija",
          logo: "https://media-4.api-sports.io/football/teams/4381.png",
          winner: false,
        },
        away: {
          id: 4367,
          name: "Bilje",
          logo: "https://media-4.api-sports.io/football/teams/4367.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 3,
      },
      score: {
        halftime: {
          home: 0,
          away: 3,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 8,
            extra: null,
          },
          team: {
            id: 4367,
            name: "Bilje",
            logo: "https://media-4.api-sports.io/football/teams/4367.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 31,
            extra: null,
          },
          team: {
            id: 4367,
            name: "Bilje",
            logo: "https://media-4.api-sports.io/football/teams/4367.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 45,
            extra: null,
          },
          team: {
            id: 4367,
            name: "Bilje",
            logo: "https://media-4.api-sports.io/football/teams/4367.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1041870,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T13:00:00+00:00",
        timestamp: 1699275600,
        periods: {
          first: 1699275600,
          second: 1699279200,
        },
        venue: {
          id: 4906,
          name: "Športni park",
          city: "Slovenska Bistrica",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 66,
        },
      },
      league: {
        id: 374,
        name: "2. SNL",
        country: "Slovenia",
        logo: "https://media-4.api-sports.io/football/leagues/374.png",
        flag: "https://media-4.api-sports.io/flags/si.svg",
        season: 2023,
        round: "Regular Season - 16",
      },
      teams: {
        home: {
          id: 6718,
          name: "Bistrica",
          logo: "https://media-4.api-sports.io/football/teams/6718.png",
          winner: true,
        },
        away: {
          id: 4361,
          name: "Rudar",
          logo: "https://media-4.api-sports.io/football/teams/4361.png",
          winner: false,
        },
      },
      goals: {
        home: 3,
        away: 1,
      },
      score: {
        halftime: {
          home: 2,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 8,
            extra: null,
          },
          team: {
            id: 4361,
            name: "Rudar",
            logo: "https://media-4.api-sports.io/football/teams/4361.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 26,
            extra: null,
          },
          team: {
            id: 6718,
            name: "Bistrica",
            logo: "https://media-4.api-sports.io/football/teams/6718.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 45,
            extra: 1,
          },
          team: {
            id: 6718,
            name: "Bistrica",
            logo: "https://media-4.api-sports.io/football/teams/6718.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 48,
            extra: null,
          },
          team: {
            id: 6718,
            name: "Bistrica",
            logo: "https://media-4.api-sports.io/football/teams/6718.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1057784,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T13:00:00+00:00",
        timestamp: 1699275600,
        periods: {
          first: 1699275600,
          second: 1699279200,
        },
        venue: {
          id: 1554,
          name: "Boonyachinda Stadium",
          city: "Bangkok",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 66,
        },
      },
      league: {
        id: 296,
        name: "Thai League 1",
        country: "Thailand",
        logo: "https://media-4.api-sports.io/football/leagues/296.png",
        flag: "https://media-4.api-sports.io/flags/th.svg",
        season: 2023,
        round: "Regular Season - 10",
      },
      teams: {
        home: {
          id: 2775,
          name: "Police Tero",
          logo: "https://media-4.api-sports.io/football/teams/2775.png",
          winner: true,
        },
        away: {
          id: 6572,
          name: "Lamphun Warrior",
          logo: "https://media-4.api-sports.io/football/teams/6572.png",
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 1,
      },
      score: {
        halftime: {
          home: 2,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 7,
            extra: null,
          },
          team: {
            id: 2775,
            name: "Police Tero",
            logo: "https://media-4.api-sports.io/football/teams/2775.png",
          },
          player: {
            id: 96747,
            name: "K. Karikari",
          },
          assist: {
            id: 99646,
            name: "Wellington",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 12,
            extra: null,
          },
          team: {
            id: 2775,
            name: "Police Tero",
            logo: "https://media-4.api-sports.io/football/teams/2775.png",
          },
          player: {
            id: 99294,
            name: "W. Jeong",
          },
          assist: {
            id: 100738,
            name: "E. A. Phumipha",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 17,
            extra: null,
          },
          team: {
            id: 2775,
            name: "Police Tero",
            logo: "https://media-4.api-sports.io/football/teams/2775.png",
          },
          player: {
            id: 380467,
            name: "A. Fomthaisong",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 6572,
            name: "Lamphun Warrior",
            logo: "https://media-4.api-sports.io/football/teams/6572.png",
          },
          player: {
            id: 101068,
            name: "Dennis",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Penalty",
          comments: null,
        },
        {
          time: {
            elapsed: 46,
            extra: null,
          },
          team: {
            id: 2775,
            name: "Police Tero",
            logo: "https://media-4.api-sports.io/football/teams/2775.png",
          },
          player: {
            id: 49017,
            name: "E. Samre",
          },
          assist: {
            id: 380467,
            name: "A. Fomthaisong",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 46,
            extra: null,
          },
          team: {
            id: 2775,
            name: "Police Tero",
            logo: "https://media-4.api-sports.io/football/teams/2775.png",
          },
          player: {
            id: 49308,
            name: "J. Phokhi",
          },
          assist: {
            id: 124217,
            name: "D. Villanueva",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 53,
            extra: null,
          },
          team: {
            id: 6572,
            name: "Lamphun Warrior",
            logo: "https://media-4.api-sports.io/football/teams/6572.png",
          },
          player: {
            id: 48990,
            name: "B. Tapla",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 56,
            extra: null,
          },
          team: {
            id: 2775,
            name: "Police Tero",
            logo: "https://media-4.api-sports.io/football/teams/2775.png",
          },
          player: {
            id: 96747,
            name: "K. Karikari",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 60,
            extra: null,
          },
          team: {
            id: 6572,
            name: "Lamphun Warrior",
            logo: "https://media-4.api-sports.io/football/teams/6572.png",
          },
          player: {
            id: 122455,
            name: "L. Maung Maung",
          },
          assist: {
            id: 48990,
            name: "B. Tapla",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 60,
            extra: null,
          },
          team: {
            id: 6572,
            name: "Lamphun Warrior",
            logo: "https://media-4.api-sports.io/football/teams/6572.png",
          },
          player: {
            id: null,
            name: "P. Inthanee",
          },
          assist: {
            id: 49238,
            name: "S. Srikampang",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1071594,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T13:00:00+00:00",
        timestamp: 1699275600,
        periods: {
          first: 1699275600,
          second: 1699279200,
        },
        venue: {
          id: 4973,
          name: "Stadion Ekspress",
          city: "Velikiye Luki",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 66,
        },
      },
      league: {
        id: 652,
        name: "Second League - Group 2",
        country: "Russia",
        logo: "https://media-4.api-sports.io/football/leagues/652.png",
        flag: "https://media-4.api-sports.io/flags/ru.svg",
        season: 2023,
        round: "Group 2 - 16",
      },
      teams: {
        home: {
          id: 6812,
          name: "Luki-Energiya",
          logo: "https://media-4.api-sports.io/football/teams/6812.png",
          winner: true,
        },
        away: {
          id: 6799,
          name: "Elektron VN",
          logo: "https://media-4.api-sports.io/football/teams/6799.png",
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 38,
            extra: null,
          },
          team: {
            id: 6812,
            name: "Luki-Energiya",
            logo: "https://media-4.api-sports.io/football/teams/6812.png",
          },
          player: {
            id: 43773,
            name: "D. Zakharov",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1092867,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T13:00:00+00:00",
        timestamp: 1699275600,
        periods: {
          first: 1699275600,
          second: 1699279200,
        },
        venue: {
          id: 1350,
          name: "Stadion Shinnik",
          city: "Yaroslavl'",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 60,
        },
      },
      league: {
        id: 236,
        name: "First League",
        country: "Russia",
        logo: "https://media-4.api-sports.io/football/leagues/236.png",
        flag: "https://media-4.api-sports.io/flags/ru.svg",
        season: 2023,
        round: "Regular Season - 17",
      },
      teams: {
        home: {
          id: 1998,
          name: "Shinnik Yaroslavl",
          logo: "https://media-4.api-sports.io/football/teams/1998.png",
          winner: null,
        },
        away: {
          id: 6787,
          name: "Alaniya Vladikavkaz",
          logo: "https://media-4.api-sports.io/football/teams/6787.png",
          winner: null,
        },
      },
      goals: {
        home: 2,
        away: 2,
      },
      score: {
        halftime: {
          home: 2,
          away: 2,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 15,
            extra: null,
          },
          team: {
            id: 1998,
            name: "Shinnik Yaroslavl",
            logo: "https://media-4.api-sports.io/football/teams/1998.png",
          },
          player: {
            id: 43514,
            name: "V. Aleynikov",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 17,
            extra: null,
          },
          team: {
            id: 6787,
            name: "Alaniya Vladikavkaz",
            logo: "https://media-4.api-sports.io/football/teams/6787.png",
          },
          player: {
            id: 97555,
            name: "I. Mashukov",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 32,
            extra: null,
          },
          team: {
            id: 6787,
            name: "Alaniya Vladikavkaz",
            logo: "https://media-4.api-sports.io/football/teams/6787.png",
          },
          player: {
            id: 149826,
            name: "R. Daurov",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 33,
            extra: null,
          },
          team: {
            id: 1998,
            name: "Shinnik Yaroslavl",
            logo: "https://media-4.api-sports.io/football/teams/1998.png",
          },
          player: {
            id: 43523,
            name: "D. Samoilov",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 39,
            extra: null,
          },
          team: {
            id: 6787,
            name: "Alaniya Vladikavkaz",
            logo: "https://media-4.api-sports.io/football/teams/6787.png",
          },
          player: {
            id: 125497,
            name: "B. Gurtsiev",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 41,
            extra: null,
          },
          team: {
            id: 1998,
            name: "Shinnik Yaroslavl",
            logo: "https://media-4.api-sports.io/football/teams/1998.png",
          },
          player: {
            id: 277972,
            name: "D. Sukhomlinov",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 46,
            extra: null,
          },
          team: {
            id: 6787,
            name: "Alaniya Vladikavkaz",
            logo: "https://media-4.api-sports.io/football/teams/6787.png",
          },
          player: {
            id: 97517,
            name: "A. Bagaev",
          },
          assist: {
            id: 149571,
            name: "S. Kachmazov",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1093128,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T13:00:00+00:00",
        timestamp: 1699275600,
        periods: {
          first: 1699275600,
          second: 1699279200,
        },
        venue: {
          id: 5044,
          name: "Stadionul 1 Mai",
          city: "Slobozia",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 65,
        },
      },
      league: {
        id: 284,
        name: "Liga II",
        country: "Romania",
        logo: "https://media-4.api-sports.io/football/leagues/284.png",
        flag: "https://media-4.api-sports.io/flags/ro.svg",
        season: 2023,
        round: "Regular Season - 12",
      },
      teams: {
        home: {
          id: 6916,
          name: "Unirea Slobozia",
          logo: "https://media-4.api-sports.io/football/teams/6916.png",
          winner: false,
        },
        away: {
          id: 6232,
          name: "SCM Gloria Buzău",
          logo: "https://media-4.api-sports.io/football/teams/6232.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 27,
            extra: null,
          },
          team: {
            id: 6232,
            name: "SCM Gloria Buzău",
            logo: "https://media-4.api-sports.io/football/teams/6232.png",
          },
          player: {
            id: 322073,
            name: "V. Dumitrache",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 46,
            extra: null,
          },
          team: {
            id: 6916,
            name: "Unirea Slobozia",
            logo: "https://media-4.api-sports.io/football/teams/6916.png",
          },
          player: {
            id: 42913,
            name: "C. Birnoi",
          },
          assist: {
            id: null,
            name: "C. Afalna",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 46,
            extra: null,
          },
          team: {
            id: 6916,
            name: "Unirea Slobozia",
            logo: "https://media-4.api-sports.io/football/teams/6916.png",
          },
          player: {
            id: 363041,
            name: "L. Vlasceanu",
          },
          assist: {
            id: null,
            name: "A. Dorobantu",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 46,
            extra: null,
          },
          team: {
            id: 6916,
            name: "Unirea Slobozia",
            logo: "https://media-4.api-sports.io/football/teams/6916.png",
          },
          player: {
            id: null,
            name: "S. Pacionel",
          },
          assist: {
            id: 42517,
            name: "C. Atanase",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 48,
            extra: null,
          },
          team: {
            id: 6916,
            name: "Unirea Slobozia",
            logo: "https://media-4.api-sports.io/football/teams/6916.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1115972,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T13:00:00+00:00",
        timestamp: 1699275600,
        periods: {
          first: 1699275600,
          second: 1699279200,
        },
        venue: {
          id: 20184,
          name: "Nyankumbu Stadium",
          city: "Geita",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 66,
        },
      },
      league: {
        id: 567,
        name: "Ligi kuu Bara",
        country: "Tanzania",
        logo: "https://media-4.api-sports.io/football/leagues/567.png",
        flag: "https://media-4.api-sports.io/flags/tz.svg",
        season: 2023,
        round: "Regular Season - 9",
      },
      teams: {
        home: {
          id: 17752,
          name: "Geita Gold",
          logo: "https://media-4.api-sports.io/football/teams/17752.png",
          winner: null,
        },
        away: {
          id: 22175,
          name: "Kitayosce",
          logo: "https://media-4.api-sports.io/football/teams/22175.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 1118177,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:30:00+00:00",
        timestamp: 1699273800,
        periods: {
          first: 1699273800,
          second: 1699277400,
        },
        venue: {
          id: 2173,
          name: "Stadiumi Tomori",
          city: "Berat",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 90,
        },
      },
      league: {
        id: 311,
        name: "1st Division",
        country: "Albania",
        logo: "https://media-4.api-sports.io/football/leagues/311.png",
        flag: "https://media-4.api-sports.io/flags/al.svg",
        season: 2023,
        round: "Regular Season - 10",
      },
      teams: {
        home: {
          id: 3336,
          name: "Tomori Berat",
          logo: "https://media-4.api-sports.io/football/teams/3336.png",
          winner: false,
        },
        away: {
          id: 3324,
          name: "Burreli",
          logo: "https://media-4.api-sports.io/football/teams/3324.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 63,
            extra: null,
          },
          team: {
            id: 3324,
            name: "Burreli",
            logo: "https://media-4.api-sports.io/football/teams/3324.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1118178,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:30:00+00:00",
        timestamp: 1699273800,
        periods: {
          first: 1699273800,
          second: 1699277400,
        },
        venue: {
          id: 12390,
          name: "Stadiumi Luz i Vogël",
          city: "Luz i Vogël",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 90,
        },
      },
      league: {
        id: 311,
        name: "1st Division",
        country: "Albania",
        logo: "https://media-4.api-sports.io/football/leagues/311.png",
        flag: "https://media-4.api-sports.io/flags/al.svg",
        season: 2023,
        round: "Regular Season - 10",
      },
      teams: {
        home: {
          id: 10720,
          name: "Luzi 2008",
          logo: "https://media-4.api-sports.io/football/teams/10720.png",
          winner: false,
        },
        away: {
          id: 20406,
          name: "AF Elbasani",
          logo: "https://media-4.api-sports.io/football/teams/20406.png",
          winner: true,
        },
      },
      goals: {
        home: 2,
        away: 4,
      },
      score: {
        halftime: {
          home: 1,
          away: 3,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 9,
            extra: null,
          },
          team: {
            id: 20406,
            name: "AF Elbasani",
            logo: "https://media-4.api-sports.io/football/teams/20406.png",
          },
          player: {
            id: null,
            name: "Leo Melo",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 14,
            extra: null,
          },
          team: {
            id: 20406,
            name: "AF Elbasani",
            logo: "https://media-4.api-sports.io/football/teams/20406.png",
          },
          player: {
            id: 3632,
            name: "B. Greca",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 17,
            extra: null,
          },
          team: {
            id: 20406,
            name: "AF Elbasani",
            logo: "https://media-4.api-sports.io/football/teams/20406.png",
          },
          player: {
            id: 3633,
            name: "E. Hasani",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 40,
            extra: null,
          },
          team: {
            id: 10720,
            name: "Luzi 2008",
            logo: "https://media-4.api-sports.io/football/teams/10720.png",
          },
          player: {
            id: null,
            name: "P. Treni",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 49,
            extra: null,
          },
          team: {
            id: 10720,
            name: "Luzi 2008",
            logo: "https://media-4.api-sports.io/football/teams/10720.png",
          },
          player: {
            id: null,
            name: "S. Xhika",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 78,
            extra: null,
          },
          team: {
            id: 20406,
            name: "AF Elbasani",
            logo: "https://media-4.api-sports.io/football/teams/20406.png",
          },
          player: {
            id: null,
            name: "Leo Melo",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1118179,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:30:00+00:00",
        timestamp: 1699273800,
        periods: {
          first: 1699273800,
          second: 1699277400,
        },
        venue: {
          id: null,
          name: "Stadiumi Adush Muçaj",
          city: "Ballsh",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 90,
        },
      },
      league: {
        id: 311,
        name: "1st Division",
        country: "Albania",
        logo: "https://media-4.api-sports.io/football/leagues/311.png",
        flag: "https://media-4.api-sports.io/flags/al.svg",
        season: 2023,
        round: "Regular Season - 10",
      },
      teams: {
        home: {
          id: 3325,
          name: "Bylis",
          logo: "https://media-4.api-sports.io/football/teams/3325.png",
          winner: null,
        },
        away: {
          id: 3322,
          name: "Besa Kavajë",
          logo: "https://media-4.api-sports.io/football/teams/3322.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 1118180,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:30:00+00:00",
        timestamp: 1699273800,
        periods: {
          first: 1699273800,
          second: 1699277400,
        },
        venue: {
          id: 2158,
          name: "Stadiumi Redi Maloku",
          city: "Fushë-Krujë",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 90,
        },
      },
      league: {
        id: 311,
        name: "1st Division",
        country: "Albania",
        logo: "https://media-4.api-sports.io/football/leagues/311.png",
        flag: "https://media-4.api-sports.io/flags/al.svg",
        season: 2023,
        round: "Regular Season - 10",
      },
      teams: {
        home: {
          id: 3319,
          name: "Kastrioti Krujë",
          logo: "https://media-4.api-sports.io/football/teams/3319.png",
          winner: null,
        },
        away: {
          id: 3321,
          name: "Apolonia Fier",
          logo: "https://media-4.api-sports.io/football/teams/3321.png",
          winner: null,
        },
      },
      goals: {
        home: 1,
        away: 1,
      },
      score: {
        halftime: {
          home: 1,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 3,
            extra: null,
          },
          team: {
            id: 3319,
            name: "Kastrioti Krujë",
            logo: "https://media-4.api-sports.io/football/teams/3319.png",
          },
          player: {
            id: null,
            name: "Z. Arapi",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 30,
            extra: null,
          },
          team: {
            id: 3321,
            name: "Apolonia Fier",
            logo: "https://media-4.api-sports.io/football/teams/3321.png",
          },
          player: {
            id: null,
            name: "X. Trifoni",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1118181,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:30:00+00:00",
        timestamp: 1699273800,
        periods: {
          first: 1699273800,
          second: 1699277400,
        },
        venue: {
          id: 20286,
          name: "Stadiumi Vora",
          city: "Vora",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 90,
        },
      },
      league: {
        id: 311,
        name: "1st Division",
        country: "Albania",
        logo: "https://media-4.api-sports.io/football/leagues/311.png",
        flag: "https://media-4.api-sports.io/flags/al.svg",
        season: 2023,
        round: "Regular Season - 10",
      },
      teams: {
        home: {
          id: 3340,
          name: "Vora",
          logo: "https://media-4.api-sports.io/football/teams/3340.png",
          winner: null,
        },
        away: {
          id: 3332,
          name: "Lushnja",
          logo: "https://media-4.api-sports.io/football/teams/3332.png",
          winner: null,
        },
      },
      goals: {
        home: 2,
        away: 2,
      },
      score: {
        halftime: {
          home: 1,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 15,
            extra: null,
          },
          team: {
            id: 3332,
            name: "Lushnja",
            logo: "https://media-4.api-sports.io/football/teams/3332.png",
          },
          player: {
            id: null,
            name: "P. Kasmollari",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 45,
            extra: 3,
          },
          team: {
            id: 3340,
            name: "Vora",
            logo: "https://media-4.api-sports.io/football/teams/3340.png",
          },
          player: {
            id: null,
            name: "J. Raboshta",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 73,
            extra: null,
          },
          team: {
            id: 3332,
            name: "Lushnja",
            logo: "https://media-4.api-sports.io/football/teams/3332.png",
          },
          player: {
            id: null,
            name: "J. Ayinde",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 86,
            extra: null,
          },
          team: {
            id: 3340,
            name: "Vora",
            logo: "https://media-4.api-sports.io/football/teams/3340.png",
          },
          player: {
            id: null,
            name: "J. Pereira",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1118182,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:30:00+00:00",
        timestamp: 1699273800,
        periods: {
          first: 1699273800,
          second: 1699277400,
        },
        venue: {
          id: 2168,
          name: "Stadiumi Korabi",
          city: "Peshkopi",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 90,
        },
      },
      league: {
        id: 311,
        name: "1st Division",
        country: "Albania",
        logo: "https://media-4.api-sports.io/football/leagues/311.png",
        flag: "https://media-4.api-sports.io/flags/al.svg",
        season: 2023,
        round: "Regular Season - 10",
      },
      teams: {
        home: {
          id: 3331,
          name: "Korabi Peshkopi",
          logo: "https://media-4.api-sports.io/football/teams/3331.png",
          winner: false,
        },
        away: {
          id: 3317,
          name: "Flamurtari",
          logo: "https://media-4.api-sports.io/football/teams/3317.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 36,
            extra: null,
          },
          team: {
            id: 3317,
            name: "Flamurtari",
            logo: "https://media-4.api-sports.io/football/teams/3317.png",
          },
          player: {
            id: 3552,
            name: "L. Sidibe",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1120378,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T13:00:00+00:00",
        timestamp: 1699275600,
        periods: {
          first: 1699275600,
          second: 1699279200,
        },
        venue: {
          id: null,
          name: "Alexandra Park",
          city: "Nantwich, Cheshire",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 68,
        },
      },
      league: {
        id: 703,
        name: "Professional Development League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/703.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11",
      },
      teams: {
        home: {
          id: 20093,
          name: "Crewe Alexandra U21",
          logo: "https://media-4.api-sports.io/football/teams/20093.png",
          winner: false,
        },
        away: {
          id: 20078,
          name: "Birmingham City U21",
          logo: "https://media-4.api-sports.io/football/teams/20078.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 68,
            extra: null,
          },
          team: {
            id: 20078,
            name: "Birmingham City U21",
            logo: "https://media-4.api-sports.io/football/teams/20078.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1120379,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T13:00:00+00:00",
        timestamp: 1699275600,
        periods: {
          first: 1699275600,
          second: 1699279200,
        },
        venue: {
          id: null,
          name: "Charlton Athletic Football Club Youth Academy",
          city: "London",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 62,
        },
      },
      league: {
        id: 703,
        name: "Professional Development League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/703.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11",
      },
      teams: {
        home: {
          id: 20082,
          name: "Charlton Athletic U21",
          logo: "https://media-4.api-sports.io/football/teams/20082.png",
          winner: true,
        },
        away: {
          id: 20094,
          name: "Ipswich Town U21",
          logo: "https://media-4.api-sports.io/football/teams/20094.png",
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 20082,
            name: "Charlton Athletic U21",
            logo: "https://media-4.api-sports.io/football/teams/20082.png",
          },
          player: {
            id: 397454,
            name: "H. Rylah",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 60,
            extra: null,
          },
          team: {
            id: 20082,
            name: "Charlton Athletic U21",
            logo: "https://media-4.api-sports.io/football/teams/20082.png",
          },
          player: {
            id: null,
            name: "T. Ladapo",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1124854,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:45:00+00:00",
        timestamp: 1699274700,
        periods: {
          first: 1699274700,
          second: 1699278300,
        },
        venue: {
          id: 8342,
          name: "Al Jazirah Al Hamra Stadium",
          city: "Al Jazirah Al Hamra",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 76,
        },
      },
      league: {
        id: 303,
        name: "Division 1",
        country: "United-Arab-Emirates",
        logo: "https://media-4.api-sports.io/football/leagues/303.png",
        flag: "https://media-4.api-sports.io/flags/ae.svg",
        season: 2023,
        round: "Regular Season - 8",
      },
      teams: {
        home: {
          id: 13265,
          name: "Al Jazira Al Hamra",
          logo: "https://media-4.api-sports.io/football/teams/13265.png",
          winner: true,
        },
        away: {
          id: 2880,
          name: "Al Fujairah SC",
          logo: "https://media-4.api-sports.io/football/teams/2880.png",
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 70,
            extra: null,
          },
          team: {
            id: 13265,
            name: "Al Jazira Al Hamra",
            logo: "https://media-4.api-sports.io/football/teams/13265.png",
          },
          player: {
            id: null,
            name: "B. Fenoglio",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1124856,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:50:00+00:00",
        timestamp: 1699275000,
        periods: {
          first: 1699275000,
          second: 1699278600,
        },
        venue: {
          id: 6322,
          name: "Al Arabi Stadium",
          city: "Umm al-Quwain",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 72,
        },
      },
      league: {
        id: 303,
        name: "Division 1",
        country: "United-Arab-Emirates",
        logo: "https://media-4.api-sports.io/football/leagues/303.png",
        flag: "https://media-4.api-sports.io/flags/ae.svg",
        season: 2023,
        round: "Regular Season - 8",
      },
      teams: {
        home: {
          id: 9135,
          name: "Al Arabi",
          logo: "https://media-4.api-sports.io/football/teams/9135.png",
          winner: null,
        },
        away: {
          id: 9141,
          name: "Masafi",
          logo: "https://media-4.api-sports.io/football/teams/9141.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 1124857,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:50:00+00:00",
        timestamp: 1699275000,
        periods: {
          first: 1699275000,
          second: 1699278600,
        },
        venue: {
          id: 6324,
          name: "Al-Hamriya Sports Club Stadium",
          city: "Sharjah, Ajman",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 67,
        },
      },
      league: {
        id: 303,
        name: "Division 1",
        country: "United-Arab-Emirates",
        logo: "https://media-4.api-sports.io/football/leagues/303.png",
        flag: "https://media-4.api-sports.io/flags/ae.svg",
        season: 2023,
        round: "Regular Season - 8",
      },
      teams: {
        home: {
          id: 9137,
          name: "Al Hamriyah",
          logo: "https://media-4.api-sports.io/football/teams/9137.png",
          winner: true,
        },
        away: {
          id: 9142,
          name: "Masfut",
          logo: "https://media-4.api-sports.io/football/teams/9142.png",
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 26,
            extra: null,
          },
          team: {
            id: 9142,
            name: "Masfut",
            logo: "https://media-4.api-sports.io/football/teams/9142.png",
          },
          player: {
            id: 83530,
            name: "A. Gassama",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 48,
            extra: null,
          },
          team: {
            id: 9137,
            name: "Al Hamriyah",
            logo: "https://media-4.api-sports.io/football/teams/9137.png",
          },
          player: {
            id: 96757,
            name: "M. Mardikian",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 60,
            extra: null,
          },
          team: {
            id: 9137,
            name: "Al Hamriyah",
            logo: "https://media-4.api-sports.io/football/teams/9137.png",
          },
          player: {
            id: 43980,
            name: "Y. El Jebli",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1131821,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:00:00+00:00",
        timestamp: 1699272000,
        periods: {
          first: 1699272000,
          second: 1699275600,
        },
        venue: {
          id: null,
          name: null,
          city: null,
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 90,
        },
      },
      league: {
        id: 275,
        name: "Liga 2",
        country: "Indonesia",
        logo: "https://media-4.api-sports.io/football/leagues/275.png",
        flag: "https://media-4.api-sports.io/flags/id.svg",
        season: 2023,
        round: "1st Round - 10",
      },
      teams: {
        home: {
          id: 4236,
          name: "PSPS",
          logo: "https://media-4.api-sports.io/football/teams/4236.png",
          winner: null,
        },
        away: {
          id: 4242,
          name: "Persiraja Banda Aceh",
          logo: "https://media-4.api-sports.io/football/teams/4242.png",
          winner: null,
        },
      },
      goals: {
        home: 1,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 17,
            extra: null,
          },
          team: {
            id: 4242,
            name: "Persiraja Banda Aceh",
            logo: "https://media-4.api-sports.io/football/teams/4242.png",
          },
          player: {
            id: null,
            name: "M. Kadafi",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 33,
            extra: null,
          },
          team: {
            id: 4236,
            name: "PSPS",
            logo: "https://media-4.api-sports.io/football/teams/4236.png",
          },
          player: {
            id: null,
            name: "T. Pangestu",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 36,
            extra: null,
          },
          team: {
            id: 4242,
            name: "Persiraja Banda Aceh",
            logo: "https://media-4.api-sports.io/football/teams/4242.png",
          },
          player: {
            id: 206573,
            name: "D. Rizki",
          },
          assist: {
            id: 68228,
            name: "A. Vermansyah",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 36,
            extra: null,
          },
          team: {
            id: 4242,
            name: "Persiraja Banda Aceh",
            logo: "https://media-4.api-sports.io/football/teams/4242.png",
          },
          player: {
            id: null,
            name: "Y. Yusri",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 53,
            extra: null,
          },
          team: {
            id: 4236,
            name: "PSPS",
            logo: "https://media-4.api-sports.io/football/teams/4236.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 60,
            extra: null,
          },
          team: {
            id: 4242,
            name: "Persiraja Banda Aceh",
            logo: "https://media-4.api-sports.io/football/teams/4242.png",
          },
          player: {
            id: 206573,
            name: "D. Rizki",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 62,
            extra: null,
          },
          team: {
            id: 4242,
            name: "Persiraja Banda Aceh",
            logo: "https://media-4.api-sports.io/football/teams/4242.png",
          },
          player: {
            id: 206573,
            name: "D. Rizki",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 62,
            extra: null,
          },
          team: {
            id: 4242,
            name: "Persiraja Banda Aceh",
            logo: "https://media-4.api-sports.io/football/teams/4242.png",
          },
          player: {
            id: 206573,
            name: "D. Rizki",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Red Card",
          comments: null,
        },
        {
          time: {
            elapsed: 71,
            extra: null,
          },
          team: {
            id: 4236,
            name: "PSPS",
            logo: "https://media-4.api-sports.io/football/teams/4236.png",
          },
          player: {
            id: null,
            name: "M. Yasir",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 71,
            extra: null,
          },
          team: {
            id: 4236,
            name: "PSPS",
            logo: "https://media-4.api-sports.io/football/teams/4236.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 80,
            extra: null,
          },
          team: {
            id: 4236,
            name: "PSPS",
            logo: "https://media-4.api-sports.io/football/teams/4236.png",
          },
          player: {
            id: null,
            name: "T. Rahman",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 80,
            extra: null,
          },
          team: {
            id: 4236,
            name: "PSPS",
            logo: "https://media-4.api-sports.io/football/teams/4236.png",
          },
          player: {
            id: null,
            name: "T. Rahman",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Red Card",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1135381,
        referee: null,
        timezone: "UTC",
        date: "2023-11-06T12:30:00+00:00",
        timestamp: 1699273800,
        periods: {
          first: 1699273800,
          second: 1699277400,
        },
        venue: {
          id: 2732,
          name: "Stadio Kallitheas Grigóris Lamprákis",
          city: "Athens",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 90,
        },
      },
      league: {
        id: 494,
        name: "Super League 2",
        country: "Greece",
        logo: "https://media-4.api-sports.io/football/leagues/494.png",
        flag: "https://media-4.api-sports.io/flags/gr.svg",
        season: 2023,
        round: "Group B - 6",
      },
      teams: {
        home: {
          id: 2095,
          name: "Kallithea",
          logo: "https://media-4.api-sports.io/football/teams/2095.png",
          winner: false,
        },
        away: {
          id: 2096,
          name: "Kissamikos",
          logo: "https://media-4.api-sports.io/football/teams/2096.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 1,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 8,
            extra: null,
          },
          team: {
            id: 2096,
            name: "Kissamikos",
            logo: "https://media-4.api-sports.io/football/teams/2096.png",
          },
          player: {
            id: null,
            name: "K. Lemonis",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1042124,
        referee: "Vasiliy Kazartsev, Russia",
        timezone: "UTC",
        date: "2023-11-06T13:30:00+00:00",
        timestamp: 1699277400,
        periods: {
          first: 1699277400,
          second: null,
        },
        venue: {
          id: 1355,
          name: "Ekaterinburg Arena",
          city: "Ekaterinburg",
        },
        status: {
          long: "Halftime",
          short: "HT",
          elapsed: 45,
        },
      },
      league: {
        id: 235,
        name: "Premier League",
        country: "Russia",
        logo: "https://media-4.api-sports.io/football/leagues/235.png",
        flag: "https://media-4.api-sports.io/flags/ru.svg",
        season: 2023,
        round: "Regular Season - 14",
      },
      teams: {
        home: {
          id: 1084,
          name: "Ural",
          logo: "https://media-4.api-sports.io/football/teams/1084.png",
          winner: null,
        },
        away: {
          id: 1083,
          name: "Rubin",
          logo: "https://media-4.api-sports.io/football/teams/1083.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
    {
      fixture: {
        id: 1048314,
        referee: "Stanimir Trenchev, Bulgaria",
        timezone: "UTC",
        date: "2023-11-06T13:30:00+00:00",
        timestamp: 1699277400,
        periods: {
          first: 1699277400,
          second: null,
        },
        venue: {
          id: 18616,
          name: "Stadion Aleksandar Shalamanov",
          city: "Sofia",
        },
        status: {
          long: "Halftime",
          short: "HT",
          elapsed: 45,
        },
      },
      league: {
        id: 172,
        name: "First League",
        country: "Bulgaria",
        logo: "https://media-4.api-sports.io/football/leagues/172.png",
        flag: "https://media-4.api-sports.io/flags/bg.svg",
        season: 2023,
        round: "Regular Season - 16",
      },
      teams: {
        home: {
          id: 854,
          name: "Slavia Sofia",
          logo: "https://media-4.api-sports.io/football/teams/854.png",
          winner: true,
        },
        away: {
          id: 855,
          name: "Etar Veliko Tarnovo",
          logo: "https://media-4.api-sports.io/football/teams/855.png",
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 14,
            extra: null,
          },
          team: {
            id: 855,
            name: "Etar Veliko Tarnovo",
            logo: "https://media-4.api-sports.io/football/teams/855.png",
          },
          player: {
            id: 272092,
            name: "O. Alou",
          },
          assist: {
            id: 198542,
            name: "M. Moran",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 854,
            name: "Slavia Sofia",
            logo: "https://media-4.api-sports.io/football/teams/854.png",
          },
          player: {
            id: 10633,
            name: "T. Tasev",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Penalty",
          comments: null,
        },
        {
          time: {
            elapsed: 35,
            extra: null,
          },
          team: {
            id: 854,
            name: "Slavia Sofia",
            logo: "https://media-4.api-sports.io/football/teams/854.png",
          },
          player: {
            id: 11103,
            name: "V. Genev",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
      ],
    },
  ],
};
