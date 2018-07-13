module.exports = function(app) {
    app.get('*', function(req, res) {
        console.log("I am in routes");
        res.sendfile('./index.html');
      });
}