import fs from 'fs';
import path from 'path';

import { Funko  } from "./funco.js"
import { Tipo } from "./tipo.js";
import { Genero } from "./genero.js";
import { FuncosCollection } from "./funkoCollection.js";

//test de usuario de la clase Funko
const funko1 = new Funko(
  1,
  "funko1",
  "descripcion1",
  Tipo.VINYL_SODA,
  Genero.ANIMACION,
  "franquicia1",
  1,
  true,
  "caracteristicasEspeciales1",
  50
);

const funko2 = new Funko(
  2,
  "funko2",
  "descripcion2",
  Tipo.POP,
  Genero.DEPORTES,
  "franquicia2",
  2,
  true,
  "caracteristicasEspeciales2",
  100
);

const funko3 = new Funko(
  3,
  "funko3",
  "descripcion3",
  Tipo.POP_RIDES,
  Genero.MUSICA,
  "franquicia3",
  3,
  true,
  "caracteristicasEspeciales3",
  200
);

const funko4 = new Funko(
  4,
  "funko4",
  "descripcion4",
  Tipo.VINYL_GOLD,
  Genero.VIDEOJUEGOS,
  "franquicia4",
  4,
  true,
  "caracteristicasEspeciales4",
  400
);

// console.log(funko1);

//test de usuario de la clase FuncosCollection
const listaFunkos = [funko1, funko2, funko3, funko4];
const listaFunkos2 = [funko1, funko2, funko3, funko4];
const listaFunkos3 = [funko1, funko2, funko3, funko4];
const listaFunkos4 = [funko1, funko2, funko3, funko4];

const funcosCollection = new FuncosCollection(listaFunkos);
const funcosCollection2 = new FuncosCollection(listaFunkos2);
const funcosCollection3 = new FuncosCollection(listaFunkos3);
const funcosCollection4 = new FuncosCollection(listaFunkos4);




//-----------------------------------//

// function guardarFunko(usuario: string, listaFunko: FuncosCollection) {
//   const directorioUsuario = path.join(__dirname, usuario);
//   if (!fs.existsSync(directorioUsuario)) {
//     fs.mkdirSync(directorioUsuario);
//   }

//   const ficheroUsuario = path.join(directorioUsuario, 'funko.json');
//   fs.writeFileSync(ficheroUsuario, JSON.stringify(listaFunko));
// }

// function cargarFunko(usuario: string) {
//   const ficheroUsuario = path.join(__dirname, usuario, 'funko.json');
//   if (!fs.existsSync(ficheroUsuario)) {
//     return [];
//   }

//   const datosFunko = fs.readFileSync(ficheroUsuario, 'utf8');
//   return JSON.parse(datosFunko);
// }

// guardarFunko("Paco", funcosCollection)

//-----------------------------------//

// console.log(listaFunkos[0].id);
funcosCollection.mostrarFunko(4)  
funcosCollection.addFunko(funko1)
funcosCollection.modificarFunko(2, funko3)
funcosCollection2.modificarFunko(2, funko2);
funcosCollection3.eliminarFunko(3);
funcosCollection4.listarFunkos();

