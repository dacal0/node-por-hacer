// const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv;

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        // let listado = porHacer.getListado();
        // console.log(listado);
        let listado = porHacer.getListado2(argv.completado);
        for (let tarea of listado) {
            console.log('...::: Por hacer :::...'.green);
            console.log("Tarea: " + tarea.descripcion + "\nEstado: " + tarea.completado);
            console.log('...:::::::::::::::::...'.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido.");
}