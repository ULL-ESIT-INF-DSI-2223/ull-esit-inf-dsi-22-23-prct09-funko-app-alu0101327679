import fs from 'fs';
import path from 'path';
import chalk from 'chalk';


import { Funko  } from "./funco.js"
import { Tipo } from "./tipo.js";
import { Genero } from "./genero.js";
import { FuncosCollection } from "./funkoCollection.js";

//test de usuario de la clase Funko
const funko1 = new Funko(
  1,
  "Batman",
  "Funko de Batman",
  Tipo.VINYL_SODA,
  Genero.ANIMACION,
  "DC Comics",
  1,
  true,
  "Edicion FlashPoint", 
  50
);

const funko2 = new Funko(
  2,
  "Superman",
  "Funko de Superman",
  Tipo.VINYL_SODA,
  Genero.ANIMACION,
  "DC Comics",
  2,
  true,
  "Edicion FlashPoint",
  50
);

const funko3 = new Funko(
  3,
  "Joker",
  "Funko de Joker",
  Tipo.VINYL_SODA,
  Genero.ANIMACION,
  "DC Comics",
  3,
  true,
  "Edicion FlashPoint",
  50
);

const funko4 = new Funko(
  4,
  "Flash",
  "Funko de Flash",
  Tipo.VINYL_SODA,
  Genero.ANIMACION,
  "DC Comics",
  4,
  true,
  "Edicion FlashPoint",
  50
);

//test de usuario de la clase FuncosCollection
const listaFunkos = [funko1, funko2];
const listaFunkos2 = [funko3, funko4];
const listaFunkos3 = [funko1, funko2, funko3, funko4];
const listaFunkos4 = [funko1, funko2, funko3, funko4];

const funcosCollection = new FuncosCollection(listaFunkos);
const funcosCollection2 = new FuncosCollection(listaFunkos2);
const funcosCollection3 = new FuncosCollection(listaFunkos3);
const funcosCollection4 = new FuncosCollection(listaFunkos4);


//-----------------------------------//
/**
 * funcion para almacenar un funko en un archivo json
 * @param usuario nombre del usuario
 * @param funko funko a almacenar
 */
function almacenarFunko(usuario: string, funko: Funko) {
  const fileName = funko.nombre.toLowerCase().replace(/\s+/g, '-') + '.json';
  const dirName = usuario.toLowerCase().replace(/\s+/g, '-');
  const filePath = `./funkos/${dirName}/${fileName}`;

  fs.mkdirSync(`./funkos/${dirName}`, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(funko));
}

/**
 * funcion para cargar los funkos de un usuario
 * @param usuario nombre del usuario
 */
function cargarFunkos(usuario:string) {
  const dirName = usuario.toLowerCase().replace(/\s+/g, '-');
  const dirPath = `./funkos/${dirName}`;

  if (fs.existsSync(dirPath)) {
    const fileNames = fs.readdirSync(dirPath);
    const funkos: Funko[]= [];

    fileNames.forEach((fileName:string) => {
      const filePath = `${dirPath}/${fileName}`;
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const funko = JSON.parse(fileContent);
      funkos.push(funko);
    });

    return funkos;
  } else {
    return [];
  }
}


function modificarFunko(usuario: string, nombre: string, nuevoFunko: Funko) {
  const dirName = usuario.toLowerCase().replace(/\s+/g, '-');
  const filePath = `./funkos/${dirName}/${nombre}.json`;

  if (fs.existsSync(filePath)) {
    const nuevoContenido = JSON.stringify(nuevoFunko);
    fs.writeFileSync(filePath, nuevoContenido, 'utf8');
    console.log(`El Funko "${nombre}" ha sido modificado exitosamente.`);
  } else {
    console.log(`No se encontró el archivo del Funko "${nombre}".`);
  }
}



listaFunkos.forEach((funko) => {
  almacenarFunko('usuario1', funko);
});

// listaFunkos2.forEach((funko) => {
//   almacenarFunko('usuario2', funko);
// });


const funkos = cargarFunkos('usuario1');
// const funkos2 = cargarFunkos('usuario2');
console.log(funkos);

modificarFunko('usuario1', 'batman', funko3);
console.log(cargarFunkos('usuario1'));
// console.log(funkos2);

//-----------------------------------//

// console.log(listaFunkos[0].id);
// funcosCollection.mostrarFunko(4)  
// funcosCollection.addFunko(funko1)
// funcosCollection.modificarFunko(2, funko3)
// funcosCollection2.modificarFunko(2, funko2);
// funcosCollection3.eliminarFunko(3);
// funcosCollection4.listarFunkos();

