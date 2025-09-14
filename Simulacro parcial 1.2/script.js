///DECLARACION DE CONSTANTES:
const URL = "http://localhost:3000/dioses";

///VARIABLES DE AÑADIR:
const articleAñadir = document.getElementById("articleAñadir");
const inputNombre = document.getElementById("nombre");
const inputDominio = document.getElementById("dominio");
const inputSimbolo = document.getElementById("simbolo");
const inputPoder = document.getElementById("poder");
const inputCiudad = document.getElementById("ciudad");
const btnAñadir = document.getElementById("btnAñadir");
const btnCancelarAñadir = document.getElementById("btnCancelarAñadir");

///VARIABLES DE MODIFICAR:
const articleModificar = document.getElementById("articleModificar");
const inputIdDios = document.getElementById("idDios");
const inputNombreModificado = document.getElementById("nombreModificado");
const inputDominioModificado = document.getElementById("dominioModificado");
const inputSimboloModificado = document.getElementById("simboloModificado");
const inputPoderModificado = document.getElementById("poderModificado");
const inputCiudadModificada = document.getElementById("ciudadModificada");
const btnGuardarCambios = document.getElementById("btnModificar");
const btnCancelarModificar = document.getElementById("btnCancelarModificar");

///VARIABLES DE LAS LISTAS:
const listaCompleta = document.getElementById("listaCompleta");
const btnNombreDominio = document.getElementById("btnNombreDominio");
const listaNombreDominio = document.getElementById("listaNombreDominio");
const inputFiltro = document.getElementById("filtro");
const btnFiltrar = document.getElementById("btnFiltrar");
const listaFiltrada = document.getElementById("listaFiltrada");



///PUNTO 1: GET: Al momento de mostrar, se deberá agregar a cada elemento la clase css correspondiente:
async function cargarDioses() {
    try {
        let response = await fetch(URL);

        if (!response.ok) throw new Error("Error al cargar los dioses.")

        let data = await response.json();
        listaCompleta.innerHTML = "";

        data.forEach(element => {
            const li = document.createElement("li")
            li.textContent = `Nombre: ${element.nombre}, dominio: ${element.dominio}, simbolo: ${element.simbolo}, poder: ${element.poder}, ciudad: ${element.ciudad}. `;

            const btnModificar = document.createElement("button");
            btnModificar.textContent = "Modificar";
            li.appendChild(btnModificar);
            btnModificar.addEventListener("click", () => {
                articleAñadir.hidden = true;
                articleModificar.hidden = false;

                inputIdDios.value = element.id;
                inputNombreModificado.value = element.nombre;
                inputDominioModificado.value = element.dominio;
                inputSimboloModificado.value = element.simbolo;
                inputPoderModificado.value = element.poder;
                inputCiudadModificada.value = element.ciudad;
            })

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            li.appendChild(btnEliminar);
            btnEliminar.addEventListener("click", () => eliminarDios(element.id));

            listaCompleta.appendChild(li);

            switch (true) {
                case (element.poder >= 9000):
                    li.classList = "Legendario";
                    break;
                case (element.poder >= 95):
                    li.classList = "Supremo";
                    break;
                case (element.poder >= 85 && element.poder < 95):
                    li.classList = "Poderoso";
                    break;
                case (element.poder < 85):
                    li.classList = "Debil";
                    break;
            }
        });

    } catch (error) {
        alert(error)
    }
}


///PUNTO 2: POST:
async function agregarDios() {
    event.preventDefault();
    try {
        let response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: inputNombre.value,
                dominio: inputDominio.value,
                simbolo: inputSimbolo.value,
                poder: inputPoder.value,
                ciudad: inputCiudad.value
            })
        });

        resetearFormulario();

        if (!response.ok) throw new Error("Error al añadir el Dios.");

        console.log(`Dios añadido: exitosamente`);

        cargarDioses()
    } catch (error) {
        alert(error);
    }
}

function resetearFormulario() {
    articleAñadir.hidden = false;
    articleModificar.hidden = true;

    inputNombre.value = "";
    inputDominio.value = "";
    inputSimbolo.value = "";
    inputPoder.value = "";
    inputCiudad.value = "";

    inputNombreModificado.value = "";
    inputDominioModificado.value = "";
    inputSimboloModificado.value = "";
    inputPoderModificado.value = "";
    inputCiudadModificada.value = "";

}


///PUNTO 3: PUT:
async function modificarDios() {
    event.preventDefault();
    try {
        let response = await fetch(`${URL}/${inputIdDios.value}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: inputNombreModificado.value,
                dominio: inputDominioModificado.value,
                simbolo: inputSimboloModificado.value,
                poder: inputPoderModificado.value,
                ciudad: inputCiudadModificada.value,
            })
        })
        if (!response.ok) throw new Error("Error al agregar al Dios");
        resetearFormulario();
        cargarDioses();
    } catch (error) {
        alert(error);
    }
}


///PUNTO 4: DELETE:
async function eliminarDios(id) {
    try {
        let response = await fetch(`${URL}/${id}`, {
            method: "DELETE"
        })
        if (!response.ok) throw new Error("Error al eliminar al Dios");
        cargarDioses();
    } catch (error) {
        alert(error)
    }
}


///PUNTO 5: Implementar un botón que permita traer todos los Dioses, pero solo visualizando su nombre y dominio.
async function mostrarNombreDomiino() {
    try {
        listaNombreDominio.hidden = false;
        let response = await fetch(URL);
        if (!response.ok) throw new Error("Error al cargar la lista filtrada.")
        let data = await response.json();

        listaNombreDominio.innerHTML = "";

        data.forEach(element => {
            let li = document.createElement("li");
            li.textContent = `Nombre: ${element.nombre} y dominio: ${element.dominio}.`;
            listaNombreDominio.appendChild(li);
        })
    } catch (error) {
        alert(error)
    }
}


///PUNTO 6: Implementar un input que permita ingresar una palabra para elegir un atributo específico, y se muestre un listado de SOLO esos atributos. En caso de haber ingresado una palabra no correspondiente a algún atributo, notificarlo al usuario. 
async function filtrarElementos() {
    try {
        listaFiltrada.hidden = false;
        let response = await fetch(URL);
        if (!response.ok) throw new Error("Error al cargar la lista filtrada.")
        let data = await response.json();

        listaFiltrada.innerHTML = "";

        data.forEach(element => {
            let li = document.createElement("li");

            switch (true) {
                case (inputFiltro.value === "nombre"):
                    li.textContent = `Nombre: ${element.nombre}.`
                    break;
                case (inputFiltro.value === "dominio"):
                    li.textContent = `Dominio: ${element.dominio}.`
                    break;
                case (inputFiltro.value === "simbolo"):
                    li.textContent = `Simbolo: ${element.simbolo}.`
                    break;
                case (inputFiltro.value === "poder"):
                    li.textContent = `Poder: ${element.poder}.`
                    break;
                case (inputFiltro.value === "ciudad"):
                    li.textContent = `Ciudad: ${element.ciudad}.`
                    break;
                default: throw new Error("Ingrese un filtro valido.");
            }
            listaFiltrada.appendChild(li);
        })
        inputFiltro.value = "";
    } catch (error) {
        alert(error);
    }
}

///LLAMADO DE FUNCIONES:
cargarDioses();
btnAñadir.addEventListener("click", () => agregarDios());
btnGuardarCambios.addEventListener("click", () => modificarDios());
btnNombreDominio.addEventListener("click", () => mostrarNombreDomiino());
btnFiltrar.addEventListener("click", () => filtrarElementos());