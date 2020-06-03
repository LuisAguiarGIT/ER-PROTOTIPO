var express = require('express');
var router = express.Router();

var comentarios = [];
router.get('/CodeMent', function(req, res, next) {
  res.render('index', { title: 'Express', comentarios:comentarios });
  numbers = req.body.numbers;
  console.log(numbers);
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express', comentarios:comentarios });
  numbers = req.body.numbers;
  console.log(numbers);
});

router.post('/', (req,res) => {
  
  console.log(req.body.texto);
  comentarios.push('"'+req.body.texto+'"');
  console.log(comentarios)

});

module.exports = router;
