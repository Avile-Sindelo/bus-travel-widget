describe('Bus Travel Widget tests', function(){
    it('should test if the returns a zero if no location was selected', function(){
        let bus = BusTravel();
        bus.singleTripPrice('', 'on-peak');
        assert.equal(0 , bus.getPricePerSingleTrip());
    });

    it('should test if the returns a zero when no peak-time was selected', function(){
        let bus = BusTravel();
        bus.singleTripPrice('Dunoon', '');
        assert.equal(0 , bus.getPricePerSingleTrip());
    });

    it('should test the cost for a single trip from Khayelitsha during both the off-peak and on-peak hours', function(){
        let bus = BusTravel();
        bus.singleTripPrice('Khayelitsha', 'off-peak');
        assert.equal(40, bus.getPricePerSingleTrip())
        bus.singleTripPrice('Khayelitsha', 'on-peak');
        assert.equal(50 , bus.getPricePerSingleTrip());
    });
    
    it('should test the cost for a single trip from Dunoon during both the off-peak and on-peak hours', function(){
        let bus = BusTravel();
        bus.singleTripPrice('Dunoon', 'off-peak');
        assert.equal(25, bus.getPricePerSingleTrip())
        bus.singleTripPrice('Dunoon', 'on-peak');
        assert.equal(37.5 , bus.getPricePerSingleTrip());
    });

    it('should test the cost for a single trip from Mitchells Plain during both the off-peak and on-peak hours', function(){
        let bus = BusTravel();
        bus.singleTripPrice('Mitchells Plain', 'off-peak');
        assert.equal(30, bus.getPricePerSingleTrip())
        bus.singleTripPrice('Mitchells Plain', 'on-peak');
        assert.equal(37.5 , bus.getPricePerSingleTrip());
    });

    it('should test the cost for a return trip from Khayelitsha during both the off-peak and on-peak hours', function(){
        let bus = BusTravel();
        bus.returnTripPrice('Khayelitsha', 'off-peak');
        assert.equal(80, bus.getPricePerReturnTrip())
        bus.returnTripPrice('Khayelitsha', 'on-peak');
        assert.equal(100 , bus.getPricePerReturnTrip());
    });

    it('should test the cost for a return trip from Dunoon during both the off-peak and on-peak hours', function(){
        let bus = BusTravel();
        bus.returnTripPrice('Dunoon', 'off-peak');
        assert.equal(50, bus.getPricePerReturnTrip())
        bus.returnTripPrice('Dunoon', 'on-peak');
        assert.equal(62.5 , bus.getPricePerReturnTrip());
    });

    it('should test the cost for a return trip from Mitchells Plain during both the off-peak and on-peak hours', function(){
        let bus = BusTravel();
        bus.returnTripPrice('Mitchells Plain', 'off-peak');
        assert.equal(60, bus.getPricePerReturnTrip())
        bus.returnTripPrice('Mitchells Plain', 'on-peak');
        assert.equal(75 , bus.getPricePerReturnTrip());
    });

    it('should test how many single trips can we get from Khayelitsha from 150 points', function(){
        let bus = BusTravel();
        bus.calculateSingleTrips(150, 'Khayelitsha', 'off-peak' );
        assert.equal(3.75, bus.getNumberOfSingleTrips())
        bus.calculateSingleTrips(150, 'Khayelitsha', 'on-peak');
        assert.equal(3 , bus.getNumberOfSingleTrips());
    });

    it('should test how many single trips can we get from Dunoon from 150 points', function(){
        let bus = BusTravel();
        bus.calculateSingleTrips(150, 'Dunoon', 'off-peak' );
        assert.equal(6, bus.getNumberOfSingleTrips())
        bus.calculateSingleTrips(150, 'Dunoon', 'on-peak');
        assert.equal(4.8, bus.getNumberOfSingleTrips());
    });

    it('should test how many single trips can we get from Mitchells Plain from 150 points', function(){
        let bus = BusTravel();
        bus.calculateSingleTrips(150, 'Mitchells Plain', 'off-peak' );
        assert.equal(5, bus.getNumberOfSingleTrips())
        bus.calculateSingleTrips(150, 'Mitchells Plain', 'on-peak');
        assert.equal(4 , bus.getNumberOfSingleTrips());
    });

    it('should test how many double trips can we get from Khayelitsha from 200 points', function(){
        let bus = BusTravel();
        bus.returnTrips(200, 'Khayelitsha', 'off-peak' );
        assert.equal(2.5, bus.getNumberOfReturnTrips())
        bus.returnTrips(200, 'Khayelitsha', 'on-peak');
        assert.equal(2 , bus.getNumberOfReturnTrips());
    });

});