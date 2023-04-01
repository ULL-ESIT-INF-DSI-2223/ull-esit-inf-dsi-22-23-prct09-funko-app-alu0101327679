import fs from "fs";

const usuario = "Juan Pérez";
const usuario2 = "Pepe";
const funko1 = { nombre: "Batman", marca: "Funko", precio: 15 };
const funko2 = { nombre: "Spider-Man", marca: "Funko", precio: 20 };
const funko3 = { nombre: "señor 1", marca: "Funko", precio: 20 };
const funko4 = { nombre: "señor 2", marca: "Funko", precio: 20 };

// Función para almacenar un Funko en un archivo JSON
function almacenarFunko(
  usuario: string,
  funko: { nombre: string; marca: string; precio: number }
) {
  const fileName = funko.nombre.toLowerCase().replace(/\s+/g, "-") + ".json";
  const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
  const filePath = `./funkos/${dirName}/${fileName}`;

  fs.mkdirSync(`./funkos/${dirName}`, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(funko));
}

// Función para cargar los Funko de un usuario desde los archivos JSON
function cargarFunkos(usuario: string) {
  const dirName = usuario.toLowerCase().replace(/\s+/g, "-");
  const dirPath = `./funkos/${dirName}`;

  if (fs.existsSync(dirPath)) {
    const fileNames = fs.readdirSync(dirPath);
    const funkos: { nombre: string; marca: string; precio: number }[] = [];

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

// Ejemplo de uso

almacenarFunko(usuario, funko1);
almacenarFunko(usuario, funko2);
almacenarFunko(usuario2, funko3);
almacenarFunko(usuario2, funko4);

const funkosDeJuan = cargarFunkos(usuario);
const funkosDePepe = cargarFunkos(usuario2);
console.log(funkosDeJuan);
console.log(funkosDePepe);
