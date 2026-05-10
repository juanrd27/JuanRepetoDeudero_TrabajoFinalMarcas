/*
(Este archivo sirve como "base de datos")
Array del recurso principal.
· Campos de cada objeto:
    1. id (int)
    2. nombre (string)
    3. tipo_1 (string)
    4. tipo_2 (string) 
    5. generacion (string)
    6. region (string)
    7. ps (int)
    8. ataque (int)
    9. defensa (int)
    10. velocidad (int)
    11. legendario (boolean)

· Restricciones:
    - El campo 'tipo_2' puede ser nulo
*/

let pokemon =
[
    {
        id: 1,
        nombre: "Bulbasaur",
        tipo_1: "Planta",
        tipo_2: "Veneno",
        generacion: 1,
        region: "Kanto",
        ps: 45,
        ataque: 49,
        defensa: 49,
        velocidad: 45,
        legendario: false
    },
    {
        id: 2,
        nombre: "Charmander",
        tipo_1: "Fuego",
        tipo_2: null,
        generacion: 1,
        region: "Kanto",
        ps: 39,
        ataque: 52,
        defensa: 43,
        velocidad: 65,
        legendario: false
    },
    {
        id: 3,
        nombre: "Squirtle",
        tipo_1: "Agua",
        tipo_2: null,
        generacion: 1,
        region: "Kanto",
        ps: 44,
        ataque: 48,
        defensa: 65,
        velocidad: 43,
        legendario: false
    },
    {
        id: 4,
        nombre: "Pikachu",
        tipo_1: "Eléctrico",
        tipo_2: null,
        generacion: 1,
        region: "Kanto",
        ps: 35,
        ataque: 55,
        defensa: 40,
        velocidad: 90,
        legendario: false
    },
    {
        id: 5,
        nombre: "Mewtwo",
        tipo_1: "Psíquico",
        tipo_2: null,
        generacion: 1,
        region: "Kanto",
        ps: 106,
        ataque: 110,
        defensa: 90,
        velocidad: 130,
        legendario: true
    },
    {
        id: 6,
        nombre: "Chikorita",
        tipo_1: "Planta",
        tipo_2: null,
        generacion: 2,
        region: "Johto",
        ps: 45,
        ataque: 49,
        defensa: 65,
        velocidad: 45,
        legendario: false
    },
    {
        id: 7,
        nombre: "Cyndaquil",
        tipo_1: "Fuego",
        tipo_2: null,
        generacion: 2,
        region: "Johto",
        ps: 39,
        ataque: 52,
        defensa: 43,
        velocidad: 65,
        legendario: false
    },
    {
        id: 8,
        nombre: "Totodile",
        tipo_1: "Agua",
        tipo_2: null,
        generacion: 2,
        region: "Johto",
        ps: 50,
        ataque: 65,
        defensa: 64,
        velocidad: 43,
        legendario: false
    },
    {
        id: 9,
        nombre: "Lugia",
        tipo_1: "Psíquico",
        tipo_2: "Volador",
        generacion: 2,
        region: "Johto",
        ps: 106,
        ataque: 90,
        defensa: 130,
        velocidad: 110,
        legendario: true
    },
    {
        id: 10,
        nombre: "Treecko",
        tipo_1: "Planta",
        tipo_2: null,
        generacion: 3,
        region: "Hoenn",
        ps: 40,
        ataque: 45,
        defensa: 35,
        velocidad: 70,
        legendario: false
    },
    {
        id: 11,
        nombre: "Torchic",
        tipo_1: "Fuego",
        tipo_2: null,
        generacion: 3,
        region: "Hoenn",
        ps: 45,
        ataque: 60,
        defensa: 40,
        velocidad: 45,
        legendario: false
    },
    {
        id: 12,
        nombre: "Mudkip",
        tipo_1: "Agua",
        tipo_2: null,
        generacion: 3,
        region: "Hoenn",
        ps: 50,
        ataque: 70,
        defensa: 50,
        velocidad: 40,
        legendario: false
    },
    {
        id: 13,
        nombre: "Rayquaza",
        tipo_1: "Dragón",
        tipo_2: "Volador",
        generacion: 3,
        region: "Hoenn",
        ps: 105,
        ataque: 150,
        defensa: 90,
        velocidad: 95,
        legendario: true
    },
    {
        id: 14,
        nombre: "Garchomp",
        tipo_1: "Dragón",
        tipo_2: "Tierra",
        generacion: 4,
        region: "Sinnoh",
        ps: 108,
        ataque: 130,
        defensa: 95,
        velocidad: 102,
        legendario: false
    },
    {
        id: 15,
        nombre: "Lucario",
        tipo_1: "Lucha",
        tipo_2: "Acero",
        generacion: 4,
        region: "Sinnoh",
        ps: 70,
        ataque: 110,
        defensa: 70,
        velocidad: 90,
        legendario: false
    }
];

// Importamos el array para poder acceder desde el index.js
module.exports = pokemon;