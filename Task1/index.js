let num = 0;

function calc(number, operator) {
  switch (operator) {
    case "+":
      num += number;
      console.log(num);
      break;
    case "-":
      num -= number;
      console.log(num);
      break;
    case "*":
      num *= number;
      console.log(num);
      break;
    case "/":
      if (number === 0) {
        console.log("You can not divide by 0");
        break;
      }
      num /= number;
      console.log(num);
      break;
  }
}

calc(5, "+"); // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2
