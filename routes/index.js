var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = fs.createWriteStream("comentarios.txt");


let comentarios = new Array();
let comentario_exp;
router.get('/', function (req, res, next) {
  res.render('index', { title: 'CodeMent -- IDE', comentarios: comentarios, comentario_exp: comentario_exp });
});

router.post('/', (req, res) => {

  if (req.body.what == "enviar_comentario") {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hora = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    today = mm + '/' + dd + '/' + yyyy + ' - ' + hora;

    var valueToPush = new Array();
    valueToPush[0] = req.body.id;
    valueToPush[1] = req.body.comment;
    valueToPush[2] = today;
    comentarios.push(valueToPush);
    res.send(comentarios);

    comentarios.forEach(function(v) {file.write(v.join(',') + '\n'); });
    //file.end();
  } else if (req.body.what == "ler_comentario") {

    comentario_exp = new Array();

    for (let index = 0; index < comentarios.length; index++) {
      if (req.body.id == comentarios[index][0]) comentario_exp.push(comentarios[index]);
    }

    res.send(comentario_exp);

  }

});

module.exports = router;
