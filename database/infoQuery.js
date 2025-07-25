class InfoQuery {
  static bannerQuery = {
     // give the query a unique name
    name: 'fetch-banners',
    text: 'SELECT * FROM banners;'
  };

  static serviceQuery = {
    name: 'fetch-services',
    text: 'SELECT * FROM services;'
  };

}

module.exports = InfoQuery;