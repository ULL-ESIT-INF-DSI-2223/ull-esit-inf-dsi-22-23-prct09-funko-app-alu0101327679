import fs from "fs";
import path from "path";
import chalk, { ChalkInstance } from "chalk";

import { Funko } from "./funco.js";

/**
 * clase para definir la coleccion de funkos que tenemos
 * @param lista lista de funkos que tenemos
 */
export class FuncosCollection {
  /**
   * constructor de la clase funko
   * @param lista lista de funkos que tenemos
   */
  constructor(private lista: Funko[], private usuario: string) {
    this.almacenarFunkosUsuario(lista);
  }

  /**
   * metodo para añaadir un funko a la lista
   * @param funko funko que queremos añadir a la lista
   */
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
  /**
   * metodo para modificar un funko de la lista
   * @param id id del funko que queremos modificar
   * @param nuevoFunko el nuevo funko que sustituirá al funko con la id indicada
   */
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

  /**
   * metodo para eliminar un funko de la lista
   * @param id id del funko que queremos eliminar
   */
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

  /**
   * metodo para listar los funkos de la lista
   */
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

  /**
   * metodo para mostrar la informacion de un funko
   * @param id id del funko que queremos mostrar
   */
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

  // Implementando el manejo de ficheros

  public almacenarFunkoUsuario(funko: Funko) {
    const fileName = funko.id + ".json";
    const dirName = this.usuario.toLowerCase().replace(/\s+/g, "-");
    const filePath = `./funkos/${dirName}/${fileName}`;

    fs.mkdirSync(`./funkos/${dirName}`, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(funko));
  }

  public almacenarFunkosUsuario(funkos: Funko[]) {
    funkos.forEach((funko) => this.almacenarFunkoUsuario(funko));
  }

  public eliminarFunkoUsuario( id: number) {
    const fileName = id.toString()+ '.json';
    const dirName = this.usuario.toLowerCase().replace(/\s+/g, '-');
    const filePath = `./funkos/${dirName}/${fileName}`;
  
    try {
      fs.unlinkSync(filePath);
      console.log(chalk.green(`El Funko "${id}" fue eliminado correctamente.`));
    } catch (error) {
      console.error(chalk.red(`Error al intentar eliminar el Funko "${id}"`));
    }
  }

  public cargarFunkosUsuario() {
    const dirName = this.usuario.toLowerCase().replace(/\s+/g, '-');
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

  public modificarFunkoUsuario(id: number, nuevoFunko: Funko) {
    const dirName = this.usuario.toLowerCase().replace(/\s+/g, '-');
    const filePath = `./funkos/${dirName}/${id.toString()}.json`;
  
    if (fs.existsSync(filePath)) {
      const nuevoContenido = JSON.stringify(nuevoFunko);
      fs.writeFileSync(filePath, nuevoContenido, 'utf8');
      console.log(`El Funko "${id.toString()}" ha sido modificado exitosamente.`);
    } else {
      console.log(`No se encontró el archivo del Funko "${id.toString()}".`);
    }
  }
  
  
public listarFunkosUsuario() {
  const valorMinimo = 0;
  const valorBajo = 50;
  const valorMedio = 100;
  const valorAlto = 500;

  console.log(chalk.bold('Funkos existentes:'));
  // console.log('');
  let funkos = this.cargarFunkosUsuario()
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

    console.log(chalk.bold.magenta(funko.nombre) + ' - Valor de mercado: ' + valorColoreado);
  }
}

public mostrarFunkoUsuario(id: number): void {
  const fileName = `${id}.json`;
  const dirName = this.usuario.toLowerCase().replace(/\s+/g, '-');
  const filePath = `./funkos/${dirName}/${fileName}`;

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const foundFunko = JSON.parse(data);
    console.log(chalk.magenta.bold(`Información del Funko con ID ${id}:`));
    console.log(`Nombre: ${foundFunko.nombre}`);
    console.log(`Descripción: ${foundFunko.descripcion}`);
    console.log(`Tipo: ${foundFunko.tipo}`);
    console.log(`Género: ${foundFunko.genero}`);
    console.log(`Franquicia: ${foundFunko.franquicia}`);
    console.log(`Número: ${foundFunko.numero}`);
    console.log(`Exclusivo: ${foundFunko.exclusivo ? "Sí" : "No"}`);
    console.log(`Características especiales: ${foundFunko.caracteristicasEspeciales}`);

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
}
