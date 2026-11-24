// reproducir_errores.js: reproduce los dos errores y demuestra que la versión actual ya no los tiene.
// Ejecuta con: node src/reproducir_errores.js
const { ventas } = require("./datos.js");
const { ventasPorCiudad, ticketPromedio } = require("./analitica.js");

// ---------------- ERROR 1: Medellín no suma la venta de "medellín " ----------------
// Versión con el defecto: compara el texto tal cual, sin normalizar.
function ventasPorCiudadConError(ventas, ciudad) {
  let total = 0;
  for (const venta of ventas) {
    if (venta.ciudad === ciudad) {
      total += venta.cantidad * venta.precio;
    }
  }
  return total;
}

console.log("ERROR 1: ventas de Medellín");
console.log("  con el defecto  :", ventasPorCiudadConError(ventas, "Medellín")); // 221000 (falta la venta id 5)
console.log("  versión actual  :", ventasPorCiudad(ventas, "Medellín"));         // 356000
console.log("  diferencia      :", ventasPorCiudad(ventas, "Medellín") - ventasPorCiudadConError(ventas, "Medellín"), "(= 135000, la venta id 5)");
// Prueba mínima que aísla la causa:
console.log('  "medellín " === "Medellín" ->', "medellín " === "Medellín"); // false
console.log('  normalizados               ->', "medellín ".trim().toLowerCase() === "Medellín".trim().toLowerCase()); // true

// ---------------- ERROR 2: NaN con el arreglo vacío ----------------
// Versión con el defecto: divide sin revisar si hay ventas válidas.
function ticketPromedioConError(ventas) {
  let total = 0;
  let validas = 0;
  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      total += venta.cantidad * venta.precio;
      validas += 1;
    }
  }
  return total / validas;
}

console.log("\nERROR 2: ticket promedio con arreglo vacío");
console.log("  con el defecto  :", ticketPromedioConError([])); // NaN (0 / 0)
console.log("  versión actual  :", ticketPromedio([]));         // 0
console.log("  día sin ventas  :", ticketPromedio([{ cantidad: 0, precio: 42000 }])); // 0 (sin ventas válidas)
