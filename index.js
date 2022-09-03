const firstName = prompt('Enter Your First Name : ');
const lastName = prompt('Enter Your Last Name : ');
const Welcome = alert('Welcome ' + firstName + ' ' + lastName);
const brith = prompt('Enter your brith year: ');
const age = brith - 2022;
const user = alert(
    'welcome ' +
        firstName +
        ' ' +
        lastName +
        ' ' +
        'you are  ' +
        age +
        'years old'
);

let result;
const number1 = parseFloat(prompt('Enter Your First Number : '));
const operator = prompt('Enter your operator : ');
const number2 = parseFloat(prompt('Enter Your Second Number : '));

switch (operator) {
    case '+':
        result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        alert(`${number1} - ${number2} = ${result}`);

        break;
    case '/':
        result = number1 / number2;
        alert(`${number1} / ${number2} = ${result}`);
        break;

    case '*':
        result = number1 * number2;
        alert(`${number1} * ${number2} = ${result}`);

    default:
        alert('Invalid Operator');
        break;
}
