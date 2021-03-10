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

const getEmpleadoById= async(id)=>{

        //En esta funcion especificamente no hace falta el TRY y CATCH porque el.find no va a devolver una excepcion pero en general va TRY Y CATCH.
    try {
        const empleado=empleados.find((e)=>e.id==id)
        if(empleado){
            return empleado;
        }
        throw new Error(`El empleado con id ${id} no existe`)
    } catch (error) {
        throw error;
    }


            
        }
    
  const getSueldoById= async(id)=>{

    try {
        const sueldo=sueldos.find((s)=>s.id==id)
        if(sueldo){
            return sueldo;
        }
        throw new Error(`El empleado con id ${id} no tiene sueldo`)
    } catch (error) {
        throw error;
    }
  }
    const idSelector=1;

//Esta funcion de a continuacion junta toda la data del empleado y el sueldo y luego devuelve la data cuando llamamos a esa funcion
    const getDatos= async (idSelector)=>{

        try {
            const empleado= await getEmpleadoById(idSelector);
            const sueldo=await getSueldoById(idSelector);
            return {
                idSelector,
                nombre: empleado.nombre,
                sueldo: sueldo.salario,
            }
        } catch (error) {
            throw error;
        }


    }
//aca se devuelde la data que junto la funcion
    getDatos(idSelector)
    .then(data=>console.log(`el empleado con id ${data.idSelector} es ${data.nombre} y tiene un sueldo de ${data.sueldo}`))
    .catch(err=>console.log(err.message))

  