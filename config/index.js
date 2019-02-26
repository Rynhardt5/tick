if (process.env.NODE_ENV === 'production') {
  module.exports = {
    api: 'https://infinite-castle-23179.herokuapp.com'
  };
} else {
  module.exports = {
    api: 'http://localhost:3000'
  };
}
