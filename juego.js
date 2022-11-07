let palabraSecreta;
let cant_errores = 0;
let cant_aciertos = 0;

let palabras = [
    'oracle','alura','programar','procastinar','manzanas','camiseta','caramelos','murcielagos', 'ñoquis','streamer', 'twitch','microfono',
    'youtube','boca','argentina','brasil','facebook','javascript','linterna','messi','twitter','linkedin','edificio','princesa','estudiante'
];

//console.log(palabras);

const btn = id('jugar');
const imagen = id('imagen');
  //teclado
  const btn_letras = document.querySelectorAll("#letras button" ); //me trae del div letras dentro en button, todos los elementos en forma de array, 
  const resultado =  id('resultado');
  const btnIniciar = id('comenzarJuego');
  const btnAgregar = id('agregarPalabra');
  let btnCancelar = document.getElementById("btn-cancelar");
   //div que contiene el input y los btn en agregar palabra
   let divAgregar = document.getElementById("nueva-palabra");
   //id del input que guarda la palabra
  let nuevaPalabra = id('input-nueva-palabra');
  
  //----------------------------addeventslistenners------------------------------------------//

  //para volver al inicio desde agregar palabra
  const cancelar = id('cancelar');
  cancelar.addEventListener('click',volver);
  //para volver al inicio
  const desistir = id('fin');
  desistir.addEventListener('click',volver);

//lleva al inicio del juego, es la clase del main
let empezar = document.querySelector('.empezar');
  btnIniciar.addEventListener('click',empezarJuego);

  //boton que guarda la nueva palabra
  let btnGurdar = document.getElementById("btn-guardar").onclick = () => {
   guardarPalabra();
  }

    //boton para agregar palabra
    btnAgregar.addEventListener("click",agregarPalabra);

  //inicia el juego
btn.addEventListener('click', iniciar);



//-----------------------------------logica del juego----------------------------------------------------------------------//

//queda aca porque es la logica del programa
function iniciar(event){

    imagen.src = 'img/0.png'
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;
    const parrafo = id('palabra_a_adivinar');
    parrafo.innerHTML = ''; //representa lo que esta entre tag y tag
    resultado.innerHTML = '';
   
    const cant_palabras = palabras.length;
    const valor_al_azar = obtenerRandom(0,cant_palabras);
   palabraSecreta = palabras[valor_al_azar];
   //console.log(palabraSecreta);
   //para saber los guiones
   const cantLetras = palabraSecreta.length;

   //habilitamos los botones para poder jugar nuevamente
   for (let i = 0; i < btn_letras.length;i++){
    btn_letras[i].disabled = false;
   }

   for(let i = 0; i<cantLetras; i++){
    const span = document.createElement('span');
    parrafo.appendChild(span);

   }

}

//---------------------------------------------------------------------------------------------------------------------//
    //click de adivinar letra
   for (let i = 0; i < btn_letras.length;i++){
    btn_letras[i].addEventListener('click',click_letras);
   }

   function click_letras(event){
    const spans = document.querySelectorAll('#palabra_a_adivinar span')
    const button = event.target; //cual de las letras llamo a la funcion
    button.disabled = true;
    const letra = button.innerHTML.toUpperCase(); //contenido entre q abre y cierra la tag del button que toque
    const palabra = palabraSecreta.toUpperCase();


    let acerto = false; //arranco asumiendo q la letra q hizo click no existe

   

    for (let i = 0; i < palabra.length; i++){
        if (letra == palabra[i]){
            //la variable i, es la posicion de la letra en la palabrasecreta. que coincide con el span al que tenemos q mostrarle esta letra.
            spans[i].innerHTML = letra; 
            cant_aciertos++
            acerto = true;
        }
        
    }
   // console.log("la letra " + letra + " en la palabra " + palabra + " existe? " + acerto)
    
    if(acerto == false){
    cant_errores++
    const source = `img/${cant_errores}.png`
    imagen.src = source;
    } 

    if (cant_errores === 6){

        resultado.innerHTML = "Perdiste 😢, la palabra era: " + palabraSecreta;
        gameOver();

    }else if(cant_aciertos == palabraSecreta.length){
        resultado.innerHTML = "Ganaste!!🎉 Felicidades!!"
        gameOver();
    }

   }

   gameOver();


