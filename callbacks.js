

const getUsuarioById =(id,callback)=>{

    const user={
        id,
        nombre: "Fernando"
    }


    setTimeout(() => {
        callback(user);
    }, 1000);
}


const imprimirUsiario =({nombre,id})=>{
    console.log(`nombre: ${nombre}`);
    console.log(`Id:${id}`);
}

getUsuarioById(10,imprimirUsiario);

/*
opcion 2 todo en 1
getUsuarioById(10,(usuario)=>{
    console.log(usuario.nombre)
})

*/
