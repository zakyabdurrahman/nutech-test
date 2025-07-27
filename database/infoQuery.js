class InfoQuery {
  static bannerQuery = {
    // give the query a unique name
    name: "fetch-banners",
    text: "SELECT * FROM banners;",
  };

  static serviceQuery = {
    name: "fetch-services",
    text: "SELECT * FROM services;",
  };

  static serviceByCode = {
    name: "fetch-service",
    text: "SELECT * FROM services WHERE service_code = $1;",
  };
}

module.exports = InfoQuery;