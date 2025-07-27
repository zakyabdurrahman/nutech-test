const Joi = require('joi');
const {comparePass, signToken, hash, decodeToken} = require('../helpers/helpers');
const conn = require('../database/connection');
const AuthQuery = require('../database/authQuery');



class AuthController {
  static async login(req, res, next) {
    try {
      const { body } = req;

      const schema = Joi.object({
        email: Joi.string().email().required().messages({
          "any.required": `Email wajib diisi`,
          "string.email": "Paramter email tidak sesuai format",
        }),
        password: Joi.string().min(8).max(32).required().messages({
          "any.required": `Password wajib diisi`,
          "string.max": `Password maksimal 32 karakter`,
          "string.min": `Password minimal 8 karakter`,
        }),
      });

      const { error, value } = schema.validate(body);

      if (error) {
        throw Error(error);
      }

      const queryData = await conn.query(AuthQuery.getUser, [body.email]);
      const result = queryData.rows[0];

      if (!result) {
        throw Error("401");
      }

      if (!comparePass(result.password.trim(), body.password)) {
        throw Error("401");
      }

      //access token
      res.status(200).json({
        status: 0,
        message: "Login Sukses",
        data: {
          token: signToken({
            email: body.email,
          }),
        },
      });
    } catch (error) {
      console.log(error, "err");
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const bod = req.body;

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
          "string.min": `Password minimal 8 karakter`,
        }),
      });

      const { error, value } = schema.validate(bod);

      if (error) {
        throw Error(error);
      }

      //proses hashpassword
      let passHash = hash(bod.password);

      //check if email unique
      let existingUserQuery = await conn.query(AuthQuery.getUser, [bod.email]);
      if (existingUserQuery.rows[0]) {
        throw Error("email harus unik");
      }

      let newUserData = await conn.query(AuthQuery.inputUser, [
        bod.email,
        passHash,
        bod.first_name,
        bod.last_name,
      ]);

      //make balance
      await conn.query(AuthQuery.makeBalance, [newUserData.rows[0].user_id]); 

      res.status(200).json({
        status: 0,
        message: "Registrasi berhasil silahkan login",
        data: null,
      });
    } catch (error) {
      console.log(error, "err");
      next(error);
    }
  }

  static async getProfile(req, res, next) {
    try {
      let { email } = req.loginData;

      const queryData = await conn.query(AuthQuery.getUser, [email]);
      const result = queryData.rows[0];

      res.status(200).json({
        status: 0,
        message: "Sukses",
        data: {
          email: result.email,
          first_name: result.first_name,
          last_name: result.last_name,
          profile_image: result.profile_image,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async setProfile(req, res, next) {
    try {
      let { email } = req.loginData;
      const schema = Joi.object({
        first_name: Joi.string().max(50).required().messages({
          "any.required": `Nama wajib diisi`,
          "string.max": `Nama maksimal 50 karakter`,
        }),
        last_name: Joi.string().max(50).required().messages({
          "any.required": `Nama wajib diisi`,
          "string.max": `Nama maksimal 50 karakter`,
        }),
      });

      const { error, value } = schema.validate(req.body);

      if (error) {
        throw Error(error);
      }

      

      let queryData = await conn.query(AuthQuery.updateUser, [
        email,
        value.first_name,
        value.last_name,
      ]);
      let result = queryData.rows[0];
      res.status(200).json({
        status: 0,
        message: "Update Pofile berhasil",
        data: {
          email: result.email,
          first_name: result.first_name,
          last_name: result.last_name,
          profile_image: result.profile_image,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async setProfileImage(req, res, next) {
    try {
      let { email } = req.loginData;
      

      const value = req.body;

      

      let queryData = await conn.query(AuthQuery.updateUserImage, [
        email,
        "http://localhost:3000/" + req.file.filename
      ]);
      let result = queryData.rows[0];
      res.status(200).json({
        status: 0,
        message: "Update Pofile Image berhasil",
        data: {
          email: result.email,
          first_name: result.first_name,
          last_name: result.last_name,
          profile_image: result.profile_image,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;