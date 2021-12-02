function add (...rest) {
    if (!rest.every((element) => Number.isNumber(element)))
      throw "All arguments must be numbers.";
    return rest.reduce((num1, num2) =>  num1 + num2);
  }
  

  const arr = "XXX".split('').map(el => Math.floor(Math.random()*10))
  fn(...arr); //> 6
  fn(10, "B", ...arr); //> error All arguments must be numbers.

  