import fs from "fs";
import path from "path";
import chalk, { ChalkInstance } from "chalk";

import { Funko } from "./funco.js";
import { Tipo } from "./tipo.js";
import { Genero } from "./genero.js";
import { FuncosCollection } from "./funkoCollection.js";

//test de usuario de la clase Funko
export const funko1 = new Funko(
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

export const funko2 = new Funko(
  2,
  "Superman",
  "Funko de Superman",
  Tipo.VINYL_SODA,
  Genero.ANIMACION,
  "DC Comics",
  2,
  true,
  "Edicion FlashPoint",
  100
);

export const funko3 = new Funko(
  3,
  "Joker",
  "Funko de Joker",
  Tipo.VINYL_SODA,
  Genero.ANIMACION,
  "DC Comics",
  3,
  true,
  "Edicion FlashPoint",
  150
);

export const funko4 = new Funko(
  4,
  "Flash",
  "Funko de Flash",
  Tipo.VINYL_SODA,
  Genero.ANIMACION,
  "DC Comics",
  4,
  true,
  "Edicion FlashPoint",
  200
);

//test de usuario de la clase FuncosCollection
export const listaFunkos = [funko1, funko2];
export const listaFunkos2 = [funko3, funko4];
export const listaFunkos3 = [funko1, funko2, funko3, funko4];
export const listaFunkos4 = [funko1, funko2, funko3, funko4];

export const funcosCollection = new FuncosCollection(listaFunkos, "antonio");
export const funcosCollection2 = new FuncosCollection(listaFunkos2, "saul");
export const funcosCollection3 = new FuncosCollection(listaFunkos3, "jorge");
export const funcosCollection4 = new FuncosCollection(listaFunkos4, "sara");

//-----------------------------------//
/**
 * funcion para almacenar un funko en un archivo json
 * @param usuario nombre del usuario
 * @param funko funko a almacenar
 */
function almacenarFunko(usuario: string, funko: Funko) {
  const fileName = funko.id + ".json";
  const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
  const filePath = `./funkos/${dirName}/${fileName}`;

  fs.mkdirSync(`./funkos/${dirName}`, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(funko));
}

function eliminarFunko(usuario: string, nombreFunko: string) {
  const fileName = nombreFunko.toLowerCase().replace(/\s+/g, "-") + ".json";
  const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
  const filePath = `./funkos/${dirName}/${fileName}`;

  try {
    fs.unlinkSync(filePath);
    console.log(`El Funko "${nombreFunko}" fue eliminado correctamente.`);
  } catch (error) {
    console.error(
      `Error al intentar eliminar el Funko "${nombreFunko}":`,
      error
    );
  }
}

/**
 * funcion para cargar los funkos de un usuario
 * @param usuario nombre del usuario
 */
function cargarFunkos(usuario: string) {
  const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
  const dirPath = `./funkos/${dirName}`;

  if (fs.existsSync(dirPath)) {
    const fileNames = fs.readdirSync(dirPath);
    const funkos: Funko[] = [];

    fileNames.forEach((fileName: string) => {
      const filePath = `${dirPath}/${fileName}`;
      const fileContent = fs.readFileSync(filePath, "utf8");
      const funko = JSON.parse(fileContent);
      funkos.push(funko);
    });

    return funkos;
  } else {
    return [];
  }
}

/**
 * metodo para modificar un funko del usuario
 * @param usuario nombre del usuario
 * @param nombre nombre del funko
 * @param nuevoFunko nuevo funko
 */
function modificarFunko(usuario: string, nombre: string, nuevoFunko: Funko) {
  const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
  const filePath = `./funkos/${dirName}/${nombre}.json`;

  if (fs.existsSync(filePath)) {
    const nuevoContenido = JSON.stringify(nuevoFunko);
    fs.writeFileSync(filePath, nuevoContenido, "utf8");
    console.log(`El Funko "${nombre}" ha sido modificado exitosamente.`);
  } else {
    console.log(`No se encontró el archivo del Funko "${nombre}".`);
  }
}

function listarFunkos(funkos: Funko[]) {
  const valorMinimo = 0;
  const valorBajo = 50;
  const valorMedio = 100;
  const valorAlto = 500;

  console.log(chalk.bold("Funkos existentes:"));
  // console.log('');

  for (const funko of funkos) {
    const valor = funko.valorDeMercado;

    let valorColoreado: string;

    if (valor >= 200) {
      valorColoreado = chalk.green.bold(valor.toFixed(2));
    } else if (valor >= 150) {
      valorColoreado = chalk.yellow.bold(valor.toFixed(2));
    } else if (valor >= 100) {
      valorColoreado = chalk.blue.bold(valor.toFixed(2));
    } else {
      valorColoreado = chalk.red.bold(valor.toFixed(2));
    }

    console.log(
      chalk.bold.magenta(funko.nombre) +
        " - Valor de mercado: " +
        valorColoreado
    );
  }
}

function mostrarFunko(usuario: string, id: number): void {
  const fileName = `${id}.json`;
  const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
  const filePath = `./funkos/${dirName}/${fileName}`;

  try {
    const data = fs.readFileSync(filePath, "utf8");
    const foundFunko = JSON.parse(data);
    console.log(chalk.magenta.bold(`Información del Funko con ID ${id}:`));
    console.log(`Nombre: ${foundFunko.nombre}`);
    console.log(`Descripción: ${foundFunko.descripcion}`);
    console.log(`Tipo: ${foundFunko.tipo}`);
    console.log(`Género: ${foundFunko.genero}`);
    console.log(`Franquicia: ${foundFunko.franquicia}`);
    console.log(`Número: ${foundFunko.numero}`);
    console.log(`Exclusivo: ${foundFunko.exclusivo ? "Sí" : "No"}`);
    console.log(
      `Características especiales: ${foundFunko.caracteristicasEspeciales}`
    );

    const valor = foundFunko.valorDeMercado;
    let color: ChalkInstance;
    if (valor > 200) {
      color = chalk.green;
    } else if (valor >= 150) {
      color = chalk.yellow;
    } else if (valor >= 100) {
      color = chalk.blue;
    } else {
      color = chalk.red;
    }
    console.log(`Valor de mercado: ${color.bold(`$${valor.toFixed(2)}`)}`);
  } catch (err) {
    console.log(chalk.red(`No existe un Funko con ID ${id} en la lista.`));
  }
}

// listaFunkos.forEach((funko) => {
//   almacenarFunko('usuario1', funko);
// });

// listaFunkos4.forEach((funko) => {
//   almacenarFunko('usuario2', funko);
// });

// let funkos = cargarFunkos('usuario1');
// let funkos4 = cargarFunkos('usuario2');

// listarFunkos(funkos);
// listarFunkos(funkos4);
// console.log(funkos4);

// mostrarFunko('usuario2', 1);
// // const funkos2 = cargarFunkos('usuario2');

// eliminarFunko('usuario1', 'Batman');

// console.log(cargarFunkos('usuario1'));
// console.log("///////////////////////////////////////////////")
// modificarFunko('usuario1', funko1.id.toString(), funko2);
// console.log(cargarFunkos('usuario1'));
// console.log(funkos2);

//-----------------------------------//

// console.log(listaFunkos[0].id);
// funcosCollection.mostrarFunko(4)
// funcosCollection.addFunko(funko1)
// funcosCollection.modificarFunko(2, funko3)
// funcosCollection2.modificarFunko(2, funko2);
// funcosCollection3.eliminarFunko(3);
// funcosCollection4.listarFunkos();

//-----------------------------------//
// console.log(funcosCollection)

// funcosCollection.almacenarFunkosUsuario([funko4, funko3]);//

//
let funkos1 = funcosCollection.cargarFunkosUsuario();
funcosCollection.almacenarFunkoUsuario(funko4);
// funcosCollection.listarFunkosUsuario()
// funcosCollection.eliminarFunkoUsuario(1)
// funkos1 = funcosCollection.cargarFunkosUsuario();
// funcosCollection.listarFunkosUsuario()
// funcosCollection.modificarFunkoUsuario(2, funko3)
// funkos1 = funcosCollection.cargarFunkosUsuario();
// funcosCollection.listarFunkosUsuario()

//
// funcosCollection.almacenarFunkos([funko3, funko4]);
// console.log("//-----------------------------------//")

// console.log(funcosCollection.cargarFunkos())
