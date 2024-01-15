function updateTemperature() {
    var temperatureSlider = document.getElementById('temperature');
    var temperatureLabel = document.getElementById('temperature-label');
    temperatureLabel.innerHTML = 'Selected Temperature: ' + temperatureSlider.value + '°C';
}


/*document.addEventListener('DOMContentLoaded', function () {
    const temperatureSlider = document.getElementById('temperature');
    const temperatureDisplay = document.getElementById('temperature-label');
  
   // Initialize the display value
    temperatureDisplay.textContent = temperatureSlider.value;
  
    // Update the display value when the slider value changes
    temperatureSlider.addEventListener('input', function () {
      temperatureDisplay.textContent = temperatureSlider.value;
    });
  });*/