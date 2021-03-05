class persona{
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad
    }

caminar(){
    alert("caminando");
}


get getNombre(){
    return this.nombre;
}
get getApellido(){
    return this.apellido;
}
get getEdad(){
    return this.edad;
}
set setNombre(nombre){
    this.nombre=nombre;
}
set setApellido(apellido){
    this.apellido=apellido;
}
set setEdad(edad){
    this.edad=edad;
}

toString(){
    return `Nombre: ${this.getNombre}, Apellido: ${this.getApellido}, Edad: ${this.getEdad}`
}
}


//MAIN
p1= new persona("Mauro","Corrales","28");

p1.caminar();

//DESTRUCTURACION DE OBJETO
let{nombre,apellido,edad}=p1;
console.log(nombre,apellido,edad);

//DESTRUCTURACION DE OBJETO EN FUNCION

const imprimirPersonaje=({nombre,apellido,edad})=>{
    console.log(nombre,apellido,edad);
}
imprimirPersonaje(p1);

//DESTRUCTURACION DE ARREGLO

const numeros=[1,2,3];

const[,,three]=numeros;
console.log(three);

