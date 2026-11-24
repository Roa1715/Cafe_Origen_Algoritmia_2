
const { ventas } = require("./datos.js");
const {
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
} = require("./analitica.js");

const uno = [ventas[0]]; 
const vacio = [];       

console.log("valorVenta(ventas[0]):", valorVenta(ventas[0])); 
console.log("valorVenta(ventas[7]):", valorVenta(ventas[7])); 

// --- totalVendido ---

console.log("totalVendido completo:", totalVendido(ventas)); 
console.log("totalVendido uno:", totalVendido(uno));         
console.log("totalVendido vacío:", totalVendido(vacio));     


// --- unidadesVendidas ---
console.log("unidadesVendidas completo:", unidadesVendidas(ventas)); 
console.log("unidadesVendidas uno:", unidadesVendidas(uno));         
console.log("unidadesVendidas vacío:", unidadesVendidas(vacio));    

// --- ventaMayor ---

console.log("ventaMayor completo:", ventaMayor(ventas)); 
console.log("ventaMayor uno:", ventaMayor(uno));         
console.log("ventaMayor vacío:", ventaMayor(vacio));    


// --- ticketPromedio ---

console.log("ticketPromedio completo:", ticketPromedio(ventas)); 
console.log("ticketPromedio uno:", ticketPromedio(uno));         
console.log("ticketPromedio vacío:", ticketPromedio(vacio));    
// --- VENTAS POR CIUDAD ---

console.log("ventasPorCiudad Medellín completo:", ventasPorCiudad(ventas, "Medellín")); 
console.log("ventasPorCiudad ' MEDELLÍN ' completo:", ventasPorCiudad(ventas, " MEDELLÍN ")); 
console.log("ventasPorCiudad Medellín uno:", ventasPorCiudad(uno, "Medellín"));   
console.log("ventasPorCiudad Cali uno:", ventasPorCiudad(uno, "Cali"));           
console.log("ventasPorCiudad Medellín vacío:", ventasPorCiudad(vacio, "Medellín")); 
