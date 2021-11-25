/* GET home page */
module.exports.index = function(req, res){
    res.render('index', { 
       l1: 'index'
      
    });
};

  /* GET products page */
module.exports.prod = function(req, res){
  res.render('products', { page: 'products' });
};

  /* GET registration page */
  module.exports.reg = function(req, res){
    res.render('reg1', { page: 'reg' });
  };

    /* GET products page */
module.exports.about = function(req, res){
  res.render('about', { page: 'about' });
};

  /* GET products page */
  module.exports.cont = function(req, res){
    res.render('contact', { page: 'contact' });
  };