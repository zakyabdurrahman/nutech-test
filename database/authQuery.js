class AuthQuery {
  static inputUser = {
    // give the query a unique name
    name: "input-user",
    text: "INSERT INTO users(email, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING user_id;",
  };

  static makeBalance = {
    name: "input-balance",
    text: "INSERT INTO balances(user_id, balance) VALUES ($1, 0);"
  };

  static updateUser = {
    // give the query a unique name
    name: "update-profile",
    text: "UPDATE users SET first_name = $2, last_name = $3 WHERE email = $1 RETURNING *;",
  };

  static updateUserImage = {
    // give the query a unique name
    name: "update-profile-image",
    text: "UPDATE users SET profile_image = $2 WHERE email = $1 RETURNING *;",
  };

  static getUser = {
    // give the query a unique name
    name: "fetch-user",
    text: "SELECT * FROM users WHERE email = $1;",
  };
}

module.exports = AuthQuery;