# API REST de Pokémon — Trabajo Final Marcas (Juan Repeto Deudero)

API REST desarrollada con Node.js y Express.
Permite consultar, crear, modificar y eliminar pokémon y sus movimientos.

## Tecnologías
- Node.js
- Express

## Instalación y arranque

npm install
node index.js

El servidor arranca en http://localhost:5564

---

## Recursos

### Recurso principal: Pokémon
Campos: id, nombre, tipo_1, tipo_2, generacion, region, ps, ataque, defensa, velocidad, legendario

### Recurso secundario: Movimientos
Campos: id, nombre, tipo, potencia, precision, pokemon_id

---

## Endpoints

---

### POKÉMON

#### Obtener todos los pokémon
- **Método:** GET
- **Ruta:** /api/pokemon
- **Descripción:** Devuelve todos los pokémon registrados
- **Ejemplo:** GET http://localhost:5564/api/pokemon

---

#### Obtener un pokémon por Route Param
- **Método:** GET
- **Ruta:** /api/pokemon/:id
- **Descripción:** Devuelve el pokémon con el id indicado en la URL
- **Ejemplo:** GET http://localhost:5564/api/pokemon/4

---

#### Obtener un pokémon por Query Param
- **Método:** GET
- **Ruta:** /api/pokemon/buscar/query
- **Descripción:** Devuelve el pokémon que coincida con el id o nombre indicado
- **Ejemplos:**
  - GET http://localhost:5564/api/pokemon/buscar/query?id=4
  - GET http://localhost:5564/api/pokemon/buscar/query?nombre=Pikachu

---

#### Filtrar pokémon
- **Método:** GET
- **Ruta:** /api/pokemon/filtrar
- **Descripción:** Filtra pokémon por uno o varios campos simultáneamente
- **Query params disponibles:**

| Parámetro    | Tipo    | Descripción                              | Ejemplo           |
|--------------|---------|------------------------------------------|-------------------|
| tipo         | texto   | Filtra por tipo_1 o tipo_2 (parcial)     | ?tipo=Drag        |
| tipo_1       | texto   | Filtra solo por tipo_1 (parcial)         | ?tipo_1=Fuego     |
| tipo_2       | texto   | Filtra solo por tipo_2 (parcial)         | ?tipo_2=Volador   |
| region       | texto   | Filtra por región exacta                 | ?region=Kanto     |
| generacion   | número  | Filtra por generación                    | ?generacion=1     |
| legendario   | boolean | Filtra por legendario                    | ?legendario=true  |
| ataque_min   | número  | Ataque mayor o igual que X               | ?ataque_min=80    |
| ataque_max   | número  | Ataque menor o igual que X               | ?ataque_max=130   |
| ps_min       | número  | PS mayor o igual que X                   | ?ps_min=50        |
| ps_max       | número  | PS menor o igual que X                   | ?ps_max=100       |
| velocidad_min| número  | Velocidad mayor o igual que X            | ?velocidad_min=90 |
| ordenar      | texto   | Campo por el que ordenar                 | ?ordenar=ataque   |
| orden        | texto   | asc o desc (defecto: asc)                | ?orden=desc       |

- **Ejemplos:**
  - GET http://localhost:5564/api/pokemon/filtrar?legendario=true
  - GET http://localhost:5564/api/pokemon/filtrar?tipo=Fuego&region=Kanto
  - GET http://localhost:5564/api/pokemon/filtrar?ataque_min=80&ataque_max=130&ordenar=ataque&orden=desc

---

#### Crear un pokémon
- **Método:** POST
- **Ruta:** /api/pokemon
- **Descripción:** Crea un nuevo pokémon. tipo_2 y legendario son opcionales.
- **Campos obligatorios:** nombre, tipo_1, generacion, region, ps, ataque, defensa, velocidad
- **Ejemplo:**
  - POST http://localhost:5564/api/pokemon

---

#### Modificar un pokémon
- **Método:** PUT
- **Ruta:** /api/pokemon/:id
- **Descripción:** Modifica los campos indicados del pokémon. Solo se actualizan los campos que se envíen.
- **Ejemplo:**
  - PUT http://localhost:5564/api/pokemon/4

---

#### Eliminar un pokémon
- **Método:** DELETE
- **Ruta:** /api/pokemon/:id
- **Descripción:** Elimina el pokémon con el id indicado
- **Ejemplo:** DELETE http://localhost:5564/api/pokemon/4

---

### ESTADÍSTICAS

#### Media, máximo y mínimo de un campo numérico
- **Método:** GET
- **Ruta:** /api/pokemon/stats
- **Descripción:** Devuelve la media, el máximo y el mínimo del campo indicado
- **Campos válidos:** ps, ataque, defensa, velocidad
- **Ejemplo:** GET http://localhost:5564/api/pokemon/stats?campo=ataque

---

