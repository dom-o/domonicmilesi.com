const sensible_output = function() {
  return document.getElementById('sensible').checked && !document.getElementById('raw').checked
}

for(radio of document.getElementsByName('calc_output')) {
  radio.onclick = function(event) {
    max_eval(event)
    reps_eval(event)
    weight_eval(event)
    repsno1rm_eval(event)
    weightno1rm_eval(event)
  }
}

const reps_eval = function(event) {
  const weight = Number.parseFloat(document.getElementById('weight-reps').value)
  const max = Number.parseFloat(document.getElementById('max-reps').value)

  if(Number.isNaN(weight) || Number.isNaN(max)) {
    updateTable('-reps-results', '-')
  } else {
    const sense = sensible_output()
    if(sense && weight == max) { updateTable('-reps-results', 1) }
    else if (sense && weight > max) { updateTable('-reps-results', 0) }
    else {
      inject('solveForReps', '-reps-results', [max, weight], x=>Math.round(x), sense)
    }
  }
}
document.getElementById('solve-for-reps').onkeyup = reps_eval
document.getElementById('solve-for-reps').onchange = reps_eval

const weight_eval = function() {
  const max = Number.parseFloat(document.getElementById('max-weight').value)
  const reps = Number.parseInt(document.getElementById('reps-weight').value, 10)

  if(Number.isNaN(max) || Number.isNaN(reps)) {
    updateTable('-weight-results', '-')
  } else {
    const sense = sensible_output()
    if(sense && reps == 1) { updateTable('-weight-results', max) }
    else {
      inject('solveForWeight', '-weight-results', [max, reps], x=>Math.round(x*10)/10)
    }
  }
}
document.getElementById('solve-for-weight').onkeyup = weight_eval
document.getElementById('solve-for-weight').onchange = weight_eval

const max_eval = function() {
  const reps = Number.parseInt(document.getElementById('reps-max').value, 10)
  const weight = Number.parseFloat(document.getElementById('weight-max').value)

  if(Number.isNaN(reps) || Number.isNaN(weight)) {
    updateTable('-max-results', '-')
  } else {
    const sense = sensible_output()
    if (sense && reps == 1) { updateTable('-max-results', weight) }
    else {
      inject('solveForMax', '-max-results', [reps, weight], x=>Math.round(x*10)/10)
    }
  }
}
document.getElementById('solve-for-max').onkeyup = max_eval
document.getElementById('solve-for-max').onchange = max_eval

const weightno1rm_eval = function() {
  const init_weight = Number.parseFloat(document.getElementById('init-weight-weightno1rm').value)
  const init_reps = Number.parseInt(document.getElementById('init-reps-weightno1rm').value, 10)
  const target_reps = Number.parseInt(document.getElementById('target-reps-weightno1rm').value, 10)

  if(Number.isNaN(init_weight) || Number.isNaN(init_reps) || Number.isNaN(target_reps)) {
    updateTable('-weightno1rm-results', '-')
  } else {
    const sense = sensible_output()
    if(sense && init_reps == target_reps) {
      updateTable('-weightno1rm-results', init_weight)
    } else {
      var avg= 0, length= 0
      for(const el in formulas) {
        var out = (sense && init_reps == 1) ? init_weight : formulas[el].solveForMax(init_reps, init_weight)
        if (sense && out < 0) { out=0 }
        if(!Number.isNaN(out)) {
          out= (sense && target_reps == 1) ? Math.round(out*10)/10 : Math.round(formulas[el].solveForWeight(out, target_reps)*10)/10
          if (sense && out < 0) { out=0 }
          if(!Number.isNaN(out)) {
            avg+= out
            length++
          }
        }
        document.getElementById(el+'-weightno1rm-results').innerText = out
      }
      document.getElementById('Average-weightno1rm-results').innerText = Math.round((avg/length)*10)/10
    }
  }
}
document.getElementById('solve-for-weightno1rm').onkeyup = weightno1rm_eval
document.getElementById('solve-for-weightno1rm').onchange = weightno1rm_eval

const repsno1rm_eval = function() {
  const init_reps = Number.parseInt(document.getElementById('init-reps-repsno1rm').value, 10)
  const init_weight = Number.parseFloat(document.getElementById('init-weight-repsno1rm').value)
  const target_weight = Number.parseFloat(document.getElementById('target-weight-repsno1rm').value)

  if(Number.isNaN(init_reps) || Number.isNaN(init_weight) || Number.isNaN(target_weight)) {
    updateTable('-repsno1rm-results', '-')
  } else {
    const sense = sensible_output()
    if(sense && init_weight == target_weight) {
      updateTable('-repsno1rm-results', init_reps)
    } else {
      var avg= 0, length= 0
      for (const el in formulas) {
        var out= (sense && init_reps == 2) ? init_weight : formulas[el].solveForMax(init_reps, init_weight)
        if (sense && out < 0) { out=0 }
        if(!Number.isNaN(out)) {
          if(sense && target_weight == out) {
            document.getElementById(el+'-repsno1rm-results').innerText = 1
            avg+= 1
            length++
          } else if (sense && target_weight > out) {
            document.getElementById(el+'-repsno1rm-results').innerText = 0
            length++
          } else {
            out= Math.round(formulas[el].solveForReps(out, target_weight))
            if (sense && out < 0) { out=0 }
            if(!Number.isNaN(out)) {
              avg+= out
              length++
            }
            document.getElementById(el+'-repsno1rm-results').innerText = out
          }
        } else {
          document.getElementById(el+'-repsno1rm-results').innerText = out
        }
      }
      document.getElementById('Average-repsno1rm-results').innerText = Math.round(avg/length)
    }
  }
}
document.getElementById('solve-for-repsno1rm').onkeyup = repsno1rm_eval
document.getElementById('solve-for-repsno1rm').onchange = repsno1rm_eval

setTimeout(function() {
  reps_eval()
  weight_eval()
  max_eval()
  weightno1rm_eval()
  repsno1rm_eval()
}, 200)

function updateTable(elSuffix, message) {
  for (const el in formulas) {
    document.getElementById(el+elSuffix).innerText = message
  }
  document.getElementById('Average'+elSuffix).innerText = message
}

function inject(solveFunction, elementSuffix, params, roundFunction, sensible) {
  var avg= 0, length= 0
  for (const el in formulas) {
    const out = roundFunction(formulas[el][solveFunction](...params))
    if (sensible && out<0) { out= 0 }
    if(!Number.isNaN(out)) {
      avg+= out
      length++
    }
    document.getElementById(el+elementSuffix).innerText = out
  }
  document.getElementById('Average'+elementSuffix).innerText = roundFunction(avg/length)
}
