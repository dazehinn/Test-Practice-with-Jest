class Calculator {
  constructor(x = 0, y = 1){
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }

  subtract() {
    return this.x - this.y;
  }

  divide() {
    return this.x / this.y;
  }

  multiply() {
    return this.x * this.y;
  }
}

export default Calculator;