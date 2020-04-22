const { validationResult } = require("express-validator");
const OperationFactory = require('../factory/operationFactory');

exports.compute = (req, res, nest) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const operation = OperationFactory.create(+req.body.paramone, +req.body.paramtwo, req.body.operator);
    const resultOperation =  operation.compute();

    const params = {
        body: req.body,
        result: resultOperation
    }

    try{
        res.status(201).json({ message: 'resultOperation', params });
    } catch(err){

         const error = new Error('Error');
         error.statusCode = 500;
         error.data = err;
         throw error;
    }
}