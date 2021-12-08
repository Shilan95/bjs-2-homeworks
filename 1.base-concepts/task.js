function solveEquation(a, b, c) {
  let arr;
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0){
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
} else if (d === 0) {
    return [-b / (2 * a)];
}
  return []; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    let s = amount - contribution;
    let n = Math.round((date - new Date()) / 1000 / 60 / 60 / 24 / 30.5);
    let p = percent / 100 / 12;
    let monthlyPayment = s * (p + (p / (((1 + p) ** n) - 1)))
    totalAmount = (monthlyPayment * n).toFixed(2);
    console.log(Number(totalAmount));
  }
  return Number(totalAmount);
}
