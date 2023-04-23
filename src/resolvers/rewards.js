const { v4: uuidv4 } = require("uuid");

const makeReward = (rewards) => {
  const uid = uuidv4();
  return {
    id: uid,
    rewards,
  };
};

module.exports = {
  makeReward,
};
