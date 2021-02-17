const formulas = {
  Epley: {
    solveForMax: function(time, weight) {
      return weight * (1+ ((time/2)/30))
    },
    solveForTime: function(max, weight) {
      return (30 * ((max/weight) - 1))*2
    },
    solveForWeight: function(max, time) {
      return max / (1 + ((time/2)/30))
    }
  }, Brzycki: {
    solveForMax: function(time, weight) {
      return weight * (36 / (37-(time/2)))
    },
    solveForTime: function(max, weight) {
      return (37 - ((36*weight) / max))*2
    },
    solveForWeight: function(max, time) {
      return max * ((37-(time/2)) / 36)
    }
  }, McGlothin: {
    solveForMax: function(time, weight) {
      return (100*weight) / (101.3 - (2.67123*(time/2)))
    },
    solveForTime: function(max, weight) {
      // return (((101.3*max) - (100*weight)) / (2.67123*max))*2
      return ((101.3 - ((100*weight) / max)) / 2.67123)*2
    },
    solveForWeight: function(max, time) {
      return (max * (101.3 - (2.67123*(time/2))))/100
    }
  }, Lombardi: {
    solveForMax: function(time, weight) {
      return weight * Math.pow((time/2), 0.10)
    },
    solveForTime: function(max, weight) {
      return (Math.pow(max/weight, 1/0.10))*2
    },
    solveForWeight: function(max, time) {
      return max / Math.pow((time/2), 0.10)
    }
  }, Mayhew: {
    solveForMax: function(time, weight) {
      return (100*weight) / (52.2 + (41.9*Math.exp(-0.055*(time/2))))
    },
    solveForTime: function(max, weight) {
      // return (Math.log(((100*weight)-(52.2*max)) / (41.9*max)) / -0.055)*2
      return (Math.log((((100*weight)/max) - 52.2) / 41.9) / -0.055)*2
    },
    solveForWeight: function(max, time) {
      return (max * (52.2 + (41.9*Math.exp(-0.055*(time/2))))) / 100
    }
  }, "O'Conner": {
    solveForMax: function(time, weight) {
      return weight * (1+((time/2)/40))
    },
    solveForTime: function(max, weight) {
      return (40 * ((max/weight) - 1))*2
    },
    solveForWeight: function(max, time) {
      // return (40*max) / (40+(time/2))
      return max / (1+((time/2)/40))
    }
  }, Wathen: {
    solveForMax: function(time, weight) {
      return (100*weight) / (48.8 + (53.8*Math.exp(-0.075*(time/2))))
    },
    solveForTime: function(max, weight) {
      // return (Math.log(((100*weight) - (48.8*max)) / (53.8*max)) / -0.075)*2
      return (Math.log((((100*weight)/max) - 48.8) / 53.8) / -0.075)*2
    },
    solveForWeight: function(max, time) {
      return (max * (48.8 + (53.8 * Math.exp(-0.075*(time/2))))) / 100
    }
  }
}
