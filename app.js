//hacer click en el boton
const boton = document.getElementById("boton");
boton.addEventListener("click", preguntarNombre);

//guardar referencias a los headings
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');

//preguntar y guardar nombre del usuario
function preguntarNombre() {
  const nombreUsuario = prompt('Introduce tu nombre');
  mostrarNombre(nombreUsuario);
}

//insertar el nombre donde estan los dos puntos

function mostrarNombre(nombreUsuario) {
  h2.textContent = "Hola";
  h1.textContent = nombreUsuario;
}


