const formulas = {
  Epley: {
    solveForMax: {
      func: function(reps, weight) {
        return weight * (1+ (reps/30))
      }, str: '$$m=w(1+\\frac{r}{30})$$'
    },
    solveForReps: {
      func: function(max, weight) {
        return 30 * ((max/weight) - 1)
      }, str: '$$r=30(\\frac{m}{w} - 1)$$'
    },
    solveForWeight: {
      func: function(max, reps) {
        return max / (1 + (reps/30))
      }, str: '$$w=\\frac{m}{1+\\frac{r}{30}}$$'
    },
  }, Brzycki: {
    solveForMax: {
      func: function(reps, weight) {
        return weight * (36 / (37-reps))
      }, str: '$$m=w(\\frac{36}{37-r})$$'
    },
    solveForReps: {
      func: function(max, weight) {
        return 37 - ((36*weight) / max)
      }, str: '$$r=37-\\frac{36w}{m}$$'
    },
    solveForWeight: {
      func: function(max, reps) {
        return max * ((37-reps) / 36)
      }, str: '$$w=m(\\frac{37-r}{36})$$'
    },
  }, McGlothin: {
    solveForMax: {
      func: function(reps, weight) {
        return (100*weight) / (101.3 - (2.67123*reps))
      }, str: '$$m=\\frac{100w}{101.3-2.67123r}$$'
    },
    solveForReps: {
      func: function(max, weight) {
        // return ((101.3*max) - (100*weight)) / (2.67123*max)
        return (101.3 - ((100*weight) / max)) / 2.67123
      }, str: '$$r=\\frac{101.3-\\frac{100w}{m}}{2.67123}$$'
    },
    solveForWeight: {
      func: function(max, reps) {
        return (max * (101.3 - (2.67123*reps)))/100
      }, str: '$$w=m(\\frac{101.3-2.67123r}{100})$$'
    },
  }, Lombardi: {
    solveForMax: {
      func: function(reps, weight) {
        return weight * Math.pow(reps, 0.10)
      }, str: '$$m=wr^{0.10}$$'
    },
    solveForReps: {
      func: function(max, weight) {
        return Math.pow(max/weight, 1/0.10)
      }, str: '$$r=\\sqrt[0.10]{\\frac{m}{w}}$$'
    },
    solveForWeight: {
      func: function(max, reps) {
        return max / Math.pow(reps, 0.10)
      }, str: '$$w=\\frac{m}{r^{0.10}}$$'
    },
  }, Mayhew: {
    solveForMax: {
      func: function(reps, weight) {
        return (100*weight) / (52.2 + (41.9*Math.exp(-0.055*reps)))
      }, str: '$$m=\\frac{100w}{52.2+41.9e^{-0.055r}}$$'
    },
    solveForReps: {
      func: function(max, weight) {
        // return Math.log(((100*weight)-(52.2*max)) / (41.9*max)) / -0.055
        return Math.log((((100*weight)/max) - 52.2) / 41.9) / -0.055
      }, str: '$$r={\\ln({\\frac{\\frac{100w}{m}-52.2}{41.9}}})\\div{-0.055}$$'
    },
    solveForWeight: {
      func: function(max, reps) {
        return (max * (52.2 + (41.9*Math.exp(-0.055*reps)))) / 100
      }, str: '$$w=\\frac{m(52.2+41.9e^{-0.055r})}{100}$$'
    },
  }, "O'Conner": {
    solveForMax: {
      func: function(reps, weight) {
        return weight * (1+(reps/40))
      }, str: '$$m=w(1+\\frac{r}{40})$$'
    },
    solveForReps: {
      func: function(max, weight) {
        return 40 * ((max/weight) - 1)
      }, str: '$$r=40(\\frac{m}{w}-1)$$'
    },
    solveForWeight: {
      func: function(max, reps) {
        // return (40*max) / (40+reps)
        return max / (1+(reps/40))
      }, str: '$$w=\\frac{m}{1+\\frac{r}{40}}$$'
    },
  }, Wathen: {
    solveForMax: {
      func: function(reps, weight) {
        return (100*weight) / (48.8 + (53.8*Math.exp(-0.075*reps)))
      }, str: '$$m=\\frac{100w}{48.8+53.8e^{-0.075r}}$$'
    },
    solveForReps: {
      func: function(max, weight) {
        // return Math.log(((100*weight) - (48.8*max)) / (53.8*max)) / -0.075
        return Math.log((((100*weight)/max) - 48.8) / 53.8) / -0.075
      }, str: '$$r={\\ln({\\frac{\\frac{100w}{m}-48.8}{53.8}})}\\div{-0.075}$$'
    },
    solveForWeight: {
      func: function(max, reps) {
        return (max * (48.8 + (53.8 * Math.exp(-0.075*reps)))) / 100
      }, str: '$$w=\\frac{m(48.8+53.8e^{-0.075r})}{100}$$'
    },
  }
}
