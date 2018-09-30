function CoffeeMachine(power) {
    // удельная теплоемкость воды
    const waterHeatCapacity = 4200;
    // температура воды до которой греем
    const maxTemp = document.getElementById('temp').value;
    // колличество воды в кофеварке
    const waterAmount = document.getElementById('water').value;
    //кол-во кофейных зёрен
    const beansCount = document.getElementById('beans').value;

    //информационное табло кофеварки
    let infoPanel = document.getElementById('info');

    //ф-я расчёта времени варки
    const getBoilTime = function () {
      return (waterAmount * waterHeatCapacity * maxTemp * beansCount) / power;
    }
    //ф-я варки
    this.launch = function () {
      const time = getBoilTime()
      if (getBoilTime() <= 0) {
        infoPanel.innerText = 'Кофеварка не может быть пустой!';
      } 
      else if (maxTemp < 70) {
        infoPanel.innerText = 'Недостаточная температура!';
      } else {
        infoPanel.innerText = `Время ожидания: ${Math.round(time/1000)} сек.`;

      var cookTimer = setTimeout(function () {
        infoPanel.innerText = 'Ваш кофе готов!';
      }, time)
      }
      
      //кнопка остановки процесса варки
      const stop = document.getElementById('stop');
      stop.addEventListener('click', stopCook);
      
      //ф-я остановки варки
      function stopCook() {
        clearTimeout(cookTimer);
        infoPanel.innerHTML = 'Операция прервана!';
      }
    }
  }

  //кнопка зауска
const start = document.getElementById('start');
start.addEventListener('click', startCook);

//ф-я запуска
function startCook() {
    var kidtek = new CoffeeMachine(3000);
    kidtek.launch();
}
