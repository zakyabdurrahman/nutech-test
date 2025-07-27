class BalanceQuery {
  static checkBalance = {
    // give the query a unique name
    name: "fetch-balance",
    text: "SELECT * FROM balances WHERE user_id = $1;",
  };

  static addBalance = {
    // give the query a unique name
    name: "add-balance-amount",
    text: "UPDATE balances SET balance = balance + $2 WHERE user_id = $1 RETURNING *;",
  };

  static decreaseBalance = {
    // give the query a unique name
    name: "decrease-balance-amount",
    text: "UPDATE balances SET balance = balance - $2 WHERE user_id = $1 RETURNING *;",
  };

  static addTransaction = {
    name: "add-transaction",
    text: "INSERT INTO transactions(user_id, total_amount, invoice_number, transaction_type, created_on, description) VALUES ($1, $2, $3, $4, to_timestamp($5 / 1000.0), $6) RETURNING *;",
  };
}

module.exports = BalanceQuery;