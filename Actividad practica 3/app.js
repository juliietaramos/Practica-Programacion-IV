//PARTE 1
//1. Crear un arreglo llamado productos que contenga al menos 5 objetos literales con las propiedades: id, nombre, precio y stock.
let productos = [
    { id: 1, nombre: "Yerba Mate", precio: 1200, stock: 50 },
    { id: 2, nombre: "Aceite de Girasol", precio: 2500, stock: 20 },
    { id: 3, nombre: "Harina 0000", precio: 900, stock: 35 },
    { id: 4, nombre: "Arroz Largo Fino", precio: 1100, stock: 40 },
    { id: 5, nombre: "Fideos Spaghetti", precio: 800, stock: 25 }
]
console.log(productos);

//Agregar un nuevo producto usando push()
productos.push({ id: 6, nombre: "Galletitas Dulces", precio: 1500, stock: 15 });
console.log(productos);

//Eliminar el último producto con pop()
productos.pop();
console.log(productos);

//Mostrar el listado final en la consola
console.log(productos);



//2. Usar filter() con una función anónima para obtener los productos cuyo stock sea mayor a 10. Luego, guardar el resultado en un nuevo arreglo productosEnStock y mostrarlo.
let productosEnStock = productos.filter(function (producto) {
    return producto.stock > 10;
});
console.log(productosEnStock);

//Extra: filter() con arrow function
let productosEnStockArrow = productos.filter(p => p.stock > 10);
console.log(productosEnStockArrow);



//3. Usar find() con una función callback para encontrar un producto por su nombre. Si lo encuentra, mostrarlo en la consola. Si no, mostrar el mensaje "Producto no encontrado".
function encontrar(nombre) {
    return productos.find(p => p.nombre === nombre);
}

function encontrarProducto(callback) {
    let nombre = "Harina 0000";
    let productoEncontrado = callback(nombre);
    if(productoEncontrado){
        return productoEncontrado;
    }else return "Producto no encontrado"
}

console.log(encontrarProducto(encontrar));



//4. Usar reduce() con una arrow function para calcular el precio total de todos los productos. Luego, realizar una función anónima que calcule el promedio de precios.
let total = productos.reduce((acc, producto) => acc + producto.precio, 0);

const promedio = function () {
    return total / productos.length;
}
console.log(total + " su promedio es " + promedio());



//5. Usar some() para verificar si existe al menos un producto con stock igual a 0. Luego, usar every() para comprobar si todos los productos cuestan más de 100. Mostrar ambos resultados.
let existente = productos.some(producto => producto.stock === 0);
let todosCaros = productos.every(producto => producto.precio > 100);
if (existente) {
    console.log("Hay productos sin stock");
} else {
    console.log("Todos los productos tienen stock");
}

if (todosCaros) {
    console.log("Todos los productos son caros");
} else {
    console.log("No todos los productos son caros");
}



//6. Crear un arreglo clientes con al menos 3 objetos literales que tengan las propiedades: id, nombre, edad, compras (array de strings). Usar forEach() para mostrar en consola el nombre de cada cliente junto con la cantidad de compras que realizó.
let clientes = [
    {
        id: 1,
        nombre: "Luisa",
        edad: 55,
        compras: ["Yerba Mate", "Harina 0000"]
    },
    {
        id: 2,
        nombre: "Carlos",
        edad: 40,
        compras: ["Aceite de Girasol"]
    },
    {
        id: 3,
        nombre: "Ana",
        edad: 30,
        compras: ["Fideos Spaghetti", "Arroz Largo Fino"]
    }
];

clientes.forEach(c => console.log('Cliente:', c.nombre + ", compras:", c.compras.length));



//PARTE 2:
// 7. Crear una función procesarClientes(clientes, callback) que reciba el arreglo de clientes y una función de callback. Llamar a procesarClientes con distintos callbacks:
// *Un callback que muestre solo los nombres.
// *Otro callback que muestre solo la cantidad total de compras.
function procesarClientes(clientes, callback) {
    callback(clientes);
}

const mostrarNombres = (clientes) => {
    console.log('Nombre de los clientes:');
    clientes.forEach(c => console.log(c.nombre));
}

procesarClientes(clientes, mostrarNombres);

const mostrarCantidad = (clientes) => {
    console.log('Cantidad total de compras:');
    console.log(clientes.reduce((acc, cliente) => acc + cliente.compras.length, 0));

}

procesarClientes(clientes, mostrarCantidad);



