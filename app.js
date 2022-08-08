// https://calculator.swiftutors.com/tangential-velocity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const tangentialVelocityRadio = document.getElementById('tangentialVelocityRadio');
const radiusRadio = document.getElementById('radiusRadio');
const timeRadio = document.getElementById('timeRadio');

let tangentialVelocity;
const PI = Math.PI;
let radius = v1;
let time = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

tangentialVelocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius (m)';
  variable2.textContent = 'Time (s)';
  radius = v1;
  time = v2;
  result.textContent = '';
});

radiusRadio.addEventListener('click', function() {
  variable1.textContent = 'Tangential Velocity (m/s)';
  variable2.textContent = 'Time (s)';
  tangentialVelocity = v1;
  time = v2;
  result.textContent = '';
});

timeRadio.addEventListener('click', function() {
  variable1.textContent = 'Tangential Velocity (m/s)';
  variable2.textContent = 'Radius (m)';
  tangentialVelocity = v1;
  radius = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(tangentialVelocityRadio.checked)
    result.textContent = `Tangential Velocity = ${computeTangentialVelocity().toFixed(2)} m/s`;

  else if(radiusRadio.checked)
    result.textContent = `Radius = ${computeRadius().toFixed(2)} m`;

  else if(timeRadio.checked)
    result.textContent = `Time = ${computeTime().toFixed(2)} s`;
})

// calculation

function computeTangentialVelocity() {
  return (2 * PI * Number(radius.value)) / Number(time.value);
}

function computeRadius() {
  return (Number(tangentialVelocity.value) * Number(time.value)) / (2 * PI);
}

function computeTime() {
  return (2 * PI * Number(radius.value)) / Number(tangentialVelocity.value);
}