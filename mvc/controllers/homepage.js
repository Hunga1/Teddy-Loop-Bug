module.exports = function(app) {
  app.route('/').get(function(req, res) {
    var model = require('models/global')(req, res);
    model.test = require('models/testData');
    
    res.render('bugDemo', model);
  });
};