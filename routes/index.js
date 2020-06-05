var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = fs.createWriteStream("comentarios.txt");


let comentarios = new Array();
let comentario_exp;

let comentariosAudio = new Array();
let comentariosAudio_exp;

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'CodeMent -- IDE', comentarios: comentarios, comentario_exp: comentario_exp,
    comentariosAudio: comentariosAudio, comentariosAudio_exp: comentariosAudio_exp
  });
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
    valueToPush[2] = req.body.audio;
    valueToPush[3] = today;

    comentarios.push(valueToPush);
    console.log(comentarios);
    res.send(comentarios);

    comentarios.forEach(function (v) { file.write(v.join(',') + '\n'); });
    //file.end();
  } else if (req.body.what == "ler_comentario") {

    comentario_exp = new Array();

    for (let index = 0; index < comentarios.length; index++) {
      if (req.body.id == comentarios[index][0]) comentario_exp.push(comentarios[index]);
    }

    console.log(comentario_exp);
    res.send(comentario_exp);

  } /*else if (req.body.what == "enviar_audio") {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hora = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    today = mm + '/' + dd + '/' + yyyy + ' - ' + hora;

    var valueToPush = new Array();
    valueToPush[0] = req.body.audio;
    valueToPush[1] = today;
    comentariosAudio.push(valueToPush);
    res.send(comentariosAudio);

    comentariosAudio.forEach(function (v) { file.write(v.join(',') + '\n'); });

  }*/ /*else if (req.body.what == "reproduzir_audio") {
    comentariosAudio_exp = new Array();

    for (let index = 0; index < comentariosAudio.length; index++) {
      if (req.body.audio == comentariosAudio[index][0]) comentariosAudio_exp.push(comentariosAudio[index]);
    }*/


  //res.send(comentariosAudio_exp); //onde esta var recebe o valor ??

  //}

});

module.exports = router;
