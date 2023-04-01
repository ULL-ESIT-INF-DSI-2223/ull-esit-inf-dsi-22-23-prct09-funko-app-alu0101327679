// const yargs = require('yargs');
// // const { mostrarFunko, almacenarFunkoUsuario } = require('./tus-funciones');
import { Funko } from "./funco.js";
import { FuncosCollection } from "./funkoCollection.js";
import { funcosCollection } from "./main.js";
import { Tipo } from "./tipo.js";
import { Genero } from "./genero.js";

let funcosCollectionPrueba = funcosCollection


// // Definir comandos y opciones
// const argv = yargs
//   .command('mostrar', 'Mostrar información de un Funko concreto', {
//     id: {
//       describe: 'ID del Funko',
//       demand: true,
//       type: 'number',
//     },
//   })
//   .command('añadir', 'Añadir un nuevo Funko a la lista', {
//     id: {
//       describe: 'ID del Funko',
//       demand: true,
//       type: 'number',
//     },
//     nombre: {
//       describe: 'Nombre del Funko',
//       demand: true,
//       type: 'string',
//     },
//     descripcion: {
//       describe: 'Descripción del Funko',
//       demand: true,
//       type: 'string',
//     },
//     tipo: {
//       describe: 'Tipo del Funko',
//       demand: true,
//       type: 'string',
//     },
//     genero: {
//       describe: 'Género del Funko',
//       demand: true,
//       type: 'string',
//     },
//     franquicia: {
//       describe: 'Franquicia del Funko',
//       demand: true,
//       type: 'string',
//     },
//     numero: {
//       describe: 'Número del Funko',
//       demand: true,
//       type: 'number',
//     },
//     exclusivo: {
//       describe: '¿Es exclusivo?',
//       demand: false,
//       type: 'boolean',
//       default: false,
//     },
//     caracteristicasEspeciales: {
//       describe: 'Características especiales del Funko',
//       demand: true,
//       type: 'string',
//     },
//     valorDeMercado: {
//       describe: 'Valor de mercado del Funko',
//       demand: true,
//       type: 'number',
//     },
//   })
//   .help().argv;

// // Ejecutar comandos
// if (argv._[0] === 'mostrar') {
//   funcosCollectionPrueba.mostrarFunkoUsuario(argv.id);
// } else if (argv._[0] === 'añadir') {
//   const nuevoFunko = new Funko(
//     argv.id,
//     argv.nombre,
//     argv.descripcion,
//     argv.tipo,
//     argv.genero,
//     argv.franquicia,
//     argv.numero,
//     argv.exclusivo,
//     argv.caracteristicasEspeciales,
//     argv.valorDeMercado
//   );
//   funcosCollectionPrueba.almacenarFunkoUsuario(nuevoFunko);
// } else {
//   console.log('Comando no reconocido.');
// }

// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers';

// yargs(hideBin(process.argv))
//   .command('add', 'Adds a funko', {
//   id: {
//    description: 'Funko ID',
//    type: 'number',
//    demandOption: true
//   }
//  }, (argv) => {
//   console.log(argv.id);
//  })
//  .help()
//  .argv;
 
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
// import { mostrarFunko, almacenarFunkoUsuario } from './tus-funciones';

yargs(hideBin(process.argv))
  .command('mostrar', 'Mostrar información de un Funko concreto', {
    id: {
      description: 'ID del Funko',
      type: 'number',
      demandOption: true,
    },
  }, (argv) => {
    funcosCollection.mostrarFunkoUsuario(argv.id);
  })
  .command('add', 'Añadir un nuevo Funko a la lista', {
    id: {
      description: 'ID del Funko',
      type: 'number',
      demand: true,
    },
    nombre: {
      description: 'Nombre del Funko',
      type: 'string',
      demandOption: true,
    },
    descripcion: {
      description: 'Descripción del Funko',
      type: 'string',
      demandOption: true,
    },
    tipo: {
      description: 'Tipo del Funko',
      type: "string",
      choices: Object.values(Tipo),
      demandOption: true,
    },
    genero: {
      description: 'Género del Funko',
      type: 'string',
      choices: Object.values(Genero),
      demandOption: true,
    },
    franquicia: {
      description: 'Franquicia del Funko',
      type: 'string',
      demandOption: true,
    },
    numero: {
      description: 'Número del Funko',
      type: 'number',
      demandOption: true,
    },
    exclusivo: {
      description: '¿Es exclusivo?',
      type: 'boolean',
      default: false,
    },
    caracteristicasEspeciales: {
      description: 'Características especiales del Funko',
      type: 'string',
      demandOption: true,
    },
    valorDeMercado: {
      description: 'Valor de mercado del Funko',
      type: 'number',
      demandOption: true,
    },
  }, (argv) => {
    const nuevoFunko = new Funko(
       argv.id,
       argv.nombre,
       argv.descripcion,
       argv.tipo,
       argv.genero,
       argv.franquicia,
       argv.numero,
       argv.exclusivo,
       argv.caracteristicasEspeciales,
       argv.valorDeMercado,
    );
    funcosCollection.almacenarFunkoUsuario(nuevoFunko);
  })
  .help()
  .argv;

  // node dist/comand.js add --id 3 --nombre "paco" --descripcion "funko de paco" --tipo "Pop!" --genero "Animación" --franquicia "Disney" --numero 3 --exclusivo false --caracteristicasEspeciales "funko de paco" --valorDeMercado 300