const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('crear', 'Crear una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listar', 'Muestra la lista de tareas', {
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}