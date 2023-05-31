describe('Bus Travel Widget tests', function(){
    it('should test if the cost for a single trip from Dunoon during off-peak hours is R25', function(){
        let bus = BusTravel();
        bus.singleTripPrice('Dunoon', 'off-peak');
        assert.equal(25 , bus.getPricePerSingleTrip());
    });
});