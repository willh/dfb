var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();
module.exports = api;

var dystopiaGenerator = require('./dystopian');

api.get('/in-the-future', function () {
  return dystopiaGenerator.randomDystopianFuture();
});