const achievements = [
  {
    id: 1,
    name: "First game",
    description: "Play your first game",
    rewards: {
      chestImage: "chest1",
      coins: 10,
      hints: 1,
      xp: 10,
    },
    type: "games-played",
    condition: 1,
  },
  {
    id: 2,
    name: "First 10 games",
    description: "Play 10 games",
    rewards: {
      chestImage: "chest1",
      coins: 50,
      hints: 3,
      xp: 20,
      collectible: true,
    },
    type: "games-played",
    condition: 10,
  },
  {
    id: 3,
    name: "First 20 games",
    description: "Play 20 games",
    rewards: {
      chestImage: "chest1",
      coins: 100,
      hints: 5,
      xp: 30,
    },
    type: "games-played",
    condition: 20,
  },
  {
    id: 4,
    name: "First 50 games",
    description: "Play 50 games",
    rewards: {
      chestImage: "chest2",
      coins: 200,
      hints: 10,
      xp: 40,
    },
    type: "games-played",
    condition: 50,
  },
  {
    id: 5,
    name: "First 100 games",
    description: "Play 100 games",
    rewards: {
      chestImage: "chest2",
      coins: 500,
      hints: 20,
      xp: 50,
    },
    type: "games-played",
    condition: 100,
  },
  {
    id: 6,
    name: "First 200 games",
    description: "Play 200 games",
    rewards: {
      chestImage: "chest2",
      coins: 1000,
      hints: 30,
      xp: 60,
    },
    type: "games-played",
    condition: 200,
  },
  {
    id: 7,
    name: "First 500 games",
    description: "Play 500 games",
    rewards: {
      chestImage: "chest3",
      coins: 2000,
      hints: 50,
      xp: 70,
    },
    type: "games-played",
    condition: 500,
  },
  {
    id: 8,
    name: "First purchase",
    description: "Make your first purchase",
    rewards: {
      chestImage: "chest1",
      coins: 500,
      hints: 3,
      xp: 10,
    },
    type: "purchases-from-coins",
    condition: 1,
  },
  {
    id: 9,
    name: "First 10 purchases",
    description: "Make 10 purchases",
    rewards: {
      chestImage: "chest1",
      coins: 100,
      hints: 5,
      xp: 20,
    },
    type: "purchases-from-coins",
    condition: 10,
  },
  {
    id: 10,
    name: "First 10 hints",
    description: "Use 10 hints",
    rewards: {
      chestImage: "chest1",
      coins: 100,
      hints: 5,
      xp: 20,
    },
    type: "hints-used",
    condition: 10,
  },
];

module.exports = {
  achievements,
};
