let displayValue = document.getElementsByClassName('display-value')[0];

let firstNumber = 0;
let operator = "";
let shouldResetDisplay = false;

function appendDigit(digit) 
{
  if (shouldResetDisplay) 
  {
    displayValue.innerText = "";
    shouldResetDisplay = false;
  }

  displayValue.innerText += digit;
}

function setOperator(op) 
{
  firstNumber = parseFloat(displayValue.innerText);
  operator = op;
  shouldResetDisplay = true;
}

function calculate() 
{
  const secondNumber = parseFloat(displayValue.innerText);
  let result = 0;
  
  switch (operator) 
  {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      return;
  }
  
  displayValue.innerText = result.toString();
  shouldResetDisplay = true;
}

function clearDisplayValue()
{
    if(shouldResetDisplay) 
    {
        displayValue.innerText = "";
        shouldResetDisplay = false;
    }
}