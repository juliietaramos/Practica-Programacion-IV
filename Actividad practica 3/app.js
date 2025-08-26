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