const sensible_output = function() {
  return document.getElementById('sensible').checked && !document.getElementById('raw').checked
}

for(radio of document.getElementsByName('calc_output')) {
  radio.onclick = function(event) {
    max_eval(event)
    reps_eval(event)
    weight_eval(event)
  }
}

const reps_eval = function(event) {
  weight = Number.parseFloat(document.getElementById('weight-reps').value)
  max = Number.parseFloat(document.getElementById('max-reps').value)

  if(Number.isNaN(weight) || Number.isNaN(max)) {
    updateTable('-reps-results', '-')
  } else {
    var sense = sensible_output()
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
  max = Number.parseFloat(document.getElementById('max-weight').value)
  reps = Number.parseInt(document.getElementById('reps-weight').value, 10)

  if(Number.isNaN(max) || Number.isNaN(reps)) {
    updateTable('-weight-results', '-')
  } else {
    var sense = sensible_output()
    if(sense && reps == 1) { updateTable('-weight-results', max) }
    else {
      inject('solveForWeight', '-weight-results', [max, reps], x=>Math.round(x*10)/10)
    }
  }
}
document.getElementById('solve-for-weight').onkeyup = weight_eval
document.getElementById('solve-for-weight').onchange = weight_eval

const max_eval = function() {
  reps = Number.parseInt(document.getElementById('reps-max').value, 10)
  weight = Number.parseFloat(document.getElementById('weight-max').value)

  if(Number.isNaN(reps) || Number.isNaN(weight)) {
    updateTable('-max-results', '-')
  } else {
    var sense = sensible_output()
    if (sense && reps == 1) { updateTable('-max-results', weight) }
    else {
      inject('solveForMax', '-max-results', [reps, weight], x=>Math.round(x*10)/10)
    }
  }
}
document.getElementById('solve-for-max').onkeyup = max_eval
document.getElementById('solve-for-max').onchange = max_eval

setTimeout(function() {
  reps_eval()
  weight_eval()
  max_eval()
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
    var out = roundFunction(formulas[el][solveFunction](...params))
    if (sensible && out<0) { out= 0 }
    if(!Number.isNaN(out)) {
      avg+= out
      length++
    }
    document.getElementById(el+elementSuffix).innerText = out
  }
  document.getElementById('Average'+elementSuffix).innerText = roundFunction(avg/length)
}
