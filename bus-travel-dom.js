/*** ********** PSUEDOCODE ***************
 * Get reference to the points input
 * Get reference to the location input
 * Get reference to the checked radio button
 * Get reference to the checkbox
 * 
 * Get reference to the output fields
 * 
 * 
 * Check if there is a state already store in localStorage
 *  if there is, 
 *      grab that value and make it the current state
 *  else, 
 *      create a clean state variable and store it in localstorage
 * 
 * Create an instance of the factory function, passing in the current state that was in local storage as a param
 *  
 * Event handler for the calculate button
 *      call error handling function of the object
 *      update the local storage with the new values
 *      display values on the widget, from the local storage
 * 
 * ********** END OF PSEUDO *********************
 * 
 */


const points = document.querySelector('#bus-points');
const startLocation = document.querySelector('#location');
var checkedRadio = document.querySelector('input[name="peak-time"]:checked');
const checkbox = document.querySelector('#return-trip');
const calculateBtn = document.querySelector('#calculate'); 
const arrayOfLocationOptions = startLocation.options;

//outputs fields
const singlesTripsPossible = document.querySelector('#number-of-single-trips');
const returnTripsPossible = document.querySelector('#number-of-return-trips');
const singleTripCost = document.querySelector('#price-per-single-trip');
const returnTripCost = document.querySelector('#price-per-return-trip');

calculateBtn.addEventListener('click', function(){
    console.log(checkedRadio);
    console.log(checkbox);
    console.log(startLocation.options);
});