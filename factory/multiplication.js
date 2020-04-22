const Operation = require('./operation');

class Multiplication {
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

module.exports = Multiplication;