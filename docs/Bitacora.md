========================================================================================================================================
DICCIONARIO DE DATOS:
┌─────────┬────┬──────────────┬─────────┬───────────────────────┬────────────┬──────────┐
│ (index) │ id │ fecha        │ cliente │ producto              │ ciudad     │ cantidad │
├─────────┼────┼──────────────┼─────────┼───────────────────────┼────────────┼──────────┤
│ 0       │ 1  │ '2026-09-01' │ 'C01'   │ 'Origen Huila 500 g'  │ 'Medellín' │ 2        │
│ 1       │ 2  │ '2026-09-01' │ 'C02'   │ 'Origen Nariño 250 g' │ 'Bogotá'   │ 1        │
│ 2       │ 3  │ '2026-09-02' │ 'C03'   │ 'Prensa francesa'     │ 'Cali'     │ 1        │
│ 3       │ 4  │ '2026-09-02' │ 'C01'   │ 'Origen Huila 500 g'  │ 'Medellín' │ 1        │
│ 4       │ 5  │ '2026-09-03' │ 'C04'   │ 'Origen Sierra 500 g' │ 'medellín' │ 3        │
│ 5       │ 6  │ '2026-09-03' │ 'C05'   │ 'Origen Nariño 250 g' │ 'Bogotá'   │ 2        │
│ 6       │ 7  │ '2026-09-04' │ 'C02'   │ 'Molino manual'       │ 'Bogotá'   │ 1        │
│ 7       │ 8  │ '2026-09-04' │ 'C06'   │ 'Origen Huila 500 g'  │ 'Cali'     │ 0        │
│ 8       │ 9  │ '2026-09-05' │ 'C03'   │ 'Origen Sierra 500 g' │ 'Cali'     │ 2        │
│ 9       │ 10 │ '2026-09-05' │ 'C07'   │ 'Origen Huila 500 g'  │ 'Pereira'  │ 4        │
│ 10      │ 11 │ '2026-09-06' │ 'C01'   │ 'Prensa francesa'     │ 'Medellín' │ 1        │
│ 11      │ 12 │ '2026-09-06' │ 'C08'   │ 'Origen Nariño 250 g' │ 'Bogotá'   │ 3        │
└─────────┴────┴──────────────┴─────────┴───────────────────────┴────────────┴──────────┘
CASOS BORDE DETECTADOS:
CANTIDAD: EN EL INDEX #7 EN LA COLUMNA CANTIDAD ENCONTRAMOS UN REGISTRO EN 0 LO CUAL ES UN FALLO.
CIUDAD: ENCONTRAMOS EN LA TABLA QUE EN LA COLUMNA CIUDAD EN EL INDEX #4 ENCONTRAMOS UN DATO EN EL STRING CON LA PRIMERA LETRA EN MINUSCÚLA.
CLIENTE: EN EL INDEX #3 ENCONTRAMOS EN  LA COLUNMA CLIENTE QUE SE REPITE UN ID AL IGUAL QUE EN EL INDEX #10 LO MISMO SUCEDE EN EL 8#, 6#
============================================================================================================================================

# Bitácora: Reto de analítica de ventas

## 1. Plan en pseudocódigo

### valorVenta(venta)
- Recorre: nada (trabaja con un solo registro, no hay ciclo)
- Condición: ninguna
- Acumula: nada
- Valor inicial: no aplica

FUNCIÓN valorVenta(venta)
    RETORNAR venta.cantidad × venta.precio
FIN FUNCIÓN

**Nota:** si cantidad es 0, devuelve 0 (es correcto, no se vendió nada).
===============================================================================================================================================