// 8. Crear un arreglo de números y ordenarlo en forma ascendente con sort() y una arrow function. Ordenar los mismos números en forma descendente.
let numeros = [1, 5, 7, 3, 8, 2, 0];

console.log('Numeros ordenados ascendentemente: ' + numeros.sort((a, b) => a - b));
console.log('Numeros ordenados descendentemente: ' + numeros.sort((a, b) => b - a));



// 9. Crear un objeto literal tienda que tenga:
// a. Un arreglo productos.
// b. Un método vender(idProducto, cantidad) que:
//     i. Busque el producto por id usando find().
//     ii. Si hay stock suficiente, reste la cantidad al stock y muestre "Venta realizada".
//     iii. Si no hay stock, muestre "Stock insuficiente".
// Probar el método vendiendo algunos productos.

const tienda = {
    productos: [
        { id: 1, nombre: 'Laptop', stock: 15 },
        { id: 2, nombre: 'Mouse', stock: 50 },
        { id: 3, nombre: 'Teclado', stock: 30 },
        { id: 4, nombre: 'Monitor', stock: 5 }
    ],
    vender: function (idProducto, cantidad) {
        const productEncontrado = this.productos.find(p => p.id === idProducto);
        if (productEncontrado) {
            if (productEncontrado.stock > cantidad) {
                productEncontrado.stock = productEncontrado.stock - cantidad;
                console.log('Venta realizada');
            } else console.log('Stock insuficiente');
        }
    }
};

tienda.productos.forEach(p => {
    console.log('Producto: ' + p.nombre + ', stock: ' + p.stock);
})

tienda.vender(1, 2);
tienda.vender(3, 35);



// 10. Crear un arreglo carrito vacío.
//     a. Usar push() para agregar objetos con las propiedades: producto, cantidad, precioUnitario.
//     b. Usar reduce() para calcular el total a pagar.
//     c. Usar map() para generar un arreglo con el detalle de cada ítem en formato: "Producto X - Cantidad Y - Subtotal Z".
//     d. Mostrar el detalle y el total en consola.
const carrito = [];

carrito.push({
    producto: 'Crema facial',
    cantidad: 3,
    precioUnitario: 3000
})
carrito.push({
    producto: 'Shampoo hidratante',
    cantidad: 2,
    precioUnitario: 2500
})
carrito.push({
    producto: 'Acondicionador nutritivo',
    cantidad: 1,
    precioUnitario: 2700
})
carrito.push({
    producto: 'Jabón artesanal de lavanda',
    cantidad: 4,
    precioUnitario: 800
})
carrito.push({
    producto: 'Protector solar FPS50',
    cantidad: 1,
    precioUnitario: 5200
})
carrito.push({
    producto: 'Perfume floral 50ml',
    cantidad: 2,
    precioUnitario: 7500
})
carrito.push({
    producto: 'Mascarilla capilar reparadora',
    cantidad: 3,
    precioUnitario: 3200
})

let totalAPagar = carrito.reduce((acc, producto) => acc + (producto.precioUnitario * producto.cantidad), 0);

let nuevoCarrito = carrito.map(item => {
    let subTotal = item.cantidad * item.precioUnitario;
    return 'Producto ' + item.producto + ' - Cantidad: ' + item.cantidad + ' - Subtotal: ' + subTotal;
});

console.log('Detalle del carrito: ');
nuevoCarrito.forEach(d => console.log(d));
console.log('El total a pagar es de: ' + totalAPagar);



// 11. Crear un arreglo libros, cada elemento debe ser un objeto con: id, titulo, autor, genero, disponible (booleano). Luego:
//     a. Usar filter() para obtener todos los libros de un género específico.
//     b. Usar map() para generar un arreglo con solo los títulos en mayúscula.
//     c. Crear una función prestarLibro(id) que:
//         *Busque el libro con find().
//         *Si está disponible, lo marque como no disponible.
//         *Si no, devuelva "No disponible".
const libros = [
    {
        id: 1,
        titulo: 'Un Animal Salvaje',
        autor: 'Joel Dicker',
        genero: 'Policial',
        disponible: true
    },
    {
        id: 2,
        titulo: 'Cien Años de Soledad',
        autor: 'Gabriel García Márquez',
        genero: 'Realismo mágico',
        disponible: true
    },
    {
        id: 3,
        titulo: '1984',
        autor: 'George Orwell',
        genero: 'Distopía',
        disponible: false
    },
    {
        id: 4,
        titulo: 'El Principito',
        autor: 'Antoine de Saint-Exupéry',
        genero: 'Fábula',
        disponible: true
    },
    {
        id: 5,
        titulo: 'Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        genero: 'Clásico',
        disponible: false
    },
    {
        id: 6,
        titulo: 'La Sombra del Viento',
        autor: 'Carlos Ruiz Zafón',
        genero: 'Misterio',
        disponible: true
    },
    {
        id: 7,
        titulo: 'Orgullo y Prejuicio',
        autor: 'Jane Austen',
        genero: 'Romance',
        disponible: true
    },
    {
        id: 8,
        titulo: 'Fahrenheit 451',
        autor: 'Ray Bradbury',
        genero: 'Ciencia ficción',
        disponible: false
    }
]

