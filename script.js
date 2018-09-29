function CoffeeMachine(power) {
    // удельная теплоемкость воды
    const waterHeatCapacity = 4200
    // температура воды до которой греем
    const maxTemp = document.getElementById('temp').value
    // колличество воды в кофеварке
    let waterAmount = document.getElementById('water').value

    console.log(maxTemp);

    // this.fill = function (newAmount) {
    //   if(newAmount >= 50) {
    //     waterAmount = newAmount
    //   } else {
    //     console.error('Слишком мало воды!')
    //   }
    // }

    const getBoilTime = function () {
      return (waterAmount * waterHeatCapacity * maxTemp) / power
    }

    this.launch = function () {
      const time = getBoilTime()
      console.info(`Время ожидания: ${time}`)
      setTimeout(function () {
        console.log('Ваш кофе готов!')
      }, time)
    }
  }

//   var vitek = new CoffeeMachine(3000)
//   vitek.fill(50)
//   vitek.launch()

const start = document.getElementById('start');
start.addEventListener('click', startCook);

function startCook() {
    var vitek = new CoffeeMachine(3000);
    vitek.launch();
}