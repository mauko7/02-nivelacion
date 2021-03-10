
const empleados=[

    {
        id:1,
        nombre:"Mauro"

    },
    {
        id:2,
        nombre:"Ivo"


    },
    {
        id:3,
        nombre:"Fer"

    }
]

const sueldos=[
    {
        id:1,
        sueldo:1500
    },
    {
        id:2,
        sueldo:2000
    }
]

const getUsuarioById=(id,callback)=>{
   const empleado= empleados.find((e)=> e.id ===id)

   if(empleado){
       callback(null,empleado);
   }else{
       callback(new Error("El empleado no existe"))
   }
}

const getSueldoById=(id,callback)=>{
    sueldo=sueldos.find((s)=>s.id==id);
    if(sueldo){
        callback(null,sueldo)
    }else{
        callback(new Error("No tiene sueldo"))
    }
}

const id=1;

getUsuarioById(id,(error,empleado)=>{
    if(error){
        console.log(error);
    }else{
        getSueldoById(id,(error,sueldo)=>{
            if(error){
                console.log(error);
            }else{
                console.log(`El empleado ${empleado.nombre} tiene un sueldo de $${sueldo.sueldo}`);
            }


        })


    }
});

