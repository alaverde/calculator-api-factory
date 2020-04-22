const Operation = require('./operation');

class Subtraction {
    constructor(
        number1,
        number2,
        operator
    ){
        return new Operation(
            number1,
            number2,
            operator
        )
    }
}

module.exports = Subtraction;