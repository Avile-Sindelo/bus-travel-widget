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

    function singleTripPrice(location, peak){
        state.startLocation = location;
        state.peak = peak;
        //Khayelitsha
        if(state.startLocation == 'Khayelitsha' && state.peak == 'off-peak'){
            state.pricePerSingleTrip = 40;
        } else if(state.startLocation == 'Khayelitsha' && state.peak == 'on-peak') {
            state.pricePerSingleTrip = 40 + (40*0.25);
        }

        //Dunoon
        if(state.startLocation == 'Dunoon' && state.peak == 'off-peak'){
            state.pricePerSingleTrip = 25;
        } else if(state.startLocation == 'Dunoon' && state.peak == 'on-peak') {
            state.pricePerSingleTrip = 25 + (50*0.25);
        }

        //Mitchells Plain
        if(state.startLocation == 'Mitchells Plain' && state.peak == 'off-peak'){
            state.pricePerSingleTrip = 30;
        } else if(state.startLocation == 'Mitchells Plain' && state.peak == 'on-peak') {
            state.pricePerSingleTrip = 30 + (30*0.25);
        }

    }

    function returnTrips(points, location, peakTime){
        state.points = points;
        state.startLocation = location;
        state.peak = peakTime;

        if(state.startLocation == 'Khayelitsha' && state.points >= 80){
            //off-peak
            if(state.peak == 'off-peak'){
                state.numberOfReturnTrips = state.points/(2*40);
            } else {
                //during peak
                var peakCost = 40 + (40*0.25);
                state.numberOfReturnTrips = state.points/(2*peakCost);
            }
        } else if(state.startLocation == 'Dunoon' && state.points >= 50){
            //off-peak
            if(state.peak == 'off-peak'){
                state.numberOfReturnTrips = state.points/(2*25);
            } else {
                //during peak
                var peakCost = 25 + (25*0.25);
                state.numberOfReturnTrips = state.points/(2*peakCost);
            }
        } else if(state.startLocation == 'Mitchells Plain' && state.points >= 60){
                //off-peak
            if(state.peak == 'off-peak'){
                state.numberOfReturnTrips = state.points/(2*30);
            } else {
                //during peak
                var peakCost = 30 + (30*0.25);
                state.numberOfReturnTrips = state.points/(2*peakCost);
            }
        }
    }

    function returnTripPrice(location, peak){
        state.startLocation = location;
        state.peak = peak;
        //Khayelitsha
        if(state.startLocation == 'Khayelitsha' && state.peak == 'off-peak'){
            state.pricePerReturnTrip = 80;
        } else if(state.startLocation == 'Khayelitsha' && state.peak == 'on-peak') {
            state.pricePerReturnTrip = 80 + (80*0.25);
        }

        //Dunoon
        if(state.startLocation == 'Dunoon' && state.peak == 'off-peak'){
            state.pricePerReturnTrip = 50;
        } else if(state.startLocation == 'Dunoon' && state.peak == 'on-peak') {
            state.pricePerReturnTrip = 50 + (50*0.25);
        }

        //Mitchells Plain
        if(state.startLocation == 'Mitchells Plain' && state.peak == 'off-peak'){
            state.pricePerReturnTrip = 60;
        } else if(state.startLocation == 'Mitchells Plain' && state.peak == 'on-peak') {
            state.pricePerReturnTrip = 60 + (60*0.25);
        }

    }

   

    //Getters
    function getNumberOfSingleTrips(){
        return state.numberOfSingleTrips;
    }
    
    function getPricePerSingleTrip(){
        return state.pricePerSingleTrip;
    }

    function getNumberOfReturnTrips(){
        return state.numberOfReturnTrips;
    }

    return {
        calculateSingleTrips,
        getNumberOfSingleTrips,
        getPricePerSingleTrip,
        singleTripPrice,
        returnTrips,
        getNumberOfReturnTrips,
        returnTripPrice
    }
}