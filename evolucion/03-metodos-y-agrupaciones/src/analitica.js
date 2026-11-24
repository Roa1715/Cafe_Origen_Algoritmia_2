// analitica.js: indicadores de ventas de Café Tech.
// Sin variables globales: todo entra por parámetro y sale por return.
// Parte 1: versiones con ciclo for...of (sin map/filter/reduce).
// Parte 2: versiones con métodos de arreglo (sufijo M) y agrupaciones.

// Normaliza el nombre de una ciudad para comparar o agrupar:
// quita espacios sobrantes y pasa a minúsculas ("Bogotá " -> "bogotá").
function normalizar(texto) {
  return texto.trim().toLowerCase();
}

// ===============================================================
// PARTE 1: CON CICLOS
// ===============================================================

// Valor de una venta: cantidad × precio
function valorVenta(venta) {
  return venta.cantidad * venta.precio;
}

// Acumulador desde 0. Vacío -> 0
function totalVendido(ventas) {
  let total = 0;
  for (const venta of ventas) {
    total += valorVenta(venta);
  }
  return total;
}

// Acumulador desde 0. Vacío -> 0
function unidadesVendidas(ventas) {
  let unidades = 0;
  for (const venta of ventas) {
    unidades += venta.cantidad;
  }
  return unidades;
}

// Máximo desde null; devuelve el registro completo. Vacío -> null
function ventaMayor(ventas) {
  let mayor = null;
  for (const venta of ventas) {
    if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
      mayor = venta;
    }
  }
  return mayor;
}

// Acumulador + contador, solo ventas con cantidad > 0. Vacío -> 0
function ticketPromedio(ventas) {
  let total = 0;
  let validas = 0;
  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      total += valorVenta(venta);
      validas += 1;
    }
  }
  if (validas === 0) {
    return 0;
  }
  return total / validas;
}

// Acumulador con condición, ciudad normalizada. Vacío -> 0
function ventasPorCiudad(ventas, ciudad) {
  const buscada = normalizar(ciudad);
  let total = 0;
  for (const venta of ventas) {
    if (normalizar(venta.ciudad) === buscada) {
      total += valorVenta(venta);
    }
  }
  return total;
}

// ===============================================================
// PARTE 2: CON MÉTODOS DE ARREGLO
// ===============================================================

// reduce con valor inicial 0. Vacío -> 0
function totalVendidoM(ventas) {
  return ventas.reduce((acc, venta) => acc + valorVenta(venta), 0);
}

// reduce con valor inicial 0. Vacío -> 0
function unidadesVendidasM(ventas) {
  return ventas.reduce((acc, venta) => acc + venta.cantidad, 0);
}

// filter (la ciudad) -> map (a valor) -> reduce (suma desde 0). Vacío -> 0
function ventasPorCiudadM(ventas, ciudad) {
  const buscada = normalizar(ciudad);
  return ventas
    .filter((venta) => normalizar(venta.ciudad) === buscada)
    .map((venta) => valorVenta(venta))
    .reduce((acc, valor) => acc + valor, 0);
}

// ===============================================================
// AGRUPACIONES (objeto usado como diccionario)
// ===============================================================

// Pone la primera letra en mayúscula: "medellín" -> "Medellín"
function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// { "Medellín": 356000, "Bogotá": 276000, ... }
// Clave = ciudad normalizada y capitalizada, así "Bogotá" y "Bogotá "
// caen en el mismo grupo. Vacío -> {}
function totalPorCiudad(ventas) {
  return ventas.reduce((grupos, venta) => {
    const clave = capitalizar(normalizar(venta.ciudad));
    grupos[clave] = (grupos[clave] || 0) + valorVenta(venta);
    return grupos;
  }, {});
}

// { "Origen Huila 500 g": 7, ... }  Vacío -> {}
function unidadesPorProducto(ventas) {
  return ventas.reduce((grupos, venta) => {
    grupos[venta.producto] = (grupos[venta.producto] || 0) + venta.cantidad;
    return grupos;
  }, {});
}

// Los k productos que más dinero generaron, de mayor a menor.
// Devuelve [{ producto, valor }, ...]. Vacío -> []
// No modifica `ventas`: agrupa en un objeto nuevo, y el sort se hace
// sobre una copia ([...]) del arreglo de entradas.
function topProductosPorValor(ventas, k) {
  const valorPorProducto = ventas.reduce((grupos, venta) => {
    grupos[venta.producto] = (grupos[venta.producto] || 0) + valorVenta(venta);
    return grupos;
  }, {});

  const lista = Object.entries(valorPorProducto).map(([producto, valor]) => ({
    producto,
    valor,
  }));

  return [...lista].sort((a, b) => b.valor - a.valor).slice(0, k);
}

module.exports = {
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
  totalVendidoM,
  unidadesVendidasM,
  ventasPorCiudadM,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor,
};
