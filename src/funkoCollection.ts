import chalk, { ChalkInstance } from "chalk";

import { Funko } from "./funco.js";

//collection of funcos
export class FuncosCollection {
  constructor(private lista: Funko[]) {}

  public addFunko(funko: Funko): void {
    const existe = this.lista.some((f) => f.id === funko.id);
    if (existe) {
      console.error(
        chalk.red(`Error: ya existe un Funko con el ID ${funko.id}`)
      );
    } else {
      this.lista.push(funko);
      console.log(chalk.green(`Funko añadido correctamente: ${funko.nombre}`));
    }
  }

  public modificarFunko(id: number, nuevoFunko: Funko): void {
    const indice = this.lista.findIndex((f) => f.id === id);
    if (indice === -1) {
      console.error(chalk.red(`Error: no existe un Funko con el ID ${id}`));
    } else {
      this.lista[indice] = nuevoFunko;
      console.log(
        chalk.green(`Funko modificado correctamente: ${nuevoFunko.nombre}`)
      );
    }
  }

  public eliminarFunko(id: number): void {
    const index = this.lista.findIndex((f) => f.id === id);
    if (index === -1) {
      console.log(
        chalk.red(`Error: no existe un Funko con el ID ${id} en la lista.`)
      );
      return;
    }
    this.lista.splice(index, 1);
    console.log(
      chalk.green(`El Funko con el ID ${id} ha sido eliminado de la lista.`)
    );
  }

  public listarFunkos(): void {
    const range1 = 50;
    const range2 = 100;
    const range3 = 150;
    const range4 = 200;

    console.log(
      chalk.bold.green("Funkos con valor de mercado superior a", range4)
    );
    this.lista
      .filter((elemento) => elemento.valorDeMercado > range4)
      .forEach((elemento) =>
        console.log(
          `ID: ${elemento.id}, Nombre: ${
            elemento.nombre
          }, Valor de mercado: ${chalk.bold.green(elemento.valorDeMercado)}`
        )
      );
    console.log(
      chalk.bold.yellow(
        "Funkos con valor de mercado entre",
        range3,
        "y",
        range4
      )
    );
    this.lista
      .filter((f) => f.valorDeMercado >= range3 && f.valorDeMercado <= range4)
      .forEach((f) =>
        console.log(
          `ID: ${f.id}, Nombre: ${
            f.nombre
          }, Valor de mercado: ${chalk.bold.yellow(f.valorDeMercado)}`
        )
      );

    console.log(
      chalk.bold.blue("Funkos con valor de mercado entre", range2, "y", range3)
    );
    this.lista
      .filter((f) => f.valorDeMercado >= range2 && f.valorDeMercado < range3)
      .forEach((f) =>
        console.log(
          `ID: ${f.id}, Nombre: ${
            f.nombre
          }, Valor de mercado: ${chalk.bold.blue(f.valorDeMercado)}`
        )
      );

    console.log(
      chalk.bold.red("Funkos con valor de mercado inferior a", range2)
    );
    this.lista
      .filter((f) => f.valorDeMercado <= range1)
      .forEach((f) =>
        console.log(
          `ID: ${f.id}, Nombre:  ${
            f.nombre
          }, Valor de mercado:  ${chalk.bold.red(f.valorDeMercado)}`
        )
      );
  }

  public mostrarFunko(id: number): void {
    const foundFunko = this.lista.find((f) => f.id === id);
    if (foundFunko) {
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
    } else {
      console.log(chalk.red(`No existe un Funko con ID ${id} en la lista.`));
    }
  }
}
