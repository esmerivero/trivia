//PREGUNTA EL NOMBRE DEL USUARIO
//CREAMOS LAS VARIABLES
var userName = prompt('Ingresa tu nombre, por favor :)'),
   answerOne, answerTwo, answerThree,
   textPrompt = '¿Qué es un prompt?\n1.Un juego\n2.Un elemento de Java' +
   '\n3.Elemento de Javascript',
   textJs = '¿Es lo mismo Javascript y Java?\n1.Ambas son iguales' +
   '\n2.No son iguales',
   textHtml = '¿Qué es el HTML?\n1.Un interprete' +
   '\n2.Un lenguaje de programación\n3.Las 2 anteriores',
   //VARIABLES PARA
   welcome = document.getElementById("BIENVENIDA"),
   corrects = document.getElementById("CORRECTAS"),
   incorrects = document.getElementById("INCORRECTAS");

//SE VALIDA QUE EL PROMPT NO ESTE VACIO
if(userName && userName !==' '){
  //MUESTRA EL NOMBRE EN EL HTML
  welcome.innerHTML =  'BIENVENID@ ' + userName.toUpperCase();
  //PREGUNTA SI DESEAS JUGAR
  var confirmGame = confirm('¿Quieres jugar?');
  //SI EL USUARIO DESEA JUGAR
  if (confirmGame){

     //INDICA QUE SOLO ACEPTARA NUMEROS
     alert ('Escribe el número de la respuesta correcta');
     //SE ALMACENAN LAS RESPUESTAS
     answerOne = parseInt (prompt(textPrompt));
     answerTwo = parseInt (prompt(textJs));
     answerThree = parseInt (prompt(textHtml));

     //SE COMPARAN LAS RESPUESTAS CORRECTAS E INCORRECTAS
     var correctOne = '', correctTwo = '', correctThree = '', incorrectOne =
      '', incorrectTwo = '', incorrectThree = '';

     //VERIFICA QUE LA RESPUESTA SEA 1,2 O 3 DE LA PREGUNTA 1
    if(answerOne===0 || answerOne>3){
      incorrectOne = '\n'+ textPrompt + '\n\nTU RESPUESTA '+ answerOne +
       ' NO ES VÁLIDA';
    }
    else{
      //VALIDA QUE LA RESPUESTA SEA CORRECTA
      if(answerOne===3){
        correctOne = '\n'+ textPrompt + '\n\nTU RESPUESTA FUE LA No. ' + answerOne;
      }
      else {
        incorrectOne = '\n'+ textPrompt + '\n\nTU RESPUESTA FUE LA No. '+ answerOne;
      }
    }

    //VERIFICA QUE LA RESPUESTA SEA 1 o 2 DE LA PREGUNTA 2
    if (answerTwo===0 || answerTwo>2) {
      incorrectTwo = '\n'+ textPrompt + '\n\nTU RESPUESTA '+ answerTwo +
       ' NO ES VÁLIDA';
    }
    else{
      //VALIDA QUE LA RESPUESTA SEA CORRECTA
      if(answerTwo===2){
        correctTwo = '\n'+ textJs + '\n\nTU RESPUESTA FUE LA No. '+ answerTwo;
      }
      else {
        incorrectTwo = '\n'+ textJs + '\n\nTU RESPUESTA FUE LA No. '+ answerTwo;
      }
    }

    //VERIFICA QUE LA RESPUESTA SEA 1,2 O 3 DE LA PREGUNTA 3
    if (answerThree===0 || answerThree>3) {
      incorrectThree = '\n'+ textPrompt + '\n\nTU RESPUESTA '+ answerThree +
       ' NO ES VÁLIDA';
    }
    else {
      if(answerThree===1){
        correctThree = '\n'+ textHtml + '\n\nTU RESPUESTA FUE LA No. '+ answerThree;
      }
      else {
        incorrectThree = '\n'+ textHtml + '\n\nTU RESPUESTA FUE LA No. '+ answerThree;
      }
    }

    corrects.innerHTML = 'RESPUESTAS CORRECTAS ' + '\n' + correctOne +
     '\n\n' + correctTwo + '\n\n' + correctThree;
    incorrects.innerHTML = 'RESPUESTAS INCORRECTAS ' + '\n' + incorrectOne  +
     '\n\n' + incorrectTwo + '\n\n' + incorrectThree;
  }
  //SI EL USUARIO NO DESEA JUGAR
  else {
    welcome.innerHTML =   ':( Jugaremos después ' + userName;
  }
}
else {
  welcome.innerHTML =   ':( Carga de nuevo  la pág e ingresa tu nombre ';
}
