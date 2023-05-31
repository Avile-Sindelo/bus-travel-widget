var checkedRadio = document.querySelector('input[name="peak"]:checked');

let bus = BusTravel();
bus.calculateSingleTrips(80, 'Dunoon', 'off-peak');
bus.singleTripPrice('Mitchells Plain', 'on-peak');
bus.returnTrips(130, 'Mitchells Plain', 'off-peak');

console.log('Return trip from Dunoon off-peak:', bus.getNumberOfReturnTrips());

console.log(bus.getPricePerSingleTrip());

console.log(bus.getNumberOfSingleTrips());