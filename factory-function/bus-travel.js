/** ************* PSUEDOCODE **************
 * 
 * Create a function to be the factory function, call it BusTravel.
 *      Create a state variable 
 *      Create a function that calculates the number of single trips
 *      Create a function that returns the single trips
 *      Create a function that calculates the price per single trip
*       Create a function that returns the price per single trip
        Create a function that calculates the number of return trips
        Create a function that returns the number of return trips
        Create a function that calculates the cost per return trip
        Create a function that returns the cost per return trip

        Return an object literal that contains all the exposed closure functions
 * 
 * 
 * ********* END OF PSUEDO *************
 */

function BusTravel(){
    //state variable
    var state = {
        points: 0,
        startLocation: '',
        numberOfSingleTrips: 0,
        numberOfReturnTrips: 0,
        pricePerSingleTrip: 0,
        pricePerReturnTrip: 0,
        returnTrip: false,
        peak: 'off-peak'
    };

    function calculateSingleTrips(points, location, peakTime){
        state.points = points;
        state.startLocation = location;
        state.peak = peakTime;

        if(state.startLocation == 'Khayelitsha' && state.points >= 40){
            //Going to Khayelitsha during off-peak
            if(state.peak == 'off-peak'){
                state.numberOfSingleTrips = state.points/40;
            } else {
                //Going to Khayelitsha on-peak
                var peakCost = 0;
                peakCost = 40 + 40*0.25;
                state.numberOfSingleTrips = state.points/peakCost;
            }
        } else if(state.startLocation == 'Dunoon' && state.points >= 25){
            //Going to Dunoon during off-peak
            if(state.peak == 'off-peak'){
                state.numberOfSingleTrips = state.points/25;
            } else {
                //Going to Dunoon on-peak
                var peakCost = 0;
                peakCost = 25 + 25*0.25;
                state.numberOfSingleTrips = state.points/peakCost;
            }
        } else if(state.startLocation == 'Mitchells Plain' && state.points >= 30){
            //Going to Mitchell Plain during off-peak
            if(state.peak == 'off-peak'){
                state.numberOfSingleTrips = state.points/30;
            } else {
                //Going to Mitchells Plain on-peak
                var peakCost = 0;
                peakCost = 30 + 30*0.25;
                state.numberOfSingleTrips = state.points/peakCost;
            }
        } 

    }

    function singleTripPrice(location){
        switch(location){
            case 'Khayelitsha':
                state.pricePerSingleTrip = 40;
                break;

            case 'Dunoon':
                state.pricePerSingleTrip = 25;
                break;
            
            case 'Mitchells Plain':
                state.pricePerSingleTrip = 30;
                break;

            default: 
                state.pricePerSingleTrip = 0;
        }
    }

    
   

    //Getters
    function getNumberOfSingleTrips(){
        return state.numberOfSingleTrips;
    }
    
    function getPricePerSingleTrip(){
        return state.pricePerSingleTrip;
    }

    return {
        calculateSingleTrips,
        getNumberOfSingleTrips,
        getPricePerSingleTrip,
        singleTripPrice
    }
}