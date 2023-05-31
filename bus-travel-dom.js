/*** ********** PSUEDOCODE ***************
 * Get reference to the point input
 * Get reference to the language input
 * Get reference to the ckecked radio button
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

var checkedRadio = document.querySelector('input[name="peak-time"]:checked');
