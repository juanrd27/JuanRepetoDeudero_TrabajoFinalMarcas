/*
(Este archivo sirve como "base de datos")
Array del recurso secundario.

· Campos de cada objeto:
    1. id (int)
    2. nombre (string)
    3. tipo (string)
    4. potencia (int) 
    5. precision (int)
    6. pokemon_id (int)

· Restricciones:
    - El campo 'pokemon_id' vincula el array 'pokemon' con el array 'movimientos'
*/

let movimientos = 
[
    { id: 1,  nombre: "Látigo Cepa",       tipo: "Planta",    potencia: 45,  precision: 100, pokemon_id: 1  },
    { id: 2,  nombre: "Rayo Solar",        tipo: "Planta",    potencia: 120, precision: 100, pokemon_id: 1  },
    { id: 3,  nombre: "Lanzallamas",       tipo: "Fuego",     potencia: 90,  precision: 100, pokemon_id: 2  },
    { id: 4,  nombre: "Garra Dragón",      tipo: "Dragón",    potencia: 80,  precision: 100, pokemon_id: 2  },
    { id: 5,  nombre: "Pistola Agua",      tipo: "Agua",      potencia: 40,  precision: 100, pokemon_id: 3  },
    { id: 6,  nombre: "Hidrobomba",        tipo: "Agua",      potencia: 110, precision: 80,  pokemon_id: 3  },
    { id: 7,  nombre: "Impactrueno",       tipo: "Eléctrico", potencia: 40,  precision: 100, pokemon_id: 4  },
    { id: 8,  nombre: "Rayo",              tipo: "Eléctrico", potencia: 90,  precision: 100, pokemon_id: 4  },
    { id: 9,  nombre: "Psíquico",          tipo: "Psíquico",  potencia: 90,  precision: 100, pokemon_id: 5  },
    { id: 10, nombre: "Bola Sombra",       tipo: "Fantasma",  potencia: 80,  precision: 100, pokemon_id: 5  },
    { id: 11, nombre: "Cometa Draco",      tipo: "Dragón",    potencia: 130, precision: 90,  pokemon_id: 13 },
    { id: 12, nombre: "Hiperrayo",         tipo: "Normal",    potencia: 150, precision: 90,  pokemon_id: 13 },
    { id: 13, nombre: "Terratemblor",      tipo: "Tierra",    potencia: 100, precision: 100, pokemon_id: 14 },
    { id: 14, nombre: "Triturar",          tipo: "Siniestro", potencia: 80,  precision: 100, pokemon_id: 14 },
    { id: 15, nombre: "Aura Esfera",       tipo: "Lucha",     potencia: 80,  precision: 100, pokemon_id: 15 },
    { id: 16, nombre: "Velocidad Extrema", tipo: "Normal",    potencia: 80,  precision: 100, pokemon_id: 15 }
];

// Importamos el array para poder acceder desde el index.js
module.exports = movimientos;