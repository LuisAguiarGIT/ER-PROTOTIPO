var express = require('express');
var router = express.Router();

var comentarios = new Array();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CodeMent -- IDE', comentarios:comentarios });
  numbers = req.body.numbers;
  console.log(numbers);
});

router.post('/', (req,res) => {
  
  var valueToPush = new Array();
  valueToPush[0] = req.body.id;
  valueToPush[1] = req.body.comment;
  comentarios.push(valueToPush);

  console.log(comentarios)

});

module.exports = router;
