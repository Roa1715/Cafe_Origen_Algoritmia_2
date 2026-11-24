// pruebas.js: cada función con tres entradas (completo, un elemento, vacío).
// Activa cada bloque borrando las líneas "/*" y "*/" cuando hayas
// activado la función correspondiente en analitica.js.
// Ejecuta con: node src/pruebas.js

const { ventas } = require("./datos.js");
const {
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
} = require("./analitica.js");

const uno = [ventas[0]]; // un solo elemento
const vacio = [];        // arreglo vacío

console.log("valorVenta(ventas[0]):", valorVenta(ventas[0])); // 84000
console.log("valorVenta(ventas[7]):", valorVenta(ventas[7])); // 0

// --- totalVendido ---
/*
console.log("totalVendido completo:", totalVendido(ventas)); // 985000
console.log("totalVendido uno:", totalVendido(uno));         // 84000
console.log("totalVendido vacío:", totalVendido(vacio));     // 0
*/

// --- unidadesVendidas ---
/*
console.log("unidadesVendidas completo:", unidadesVendidas(ventas)); // 21
console.log("unidadesVendidas uno:", unidadesVendidas(uno));         // 2
console.log("unidadesVendidas vacío:", unidadesVendidas(vacio));     // 0
*/

// --- ventaMayor ---
/*
console.log("ventaMayor completo:", ventaMayor(ventas)); // id 10 (168000)
console.log("ventaMayor uno:", ventaMayor(uno));         // id 1
console.log("ventaMayor vacío:", ventaMayor(vacio));     // null
*/

// --- ticketPromedio ---
/*
console.log("ticketPromedio completo:", ticketPromedio(ventas)); // 985000 / 11 = 89545.45...
console.log("ticketPromedio uno:", ticketPromedio(uno));         // 84000
console.log("ticketPromedio vacío:", ticketPromedio(vacio));     // 0
*/

// --- ventasPorCiudad ---
/*
console.log("ventasPorCiudad Medellín completo:", ventasPorCiudad(ventas, "Medellín")); // 356000 (incluye "medellín ")
console.log("ventasPorCiudad ' MEDELLÍN ' completo:", ventasPorCiudad(ventas, " MEDELLÍN ")); // 356000
console.log("ventasPorCiudad Medellín uno:", ventasPorCiudad(uno, "Medellín"));   // 84000
console.log("ventasPorCiudad Cali uno:", ventasPorCiudad(uno, "Cali"));           // 0
console.log("ventasPorCiudad Medellín vacío:", ventasPorCiudad(vacio, "Medellín")); // 0
*/
