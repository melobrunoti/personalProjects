function weekDay(date) {
  const saturday = 6;
  const sunday = 0;

  while(date.getDay() === saturday || date.getDay() === sunday){
    date.setDate(date.getDate() + 1)
  }
  return date;
}

function generateBills(date, installments) {
  const initialMonth = date;
  const months = new Date(initialMonth);
  let arr = [new Date(date)]
  for(let i = 0; i < installments -1; i++) {
    const newMonth = months.setMonth(months.getMonth() + 1)
    arr.push(new Date(newMonth))
  }
  return arr.forEach((a) => console.log(weekDay(a).toISOString().split('T')[0]))
}

generateBills('03-26-2022', 10)








