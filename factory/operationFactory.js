const Sum = require('./sum');
const Subtraction = require('./subtraction');
const Multiplication = require('./multiplication');
const Division = require('./division');

class OperationFactory {
    create(number1, number2, operator){
        switch(operator){
            case '+':
                return new Sum(number1, number2, operator);
            case '-':
                return new Subtraction(number1, number2, operator);
            case '*':
                return new Multiplication(number1, number2, operator);
            case '/':
                return new Division(number1, number2, operator);
            default: {
                console.log('Operation is not defined');
            }
        }
    }
}

module.exports = new OperationFactory;