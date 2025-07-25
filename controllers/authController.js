const {User} = require('../models');
const {comparePass, signToken} = require('../helpers/helpers');

class AuthController {
    static async login(req, res, next) {
        try {
            const {email, password} = req.body;

            if (!email || !password) {
                throw {name: 'InvalidLoginData'};
            }

            //not null
            //find user
            const user = await User.findOne({
                where: {
                    email
                }
            });

            //if user not found 
            if (!user) throw {name: 'InvalidLogin'};

            //check password
            if (!comparePass(user.password, password)) {
                throw {name: 'InvalidLogin'};
            }

            const access_token = signToken({
                userId: user.id,
                email: user.email,
                role: user.role
            })
            res.status(200).json({
                access_token
            })


        
        } catch(error) {
            console.log(error)
            next(error);
        }
    }

    static async register(req, res, next) {
        try {
            const {email, password, phoneNumber, address, username} = req.body;
            const newUser = await User.create({
                email, 
                password,
                phoneNumber,
                address,
                username
            });

            const userData = {
                id: newUser.id,
                email: newUser.email
            };

            res.status(201).json({
                message: 'Success create new user',
                user: userData
            })
        } catch(error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = AuthController;