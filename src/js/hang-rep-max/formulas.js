const formulas = {
  Epley: {
    solveForMax: {
      func: function(time, weight) {
        return weight * (1+ ((time/2)/30))
      }, str: '$$m=w\\left(1+\\frac{t\\div2}{30}\\right)$$'
    },
    solveForTime: {
      func: function(max, weight) {
        return (30 * ((max/weight) - 1))*2
      }, str: '$$t= 2\\left(30\\left(\\frac{m}{w} - 1\\right)\\right)$$'
    },
    solveForWeight: {
      func: function(max, time) {
        return max / (1 + ((time/2)/30))
      }, str: '$$w=\\frac{m}{1+\\frac{t\\div2}{30}}$$'
    },
  }, Brzycki: {
    solveForMax: {
      func: function(time, weight) {
        return weight * (36 / (37-(time/2)))
      }, str: '$$m=w\\left(\\frac{36}{37-\\frac{t}{2}}\\right)$$'
    },
    solveForTime: {
      func: function(max, weight) {
        return (37 - ((36*weight) / max))*2
      }, str: '$$t= 2\\left(37-\\frac{36w}{m}\\right)$$'
    },
    solveForWeight: {
      func: function(max, time) {
        return max * ((37-(time/2)) / 36)
      }, str: '$$w=m\\left(\\frac{37-\\frac{t}{2}}{36}\\right)$$'
    },
  }, McGlothin: {
    solveForMax: {
      func: function(time, weight) {
        return (100*weight) / (101.3 - (2.67123*(time/2)))
      }, str: '$$m=\\frac{100w}{101.3-2.67123\\frac{t}{2}}$$'
    },
    solveForTime: {
      func: function(max, weight) {
        // return (((101.3*max) - (100*weight)) / (2.67123*max))*2
        return ((101.3 - ((100*weight) / max)) / 2.67123)*2
      }, str: '$$t= 2\\left(\\frac{101.3-\\frac{100w}{m}}{2.67123}\\right)$$'
    },
    solveForWeight: {
      func: function(max, time) {
        return (max * (101.3 - (2.67123*(time/2))))/100
      }, str: '$$w=m\\left(\\frac{101.3-2.67123\\frac{t}{2}}{100}\\right)$$'
    },
  }, Lombardi: {
    solveForMax: {
      func: function(time, weight) {
        return weight * Math.pow((time/2), 0.10)
      }, str: '$$m=w\\left(\\frac{t}{2}\\right)^{0.10}$$'
    },
    solveForTime: {
      func: function(max, weight) {
        return (Math.pow(max/weight, 1/0.10))*2
      }, str: '$$t= 2\\left(\\sqrt[0.10]{\\frac{m}{w}}\\right)$$'
    },
    solveForWeight: {
      func: function(max, time) {
        return max / Math.pow((time/2), 0.10)
      }, str: '$$w=\\frac{m}{\\left(\\frac{t}{2}\\right)^{0.10}}$$'
    },
  }, Mayhew: {
    solveForMax: {
      func: function(time, weight) {
        return (100*weight) / (52.2 + (41.9*Math.exp(-0.055*(time/2))))
      }, str: '$$m=\\frac{100w}{52.2+41.9e^{-0.055\\frac{t}{2}}}$$'
    },
    solveForTime: {
      func: function(max, weight) {
        // return (Math.log(((100*weight)-(52.2*max)) / (41.9*max)) / -0.055)*2
        return (Math.log((((100*weight)/max) - 52.2) / 41.9) / -0.055)*2
      }, str: '$$t= 2\\left(\\frac{\\ln\\left(\\frac{\\frac{100w}{m}-52.2}{41.9}\\right)}{-0.055}\\right)$$'
    },
    solveForWeight: {
      func: function(max, time) {
        return (max * (52.2 + (41.9*Math.exp(-0.055*(time/2))))) / 100
      }, str: '$$w=\\frac{m\\left(52.2+41.9e^{-0.055\\frac{t}{2}}\\right)}{100}$$'
    },
  }, "O'Conner": {
    solveForMax: {
      func: function(time, weight) {
        return weight * (1+((time/2)/40))
      }, str: '$$m=w\\left(1+\\frac{t\\div2}{40}\\right)$$'
    },
    solveForTime: {
      func: function(max, weight) {
        return (40 * ((max/weight) - 1))*2
      }, str: '$$t= 2\\left(40\\left(\\frac{m}{w}-1\\right)\\right)$$'
    },
    solveForWeight: {
      func: function(max, time) {
        // return (40*max) / (40+(time/2))
        return max / (1+((time/2)/40))
      }, str: '$$w=\\frac{m}{1+\\frac{t\\div2}{40}}$$'
    },
  }, Wathen: {
    solveForMax: {
      func: function(time, weight) {
        return (100*weight) / (48.8 + (53.8*Math.exp(-0.075*(time/2))))
      }, str: '$$m=\\frac{100w}{48.8+53.8e^{-0.075\\frac{t}{2}}}$$'
    },
    solveForTime: {
      func: function(max, weight) {
        // return (Math.log(((100*weight) - (48.8*max)) / (53.8*max)) / -0.075)*2
        return (Math.log((((100*weight)/max) - 48.8) / 53.8) / -0.075)*2
      }, str: '$$t= 2\\left(\\frac{\\ln\\left(\\frac{\\frac{100w}{m}-48.8}{53.8}\\right)}{-0.075}\\right)$$'
    },
    solveForWeight: {
      func: function(max, time) {
        return (max * (48.8 + (53.8 * Math.exp(-0.075*(time/2))))) / 100
      }, str: '$$w=\\frac{m\\left(48.8+53.8e^{-0.075\\frac{t}{2}}\\right)}{100}$$'
    },
  }
}
