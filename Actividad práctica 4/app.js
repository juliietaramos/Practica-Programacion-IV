//1. Cambiar el contenido de <p id="mensaje"> a “Hola [nombre del alumno]” usando JS.
let idMensaje = document.getElementById("mensaje");
idMensaje.innerText = "Hola Julieta";


//2. Cambiar color de fondo y color de texto del <p> al hacer clic en él.
let etiquetaP = document.getElementsByTagName("p");
etiquetaP[0].addEventListener("click", () => {
    etiquetaP[0].style.backgroundColor = "yellow"
    etiquetaP[0].style.color = "red"
})


// 3. Agregar las funciones necesarias para que al presionar:
//     *Botón “Agregar elemento”: añadir un <li> con texto “Nuevo elemento” a la lista.
//     *Botón “Eliminar último”: eliminar el último <li>
let agregarElemento = document.getElementById("btnAgregar")
agregarElemento.addEventListener("click", () => {
    let lista = document.getElementById("lista");
    const nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = `Nuevo elemento`;
    lista.appendChild(nuevoLi);
})

let eliminarElemento = document.getElementById("btnEliminar");
eliminarElemento.addEventListener("click", () => {
    let lista = document.getElementById("lista")
    let ultimoElemento = lista.lastElementChild;
    lista.removeChild(ultimoElemento)
})


// 4. Formulario interactivo:
//     *Validar que los campos no estén vacíos al hacer clic en “Enviar”.
//     *Mostrar los datos ingresados en la lista <ul>.
//     *Limpiar los campos después de enviar.
let enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
    event.preventDefault(); 
    let nombreInput = document.getElementById("nombre");
    let emailInput = document.getElementById("email");

    let nombre = nombreInput.value.trim();
    let email = emailInput.value.trim();

    if (nombre === "" || email === "") {
        alert("Por favor, llene todos los campos.");
        return;
    }

    let lista = document.getElementById("listaResultados");
    let li = document.createElement("li");
    li.innerHTML = `🧍Nombre: ${nombre}, 💻email: ${email}`

    lista.appendChild(li);

    nombreInput.value = "";
    emailInput.value = "";
})