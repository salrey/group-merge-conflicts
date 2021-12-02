function add (...rest) {
    if (!rest.every((element) => Number.isNumber(element)))
      throw "All arguments must be numbers.";
    return rest.reduce((num1, num2) =>  num1 + num2);
  }
  
  add(1, 2, 3); //> 6
  add(10, "B", 20); //> error All arguments must be numbers.
  