#### Top N pokémon por campo numérico
- **Método:** GET
- **Ruta:** /api/pokemon/top
- **Descripción:** Devuelve los N pokémon con más o menos valor en el campo indicado
- **Campos válidos:** ps, ataque, defensa, velocidad
- **Ejemplos:**
  - GET http://localhost:5564/api/pokemon/top?campo=ataque
  - GET http://localhost:5564/api/pokemon/top?campo=velocidad&n=3&orden=asc

---

#### Total de registros
- **Método:** GET
- **Ruta:** /api/pokemon/total
- **Descripción:** Devuelve el total de pokémon y movimientos registrados
- **Ejemplo:** GET http://localhost:5564/api/pokemon/total

---

#### Agrupar por campo categórico
- **Método:** GET
- **Ruta:** /api/pokemon/agrupar
- **Descripción:** Cuenta cuántos pokémon hay de cada valor en el campo indicado
- **Campos válidos:** tipo_1, tipo_2, region, generacion
- **Ejemplos:**
  - GET http://localhost:5564/api/pokemon/agrupar?campo=tipo_1
  - GET http://localhost:5564/api/pokemon/agrupar?campo=region

---

### MOVIMIENTOS

#### Obtener todos los movimientos
- **Método:** GET
- **Ruta:** /api/movimientos
- **Descripción:** Devuelve todos los movimientos registrados
- **Ejemplo:** GET http://localhost:5564/api/movimientos

---

#### Obtener movimientos de un pokémon por id
- **Método:** GET
- **Ruta:** /api/movimientos/pokemon/:pokemon_id
- **Descripción:** Devuelve todos los movimientos del pokémon con ese id
- **Ejemplo:** GET http://localhost:5564/api/movimientos/pokemon/4

---

#### Buscar movimientos por nombre
- **Método:** GET
- **Ruta:** /api/movimientos/buscar
- **Descripción:** Devuelve los movimientos cuyo nombre contenga el texto indicado
- **Ejemplo:** GET http://localhost:5564/api/movimientos/buscar?nombre=rayo

---

#### Obtener un movimiento o movimientos por nombre de pokémon
- **Método:** GET
- **Ruta:** /api/movimientos/:valor
- **Descripción:** Si el valor es un número devuelve el movimiento con ese id. Si es texto devuelve los movimientos del pokémon con ese nombre.
- **Ejemplos:**
  - GET http://localhost:5564/api/movimientos/3
  - GET http://localhost:5564/api/movimientos/Pikachu

---

#### Crear un movimiento
- **Método:** POST
- **Ruta:** /api/movimientos
- **Descripción:** Crea un nuevo movimiento vinculado a un pokémon
- **Campos obligatorios:** nombre, tipo, potencia, precision, pokemon_id
- **Ejemplo:**
  - POST http://localhost:5564/api/movimientos

---

#### Modificar un movimiento
- **Método:** PUT
- **Ruta:** /api/movimientos/:id
- **Descripción:** Modifica los campos indicados del movimiento
- **Ejemplo:**
  - PUT http://localhost:5564/api/movimientos/7

---

#### Eliminar un movimiento
- **Método:** DELETE
- **Ruta:** /api/movimientos/:id
- **Descripción:** Elimina el movimiento con el id indicado
- **Ejemplo:** DELETE http://localhost:5564/api/movimientos/7

---

## Códigos de respuesta

| Código | Significado                                      |
|--------|--------------------------------------------------|
| 200    | OK — consulta o modificación correcta            |
| 201    | Created — recurso creado correctamente           |
| 400    | Bad Request — faltan campos o datos incorrectos  |
| 404    | Not Found — el recurso no existe                 |
| 500    | Internal Server Error — error inesperado         |

---

## Frontend

La interfaz web está compuesta por tres archivos en la raíz del proyecto:

- `index.html` — estructura HTML
- `styles.css` — estilos
- `app.js` — lógica JavaScript

Para usarla, abre `index.html` en el navegador con el servidor arrancado.

### Funcionalidades

#### Pestaña Pokémon
- Ver todos los pokémon en tarjetas con tipos, estadísticas y región
- Filtrar por tipo, región, generación, legendario y rango de ataque
- Ordenar por cualquier campo en ascendente o descendente
- Crear nuevos pokémon mediante formulario con selectores de tipo
- Editar pokémon existentes
- Eliminar pokémon con confirmación

#### Pestaña Movimientos
- Ver todos los movimientos en tabla
- Buscar movimientos por nombre (búsqueda parcial)
- Crear nuevos movimientos
- Editar movimientos existentes
- Eliminar movimientos con confirmación

#### Pestaña Estadísticas
- Media, máximo y mínimo de cualquier campo numérico
- Total de pokémon y movimientos registrados
- Ranking Top N pokémon por campo numérico con orden configurable
- Gráfico de barras de distribución por tipo, región o generación