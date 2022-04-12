// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates the volume of a triangular pyramid.
 */
function calculate () {
  // Variables
  // Value is made into Float
  let height = parseFloat(document.getElementById('height').value) // Stores value from user
  let lengthOfBase = parseFloat(document.getElementById('length-base').value) // Stores value from user
  let heightOfBase = parseFloat(document.getElementById('height-base').value) // Stores value from user

  // Process (calculates volume)
  let volume = (1 / 6) * height * lengthOfBase * heightOfBase

  // Outputs Volume
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}