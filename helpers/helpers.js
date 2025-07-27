
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function hash(input) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(input, salt);
}

function comparePass(original, input) {
    
    return bcrypt.compareSync(input, original);
}

function signToken(payload) {
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "12h"});
}

function decodeToken(token) {
    return jwt.verify(token, process.env.SECRET_KEY);
}

function generateInvoiceID() {
  const prefix = "INV";
  const randomNumber = Math.floor(100000000 + Math.random() * 900000000); // 9-digit random number
  return `${prefix}${randomNumber}`;
}

module.exports = {hash, comparePass, signToken, decodeToken, generateInvoiceID}