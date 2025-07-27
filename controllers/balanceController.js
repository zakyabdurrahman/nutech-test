const Joi = require('joi');
const AuthQuery = require('../database/authQuery.js');
const BalanceQuery = require('../database/balanceQuery.js');
const conn = require('../database/connection.js');
const { generateInvoiceID } = require('../helpers/helpers.js');
const InfoQuery = require('../database/infoQuery.js');




class BalanceController {
  static async getBalance(req, res, next) {
    try {
      let userRawData = await conn.query(AuthQuery.getUser, [
        req.loginData.email,
      ]);

      let balanceRawData = await conn.query(BalanceQuery.checkBalance, [
        userRawData.rows[0].user_id,
      ]);

      res.status(200).json({
        status: 0,
        message: "Get Balance Berhasil",
        data: {
          balance: balanceRawData.rows[0].balance,
        },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async addBalance(req, res, next) {
    try {
      let body = req.body;
      const schema = Joi.object({
        top_up_amount: Joi.number().min(0).required().messages({
          "number.min":
            "Paramter amount hanya boleh angka dan tidak boleh lebih kecil dari 0",
        }),
      });

      const { error, value } = schema.validate(body);

      if (error) {
        throw Error(error);
      }

      let userRawData = await conn.query(AuthQuery.getUser, [
        req.loginData.email,
      ]);

      let balanceRawData = await conn.query(BalanceQuery.addBalance, [
        userRawData.rows[0].user_id,
        value.top_up_amount,
      ]);

      let invoiceId = generateInvoiceID();
      let type = "TOPUP";
      let desc = "Top Up balance";
      let amount = value.top_up_amount;
      let created_on = Date.now();

      await conn.query(BalanceQuery.addTransaction, [
        userRawData.rows[0].user_id,
        amount,
        invoiceId,
        type,
        created_on,
        desc,
      ]);

      res.status(200).json({
        status: 0,
        message: "Top Up Balance berhasil",
        data: {
          balance: balanceRawData.rows[0].balance,
        },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async buyService(req, res, next) {
    try {
      let body = req.body;
      const schema = Joi.object({
        service_code: Joi.string().required(),
      });

      const { error, value } = schema.validate(body);

      if (error) {
        throw Error(error);
      }

      let userRawData = await conn.query(AuthQuery.getUser, [
        req.loginData.email,
      ]);

      let balanceRawData = await conn.query(BalanceQuery.checkBalance, [
        userRawData.rows[0].user_id,
      ]);

      let serviceRawData = await conn.query(InfoQuery.serviceByCode, [
        value.service_code,
      ]);
      let serviceResult = serviceRawData.rows[0];

      if (!serviceResult) throw Error("Service ataus Layanan tidak ditemukan");

      let invoiceId = generateInvoiceID();
      let type = "PAYMENT";
      let desc = serviceResult.service_name;
      let amount = serviceResult.service_tariff;
      let created_on = Date.now();

      if (balanceRawData.rows[0].balance < serviceResult.service_tariff) {
        throw Error("Saldo tidak cukup");
      }

      //substract
      balanceRawData = await conn.query(BalanceQuery.decreaseBalance, [
        userRawData.rows[0].user_id,
        amount,
      ]);

      let transData = await conn.query(BalanceQuery.addTransaction, [
        userRawData.rows[0].user_id,
        amount,
        invoiceId,
        type,
        created_on,
        desc,
      ]);

      res.status(200).json({
        status: 0,
        message: "Transaksi berhasil",
        data: {
          invoice_number: invoiceId,
          service_code: serviceResult.service_code,
          service_name: serviceResult.service_name,
          transaction_type: "PAYMENT",
          total_amount: amount,
          created_on: transData.rows[0].created_on,
        },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getHistory(req, res, next) {
    try {
      const limit = req.query.limit ? req.query.limit : null;
      const offset = req.query.offset ? req.query.offset : null;

      let email = req.loginData.email;

      let rawQueryData = await conn.query(BalanceQuery.getTransaction, [email, limit, offset]);

      res.status(200).json({
        status: 0,
        message: "Transaksi berhasil",
        data: {
          limit,
          offset,
          records: rawQueryData.rows
        }
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = BalanceController;