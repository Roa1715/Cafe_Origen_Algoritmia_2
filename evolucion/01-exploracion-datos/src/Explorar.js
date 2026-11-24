import { ventas } from './datos.js';
console.log("Cantidad de registros:", ventas.length);
console.log("Primer registro:", ventas[0]);
console.log("Último registro:", ventas[ventas.length - 1]);
console.log("Producto en la posición 4:", ventas[4].producto);
const { ventas } = require("./datos.js");
const { valorVenta } = require("./analitica.js");
console.log("valorVenta(ventas[0]):", valorVenta(ventas[0]));
console.log("valorVenta(ventas[7]):", valorVenta(ventas[7])); 