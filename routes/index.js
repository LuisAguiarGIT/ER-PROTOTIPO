var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  numbers = req.body.numbers;
  console.log(numbers);
});

router.post('/ola', (req,res) => {

  console.log(req.body.texto);
  res.send(req.body.texto); 

});

module.exports = router;
