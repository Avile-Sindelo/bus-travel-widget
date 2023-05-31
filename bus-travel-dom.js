var checkedRadio = document.querySelector('input[name="peak"]:checked');

let bus = BusTravel();
bus.calculateSingleTrips(80, 'Dunoon', 'off-peak');
bus.singleTripPrice('Dunoon');

console.log(bus.getPricePerSingleTrip());

console.log(bus.getNumberOfSingleTrips());