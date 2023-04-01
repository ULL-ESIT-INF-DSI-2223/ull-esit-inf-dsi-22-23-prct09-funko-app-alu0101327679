// const fs = require('fs');

// // Función para guardar la lista de Funko de un usuario
// function guardarListaFunko(usuario, listaFunko) {
//   // Crear el directorio del usuario si no existe
//   if (!fs.existsSync(usuario)) {
//     fs.mkdirSync(usuario);
//   }

//   // Guardar cada Funko en un archivo JSON independiente
//   listaFunko.forEach((funko, index) => {
//     const filename = `${usuario}/funko_${index}.json`;
//     const data = JSON.stringify(funko, null, 2);
//     fs.writeFileSync(filename, data);
//   });
// }

// // Función para leer la lista de Funko de un usuario
// function leerListaFunko(usuario) {
//   const listaFunko = [];
//   const files = fs.readdirSync(usuario);

//   // Leer cada archivo JSON y parsear su contenido
//   files.forEach(file => {
//     const data = fs.readFileSync(`${usuario}/${file}`, 'utf-8');
//     listaFunko.push(JSON.parse(data));
//   });

//   return listaFunko;
// }