let libroPorGenero = libros.filter(l => l.genero === 'Policial')
console.log('Libros de genero policial:');
console.log(libroPorGenero);

let titulosEnMayus = libros.map(libro => libro.titulo.toUpperCase());
console.log(titulosEnMayus);

function prestarLibro(id) {
    let encontrado = libros.find(l => l.id === id);
    if (encontrado.disponible) {
        console.log(`Libro disponible`);
        encontrado.disponible = false;
    }else console.log(`No disponible`);
}

prestarLibro(1)
prestarLibro(3)



// 12. Crear un objeto literal agenda con un arreglo contactos que guarde objetos { id, nombre, telefono }. Luego, implementar los siguientes métodos en la agenda:
//     a. agregarContacto(contacto) usando push().
//     b. eliminarContacto(id) usando filter(). (elimina todos los de mismo id por si hubiera repetidos)
//     c. buscarContacto(nombre) usando find().
//     d. listarContactos() que muestre todos.
let agenda = [
    {
        id: 1,
        nombre: "Julieta",
        telefono: 123455
    },
    {
        id: 2,
        nombre: "Martín",
        telefono: 987654
    },
    {
        id: 3,
        nombre: "Camila",
        telefono: 456789
    },
    {
        id: 4,
        nombre: "Sofía",
        telefono: 112233
    },
    {
        id: 5,
        nombre: "Lucas",
        telefono: 778899
    }
];

function agregarContacto(contacto) {
    agenda.push(contacto);
}
agregarContacto({
    id: 6,
    nombre: "Matias",
    telefono: 88888888
})

function eliminarContacto(id) {
    return agenda.filter(c => c.id !== id)
}
let nuevaAgenda = eliminarContacto(2);

function buscarContacto(nombre) {
    return nuevaAgenda.find(c => c.nombre === nombre);
}
let contactoBuscaco = buscarContacto("Julieta");

function listarContactos(contactos) {
    console.log(`Lista de contactos: `);
    contactos.forEach(c => console.log(`Nombre: ${c.nombre}, telefono: ${c.telefono}, id: ${c.id}`));
}

console.log(`Agenda con el nuevo contacto:`);
listarContactos(agenda);

console.log(`Nueva agenda`);
listarContactos(nuevaAgenda);

console.log(`Resultado de la busqueda: Nombre: ${contactoBuscaco.nombre}, telefono: ${contactoBuscaco.telefono}`);

console.log(`Lista final:`);
listarContactos(nuevaAgenda);



// 13. Crear un arreglo alumnos con objetos { id, nombre, notas: [números] }. Luego:
//     a. Usar map() + reduce() para generar un nuevo array, que tenga guardado cada objeto con: el nombre del alumno, el id y el promedio de sus notas.
//     b. Generar un nuevo arreglo con solo los aprobados (promedio >= 6).
//     c. Mostrar en consola la lista de aprobados.
const alumnos = [
    {
        id: 1,
        nombre: "Julieta",
        notas: [10, 9, 10, 8]
    },
    {
        id: 2,
        nombre: "Martín",
        notas: [6, 7, 5, 8]
    },
    {
        id: 3,
        nombre: "Sofía",
        notas: [4, 3, 5, 6]
    },
    {
        id: 4,
        nombre: "Camila",
        notas: [9, 9, 10, 10]
    }
];

let nuevoArregloAlumnos = alumnos.map(a => {
    let promedio = a.notas.reduce((acc, n) => acc + n) / a.notas.length;
    return {
        nombre: a.nombre,
        id: a.id,
        promedioNotas: promedio
    }
})
console.log(nuevoArregloAlumnos);

let alumnosAprobados = nuevoArregloAlumnos.filter(a => a.promedioNotas >= 6);
console.log(alumnosAprobados);