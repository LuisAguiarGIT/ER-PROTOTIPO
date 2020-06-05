var express = require('express');
var router = express.Router();

let comentarios = new Array();
let comentario_exp;

router.get('/', function (req, res, next) {
    res.render('login', { title: 'login', comentarios: comentarios, comentario_exp: comentario_exp });
});
  

module.exports = router;