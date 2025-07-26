const {decodeToken} = require('../helpers/helpers');


async function authentication(req, res, next) {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
          let e  = Error("invalid token");
          e.name = "JsonWebTokenError";
          throw e;
        }
        let bearerToken = authorization.split(" ")[1];
        const userData = decodeToken(bearerToken);
        req.loginData = userData;
        next();
    } catch(error) {
        console.log(error);
        next(error);
    }
}

module.exports = authentication;