# ☕ Café Origen · Analítica de ventas (Algoritmia 2)

Proyecto en **JavaScript (Node.js)** que analiza las ventas de **Café Tech**, una tienda de café de origen y accesorios. A partir de un arreglo de 12 registros de venta calcula indicadores (totales, ticket promedio, ventas por ciudad, top de productos, resumen por día) y los muestra en un reporte de consola.

El objetivo académico es practicar los patrones básicos de algoritmia sobre arreglos: **acumulador, contador, máximo, filtro y agrupación**, primero con ciclos `for...of` y luego con `map` / `filter` / `reduce`, cuidando los **casos borde** (datos sucios y arreglos vacíos).

---

## 📑 Contenido

- [Inicio rápido](#-inicio-rápido)
- [Estructura del repositorio](#-estructura-del-repositorio)
- [Los datos](#-los-datos)
- [Funciones de `analitica.js`](#-funciones-de-analiticajs)
- [Preguntas que responde el proyecto](#-preguntas-que-responde)
- [Resultado del reporte](#-resultado-del-reporte)
- [Casos borde y errores corregidos](#-casos-borde-y-errores-corregidos)
- [Decisiones de diseño](#-decisiones-de-diseño)
- [Evolución del trabajo](#-evolución-del-trabajo)
- [Bitácora](#-bitácora)

---

## 🚀 Inicio rápido

**Requisito:** Node.js instalado (se probó con Node 22). No hay dependencias que instalar.

```bash
git clone https://github.com/Roa1715/Cafe_Origen_Algoritmia_2.git
cd Cafe_Origen_Algoritmia_2

node src/reporte.js              # reporte completo de ventas
node src/verificar.js            # verifica ciclo vs métodos (todo debe decir OK)
node src/reproducir_errores.js   # reproduce los 2 errores y muestra que ya están corregidos
node src/pruebas.js              # cada función con 3 entradas: completo, un elemento, vacío
node src/Explorar.js             # exploración de los datos crudos
```

También puedes usar los atajos de `npm`: `npm start`, `npm run verificar`, `npm run errores`, `npm run pruebas`, `npm run explorar`.

> Ejecuta siempre los comandos **desde la raíz del proyecto**. El `package.json` fija `"type": "commonjs"`, por lo que el código usa `require` y `module.exports`.

---

## 🗂 Estructura del repositorio

```
Cafe_Origen_Algoritmia_2/
├── README.md                  ← este archivo
├── package.json               ← scripts de npm y tipo de módulo (commonjs)
├── .gitignore
│
├── src/                       ← VERSIÓN FINAL del proyecto
│   ├── datos.js               ·  los 12 registros de venta
│   ├── analitica.js           ·  todas las funciones de cálculo
│   ├── reporte.js             ·  reporte de consola con 5 secciones
│   ├── verificar.js           ·  compara ciclo vs métodos y valida agrupaciones
│   ├── reproducir_errores.js  ·  reproduce y demuestra la corrección de 2 errores
│   ├── pruebas.js             ·  pruebas manuales (completo / uno / vacío)
│   └── Explorar.js            ·  exploración inicial de los datos
│
├── docs/
│   └── Bitacora.md            ← diccionario de datos, casos borde y pseudocódigo
│
└── evolucion/                 ← cómo fue creciendo el trabajo, paso a paso
    ├── 01-exploracion-datos/
    ├── 02-funciones-con-ciclos/
    └── 03-metodos-y-agrupaciones/
```

| Archivo | Para qué sirve |
|---|---|
| `src/datos.js` | Exporta el arreglo `ventas` con los 12 registros. |
| `src/analitica.js` | Funciones puras de cálculo (versión con ciclos, versión con métodos de arreglo y agrupaciones). |
| `src/reporte.js` | Reporte completo con cinco secciones, incluido el resumen por día. |
| `src/verificar.js` | Comprueba que ciclo y métodos den lo mismo, y valida agrupaciones y `ventasDelDia`. |
| `src/reproducir_errores.js` | Muestra el código con defecto vs. la versión corregida. |
| `src/pruebas.js` | Prueba cada función con tres entradas: arreglo completo, un elemento y arreglo vacío. |
| `src/Explorar.js` | Imprime cantidad de registros, primero, último y la tabla completa. |

---

## 📊 Los datos

Cada venta es un objeto con 7 campos:

| Campo | Tipo | Ejemplo | Descripción |
|---|---|---|---|
| `id` | número | `1` | Identificador de la venta |
| `fecha` | texto `AAAA-MM-DD` | `"2026-09-01"` | Día de la venta (1 al 6 de septiembre de 2026) |
| `cliente` | texto | `"C01"` | Código del cliente |
| `producto` | texto | `"Origen Huila 500 g"` | Producto vendido |
| `ciudad` | texto | `"Medellín"` | Ciudad de la venta |
| `cantidad` | número | `2` | Unidades vendidas |
| `precio` | número | `42000` | Precio unitario en pesos colombianos (COP) |

**Catálogo:** Origen Huila 500 g ($42.000), Origen Nariño 250 g ($26.000), Origen Sierra 500 g ($45.000), Prensa francesa ($95.000) y Molino manual ($120.000).
**Ciudades:** Medellín, Bogotá, Cali y Pereira.

---

## 🧮 Funciones de `analitica.js`

Todas son **puras**: reciben los datos por parámetro, devuelven un resultado y no modifican el arreglo original.

### Parte 1: con ciclos `for...of`

| Función | Patrón | Qué devuelve | Arreglo vacío |
|---|---|---|---|
| `valorVenta(venta)` | cálculo simple | `cantidad × precio` de una venta | — |
| `totalVendido(ventas)` | acumulador | Suma del valor de todas las ventas | `0` |
| `unidadesVendidas(ventas)` | acumulador | Suma de unidades | `0` |
| `ventaMayor(ventas)` | máximo | El registro completo de mayor valor | `null` |
| `ticketPromedio(ventas)` | acumulador + contador | Valor promedio por venta válida (`cantidad > 0`) | `0` |
| `ventasPorCiudad(ventas, ciudad)` | acumulador con condición | Total de una ciudad (ignora mayúsculas y espacios) | `0` |

### Parte 2: con métodos de arreglo

| Función | Métodos | Qué devuelve | Arreglo vacío |
|---|---|---|---|
| `totalVendidoM`, `unidadesVendidasM` | `reduce` | Igual que sus versiones con ciclo | `0` |
| `ventasPorCiudadM` | `filter` → `map` → `reduce` | Igual que `ventasPorCiudad` | `0` |

### Agrupaciones (objeto usado como diccionario)

| Función | Qué devuelve | Arreglo vacío |
|---|---|---|
| `totalPorCiudad(ventas)` | `{ "Medellín": 356000, ... }` con la ciudad normalizada | `{}` |
| `unidadesPorProducto(ventas)` | `{ "Origen Huila 500 g": 7, ... }` | `{}` |
| `topProductosPorValor(ventas, k)` | Los `k` productos que más dinero generaron, de mayor a menor: `[{ producto, valor }]` | `[]` |
| `ventasDelDia(ventas, fecha)` | `{ fecha, ventas, unidades, total, ticket }` de un día | todo en `0` |

---

## ❓ Preguntas que responde

- ¿Cuánto se vendió en total, cuántas unidades y cuál fue el ticket promedio?
- ¿Cuál fue la venta de mayor valor?
- ¿Cuánto se vendió en cada ciudad (sin importar mayúsculas ni espacios sobrantes)?
- ¿Cuántas unidades se vendieron de cada producto?
- ¿Cuáles son los tres productos que más dinero generaron?
- ¿Cómo le fue a la tienda un día concreto, incluso si ese día no hubo ventas?

---

## 🧾 Resultado del reporte

Salida real de `node src/reporte.js` (valores en COP):

| Indicador | Valor |
|---|---|
| Registros de venta | 12 |
| Total vendido | $985.000 |
| Unidades vendidas | 21 |
| Ticket promedio (ventas con `cantidad > 0`) | $89.545 |
| Venta mayor | id 10 · Origen Huila 500 g · $168.000 |

**Ventas por ciudad:** Medellín $356.000 · Bogotá $276.000 · Cali $185.000 · Pereira $168.000

**Unidades por producto:** Origen Huila 500 g (7) · Origen Nariño 250 g (6) · Origen Sierra 500 g (5) · Prensa francesa (2) · Molino manual (1)

**Top 3 por valor:**
1. Origen Huila 500 g: $294.000
2. Origen Sierra 500 g: $225.000
3. Prensa francesa: $190.000

**Resumen por día:** el 2026-09-03 hubo 2 ventas, 5 unidades y $187.000 (ticket $93.500); el 2026-09-07 no hubo ventas y todo da `0` sin errores.

---

## 🐛 Casos borde y errores corregidos

Al explorar los datos se detectaron tres situaciones que podrían romper los cálculos:

| Caso borde | Dónde | Cómo se maneja |
|---|---|---|
| Cantidad `0` | Venta `id 8` (Cali) | Vale `$0` y **no cuenta** como venta válida en el ticket promedio. |
| Ciudad con minúscula y espacio final | Venta `id 5`: `"medellín "` | Se normaliza con `trim().toLowerCase()` antes de comparar o agrupar. |
| Clientes repetidos | `C01`, `C02`, `C03` | Es normal (clientes recurrentes); no se trata como error. |

`src/reproducir_errores.js` reproduce y demuestra la corrección de dos errores reportados:

1. **Medellín no sumaba la venta de `"medellín "`.** Comparar texto sin normalizar daba **$221.000** en lugar de **$356.000** (faltaban los $135.000 de la venta `id 5`). Solución: normalizar ambos lados de la comparación.
2. **`NaN` con el arreglo vacío.** El ticket promedio dividía `0 / 0`. Solución: si no hay ventas válidas se devuelve `0`.

---

## 🧱 Decisiones de diseño

- **Funciones puras:** reciben el arreglo por parámetro, devuelven un resultado y no modifican `ventas` ni usan variables globales.
- **Sin sorpresas con datos vacíos:** ninguna función falla ni devuelve `NaN`. Los totales dan `0`, `ventaMayor` da `null` y las agrupaciones dan `{}` o `[]`.
- **Doble implementación:** las versiones con ciclo y con métodos (`...M`) se comparan automáticamente en `verificar.js` para asegurar que dan el mismo resultado.
- **Sin mutaciones:** el `sort` del top se hace sobre una copia (`[...lista]`) y se comprueba que el orden original de `ventas` se conserva.
- **Una sola fuente de normalización:** la función `normalizar` se reutiliza en todas las comparaciones de ciudad.

---

## 🌱 Evolución del trabajo

La carpeta [`evolucion/`](evolucion) guarda las etapas por las que fue pasando el proyecto, para ver cómo creció hasta la versión final de `src/`:

| Etapa | Qué se hizo |
|---|---|
| [`01-exploracion-datos`](evolucion/01-exploracion-datos) | Carga y exploración de los datos (`datos.js`, `Explorar.js`) y primera función `valorVenta`. |
| [`02-funciones-con-ciclos`](evolucion/02-funciones-con-ciclos) | Funciones con `for...of`: total, unidades, venta mayor, ticket promedio y ventas por ciudad, con `pruebas.js`. |
| [`03-metodos-y-agrupaciones`](evolucion/03-metodos-y-agrupaciones) | Versiones con `reduce`/`filter`/`map`, agrupaciones (`totalPorCiudad`, `unidadesPorProducto`, `topProductosPorValor`) y `verificar.js`. |
| [`src/`](src) **(final)** | Se agrega `ventasDelDia`, el reporte completo (`reporte.js`) y `reproducir_errores.js`. |

> Cada etapa es una foto del código en ese momento; algunas están incompletas o con errores de etapa temprana. Para ejecutar el proyecto usa siempre `src/`.

---

## 📓 Bitácora

En [`docs/Bitacora.md`](docs/Bitacora.md) está el diccionario de datos, los casos borde detectados y el plan en pseudocódigo de las funciones.

---

## 🛠 Tecnologías

- JavaScript (ES6+) con Node.js
- Módulos CommonJS (`require` / `module.exports`)
- Sin dependencias externas
