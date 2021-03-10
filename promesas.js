const empleados=[
    {
        id:1,
        nombre:"Mauro"
    },
    {
        id:2,
        nombre:"German"
    },
    {
        id:3,
        nombre:"Ivo"
    }

]
const sueldos=[
    {
        id:1,
        salario:1500
    },
    {
        id:2,
        salario:2000
    }

]

const getUsuarioById=(id)=>{

    return new Promise((resolve,reject)=>{

        const empleado=empleados.find((e)=>e.id==id)

        if(empleado){
            resolve(empleado)
        }else{
            reject(`El empleado con id ${id} no existe`)
        }
    })
  
}
const getSalarioById=(id)=>{
    return new Promise((resolve, reject)=>{
        const sueldo=sueldos.find((s)=>s.id==id)
        if(sueldo){
            resolve(sueldo);
        }else{
            reject(`El empleado con id ${id} no tiene sueldo`)
        }

    })
}

const idSelector=1
let nombre;

getUsuarioById(idSelector)

    .then((empleado)=>{
        nombre=empleado.nombre;
        return getSalarioById(idSelector);
    })
    .then((sueldo)=>{
        console.log(`El sueldo del empleado ${nombre} es de ${sueldo.salario}`);
    })

    .catch((error)=> console.log(error))