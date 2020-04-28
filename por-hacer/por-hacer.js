const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (error) => {
        if (error)
            throw new Error('No se ha podido grabar', error);
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = () => {

    let data = '';

    try {
        listadoPorHacer = require('../db/data.json');

        data = '...::: Por hacer :::...\n'.green;
        for (let i = 0; i < listadoPorHacer.length; i++) {
            data += "Tarea " + i + ": " + listadoPorHacer[i].descripcion + "\n    Estado: " + listadoPorHacer[i].completado + "\n";
        }
        data += '...:::::::::::::::::...'.green;

    } catch (error) {
        data = 'Error: No hay datos';
    }

    return data;

}

//funcion mas simplificada que la de arriba
//pero se pinta el array en el fichero principal
const getListado2 = () => {

    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();

        return true;
    }

}

module.exports = {
    crear,
    getListado,
    getListado2,
    actualizar,
    borrar
}