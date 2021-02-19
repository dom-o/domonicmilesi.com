const sensible_checkbox = document.getElementById('sensible')
const raw_checkbox = document.getElementById('raw')
const sensible_output = function() {
  return sensible_checkbox.checked && !raw_checkbox.checked
}

for(radio of document.getElementsByName('calc_output')) {
  radio.onclick = function(event) {
    max_eval(event)
    time_eval(event)
    weight_eval(event)
  }
}

const time_eval = function(event) {
  const weight = Number.parseFloat(document.getElementById('weight-time').value)
  const max = Number.parseFloat(document.getElementById('max-time').value)

  if(Number.isNaN(weight) || Number.isNaN(max)) {
    updateTable('-time-results', '-')
  } else {
    const sense = sensible_output()
    if(sense && weight == max) {
      updateTable('-time-results', 2)
    } else if (sense && weight > max) {
      updateTable('-time-results', 0)
    } else {
      inject('solveForTime', '-time-results', [max, weight], x=>Math.round(x), sense)
    }
  }
}
document.getElementById('solve-for-time').onkeyup = time_eval
document.getElementById('solve-for-time').onchange = time_eval

const weight_eval = function() {
  const max = Number.parseFloat(document.getElementById('max-weight').value)
  const time = Number.parseInt(document.getElementById('time-weight').value, 10)

  if(Number.isNaN(max) || Number.isNaN(time)) {
    updateTable('-weight-results', '-')
  } else {
    const sense = sensible_output()
    if(sense && time == 2) {
      updateTable('-weight-results', max)
    } else {
      inject('solveForWeight', '-weight-results', [max, time], x => Math.round(x*10)/10, sense)
    }
  }
}
document.getElementById('solve-for-weight').onkeyup = weight_eval
document.getElementById('solve-for-weight').onchange = weight_eval

const max_eval = function() {
  const time = Number.parseInt(document.getElementById('time-max').value, 10)
  const weight = Number.parseFloat(document.getElementById('weight-max').value)

  if(Number.isNaN(time) || Number.isNaN(weight)) {
    updateTable('-max-results', '-')
  } else {
    const sense = sensible_output()
    if(sense && time == 2) {
      updateTable('-max-results', weight)
    } else {
      inject('solveForMax', '-max-results', [time, weight], x=>Math.round(x*10)/10, sense)
    }
  }
}
document.getElementById('solve-for-max').onkeyup = max_eval
document.getElementById('solve-for-max').onchange = max_eval

const timeno2rm_eval = function() {
  const init_time = Number.parseInt(document.getElementById('init-time-timeno2rm').value, 10)
  const init_weight = Number.parseFloat(document.getElementById('init-weight-timeno2rm').value)
  const target_weight = Number.parseFloat(document.getElementById('target-weight-timeno2rm').value)

  if(Number.isNaN(init_time) || Number.isNaN(init_weight) || Number.isNaN(target_weight)) {
    updateTable('-timeno2rm-results', '-')
  } else {
    const sense = sensible_output()
    if(sense && init_weight == target_weight) {
      updateTable('-timeno2rm-results', init_time)
    } else {
      var avg = 0, length= 0
      for(const el in formulas) {
        var out= (sense && init_time==2) ? init_weight : formulas[el].solveForMax(init_time, init_weight)
        if(sense && out < 0) { out=0 }
        if(!Number.isNaN(out)) {
          if(sense && target_weight == out) {
            document.getElementById(el+'-timeno2rm-results').innerText = 2
            avg+= 2
            length++
          } else if (sense && target_weight > out) {
            document.getElementById(el+'-timeno2rm-results').innerText = 0
            length++
          } else {
            out= Math.round(formulas[el].solveForTime(out, target_weight))
            if (sense && out < 0) { out=0 }
            if(!Number.isNaN(out)) {
              avg+= out
              length++
            }
            document.getElementById(el+'-timeno2rm-results').innerText = out
          }
        } else {
          document.getElementById(el+'-timeno2rm-results').innerText = out
        }
      }
      document.getElementById('Average-timeno2rm-results').innerText = Math.round(avg/length)
    }
  }
}
document.getElementById('solve-for-timeno2rm').onkeyup = timeno2rm_eval
document.getElementById('solve-for-timeno2rm').onchange = timeno2rm_eval

const weightno2rm_eval = function() {
  const init_time = Number.parseInt(document.getElementById('init-time-weightno2rm').value, 10)
  const init_weight = Number.parseFloat(document.getElementById('init-weight-weightno2rm').value)
  const target_time = Number.parseInt(document.getElementById('target-time-weightno2rm').value, 10)

  if(Number.isNaN(init_time) || Number.isNaN(init_weight) || Number.isNaN(target_time)) {
    updateTable('-weightno2rm-results', '-')
  } else {
    const sense = sensible_output()
    if(sense && init_time == target_time) {
      updateTable('-weightno2rm-results', init_weight)
    } else {
      var avg= 0, length= 0
      for (const el in formulas) {
        var out = (sense && init_time ==2) ? init_weight : formulas[el].solveForMax(init_time, init_weight)
        if (sense && out < 0) { out=0 }
        if(!Number.isNaN(out)) {
          out= (sense && target_time == 2) ? Math.round(out*10)/10 : Math.round(formulas[el].solveForWeight(out, target_time)*10)/10
          if (sense && out< 0) { out=0 }
          if(!Number.isNaN(out)) {
            avg+= out
            length++
          }
        }
        document.getElementById(el+'-weightno2rm-results').innerText = out
      }
      document.getElementById('Average-weightno2rm-results').innerText = Math.round((avg/length)*10)/10
    }
  }
}
document.getElementById('solve-for-weightno2rm').onkeyup = weightno2rm_eval
document.getElementById('solve-for-weightno2rm').onchange = weightno2rm_eval

setTimeout(function() {
  time_eval()
  max_eval()
  weight_eval()
  timeno2rm_eval()
  weightno2rm_eval()
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
