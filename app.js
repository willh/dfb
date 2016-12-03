// I know, it's ugly, but I didn't want to bring in a whole templating thing just for this
var html = ["<html lang=\"en-GB\">",
            "<head>",
            "<style type=\"text/css\">",
            "img { float: left; } ",
            "p { font: 48px \"Helvetica\", sans-serif; } ",
            "div#main { padding-top: 50px; } ",
            "</style>",
            "</head>",
            "<body>",
            "<img src=\"http://dfb-static.s3-eu-west-1.amazonaws.com/compass.jpg\" alt=\"compass\" >",
            "<div id=\"main\"><p>{{greeting}}</p></div>",
            "</body>",
            "</html>",].join('');

var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();
module.exports = api;

var dystopiaGenerator = require('./dystopian');

var dystopianFuture = dystopiaGenerator.randomDystopianFuture();
var htmlResponse = html.replace("{{greeting}}", dystopianFuture);

api.get('/in-the-future', function () {
  return htmlResponse;
}, {
  success: { contentType: 'text/html' }
});