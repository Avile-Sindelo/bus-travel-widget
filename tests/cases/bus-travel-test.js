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
    
    it('should test if the cost for a single trip from Dunoon during off-peak hours is R25', function(){
        let bus = BusTravel();
        bus.singleTripPrice('Dunoon', 'off-peak');
        assert.equal(25 , bus.getPricePerSingleTrip());
    });

    it('should test if the cost for a single trip from Dunoon during on-peak hours is R37.5', function(){
        let bus = BusTravel();
        bus.singleTripPrice('Dunoon', 'on-peak');
        assert.equal(37.5 , bus.getPricePerSingleTrip());
    });

    it('should test if the cost for a single trip from Khayelitsha during off-peak hours is R40', function(){
        let bus = BusTravel();
        bus.singleTripPrice('Khayelitsha', 'off-peak');
        assert.equal(40 , bus.getPricePerSingleTrip());
    });
});