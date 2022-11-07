function id(str){
    return document.getElementById(str);
 }
 
 function obtenerRandom(num_min,num_max){
     const amplitud_de_valores = num_max - num_min;
     const valor_al_azar = Math.floor(Math.random( )* amplitud_de_valores)+num_min;/*por si: rago de entre 5 - 15 que es = 10 + 5*/
     return valor_al_azar; //devolveme ese dato
 }
 

 //funcion que lleva a la img de ahorcado, btn y demas
 function empezarJuego(){

    empezar.classList.remove('empezar');
    btnIniciar.style.display = 'none';
    btnAgregar.style.display = 'none';
    divAgregar.style.display = 'none';


 }

 //funcion del boton cancelar y desistir, para volver a los botones de inicio;
 function volver(){

    empezar.classList.add('empezar'); //empezar es la clase del main
    btnIniciar.style.display = 'block';
    btnAgregar.style.display = 'block';
    divAgregar.style.display = 'none';
    location.reload();

 }


 function agregarPalabra(){

    divAgregar.classList.remove('nuevaPalabra');
    btnIniciar.style.display = 'none';
    btnAgregar.style.display = 'none';
    nuevaPalabra.focus();

 }

 function guardarPalabra() {
  

    //captura lo que el usuario ha digitado = getelementbyid
   nuevaPalabra = nuevaPalabra.value;
    // incluye la palabra que el usuario digitó en el array de las palabras a seren sorteadas
    if(nuevaPalabra !== ""){
      palabras.push(nuevaPalabra.toUpperCase());
      alert("Palabra guardada");
      // haz con que los componentes de la pantalla de agregar palabra desaparezcan
      empezarJuego();
    }
    else{
   alert("Ninguna palabra fue escrita");
   location.reload();
    }
    
  
  }

  //bloquea los botones de las palabras, y habilita el agregar palabra, ademas se ejecuta en primer plano para que no se pueda usar los btn hasta elegir palabra
  function gameOver(){

    for (let i = 0; i < btn_letras.length;i++){
     btn_letras[i].disabled = true;
    }
 
    btn.disabled = false;
 
    }

