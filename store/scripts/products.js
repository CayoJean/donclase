const producto1 = {
    nombre: "Celular",
    precio: 100000,
    stock: 2,
};


console.log(producto1);

producto1.id = "id123";
producto1.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
producto1["Detalle"] = "Escribir el Detalle del Cellar";
producto1["Color"] = "gris";

console.log(producto1);

console.log (producto1.nombre);

console.log (producto1["foto"]);





class Product {
constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    //Atributo Privado
    this._supplier = supplier;
    }

    //Metodos getter y setter del atributo privado
    get supplier() {
        return this._supplier;
    }

    set supplier(newSupplier) {
        this._supplier = newSupplier;
    }

    //define el método sellUnits para que cumpla los requerimientos
    sellUnits(units) {
        if (units > this.stock) {
            console.log ("No hay suficiente stock");
            return;
        }
        this.stock = this.stock = units;
    }
}


//Instanciamos un Objeto
const prod1 = new Product(); 
//Varieble prod2 para crear una instancia de Product con las propiedades id, titte y price
const prod2 = new Product("0002", "Tablet", 1200);
//Varieble prod3 para crear una instancia de Product con las propiedades que requiera la clase
const prod3 = new Product("0003" , "Smartphone" , 800, 5, "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", true);
//prod4 para crear una instancia de Product con todas las propiedades que requiere la clase
const prod4 = new Product("0004" , "Smartwatch" , 300, 10, "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", false, "Samsung");
//Variable prod5 para crear una instancia de Product con todas las propiedades que requiere la clase. Debe tener 12 uniddes de stock
const prod5 = new Product("0005" , "Smartwatch" , 300, 12, "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", false, "Samsung");


//Modifica valor de atributo Privado
prod4.supplier = "Samsung Electronics";
//Programa la impresión en consola del getter de prod4.
console.log(`El proveedor del producto 4 es: ${prod4.supplier}`);

//Ejecuta el método sellUnits para vender 10 unidades
prod5.sellUnits(10);
//Ejecuta el método sellUnits para vender 5 unidades
prod5.sellUnits(5);

//Impresión por consola
console.log("Productos: ");
console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4);
console.log(prod5);

console.log(`Nombre del Producto 2: ${prod2.name}`);
console.log(`Se encuentra en oferta el Producto 3: ${prod3["onsale"]}`)




const arreglo = ["primer", 25, "hola", { name: "eggsy" }, true];
const edades = [15, 20, 30, 60, 80];

console.log ("PRIMER ELEMENTO DE ARRAY:" + arreglo[0]);
console.log ("SEGUNDO ELEMENTO DE ARRAY:" + arreglo[1]);
console.log ("TERCER ELEMENTO DE ARRAY:" + arreglo[2]);
console.log ("ULTIMO ELEMENTO DE ARRAY:" + arreglo[arreglo.length - 1]);



const arreglos = ["hola","como","estas","mi","amigo"];
console.log(arreglos);
/*unshift*/
arreglos.unshift("¿¿¿");

/*push*/
arreglos.push("¿¿¿");

console.log(arreglos);

/*shift*/
arreglos.shift();

/*pop*/
arreglos.pop();





console.log(arreglos);

for (let i=0; i<edades.length; i++) {
    console.log(edades[i]);
    console.log("La edad de la personas es: "+edades[i]);
}

for (let edad of edades) {
    console.log("La edad con for of es: " + edad);
}

for (let cadaElemento of arreglo) {
    console.log(cadaElemento);
}









// Constructor de productos
function Producto(name, price, colors, description, images) {
    this.name = name;
    this.price = price;
    this.colors = colors;
    this.description = description;
    this.images = images;
}

// Lista de productos
const products = [
    new Product(
        "Camiseta",
        19.99,
        ["Rojo", "Azul", "Negro"],
        "Una camiseta de algodón suave y cómoda para uso diario.",
        ["camiseta1.jpg", "camiseta2.jpg", "camiseta3.jpg"]
    ),
    new Product(
        "Zapatos deportivos",
        59.99,
        ["Blanco", "Negro", "Gris"],
        "Zapatos deportivos ligeros y transpirables para correr o hacer ejercicio.",
        ["zapatos1.jpg", "zapatos2.jpg", "zapatos3.jpg"]
    ),
    new Product(
        "Pantalones vaqueros",
        39.99,
        ["Azul", "Negro", "Gris"],
        "Pantalones vaqueros clásicos para un look casual.",
        ["pantalones1.jpg", "pantalones2.jpg"]
    ),
    new Product(
        "Bolso de mano",
        29.99,
        ["Marrón", "Negro", "Beige"],
        "Un bolso de mano elegante y funcional para llevar tus cosas.",
        ["bolso1.jpg", "bolso2.jpg"]
    )
];

// Impresión para observar los cambios en la lista de productos
console.log(products);

