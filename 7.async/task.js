'use strict'

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error(`error text`);
    }
    if (this.alarmCollection.some(item => item.id === id)) {
      return console.error(`Такой будильник уже существует`);
    }
    this.alarmCollection.push({
      time,
      callback,
      id
    });
  }

  removeClock(id) {
    const findIndex = this.alarmCollection.findIndex(item => item.id === id);
    if (findIndex === -1) {
      return false;
    }
    this.alarmCollection.splice(findIndex, 1);
    return true;
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(item => this.checkClock(item))
      }, 60000)
    }
  }

  checkClock(clock) {
    const currentTime = this.getCurrentFormattedTime();
    if (clock.time === currentTime) {
      clock.callback();
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
    this.timerId = null;
    console.log(`Будильник остановлен!`)
  }

  printAlarms() {
    this.alarmCollection.forEach(item => console.log(`Будильник #${item.id} установлен на ${item.time}.`))
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
    console.log(`Все будильники удалены!`)
  }

}

(function testcase() {
  function futureTime(delayMinute) {
    const curDate = new Date().getTime() + 60000 * delayMinute
    return new Date(curDate).toTimeString().slice(0, 5);
  }

  const clock = new AlarmClock();
  clock.addClock(`${futureTime(1)}`, () => console.log(`Пора!`), 1);
  clock.addClock(`${futureTime(2)}`, () => console.log(`Вставай уже`), 2);
  clock.addClock(`${futureTime(2)}`, () => console.log(`Вставай уже`), 2);
  clock.printAlarms()
  clock.removeClock(2);
  clock.printAlarms();
  clock.addClock(`${futureTime(3)}`, () => console.log(`Вставай скорее!`), 3);
  clock.addClock(`${futureTime(4)}`, () => console.log(`Хватит спать!`), 4);
  clock.printAlarms();
  clock.start();
})