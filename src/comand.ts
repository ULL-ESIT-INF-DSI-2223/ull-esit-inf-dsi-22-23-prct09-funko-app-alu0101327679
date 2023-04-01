// const yargs = require('yargs');
// // const { mostrarFunko, almacenarFunkoUsuario } = require('./tus-funciones');
import { Funko } from "./funco.js";
import { FuncosCollection } from "./funkoCollection.js";
import { funcosCollection } from "./main.js";
import { Tipo } from "./tipo.js";
import { Genero } from "./genero.js";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
// import { mostrarFunko, almacenarFunkoUsuario } from './tus-funciones';

yargs(hideBin(process.argv))
  .command(
    "mostrar",
    "Mostrar información de un Funko concreto",
    {
      id: {
        description: "ID del Funko",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      funcosCollection.mostrarFunkoUsuario(argv.id);
    }
  )
  .command(
    "add",
    "Añadir un nuevo Funko a la lista",
    {
      id: {
        description: "ID del Funko",
        type: "number",
        demand: true,
      },
      nombre: {
        description: "Nombre del Funko",
        type: "string",
        demandOption: true,
      },
      descripcion: {
        description: "Descripción del Funko",
        type: "string",
        demandOption: true,
      },
      tipo: {
        description: "Tipo del Funko",
        type: "string",
        choices: Object.values(Tipo),
        demandOption: true,
      },
      genero: {
        description: "Género del Funko",
        type: "string",
        choices: Object.values(Genero),
        demandOption: true,
      },
      franquicia: {
        description: "Franquicia del Funko",
        type: "string",
        demandOption: true,
      },
      numero: {
        description: "Número del Funko",
        type: "number",
        demandOption: true,
      },
      exclusivo: {
        description: "¿Es exclusivo?",
        type: "boolean",
        default: false,
      },
      caracteristicasEspeciales: {
        description: "Características especiales del Funko",
        type: "string",
        demandOption: true,
      },
      valorDeMercado: {
        description: "Valor de mercado del Funko",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
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
        argv.valorDeMercado
      );
      funcosCollection.almacenarFunkoUsuario(nuevoFunko);
    }
  )
  .help().argv;

// node dist/comand.js add --id 3 --nombre "paco" --descripcion "funko de paco" --tipo "Pop!" --genero "Animación" --franquicia "Disney" --numero 3 --exclusivo false --caracteristicasEspeciales "funko de paco" --valorDeMercado 300
