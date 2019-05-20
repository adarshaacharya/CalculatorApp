"use strict";

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;

    if (this.previousOperand !== "") {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computaton;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computaton = prev + current;
        break;

      case "-":
        computaton = prev - current;
        break;

      case "*":
        computaton = prev * current;
        break;

      case "÷":
        computaton = prev / current;
        break;

      default:
        return;
    }

    this.currentOperand = computaton;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;


    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerHTML = this.getDisplayNumber(
      this.currentOperand);

    if (this.operation != null) {
      this.previousOperandTextElement.innerHTML = `${this.previousOperand} ${
        this.operation}`;
    } else {
      this.previousOperandTextElement.innerHTML = "";
    }
  }
}

const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const allclearButton = document.querySelector(".all-clear");
const deletebtn = document.querySelector(".delete");
const equalsButton = document.querySelector(".equal-sign");
const previousOutput = document.querySelector(".previous-output");
const currentOutput = document.querySelector(".current-output");

const calculator = new Calculator(previousOutput, currentOutput);

operand.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
  });
});

operator.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.value);
    calculator.updateDisplay();
  });
});

allclearButton.addEventListener("click", button => {
  calculator.clear();
  calculator.updateDisplay();
});

equalsButton.addEventListener("click", button => {
  calculator.compute();
  calculator.updateDisplay();
});

deletebtn.addEventListener("click", button => {
  calculator.delete();
  calculator.updateDisplay();
});
















