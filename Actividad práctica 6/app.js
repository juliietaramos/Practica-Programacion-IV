// Declaracion de constantes:
const URL = "http://localhost:3001/usuarios";
const listaUser = document.getElementById("listaDeUsuarios");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const formulario = document.getElementById("formularioUsuarios");


/// Cargar usuarios:
async function cargarUsuarios() {
    try {
        let response = await fetch(URL);
        let usuarios = await response.json();

        listaUser.innerHTML = "";

        usuarios.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `Nombre: ${user.nombre}, email: ${user.email} `;

            const btneliminar = document.createElement("button");
            btneliminar.textContent = "Eliminar usuario";

            btneliminar.addEventListener("click", () => eliminarUsuario(user.id));

            li.appendChild(btneliminar);
            listaUser.appendChild(li);
        })
    } catch (error) {
        console.error("Error al cargar los usuarios; ", error);
    }
}

// Eliminar usuario:
async function eliminarUsuario(id) {
    try {
        await fetch(`${URL}/${id}`,
            { method: "DELETE" });
        await cargarUsuarios();
    } catch (error) {
        console.error("Error al eliminar el usuario: ", error);
    }
}

// Agregar usuario:
async function agregarUsuario() {
    let userNuevo = {
        nombre: inputNombre.value,
        email: inputEmail.value,
    }
    try {
        await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userNuevo)
        });
        inputEmail = ""; 
        inputNombre = ""; 
        await cargarUsuarios();
    }catch(error){
        console.error("Error al agregar el usuario: ", error);
    }
}

//Llamado a las funciones:
cargarUsuarios();
formulario.addEventListener("submit", agregarUsuario)