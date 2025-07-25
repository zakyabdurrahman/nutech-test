const {decodeToken} = require('../helpers/helpers');
const {User} = require('../models');

async function authentication(req, res, next) {
    try {
        const {authorization} = req.headers;
        
        if (!authorization) throw {name: 'Unauthorized'};
        

        //if exist get token
        const accessToken = authorization.split(' ')[1];

        //decode 
        const payload = decodeToken(accessToken);

        //find user 
        const user = await User.findByPk(payload.userId);

        //if user not found 
        if (!user) throw {name: 'Unauthorized'};
        console.log(`REQUEST OBJ: ${user.id}`);

        //save userdata in session
        req.loginData = {
            userId: user.id,
            email: user.email,
            role: user.role
        };
        
        next();
    } catch(error) {
        console.log(error);
        next(error);
    }
}

module.exports = authentication;