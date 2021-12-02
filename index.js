function fn(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "Where's Waldo?";
    return c.reduce((a, b) => a + b);
  }
  
  fn(8, 33, 82); //> 6
  fn(10, "F", 20); //> error All arguments must be numbers.
  