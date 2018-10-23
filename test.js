describe('Кофеварка', function () {
    it('ф-я подсчёта времени варки', function() {
        assert.equal(CoffeeMachine(), getBoilTime())
    })
})