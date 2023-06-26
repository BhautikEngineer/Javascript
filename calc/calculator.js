// Function to perform the calculation
function calculate() {
    var display = document.getElementById('display');
    var expression = display.value;
    var result;
  
    try {
      result = eval(expression);
      if (!isFinite(result)) {
        result = 'Error';
      }
    } catch (error) {
      result = 'Error';
    }
  
    display.value = result;
  }
  
  // Function to handle button click event
  function buttonClick(event) {
    var display = document.getElementById('display');
    var value = event.target.textContent;
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Add event listeners to buttons
  var buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
    button.addEventListener('click', buttonClick);
  });
  
  document.getElementById('decimal').addEventListener('click', function(event) {
    var display = document.getElementById('display');
    if (display.value.indexOf('.') === -1) {
      display.value += event.target.textContent;
    }
  });
  
  document.getElementById('clear').addEventListener('click', clearDisplay);
  document.getElementById('calculate').addEventListener('click', calculate);
  