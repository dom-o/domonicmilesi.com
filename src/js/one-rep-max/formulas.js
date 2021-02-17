const formulas = {
  Epley: {
    solveForMax: function(reps, weight) {
      return weight * (1+ (reps/30))
    },
    solveForReps: function(max, weight) {
      return 30 * ((max/weight) - 1)
    },
    solveForWeight: function(max, reps) {
      return max / (1 + (reps/30))
    }
  }, Brzycki: {
    solveForMax: function(reps, weight) {
      return weight * (36 / (37-reps))
    },
    solveForReps: function(max, weight) {
      return 37 - ((36*weight) / max)
    },
    solveForWeight: function(max, reps) {
      return max * ((37-reps) / 36)
    }
  }, McGlothin: {
    solveForMax: function(reps, weight) {
      return (100*weight) / (101.3 - (2.67123*reps))
    },
    solveForReps: function(max, weight) {
      // return ((101.3*max) - (100*weight)) / (2.67123*max)
      return (101.3 - ((100*weight) / max)) / 2.67123
    },
    solveForWeight: function(max, reps) {
      return (max * (101.3 - (2.67123*reps)))/100
    }
  }, Lombardi: {
    solveForMax: function(reps, weight) {
      return weight * Math.pow(reps, 0.10)
    },
    solveForReps: function(max, weight) {
      return Math.pow(max/weight, 1/0.10)
    },
    solveForWeight: function(max, reps) {
      return max / Math.pow(reps, 0.10)
    }
  }, Mayhew: {
    solveForMax: function(reps, weight) {
      return (100*weight) / (52.2 + (41.9*Math.exp(-0.055*reps)))
    },
    solveForReps: function(max, weight) {
      // return Math.log(((100*weight)-(52.2*max)) / (41.9*max)) / -0.055
      return Math.log((((100*weight)/max) - 52.2) / 41.9) / -0.055
    },
    solveForWeight: function(max, reps) {
      return (max * (52.2 + (41.9*Math.exp(-0.055*reps)))) / 100
    }
  }, "O'Conner": {
    solveForMax: function(reps, weight) {
      return weight * (1+(reps/40))
    },
    solveForReps: function(max, weight) {
      return 40 * ((max/weight) - 1)
    },
    solveForWeight: function(max, reps) {
      // return (40*max) / (40+reps)
      return max / (1+(reps/40))
    }
  }, Wathen: {
    solveForMax: function(reps, weight) {
      return (100*weight) / (48.8 + (53.8*Math.exp(-0.075*reps)))
    },
    solveForReps: function(max, weight) {
      // return Math.log(((100*weight) - (48.8*max)) / (53.8*max)) / -0.075
      return Math.log((((100*weight)/max) - 48.8) / 53.8) / -0.075
    },
    solveForWeight: function(max, reps) {
      return (max * (48.8 + (53.8 * Math.exp(-0.075*reps)))) / 100
    }
  }
}
