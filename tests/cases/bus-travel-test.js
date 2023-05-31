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

    

    
});