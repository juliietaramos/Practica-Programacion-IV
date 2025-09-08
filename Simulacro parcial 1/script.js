/// DECLARACIÓN DE CONSTANTES
const URL = "http://localhost:3000/extraterrestres";
const listaAliens = document.getElementById("lista")
const inputNombre = document.getElementById("nombre")
const inputPlaneta = document.getElementById("planeta");
const inputPoder = document.getElementById("nivelPoder");
const formularioEnviar = document.getElementById("formularioAgregar");

const inputId = document.getElementById("identificador")
const inputNuevoNombre = document.getElementById("nombreModificado")
const inputNuevoPlaneta = document.getElementById("planetaModificado");
const inputNuevoPoder = document.getElementById("poderModificado");
const formularioModificar = document.getElementById("formularioModificar");



/// FUNCIONES:
async function cargarAliens() {
    try {
        let response = await fetch(URL);
        let aliens = await response.json();

        listaAliens.innerHTML = "";

        aliens.forEach(a => {
            const li = document.createElement("li");
            li.textContent = `#️⃣ID: ${a.id}, 👽 Nombre: ${a.nombre}, 🪐planeta: ${a.planeta}, 💪nivel de poder: ${a.nivelPoder} `;

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";

            btnEliminar.addEventListener("click", () => eliminarAlien(a.id));

            li.appendChild(btnEliminar);
            listaAliens.appendChild(li);
        })
    } catch (error) {
        console.error(`Ocurrio un error al cargar los extraterrestres: ${error}`);
    }
}

async function eliminarAlien(id) {
    console.log(id)
    try {
        await fetch(`${URL}/${id}`,
            { method: "DELETE" }
        );
        await cargarAliens();
    } catch (error) {
        console.error(`Ocurrio un error al eliminar el alien: ${error}`);
    }
}

async function agregarAlien() {
    event.preventDefault;

    let nuevoAlien = {
        nombre: inputNombre.value,
        planeta: inputPlaneta.value,
        nivelPoder: inputPoder.value
    }
    try {
        await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoAlien)
        })
        inputNombre = "";
        inputPlaneta = "";
        inputPoder = "";
        await cargarAliens();
    } catch (error) {
        console.error(`Error al añadir un alien: ${error}`)
    }
}

async function modificarAlien() {
    event.preventDefault;
    try {
        let response = await fetch(`${URL}/${inputId.value}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body:
                    JSON.stringify({
                        nombre: inputNuevoNombre.value,
                        planeta: inputNuevoPlaneta.value,
                        nivelPoder: inputNuevoPoder.value
                    })
            }
        );
        inputNuevoNombre = "";
        inputNuevoPlaneta = "";
        inputNuevoPoder = "";
        inputId = "";
        if (!response.ok) {
            throw new Error("No se pudo modificar el alien.")
        }
        let data = await response.json();
    } catch (error) {
        alert(`Error al modificar el alien: ${error}`);
    }
}

/// LLAMADO DE FUNCIONES
cargarAliens();
formularioEnviar.addEventListener("submit", () => agregarAlien());
formularioModificar.addEventListener("submit", () => modificarAlien());