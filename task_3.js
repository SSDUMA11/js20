let input = prompt('Please enter the number', 1);
let number=Number(input)
while(Number.isNaN(number)){
  input = prompt('Your number is incorect, please enter corect number')
  number=Number(input)
}

let multiplication = number*12;
alert(`${number} by 12 equals ${multiplication}`)