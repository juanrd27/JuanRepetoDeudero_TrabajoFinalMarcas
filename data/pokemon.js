/*
(Este archivo sirve como "base de datos")
Array del recurso principal — Pokémon iniciales (Gen 1-9) y legendarios principales.

· Campos de cada objeto:
    1.  id          (int)
    2.  nombre      (string)
    3.  tipo_1      (string)
    4.  tipo_2      (string | null)
    5.  generacion  (int)
    6.  region      (string)
    7.  ps          (int)
    8.  ataque      (int)
    9.  defensa     (int)
    10. velocidad   (int)
    11. legendario  (boolean)

· Restricciones:
    - tipo_2 puede ser null si el pokémon solo tiene un tipo
*/

let pokemon =
[
    // ── GENERACIÓN 1 · KANTO ──────────────────────────────────────────
    {
        id: 1, nombre: "Bulbasaur",
        tipo_1: "Planta", tipo_2: "Veneno",
        generacion: 1, region: "Kanto",
        ps: 45, ataque: 49, defensa: 49, velocidad: 45,
        legendario: false
    },
    {
        id: 2, nombre: "Charmander",
        tipo_1: "Fuego", tipo_2: null,
        generacion: 1, region: "Kanto",
        ps: 39, ataque: 52, defensa: 43, velocidad: 65,
        legendario: false
    },
    {
        id: 3, nombre: "Squirtle",
        tipo_1: "Agua", tipo_2: null,
        generacion: 1, region: "Kanto",
        ps: 44, ataque: 48, defensa: 65, velocidad: 43,
        legendario: false
    },
    {
        id: 4, nombre: "Pikachu",
        tipo_1: "Eléctrico", tipo_2: null,
        generacion: 1, region: "Kanto",
        ps: 35, ataque: 55, defensa: 40, velocidad: 90,
        legendario: false
    },
    {
        id: 5, nombre: "Articuno",
        tipo_1: "Hielo", tipo_2: "Volador",
        generacion: 1, region: "Kanto",
        ps: 90, ataque: 85, defensa: 100, velocidad: 85,
        legendario: true
    },
    {
        id: 6, nombre: "Zapdos",
        tipo_1: "Eléctrico", tipo_2: "Volador",
        generacion: 1, region: "Kanto",
        ps: 90, ataque: 90, defensa: 85, velocidad: 100,
        legendario: true
    },
    {
        id: 7, nombre: "Moltres",
        tipo_1: "Fuego", tipo_2: "Volador",
        generacion: 1, region: "Kanto",
        ps: 90, ataque: 100, defensa: 90, velocidad: 90,
        legendario: true
    },
    {
        id: 8, nombre: "Mewtwo",
        tipo_1: "Psíquico", tipo_2: null,
        generacion: 1, region: "Kanto",
        ps: 106, ataque: 110, defensa: 90, velocidad: 130,
        legendario: true
    },
    {
        id: 9, nombre: "Mew",
        tipo_1: "Psíquico", tipo_2: null,
        generacion: 1, region: "Kanto",
        ps: 100, ataque: 100, defensa: 100, velocidad: 100,
        legendario: true
    },

    // ── GENERACIÓN 2 · JOHTO ──────────────────────────────────────────
    {
        id: 10, nombre: "Chikorita",
        tipo_1: "Planta", tipo_2: null,
        generacion: 2, region: "Johto",
        ps: 45, ataque: 49, defensa: 65, velocidad: 45,
        legendario: false
    },
    {
        id: 11, nombre: "Cyndaquil",
        tipo_1: "Fuego", tipo_2: null,
        generacion: 2, region: "Johto",
        ps: 39, ataque: 52, defensa: 43, velocidad: 65,
        legendario: false
    },
    {
        id: 12, nombre: "Totodile",
        tipo_1: "Agua", tipo_2: null,
        generacion: 2, region: "Johto",
        ps: 50, ataque: 65, defensa: 64, velocidad: 43,
        legendario: false
    },
    {
        id: 13, nombre: "Raikou",
        tipo_1: "Eléctrico", tipo_2: null,
        generacion: 2, region: "Johto",
        ps: 90, ataque: 85, defensa: 75, velocidad: 115,
        legendario: true
    },
    {
        id: 14, nombre: "Entei",
        tipo_1: "Fuego", tipo_2: null,
        generacion: 2, region: "Johto",
        ps: 115, ataque: 115, defensa: 85, velocidad: 100,
        legendario: true
    },
    {
        id: 15, nombre: "Suicune",
        tipo_1: "Agua", tipo_2: null,
        generacion: 2, region: "Johto",
        ps: 100, ataque: 75, defensa: 115, velocidad: 85,
        legendario: true
    },
    {
        id: 16, nombre: "Lugia",
        tipo_1: "Psíquico", tipo_2: "Volador",
        generacion: 2, region: "Johto",
        ps: 106, ataque: 90, defensa: 130, velocidad: 110,
        legendario: true
    },
    {
        id: 17, nombre: "Ho-Oh",
        tipo_1: "Fuego", tipo_2: "Volador",
        generacion: 2, region: "Johto",
        ps: 106, ataque: 130, defensa: 90, velocidad: 90,
        legendario: true
    },
    {
        id: 18, nombre: "Celebi",
        tipo_1: "Psíquico", tipo_2: "Planta",
        generacion: 2, region: "Johto",
        ps: 100, ataque: 100, defensa: 100, velocidad: 100,
        legendario: true
    },

    // ── GENERACIÓN 3 · HOENN ──────────────────────────────────────────
    {
        id: 19, nombre: "Treecko",
        tipo_1: "Planta", tipo_2: null,
        generacion: 3, region: "Hoenn",
        ps: 40, ataque: 45, defensa: 35, velocidad: 70,
        legendario: false
    },
    {
        id: 20, nombre: "Torchic",
        tipo_1: "Fuego", tipo_2: null,
        generacion: 3, region: "Hoenn",
        ps: 45, ataque: 60, defensa: 40, velocidad: 45,
        legendario: false
    },
    {
        id: 21, nombre: "Mudkip",
        tipo_1: "Agua", tipo_2: null,
        generacion: 3, region: "Hoenn",
        ps: 50, ataque: 70, defensa: 50, velocidad: 40,
        legendario: false
    },
    {
        id: 22, nombre: "Latias",
        tipo_1: "Dragón", tipo_2: "Psíquico",
        generacion: 3, region: "Hoenn",
        ps: 80, ataque: 80, defensa: 90, velocidad: 110,
        legendario: true
    },
    {
        id: 23, nombre: "Latios",
        tipo_1: "Dragón", tipo_2: "Psíquico",
        generacion: 3, region: "Hoenn",
        ps: 80, ataque: 90, defensa: 80, velocidad: 110,
        legendario: true
    },
    {
        id: 24, nombre: "Kyogre",
        tipo_1: "Agua", tipo_2: null,
        generacion: 3, region: "Hoenn",
        ps: 100, ataque: 100, defensa: 90, velocidad: 90,
        legendario: true
    },
    {
        id: 25, nombre: "Groudon",
        tipo_1: "Tierra", tipo_2: null,
        generacion: 3, region: "Hoenn",
        ps: 100, ataque: 150, defensa: 140, velocidad: 90,
        legendario: true
    },
    {
        id: 26, nombre: "Rayquaza",
        tipo_1: "Dragón", tipo_2: "Volador",
        generacion: 3, region: "Hoenn",
        ps: 105, ataque: 150, defensa: 90, velocidad: 95,
        legendario: true
    },
    {
        id: 27, nombre: "Deoxys",
        tipo_1: "Psíquico", tipo_2: null,
        generacion: 3, region: "Hoenn",
        ps: 50, ataque: 150, defensa: 50, velocidad: 150,
        legendario: true
    },

    // ── GENERACIÓN 4 · SINNOH ─────────────────────────────────────────
    {
        id: 28, nombre: "Turtwig",
        tipo_1: "Planta", tipo_2: null,
        generacion: 4, region: "Sinnoh",
        ps: 55, ataque: 68, defensa: 64, velocidad: 31,
        legendario: false
    },
    {
        id: 29, nombre: "Chimchar",
        tipo_1: "Fuego", tipo_2: null,
        generacion: 4, region: "Sinnoh",
        ps: 44, ataque: 58, defensa: 44, velocidad: 61,
        legendario: false
    },
    {
        id: 30, nombre: "Piplup",
        tipo_1: "Agua", tipo_2: null,
        generacion: 4, region: "Sinnoh",
        ps: 53, ataque: 51, defensa: 53, velocidad: 40,
        legendario: false
    },
    {
        id: 31, nombre: "Dialga",
        tipo_1: "Acero", tipo_2: "Dragón",
        generacion: 4, region: "Sinnoh",
        ps: 100, ataque: 120, defensa: 120, velocidad: 90,
        legendario: true
    },
    {
        id: 32, nombre: "Palkia",
        tipo_1: "Agua", tipo_2: "Dragón",
        generacion: 4, region: "Sinnoh",
        ps: 90, ataque: 120, defensa: 100, velocidad: 100,
        legendario: true
    },
    {
        id: 33, nombre: "Giratina",
        tipo_1: "Fantasma", tipo_2: "Dragón",
        generacion: 4, region: "Sinnoh",
        ps: 150, ataque: 100, defensa: 120, velocidad: 90,
        legendario: true
    },
    {
        id: 34, nombre: "Cresselia",
        tipo_1: "Psíquico", tipo_2: null,
        generacion: 4, region: "Sinnoh",
        ps: 120, ataque: 70, defensa: 120, velocidad: 85,
        legendario: true
    },
    {
        id: 35, nombre: "Arceus",
        tipo_1: "Normal", tipo_2: null,
        generacion: 4, region: "Sinnoh",
        ps: 120, ataque: 120, defensa: 120, velocidad: 120,
        legendario: true
    },

    // ── GENERACIÓN 5 · TESELIA ────────────────────────────────────────
    {
        id: 36, nombre: "Snivy",
        tipo_1: "Planta", tipo_2: null,
        generacion: 5, region: "Teselia",
        ps: 45, ataque: 45, defensa: 55, velocidad: 63,
        legendario: false
    },
    {
        id: 37, nombre: "Tepig",
        tipo_1: "Fuego", tipo_2: null,
        generacion: 5, region: "Teselia",
        ps: 65, ataque: 63, defensa: 45, velocidad: 45,
        legendario: false
    },
    {
        id: 38, nombre: "Oshawott",
        tipo_1: "Agua", tipo_2: null,
        generacion: 5, region: "Teselia",
        ps: 55, ataque: 55, defensa: 45, velocidad: 45,
        legendario: false
    },
    {
        id: 39, nombre: "Cobalion",
        tipo_1: "Acero", tipo_2: "Lucha",
        generacion: 5, region: "Teselia",
        ps: 91, ataque: 90, defensa: 129, velocidad: 108,
        legendario: true
    },
    {
        id: 40, nombre: "Terrakion",
        tipo_1: "Roca", tipo_2: "Lucha",
        generacion: 5, region: "Teselia",
        ps: 91, ataque: 129, defensa: 90, velocidad: 108,
        legendario: true
    },
    {
        id: 41, nombre: "Virizion",
        tipo_1: "Planta", tipo_2: "Lucha",
        generacion: 5, region: "Teselia",
        ps: 91, ataque: 90, defensa: 72, velocidad: 108,
        legendario: true
    },
    {
        id: 42, nombre: "Reshiram",
        tipo_1: "Dragón", tipo_2: "Fuego",
        generacion: 5, region: "Teselia",
        ps: 100, ataque: 120, defensa: 100, velocidad: 90,
        legendario: true
    },
    {
        id: 43, nombre: "Zekrom",
        tipo_1: "Dragón", tipo_2: "Eléctrico",
        generacion: 5, region: "Teselia",
        ps: 100, ataque: 150, defensa: 120, velocidad: 90,
        legendario: true
    },
    {
        id: 44, nombre: "Kyurem",
        tipo_1: "Dragón", tipo_2: "Hielo",
        generacion: 5, region: "Teselia",
        ps: 125, ataque: 130, defensa: 90, velocidad: 95,
        legendario: true
    },

    // ── GENERACIÓN 6 · KALOS ──────────────────────────────────────────
    {
        id: 45, nombre: "Chespin",
        tipo_1: "Planta", tipo_2: null,
        generacion: 6, region: "Kalos",
        ps: 56, ataque: 61, defensa: 65, velocidad: 38,
        legendario: false
    },
    {
        id: 46, nombre: "Fennekin",
        tipo_1: "Fuego", tipo_2: null,
        generacion: 6, region: "Kalos",
        ps: 40, ataque: 45, defensa: 40, velocidad: 60,
        legendario: false
    },
    {
        id: 47, nombre: "Froakie",
        tipo_1: "Agua", tipo_2: null,
        generacion: 6, region: "Kalos",
        ps: 41, ataque: 56, defensa: 40, velocidad: 71,
        legendario: false
    },
    {
        id: 48, nombre: "Xerneas",
        tipo_1: "Hada", tipo_2: null,
        generacion: 6, region: "Kalos",
        ps: 126, ataque: 131, defensa: 95, velocidad: 99,
        legendario: true
    },
    {
        id: 49, nombre: "Yveltal",
        tipo_1: "Siniestro", tipo_2: "Volador",
        generacion: 6, region: "Kalos",
        ps: 126, ataque: 131, defensa: 95, velocidad: 99,
        legendario: true
    },
    {
        id: 50, nombre: "Zygarde",
        tipo_1: "Dragón", tipo_2: "Tierra",
        generacion: 6, region: "Kalos",
        ps: 108, ataque: 100, defensa: 121, velocidad: 95,
        legendario: true
    },

    // ── GENERACIÓN 7 · ALOLA ──────────────────────────────────────────
    {
        id: 51, nombre: "Rowlet",
        tipo_1: "Planta", tipo_2: "Volador",
        generacion: 7, region: "Alola",
        ps: 68, ataque: 55, defensa: 55, velocidad: 42,
        legendario: false
    },
    {
        id: 52, nombre: "Litten",
        tipo_1: "Fuego", tipo_2: null,
        generacion: 7, region: "Alola",
        ps: 45, ataque: 65, defensa: 40, velocidad: 70,
        legendario: false
    },
    {
        id: 53, nombre: "Popplio",
        tipo_1: "Agua", tipo_2: null,
        generacion: 7, region: "Alola",
        ps: 50, ataque: 54, defensa: 54, velocidad: 40,
        legendario: false
    },
    {
        id: 54, nombre: "Tapu Koko",
        tipo_1: "Eléctrico", tipo_2: "Hada",
        generacion: 7, region: "Alola",
        ps: 70, ataque: 115, defensa: 85, velocidad: 130,
        legendario: true
    },
    {
        id: 55, nombre: "Solgaleo",
        tipo_1: "Psíquico", tipo_2: "Acero",
        generacion: 7, region: "Alola",
        ps: 137, ataque: 137, defensa: 107, velocidad: 97,
        legendario: true
    },
    {
        id: 56, nombre: "Lunala",
        tipo_1: "Psíquico", tipo_2: "Fantasma",
        generacion: 7, region: "Alola",
        ps: 137, ataque: 113, defensa: 89, velocidad: 97,
        legendario: true
    },
    {
        id: 57, nombre: "Necrozma",
        tipo_1: "Psíquico", tipo_2: null,
        generacion: 7, region: "Alola",
        ps: 97, ataque: 107, defensa: 101, velocidad: 79,
        legendario: true
    },

    // ── GENERACIÓN 8 · GALAR ──────────────────────────────────────────
    {
        id: 58, nombre: "Grookey",
        tipo_1: "Planta", tipo_2: null,
        generacion: 8, region: "Galar",
        ps: 50, ataque: 65, defensa: 50, velocidad: 45,
        legendario: false
    },
    {
        id: 59, nombre: "Scorbunny",
        tipo_1: "Fuego", tipo_2: null,
        generacion: 8, region: "Galar",
        ps: 50, ataque: 71, defensa: 40, velocidad: 69,
        legendario: false
    },
    {
        id: 60, nombre: "Sobble",
        tipo_1: "Agua", tipo_2: null,
        generacion: 8, region: "Galar",
        ps: 50, ataque: 40, defensa: 40, velocidad: 70,
        legendario: false
    },
    {
        id: 61, nombre: "Zacian",
        tipo_1: "Hada", tipo_2: "Acero",
        generacion: 8, region: "Galar",
        ps: 92, ataque: 150, defensa: 115, velocidad: 138,
        legendario: true
    },
    {
        id: 62, nombre: "Zamazenta",
        tipo_1: "Lucha", tipo_2: "Acero",
        generacion: 8, region: "Galar",
        ps: 92, ataque: 130, defensa: 145, velocidad: 138,
        legendario: true
    },
    {
        id: 63, nombre: "Eternatus",
        tipo_1: "Veneno", tipo_2: "Dragón",
        generacion: 8, region: "Galar",
        ps: 140, ataque: 85, defensa: 95, velocidad: 130,
        legendario: true
    },
    {
        id: 64, nombre: "Calyrex",
        tipo_1: "Psíquico", tipo_2: "Planta",
        generacion: 8, region: "Galar",
        ps: 100, ataque: 80, defensa: 80, velocidad: 80,
        legendario: true
    },

    // ── GENERACIÓN 9 · PALDEA ─────────────────────────────────────────
    {
        id: 65, nombre: "Sprigatito",
        tipo_1: "Planta", tipo_2: null,
        generacion: 9, region: "Paldea",
        ps: 40, ataque: 61, defensa: 54, velocidad: 65,
        legendario: false
    },
    {
        id: 66, nombre: "Fuecoco",
        tipo_1: "Fuego", tipo_2: null,
        generacion: 9, region: "Paldea",
        ps: 67, ataque: 45, defensa: 59, velocidad: 36,
        legendario: false
    },
    {
        id: 67, nombre: "Quaxly",
        tipo_1: "Agua", tipo_2: null,
        generacion: 9, region: "Paldea",
        ps: 55, ataque: 65, defensa: 45, velocidad: 50,
        legendario: false
    },
    {
        id: 68, nombre: "Koraidon",
        tipo_1: "Lucha", tipo_2: "Dragón",
        generacion: 9, region: "Paldea",
        ps: 100, ataque: 135, defensa: 115, velocidad: 135,
        legendario: true
    },
    {
        id: 69, nombre: "Miraidon",
        tipo_1: "Eléctrico", tipo_2: "Dragón",
        generacion: 9, region: "Paldea",
        ps: 100, ataque: 85, defensa: 100, velocidad: 135,
        legendario: true
    },
    {
        id: 70, nombre: "Terapagos",
        tipo_1: "Normal", tipo_2: null,
        generacion: 9, region: "Paldea",
        ps: 90, ataque: 65, defensa: 85, velocidad: 60,
        legendario: true
    }
];

module.exports = pokemon;