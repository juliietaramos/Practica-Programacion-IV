// 1. Crear una promesa que se resuelva después de 2 segundos con el mensaje "Proceso completado". Usar .then() y .catch() para mostrar el resultado en consola.
const proceso = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Proceso completado");
    }, 2000)
});
proceso
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));


// 2. Hacer una función que reciba un número por parámetro: si el número es par, la promesa se resuelve mostrando el mensaje "El número es par"; Si el número es impar, la promesa se rechaza con el mensaje “El número es impar”. Usar .then() y .catch().
function parOImpar(num) {
    return new Promise((resolve, reject) => {
        let rta = num % 2 === 0
        if (rta) {
            resolve("El numero es par.")
        } else {
            reject("El número es impar.")
        }
    })
}
parOImpar(2)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))
parOImpar(3)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))


// 3. Crear una promesa que devuelva un número. Encadenar .then() para:
//     *Sumarle 5
//     *Multiplicar por 2
//     *Mostrar el resultado final
const promesa = new Promise((resolve) => {
    resolve(6)
})
promesa
    .then((num) => num + 5)
    .then((num) => num * 2)
    .then((num) => console.log(num));


// 4. Hacer una función que simule “cargar datos” con setTimeout (por ejemplo, tarda 3 segundos en resolverse). Mostrar "Cargando..." antes de la promesa y "Datos cargados" al resolverla.
function cargarDatos() {
    console.log(`Cargando...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos cargados.")
        }, 3000)
    })
}
cargarDatos().then(rta => console.log(rta))


// 5. Reutilizar el ejercicio 1, pero en lugar de .then(), crear una función async y usar await para esperar la promesa. Mostrar el mensaje en consola.
async function asyncAwait() {
    try {
        let resultado = await proceso;
        console.log(resultado);
    } catch (err) {
        console.log(`Error inesperado`);
    }
}
asyncAwait();


// 6. Reutilizar el ejercicio 2 (número par/impar), pero ahora implementarlo usando async/await, y capturar el error con try/catch.
//     Recordá que cuando trabajamos con .then() se usa .catch() para manejar errores.
//     En cambio, cuando usamos async/await, los errores de una promesa rechazada se capturan con try/catch, igual que las excepciones en código sincrónico.
// Dicho esto, Implementar la función de verificación usando async/await y capturar el error con try/catch.
async function numeroParImpar(numero) {
    try {
        let resultado = await parOImpar(numero)
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
numeroParImpar(4)
numeroParImpar(3)


// 7. Crear 3 funciones que devuelvan promesas con un setTimeout distinto (por ejemplo: 1s, 2s y 3s). Llamarlas en una función async usando await para ejecutarlas en orden y mostrar los resultados.
function unSegundo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Funcion de 1 segundo de espera`);
        }, 1000)
    })
}
function dosSegundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Funcion de 2 segundos de espera`);
        }, 2000)
    })
}
function tresSegundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Funcion de 3 segundos de espera`);
        }, 3000)
    })
}
async function punto7() {
    try {
        let resultado1 = await unSegundo()
        console.log(resultado1);
        let resultado2 = await dosSegundos()
        console.log(resultado2);
        let resultado3 = await tresSegundos()
        console.log(resultado3);
    } catch (error) {
        console.log(`Sucedio un error`);
    }
}
punto7()


// 8. Tomar las 3 funciones del ejercicio anterior, pero ahora ejecutarlas con Promise.all (investigar). Mostrar todos los resultados juntos cuando se resuelvan.
async function promesaFinal() {
    try {
        const resultados = await Promise.all([unSegundo(), dosSegundos(), tresSegundos()]);
        console.log(resultados);
    } catch (error) {
        console.log("Ocurrió un error en Promise.all");
    }
}
promesaFinal();