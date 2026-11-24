// reporte.js: informe de ventas de Café Tech (v0.1)
// Ejecuta con: node src/reporte.js
const { ventas } = require("./datos.js");
const {
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor,
  ventasDelDia,
} = require("./analitica.js");

const ANCHO = 56;

// ---------- Utilidades de formato (funciones puras) ----------
function pesos(valor) {
  return "$" + valor.toLocaleString("es-CO", { maximumFractionDigits: 0 });
}

function numero(valor) {
  return valor.toLocaleString("es-CO");
}

// Etiqueta a la izquierda, valor alineado a la derecha, ocupando ANCHO columnas
function fila(etiqueta, valor) {
  return etiqueta.padEnd(ANCHO - valor.length) + valor;
}

function titulo(texto) {
  return `\n${texto.toUpperCase()}\n${"-".repeat(ANCHO)}`;
}

// ---------- Secciones ----------
function seccionResumen() {
  const mayor = ventaMayor(ventas);
  console.log(titulo("1. Resumen general"));
  console.log(fila("Registros de venta", numero(ventas.length)));
  console.log(fila("Total vendido", pesos(totalVendido(ventas))));
  console.log(fila("Unidades vendidas", numero(unidadesVendidas(ventas))));
  console.log(fila("Ticket promedio (ventas con cantidad > 0)", pesos(ticketPromedio(ventas))));
  if (mayor === null) {
    console.log("Venta mayor: no hay ventas registradas");
  } else {
    console.log(fila(`Venta mayor (id ${mayor.id}, ${mayor.producto})`, pesos(mayor.cantidad * mayor.precio)));
  }
}

function seccionCiudades() {
  console.log(titulo("2. Ventas por ciudad"));
  const entradas = Object.entries(totalPorCiudad(ventas));
  const ordenadas = [...entradas].sort((a, b) => b[1] - a[1]);
  for (const [ciudad, total] of ordenadas) {
    console.log(fila(ciudad, pesos(total)));
  }
}

function seccionUnidades() {
  console.log(titulo("3. Unidades por producto"));
  const entradas = Object.entries(unidadesPorProducto(ventas));
  const ordenadas = [...entradas].sort((a, b) => b[1] - a[1]);
  for (const [producto, unidades] of ordenadas) {
    console.log(fila(producto, numero(unidades)));
  }
}

function seccionTop() {
  console.log(titulo("4. Top 3 de productos por valor"));
  const top = topProductosPorValor(ventas, 3);
  let posicion = 1;
  for (const item of top) {
    console.log(fila(`${posicion}. ${item.producto}`, pesos(item.valor)));
    posicion += 1;
  }
}

function resumenDia(fecha) {
  const r = ventasDelDia(ventas, fecha);
  console.log(`\nDía ${r.fecha}`);
  if (r.ventas === 0) {
    console.log("  Sin ventas registradas este día.");
  }
  console.log(fila("  Ventas", numero(r.ventas)));
  console.log(fila("  Unidades", numero(r.unidades)));
  console.log(fila("  Total", pesos(r.total)));
  console.log(fila("  Ticket promedio", pesos(r.ticket)));
  return r;
}

function seccionDias() {
  console.log(titulo("5. Resumen por día"));
  const conVentas = resumenDia("2026-09-03");
  const sinVentas = resumenDia("2026-09-07");
  console.log("\nComparativo:");
  console.table([conVentas, sinVentas]);
}

// ---------- Reporte ----------
console.log("=".repeat(ANCHO));
console.log("CAFÉ TECH - REPORTE DE VENTAS (v0.1)".padStart((ANCHO + 36) / 2));
console.log("=".repeat(ANCHO));
seccionResumen();
seccionCiudades();
seccionUnidades();
seccionTop();
seccionDias();
console.log("\n" + "=".repeat(ANCHO));
