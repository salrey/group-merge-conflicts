function fn(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return c.reduce((a, b) => a + b);
  }
  
  const arr = "XXX".split('').map(el => Math.floor(Math.random()*10))
  fn(...arr); //> 6
  fn(10, "B", ...arr); //> error All arguments must be numbers.
  