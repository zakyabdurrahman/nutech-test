const Joi = require('joi');
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
            const bod = req.body;

            console.log(bod);

            const schema = Joi.object({
              email: Joi.string().email().required().messages({
                "any.required": `Email wajib diisi`,
                "string.email": "Paramter email tidak sesuai format",
              }),
              first_name: Joi.string().max(50).required().messages({
                "any.required": `Nama wajib diisi`,
                "string.max": `Nama maksimal 50 karakter`,
              }),
              last_name: Joi.string().max(50).required().messages({
                "any.required": `Nama wajib diisi`,
                "string.max": `Nama maksimal 50 karakter`,
              }),
              password: Joi.string().min(8).max(32).required().messages({
                "any.required": `Password wajib diisi`,
                "string.max": `Password maksimal 32 karakter`,
                "string.min": `Password minimal 8 karakter`
              })

            });
            
            
            
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