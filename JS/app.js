//primer ejercicio

let productos = [
    {
        id:1,
        name: "rice",
        price:5,
        stock:30
    }
    ,
    {
        id:2,
        name: "lettouse",
        price:2,
        stock:19   
    }
    ,
    {
          id:2,
        name: "pineapple",
        price:2,
        stock: 21
    }
    ,
    {
          id:2,
        name: "milk",
        price:1,
        stock:23 
    }
    ,
    {
          id:5,
        name: "meat",
        price:5,
        stock:45 
    }
]

productos.push({id:6,name:"pizza",price:40,stock:25})


productos.pop()


//segundo ejercicio

const filtrar = function(){
    return productos.filter(n => n.stock>20)
}

console.log(filtrar())

//tercer ejercicio.

let productoFiltrado = productos.find(n => n.name === "rce")

function showFind(callback){
    if(callback){
        return callback;
    }
    return "Product not found"
}



// cuarto ejercicio. 

const totalPrice = (a,b) => {
    const suma = productos.reduce((a,b) => a + b.price,0)
    return suma; 
}

console.log(totalPrice())

let promedio = function(){
    return totalPrice()/ productos.length
}

console.log(promedio())


//quinto ejercicio

function lessThan0(){
    return productos.some(x => x.stock===0)
}

function priceMoreThan100(){
    return productos.every(x => x.price>100)
}

console.log(lessThan0())

console.log(priceMoreThan100())

//sexto ejercicio

let clients = [
    {
        id:1,
        name: "mat",
        age:5,
        products: ["rice","DS","computer"]
    }
    ,
    {
         id:2,
        name: "max",
        age:12,
        products: ["Lemon","Soup"] 
    }
    ,
    {
         id:3,
        name: "john",
        age:32,
        products: ["TV,washing machine"]
    }
    ,
    {
         id:4,
        name: "eve",
        age:20,
        products: ["pilsen", "beer"]
    }
    ,
    {
        id:5,
        name: "mel",
        age:16,
        products: ["car", "bike","wheel"]
    }
]

function showClientsWithProducts(){
    clients.forEach(n => console.log(n.name + " "+ n.products))
}

showClientsWithProducts()









