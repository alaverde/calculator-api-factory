class Operation {
    constructor(
        number1=0,
        number2=0,
        operator="+"
    ){
        this.number1 = number1;
        this.number2 = number2;
        this.operator = operator;
    }

    compute(){
        switch(this.operator){
            case '+':
                return this.number1 + this.number2;
            case '-':
                return this.number1 - this.number2;
            case '*':
                return this.number1 * this.number2;
            case '/':
                if(this.number2 == 0){
                    return 'Error Zero division';
                }
                return this.number1 / this.number2;
            default: {
                console.log('Operation is not defined');
            }
        }
    }
}

module.exports = Operation;