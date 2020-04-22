const Operation = require('./operation');

class Division {
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

module.exports = Division;