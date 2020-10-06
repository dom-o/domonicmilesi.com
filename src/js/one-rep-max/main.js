const reps_form = document.getElementById('solve-for-reps')
const weight_form = document.getElementById('solve-for-weight')
const max_form = document.getElementById('solve-for-max')
const sensible_output = function() {
  return document.getElementById('sensible').checked && !document.getElementById('raw').checked
}
var reps, max, weight, avg, length, head_html, body_html

let results_tables = [document.getElementById('max-results'), document.getElementById('reps-results'), document.getElementById('weight-results')]
for (const table of results_tables) {
  head_html = '<thead><tr><th>Average</th>'
  body_html = '<tbody><tr><td id="Average-'+ table.id +'">-</td>'
  for (key of Object.keys(formulas)) {
    head_html += '<th>' + key + '</th>'
    body_html += '<td id="' + key+'-'+table.id + '">-</td>'
  }
  head_html += '</tr></thead>'
  body_html += '</tr></tbody>'
  table.innerHTML = head_html + body_html
}

for(radio of document.getElementsByName('calc_output')) {
  radio.onclick = function(event) {
    max_eval(event)
    reps_eval(event)
    weight_eval(event)
  }
}

let equations_table = document.getElementById('equations')
head_html = '<thead><tr><th></th><th>Solve for 1RM</th><th>Solve for reps</th><th>Solve for >1 RM</th></tr></thead>'
body_html = '<tbody>'
for (const [key,value] of Object.entries(formulas)) {
  body_html += '<tr><th scope="row">' + key + '</th>' + '<td>' + value.solveForMax.str + '</td>' + '<td>' + value.solveForReps.str + '</td>' + '<td>' + value.solveForWeight.str + '</td></tr>'
}
body_html += '</tbody>'
equations_table.innerHTML = head_html + body_html

const reps_eval = function(event) {
  weight = Number.parseFloat(document.getElementById('weight-reps').value)
  max = Number.parseFloat(document.getElementById('max-reps').value)

  inject(formulas, 'solveForReps', '-reps-results', max, weight, x=>Math.round(x),
    sensible_output() ?
      (max, weight, reps)=>{
        if (weight === max) { return 1 }
        else if (weight > max) { return 0 }
        else if (reps < 0) { return 0}
        else { return reps }
      } :
      (max, weight, reps) => reps
  )
}
reps_form.onkeyup = reps_eval
reps_form.onchange = reps_eval

const weight_eval = function() {
  max = Number.parseFloat(document.getElementById('max-weight').value)
  reps = Number.parseInt(document.getElementById('reps-weight').value, 10)

  inject(formulas, 'solveForWeight', '-weight-results', max, reps, x=>Math.round(x*10)/10,
    sensible_output() ?
      (max, reps, weight) => {
        if(reps === 1) { return max }
        else { return weight }
      } :
      (max, reps, weight) => { return weight }
  )
}
weight_form.onkeyup = weight_eval
weight_form.onchange = weight_eval

const max_eval = function() {
  reps = Number.parseInt(document.getElementById('reps-max').value, 10)
  weight = Number.parseFloat(document.getElementById('weight-max').value)

  inject(formulas, 'solveForMax', '-max-results', reps, weight, x=>Math.round(x*10)/10,
    sensible_output() ?
      (reps, weight, max) => {
        if(reps === 1) { return weight }
        else { return max }
      } :
      (reps, weight, max) => { return max }
  )
}
max_form.onkeyup = max_eval
max_form.onchange = max_eval

function inject(formulas, solveFunction, elementSuffix, in1, in2, roundFunction, regulateFunction) {
  let avg = 0, length=0, out

  if(Number.isNaN(in1) || Number.isNaN(in2)) {
    for (const [key,value] of Object.entries(formulas)) {
      document.getElementById(key+elementSuffix).innerText = '-'
    }
    document.getElementById('Average'+elementSuffix).innerText = '-'
  } else {
    for (const [key,value] of Object.entries(formulas)) {
      out = value[solveFunction].func(in1, in2)
      out = regulateFunction(in1, in2, out)
      if(!Number.isNaN(out)) {
        avg += out
        length ++
      }
      document.getElementById(key+elementSuffix).innerText = roundFunction(out)
    }
    document.getElementById('Average'+elementSuffix).innerText = roundFunction(avg/length)
  }
}
