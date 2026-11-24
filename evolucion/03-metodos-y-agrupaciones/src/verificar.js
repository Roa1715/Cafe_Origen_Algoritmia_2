
const { ventas } = require("./datos.js");
const {
  totalVendido, totalVendidoM,
  unidadesVendidas, unidadesVendidasM,
  ventasPorCiudad, ventasPorCiudadM,
  totalPorCiudad, unidadesPorProducto, topProductosPorValor,
} = require("./analitica.js");

function estado(condicion) {
  return condicion ? "OK" : "DIFERENTE";
}

const entradas = [
  { nombre: "completo", datos: ventas },
  { nombre: "un elemento", datos: [ventas[0]] },
  { nombre: "vacío", datos: [] },
];

console.log("=== Ciclo vs métodos ===");
for (const entrada of entradas) {
  const d = entrada.datos;
  console.log(`[${entrada.nombre}]`);
  console.log("  totalVendido      ", totalVendido(d), totalVendidoM(d), estado(totalVendido(d) === totalVendidoM(d)));
  console.log("  unidadesVendidas  ", unidadesVendidas(d), unidadesVendidasM(d), estado(unidadesVendidas(d) === unidadesVendidasM(d)));
  for (const ciudad of ["Medellín", " BOGOTÁ ", "Cali", "Pereira", "Quito"]) {
    const a = ventasPorCiudad(d, ciudad);
    const b = ventasPorCiudadM(d, ciudad);
    console.log(`  ventasPorCiudad(${JSON.stringify(ciudad)})`, a, b, estado(a === b));
  }
}

console.log("\n=== Agrupaciones ===");
const ordenAntes = ventas.map((v) => v.id).join(",");

const porCiudad = totalPorCiudad(ventas);
console.log("totalPorCiudad:", porCiudad);
console.log("  exactamente 4 ciudades:", estado(Object.keys(porCiudad).length === 4));

console.log("unidadesPorProducto:", unidadesPorProducto(ventas));

const top3 = topProductosPorValor(ventas, 3);
console.log("topProductosPorValor(3):", top3);
for (const item of top3) {
  console.log(`- ${item.producto}: ${item.valor}`);
}
const ordenDespues = ventas.map((v) => v.id).join(",");
console.log("\nOrden original de ventas conservado:", estado(ordenAntes === ordenDespues));

// Prueba extra: "Bogotá" y "Bogotá " deben caer en el mismo grupo
const conEspacio = [
  { id: 1, ciudad: "Bogotá",  producto: "X", cantidad: 1, precio: 10 },
  { id: 2, ciudad: "Bogotá ", producto: "X", cantidad: 1, precio: 10 },
];
const grupos = totalPorCiudad(conEspacio);
console.log("\n'Bogotá' y 'Bogotá ' en un solo grupo:", estado(Object.keys(grupos).length === 1 && grupos["Bogotá"] === 20));
