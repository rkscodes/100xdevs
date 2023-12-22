/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
const math = require('mathjs')

class Calculator {
  constructor() {
    this.result = 0
  }
  add(x) {
    this.result += x
  }
  subtract(x) {
    this.result -= x
  }
  multiply(x) {
    this.result *= x
  }
  divide(x) {
    if (x != 0)
      this.result /= x
    else
      throw new Error
  }
  clear() {
    this.result = 0
  }
  getResult() {
    return this.result
  }
  calculate(exp) {
    let expArr = this.simpilfiedEquation(exp)
    // console.log(expArr)
    const postfix = this.shuntingYard(expArr)
    let res = this.calcualtePostfix(postfix)
    // console.log(res)
    this.result = res
  }
  calcualtePostfix(postfix) {
    const op = ['+', '-', '*', '/']
    let stack = []
    postfix.forEach(val => {
      if (op.includes(val)) {
        let ele2 = stack.pop()
        let ele1 = stack.pop()

        switch (val) {
          case '+':
            stack.push(ele1 + ele2)
            break;
          case '-':
            stack.push(ele1 - ele2)
            break;
          case '*':
            stack.push(ele1 * ele2)
            break;
          case '/':
            if (ele2 == 0)
              throw new Error
            stack.push(ele1 / ele2)
            break;
        }
      } else {
        stack.push(val)
      }
    })
    return stack.pop()
  }
  simpilfiedEquation(exp) {
    exp = exp.split('').filter(char => char !== ' ');
    exp = exp.join('');
    // console.log(exp)
    try {
      math.evaluate(exp)
    } catch {
      throw new Error
    }
    let arr = [];
    const op = ['+', '-', '*', '/', '(', ')']
    let temp = ""
    exp.split('').forEach(val => {
      if (op.includes(val)) {
        if (temp != "") {
          temp = Number(temp)
          arr.push(temp)
          temp = ""
        }
        arr.push(val)
      } else {
        temp += val
      }
    })
    if (temp != "")
      arr.push(Number(temp))
    return arr
  }

  shuntingYard(expArr) {
    let opPrecedence = {
      '+': 0,
      '-': 0,
      '*': 1,
      '/': 1,
      '(': -1,
      '.': -100
    }
    let op = Object.keys(opPrecedence)
    op.push('(')
    op.push(')')

    let opStack = []
    opStack[0] = '.'
    let postfix = []

    expArr.forEach(val => {
      if (op.includes(val)) {
        if (val == '(') {
          opStack.push(val)
        } else if (val == ')') {
          while (opStack.at(-1) != '(') {
            postfix.push(opStack.pop())
          }
          opStack.pop()
        } else {
          let cp = opPrecedence[val]
          let pp = opPrecedence[opStack.at(-1)]
          if (cp > pp) {
            opStack.push(val)
          } else {
            while (cp <= pp) {
              postfix.push(opStack.pop())
              pp = opPrecedence[opStack.at(-1)]
            }
            opStack.push(val)
          }
        }
      } else {
        postfix.push(val)
      }
    })

    while (opStack.length != 1) {
      postfix.push(opStack.pop())
    }

    return postfix
  }

}
let ob = new Calculator();
ob.calculate("10 - (4 + 2)")
// ob.calculate("3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3")
// ob.calculate("10  +2  *3")
module.exports = Calculator;
