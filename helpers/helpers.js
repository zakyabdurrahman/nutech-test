
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
    return jwt.sign(payload, process.env.SECRET_KEY);
}

function decodeToken(token) {
    return jwt.verify(token, process.env.SECRET_KEY);
}

module.exports = {hash, comparePass, signToken, decodeToken}