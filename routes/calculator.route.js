const express = require("express");
const { body } = require("express-validator");
const calculator = require("./../controller/calculator.controller");

const router = express.Router();

router.post(
    '/calculator', [
      body('paramone')
        .exists()
        .withMessage('El paramatro uno es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El parametro uno debe ser númerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El parametro uno debe ser entre 1-3 caractes')
        .trim()
        .escape(),
      body('paramtwo')
        .exists()
        .withMessage('El paramatro dos es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El parametro dos debe ser númerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El parametro dos debe ser entre 1-3 caractes')
        .trim()
        .escape(),
      body('operator')
        .exists()
        .withMessage('El parametro operator es requerido')
        .matches(/[+\-*/]/, "i")
        .withMessage('El parametro debe ser un operador : +,-,*,/')
        .isLength({min:1, max: 1})
        .withMessage('El parametro solo debe contener 1 caracter')
        .trim()

    ] , 
    calculator.compute
);

module.exports = router;