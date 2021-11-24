// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...
// Declare DOM variables for buttons
const stopButton = document.querySelector('#stopButton');
const slowButton = document.querySelector('#slowButton');
const goButton = document.querySelector('#goButton');

// Declare DOM variables for lights
const stopLight = document.querySelector('#stopLight');
const slowLight = document.querySelector('#slowLight');
const goLight = document.querySelector('#goLight');

// Create function to turns all lights off
function lightsOff() {
  stopLight.style.backgroundColor = 'black';
  slowLight.style.backgroundColor = 'black';
  goLight.style.backgroundColor = 'black';
}

// Create function to make stopLight red
function redLight() {
  lightsOff();
  stopLight.style.backgroundColor = 'red';
}

// Create function to make slowLight yellow
function yellowLight() {
  lightsOff();
  slowLight.style.backgroundColor = 'yellow';
}

// Create function to make goLight green
function greenLight() {
  lightsOff();
  goLight.style.backgroundColor = 'green';
}

// Event listener for stopButton click to make light red
stopButton.addEventListener('click', redLight);

// Event listener for slowButton click to make light yellow
slowButton.addEventListener('click', yellowLight);

// Event listener for goButton click to make light green
goButton.addEventListener('click', greenLight);