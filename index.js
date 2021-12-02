function fn(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "Where's Waldo?";
    return c.reduce((a, b) => a + b);
  }
  
  fn(8, 33, 82); //> 6
  fn(10, "F", 20); //> error All arguments must be numbers.

function add (...rest) {
    if (!rest.every((element) => Number.isNumber(element)))
      throw "All arguments must be numbers.";
    return rest.reduce((num1, num2) =>  num1 + num2);
  }
  
  add(1, 2, 3); //> 6
  add(10, "B", 20); //> error All arguments must be numbers.  