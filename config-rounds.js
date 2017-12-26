// Description/settings for each round.

module.exports = {
  // A list of all rounds
  rounds: [
    {
      // Whether players are visible or hidden from each other for the round.
      playersVisible: false,
      // Whether food pellets are visible to players for the round.
      foodPelletsVisible: true,
      // This text will be displayed to players at the start of the round.
      orientingInstructions: "On this round, you will not see the positions of other players, but you will see all food as it falls on the ground.",
      // A list of food pools for the round.
      foodPools: [
        {
          // The rate at which to drop food into the pool.
          foodDropRate: .3,
          // Specify if the foodDropRate is per-player (increases relative to the number of players).
          foodDropRatePerPlayer: false,
          // Food expiry in milliseconds.
          foodExpiryRate: 60000,
          // Coordinates of the food pool.
          xMin: 0,
          xMax: 1000,
          yMin: 0,
          yMax: 1000
        }
      ]
    }
  ]
};
