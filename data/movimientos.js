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
    - Cada movimiento es único (no se repite nombre)
*/

let movimientos = 
[
    // ==================== GENERACIÓN 1 ====================
    // Bulbasaur (id:1)
    { id: 1,  nombre: "Látigo Cepa",       tipo: "Planta",    potencia: 45,  precision: 100, pokemon_id: 1 },
    { id: 2,  nombre: "Rayo Solar",        tipo: "Planta",    potencia: 120, precision: 100, pokemon_id: 1 },
    
    // Charmander (id:2)
    { id: 3,  nombre: "Ascuas",            tipo: "Fuego",     potencia: 40,  precision: 100, pokemon_id: 2 },
    { id: 4,  nombre: "Lanzallamas",       tipo: "Fuego",     potencia: 90,  precision: 100, pokemon_id: 2 },
    
    // Squirtle (id:3)
    { id: 5,  nombre: "Pistola Agua",      tipo: "Agua",      potencia: 40,  precision: 100, pokemon_id: 3 },
    { id: 6,  nombre: "Hidrobomba",        tipo: "Agua",      potencia: 110, precision: 80,  pokemon_id: 3 },
    
    // Pikachu (id:4)
    { id: 7,  nombre: "Placaje Eléctrico", tipo: "Eléctrico", potencia: 120, precision: 100, pokemon_id: 4 },
    { id: 8,  nombre: "Rayo",              tipo: "Eléctrico", potencia: 90,  precision: 100, pokemon_id: 4 },
    
    // Articuno (id:5)
    { id: 9,  nombre: "Ventisca",          tipo: "Hielo",     potencia: 110, precision: 70,  pokemon_id: 5 },
    { id: 10, nombre: "Tajo Aéreo",        tipo: "Volador",   potencia: 75,  precision: 95,  pokemon_id: 5 },
    
    // Zapdos (id:6)
    { id: 11, nombre: "Trueno",            tipo: "Eléctrico", potencia: 110, precision: 70,  pokemon_id: 6 },
    { id: 12, nombre: "Pájaro Osado",      tipo: "Volador",   potencia: 120, precision: 100, pokemon_id: 6 },
    
    // Moltres (id:7)
    { id: 13, nombre: "Llama Final",       tipo: "Fuego",     potencia: 130, precision: 90,  pokemon_id: 7 },
    { id: 14, nombre: "Día Soleado",       tipo: "Fuego",     potencia: 0,   precision: 0,   pokemon_id: 7 },
    
    // Mewtwo (id:8)
    { id: 15, nombre: "Psíquico",          tipo: "Psíquico",  potencia: 90,  precision: 100, pokemon_id: 8 },
    { id: 16, nombre: "Onda Certera",      tipo: "Lucha",     potencia: 120, precision: 70,  pokemon_id: 8 },
    
    // Mew (id:9)
    { id: 17, nombre: "Transformación",    tipo: "Normal",    potencia: 0,   precision: 100, pokemon_id: 9 },
    { id: 18, nombre: "Esfera Aural",      tipo: "Lucha",     potencia: 80,  precision: 0,   pokemon_id: 9 },
    
    // ==================== GENERACIÓN 2 ====================
    // Chikorita (id:10)
    { id: 19, nombre: "Hoja Afilada",      tipo: "Planta",    potencia: 55,  precision: 95,  pokemon_id: 10 },
    { id: 20, nombre: "Drenadoras",        tipo: "Planta",    potencia: 20,  precision: 100, pokemon_id: 10 },
    
    // Cyndaquil (id:11)
    { id: 21, nombre: "Nitrocarga",        tipo: "Fuego",     potencia: 50,  precision: 100, pokemon_id: 11 },
    { id: 22, nombre: "Onda Ígnea",        tipo: "Fuego",     potencia: 80,  precision: 100, pokemon_id: 11 },
    
    // Totodile (id:12)
    { id: 23, nombre: "Azote",             tipo: "Agua",      potencia: 25,  precision: 85,  pokemon_id: 12 },
    { id: 24, nombre: "Acua Cola",         tipo: "Agua",      potencia: 90,  precision: 90,  pokemon_id: 12 },
    
    // Raikou (id:13)
    { id: 25, nombre: "Carga",             tipo: "Eléctrico", potencia: 130, precision: 100, pokemon_id: 13 },
    { id: 26, nombre: "Voltio Cruel",      tipo: "Eléctrico", potencia: 120, precision: 100, pokemon_id: 13 },
    
    // Entei (id:14)
    { id: 27, nombre: "Sofoco",            tipo: "Fuego",     potencia: 130, precision: 85,  pokemon_id: 14 },
    { id: 28, nombre: "Estallido",         tipo: "Fuego",     potencia: 150, precision: 100, pokemon_id: 14 },
    
    // Suicune (id:15)
    { id: 29, nombre: "Rayo Aurora",       tipo: "Hielo",     potencia: 65,  precision: 100, pokemon_id: 15 },
    { id: 30, nombre: "Colmillo Hielo",    tipo: "Hielo",     potencia: 65,  precision: 95,  pokemon_id: 15 },
    
    // Lugia (id:16)
    { id: 31, nombre: "Respiro",           tipo: "Volador",   potencia: 0,   precision: 100, pokemon_id: 16 },
    { id: 32, nombre: "Aerochorro",        tipo: "Volador",   potencia: 100, precision: 95,  pokemon_id: 16 },
    
    // Ho-Oh (id:17)
    { id: 33, nombre: "Llamarada",         tipo: "Fuego",     potencia: 120, precision: 85,  pokemon_id: 17 },
    { id: 34, nombre: "Fuego Sagrado",     tipo: "Fuego",     potencia: 100, precision: 95,  pokemon_id: 17 },
    
    // Celebi (id:18)
    { id: 35, nombre: "Danza Lunar",       tipo: "Psíquico",  potencia: 0,   precision: 0,   pokemon_id: 18 },
    { id: 36, nombre: "Hoja Mágica",       tipo: "Planta",    potencia: 60,  precision: 100, pokemon_id: 18 },
    
    // ==================== GENERACIÓN 3 ====================
    // Treecko (id:19)
    { id: 37, nombre: "Cuchillada",        tipo: "Normal",    potencia: 70,  precision: 100, pokemon_id: 19 },
    { id: 38, nombre: "Energibola",        tipo: "Planta",    potencia: 90,  precision: 100, pokemon_id: 19 },
    
    // Torchic (id:20)
    { id: 39, nombre: "Picotazo",          tipo: "Volador",   potencia: 35,  precision: 100, pokemon_id: 20 },
    { id: 40, nombre: "Rueda Fuego",       tipo: "Fuego",     potencia: 60,  precision: 100, pokemon_id: 20 },
    
    // Mudkip (id:21)
    { id: 41, nombre: "Lodo",              tipo: "Tierra",    potencia: 20,  precision: 100, pokemon_id: 21 },
    { id: 42, nombre: "Hidropulso",        tipo: "Agua",      potencia: 60,  precision: 100, pokemon_id: 21 },
    
    // Latias (id:22)
    { id: 43, nombre: "Vuelo",             tipo: "Volador",   potencia: 90,  precision: 95,  pokemon_id: 22 },
    { id: 44, nombre: "Agilidad",          tipo: "Psíquico",  potencia: 0,   precision: 0,   pokemon_id: 22 },
    
    // Latios (id:23)
    { id: 45, nombre: "Dragoaliento",      tipo: "Dragón",    potencia: 60,  precision: 100, pokemon_id: 23 },
    { id: 46, nombre: "Psicocorte",        tipo: "Psíquico",  potencia: 70,  precision: 100, pokemon_id: 23 },
    
    // Kyogre (id:24)
    { id: 47, nombre: "Ciclo Agua",        tipo: "Agua",      potencia: 110, precision: 80,  pokemon_id: 24 },
    { id: 48, nombre: "Presa Acuática",    tipo: "Agua",      potencia: 85,  precision: 100, pokemon_id: 24 },
    
    // Groudon (id:25)
    { id: 49, nombre: "Fisura",            tipo: "Tierra",    potencia: 0,   precision: 30,  pokemon_id: 25 },
    { id: 50, nombre: "Golpe calor",       tipo: "Fuego",     potencia: 0,   precision: 100, pokemon_id: 25 },
    
    // Rayquaza (id:26)
    { id: 51, nombre: "Cometa Draco",      tipo: "Dragón",    potencia: 130, precision: 90,  pokemon_id: 26 },
    { id: 52, nombre: "Velocidad Extrema", tipo: "Volador",   potencia: 80,  precision: 100, pokemon_id: 26 },
    
    // Deoxys (id:27)
    { id: 53, nombre: "Puño Cometa",       tipo: "Normal",    potencia: 90,  precision: 100, pokemon_id: 27 },
    { id: 54, nombre: "Psicoataque",       tipo: "Psíquico",  potencia: 140, precision: 90,  pokemon_id: 27 },
    
    // ==================== GENERACIÓN 4 ====================
    // Turtwig (id:28)
    { id: 55, nombre: "Megaagotar",        tipo: "Planta",    potencia: 40,  precision: 100, pokemon_id: 28 },
    { id: 56, nombre: "Mordisco",          tipo: "Siniestro", potencia: 60,  precision: 100, pokemon_id: 28 },
    
    // Chimchar (id:29)
    { id: 57, nombre: "Puño Fuego",        tipo: "Fuego",     potencia: 75,  precision: 100, pokemon_id: 29 },
    { id: 58, nombre: "Rapidez",           tipo: "Normal",    potencia: 60,  precision: 100, pokemon_id: 29 },
    
    // Piplup (id:30)
    { id: 59, nombre: "Rayo Burbuja",      tipo: "Agua",      potencia: 65,  precision: 100, pokemon_id: 30 },
    { id: 60, nombre: "Pico Taladro",      tipo: "Volador",   potencia: 80,  precision: 100, pokemon_id: 30 },
    
    // Dialga (id:31)
    { id: 61, nombre: "Brillo Místico",    tipo: "Acero",     potencia: 70,  precision: 90,  pokemon_id: 31 },
    { id: 62, nombre: "Distorsión",        tipo: "Dragón",    potencia: 100, precision: 90,  pokemon_id: 31 },
    
    // Palkia (id:32)
    { id: 63, nombre: "Acua Aro",          tipo: "Agua",      potencia: 0,   precision: 0,   pokemon_id: 32 },
    { id: 64, nombre: "Corte Vacío",       tipo: "Dragón",    potencia: 100, precision: 95,  pokemon_id: 32 },
    
    // Giratina (id:33)
    { id: 65, nombre: "Bola Sombra",       tipo: "Fantasma",  potencia: 80,  precision: 100, pokemon_id: 33 },
    { id: 66, nombre: "Garra Dragón",      tipo: "Dragón",    potencia: 80,  precision: 100, pokemon_id: 33 },
    
    // Darkrai (id:34)
    { id: 67, nombre: "Pulso Umbrío",      tipo: "Siniestro", potencia: 80,  precision: 100, pokemon_id: 34 },
    { id: 68, nombre: "Brecha Negra",      tipo: "Siniestro", potencia: 0,   precision: 50,  pokemon_id: 34 },
    
    // Arceus (id:35)
    { id: 69, nombre: "Sentencia",         tipo: "Normal",    potencia: 100, precision: 100, pokemon_id: 35 },
    { id: 70, nombre: "Recuperación",      tipo: "Normal",    potencia: 0,   precision: 100, pokemon_id: 35 },
    
    // ==================== GENERACIÓN 5 ====================
    // Snivy (id:36)
    { id: 71, nombre: "Hoja Aguda",        tipo: "Planta",    potencia: 55,  precision: 95,  pokemon_id: 36 },
    { id: 72, nombre: "Lluevehojas",       tipo: "Planta",    potencia: 130, precision: 90,  pokemon_id: 36 },
    
    // Tepig (id:37)
    { id: 73, nombre: "Giro Fuego",        tipo: "Fuego",     potencia: 35,  precision: 85,  pokemon_id: 37 },
    { id: 74, nombre: "Derribo",           tipo: "Normal",    potencia: 90,  precision: 85,  pokemon_id: 37 },
    
    // Oshawott (id:38)
    { id: 75, nombre: "Concha Filo",       tipo: "Agua",      potencia: 75,  precision: 95,  pokemon_id: 38 },
    { id: 76, nombre: "Acua Jet",          tipo: "Agua",      potencia: 40,  precision: 100, pokemon_id: 38 },
    
    // Cobalion (id:39)
    { id: 77, nombre: "Espada Santa",      tipo: "Lucha",     potencia: 90,  precision: 100, pokemon_id: 39 },
    { id: 78, nombre: "Acero Afilado",     tipo: "Acero",     potencia: 100, precision: 100, pokemon_id: 39 },
    
    // Terrakion (id:40)
    { id: 79, nombre: "Desarme",           tipo: "Lucha",     potencia: 100, precision: 100, pokemon_id: 40 },
    { id: 80, nombre: "Roca Afilada",      tipo: "Roca",      potencia: 75,  precision: 90,  pokemon_id: 40 },
    
    // Virizion (id:41)
    { id: 81, nombre: "Bote",              tipo: "Volador",   potencia: 85,  precision: 85,  pokemon_id: 41 },
    { id: 82, nombre: "Asta Drenaje",      tipo: "Planta",    potencia: 75,  precision: 100, pokemon_id: 41 },
    
    // Reshiram (id:42)
    { id: 83, nombre: "Llama Azul",        tipo: "Fuego",     potencia: 130, precision: 85,  pokemon_id: 42 },
    { id: 84, nombre: "Llama Fusión",      tipo: "Fuego",     potencia: 80,  precision: 95,  pokemon_id: 42 },
    
    // Zekrom (id:43)
    { id: 85, nombre: "Rayo Fusión",       tipo: "Eléctrico", potencia: 100, precision: 100, pokemon_id: 43 },
    { id: 86, nombre: "Enfado",            tipo: "Dragón",    potencia: 120, precision: 100, pokemon_id: 43 },
    
    // Kyurem (id:44)
    { id: 87, nombre: "Mundo Gélido",      tipo: "Hielo",     potencia: 65,  precision: 95,  pokemon_id: 44 },
    { id: 88, nombre: "Rayo Hielo",        tipo: "Hielo",     potencia: 90,  precision: 100, pokemon_id: 44 },
    
    // ==================== GENERACIÓN 6 ====================
    // Chespin (id:45)
    { id: 89, nombre: "Brazo Pincho",      tipo: "Planta",    potencia: 60,  precision: 100, pokemon_id: 45 },
    { id: 90, nombre: "Mazazo",            tipo: "Planta",    potencia: 70,  precision: 100, pokemon_id: 45 },
    
    // Fennekin (id:46)
    { id: 91, nombre: "Calcinación",       tipo: "Fuego",     potencia: 70,  precision: 100, pokemon_id: 46 },
    { id: 92, nombre: "Fuego Fatuo",       tipo: "Fuego",     potencia: 0,   precision: 85,  pokemon_id: 46 },
    
    // Froakie (id:47)
    { id: 93, nombre: "Pesquisa",          tipo: "Agua",      potencia: 60,  precision: 100, pokemon_id: 47 },
    { id: 94, nombre: "Chorro Agua",       tipo: "Agua",      potencia: 40,  precision: 100, pokemon_id: 47 },
    
    // Xerneas (id:48)
    { id: 95, nombre: "Geocontrol",        tipo: "Hada",      potencia: 0,   precision: 100, pokemon_id: 48 },
    { id: 96, nombre: "Cuerno Mágico",     tipo: "Hada",      potencia: 100, precision: 95,  pokemon_id: 48 },
    
    // Yveltal (id:49)
    { id: 97, nombre: "Ala Mortífera",     tipo: "Siniestro", potencia: 80,  precision: 100, pokemon_id: 49 },
    { id: 98, nombre: "Alarido",           tipo: "Siniestro", potencia: 55,  precision: 95,  pokemon_id: 49 },
    
    // Zygarde (id:50)
    { id: 99, nombre: "Flecha Rápida",     tipo: "Dragón",    potencia: 50,  precision: 100, pokemon_id: 50 },
    { id: 100, nombre: "Terremoto",        tipo: "Tierra",    potencia: 100, precision: 100, pokemon_id: 50 },
    
    // ==================== GENERACIÓN 7 ====================
    // Rowlet (id:51)
    { id: 101, nombre: "Sombra Vil",       tipo: "Fantasma",  potencia: 40,  precision: 100, pokemon_id: 51 },
    { id: 102, nombre: "Picoteo",          tipo: "Volador",   potencia: 60,  precision: 100, pokemon_id: 51 },
    
    // Litten (id:52)
    { id: 103, nombre: "Golpes Furia",     tipo: "Normal",    potencia: 18,  precision: 80,  pokemon_id: 52 },
    { id: 104, nombre: "Envite Ígneo",     tipo: "Fuego",     potencia: 120, precision: 100, pokemon_id: 52 },
    
    // Popplio (id:53)
    { id: 105, nombre: "Canto Armonía",    tipo: "Normal",    potencia: 0,   precision: 100, pokemon_id: 53 },
    { id: 106, nombre: "Burbuja",          tipo: "Agua",      potencia: 40,  precision: 100, pokemon_id: 53 },
    
    // Tapu Koko (id:54)
    { id: 107, nombre: "Furia Natural",    tipo: "Hada",      potencia: 0,   precision: 90,  pokemon_id: 54 },
    { id: 108, nombre: "Impactrueno",      tipo: "Eléctrico", potencia: 40,  precision: 100, pokemon_id: 54 },
    
    // Solgaleo (id:55)
    { id: 109, nombre: "Meteoimpacto",     tipo: "Acero",     potencia: 100, precision: 100, pokemon_id: 55 },
    { id: 110, nombre: "Foco Resplandor",  tipo: "Acero",     potencia: 80,  precision: 100, pokemon_id: 55 },
    
    // Lunala (id:56)
    { id: 111, nombre: "Rayo Umbrío",      tipo: "Fantasma",  potencia: 100, precision: 100, pokemon_id: 56 },
    { id: 112, nombre: "Pulso noche",      tipo: "Siniestro", potencia: 90,  precision: 95,  pokemon_id: 56 },
    
    // Necrozma (id:57)
    { id: 113, nombre: "Rayo Prisma",      tipo: "Psíquico",  potencia: 100, precision: 100, pokemon_id: 57 },
    { id: 114, nombre: "Garra Metal",      tipo: "Acero",     potencia: 50,  precision: 95,  pokemon_id: 57 },
    
    // ==================== GENERACIÓN 8 ====================
    // Grookey (id:58)
    { id: 115, nombre: "Punzada Rama",     tipo: "Planta",    potencia: 40,  precision: 100, pokemon_id: 58 },
    { id: 116, nombre: "Mofa",             tipo: "Siniestro", potencia: 0,   precision: 100,  pokemon_id: 58 },
    
    // Scorbunny (id:59)
    { id: 117, nombre: "Patada Ígnea",     tipo: "Fuego",     potencia: 85,  precision: 90,  pokemon_id: 59 },
    { id: 118, nombre: "Doble patada",     tipo: "Lucha",     potencia: 30,  precision: 100, pokemon_id: 59 },
    
    // Sobble (id:60)
    { id: 119, nombre: "Danza Lluvia",     tipo: "Agua",      potencia: 0,   precision: 0,   pokemon_id: 60 },
    { id: 120, nombre: "Hidroariete",      tipo: "Agua",      potencia: 85,  precision: 100, pokemon_id: 60 },
    
    // Zacian (id:61)
    { id: 121, nombre: "Tajo Supremo",     tipo: "Acero",     potencia: 100, precision: 100, pokemon_id: 61 },
    { id: 122, nombre: "A Bocajarro",      tipo: "Lucha",     potencia: 120, precision: 100, pokemon_id: 61 },
    
    // Zamazenta (id:62)
    { id: 123, nombre: "Embate Supremo",   tipo: "Acero",     potencia: 100, precision: 100, pokemon_id: 62 },
    { id: 124, nombre: "Defensa Férrea",   tipo: "Acero",     potencia: 0,   precision: 100, pokemon_id: 62 },
    
    // Eternatus (id:63)
    { id: 125, nombre: "Cañón Dinamax",    tipo: "Dragón",    potencia: 100, precision: 100, pokemon_id: 63 },
    { id: 126, nombre: "Veneno X",         tipo: "Veneno",    potencia: 70,  precision: 100, pokemon_id: 63 },
    
    // Calyrex (id:64)
    { id: 127, nombre: "Lanza Glacial",    tipo: "Hielo",     potencia: 100,  precision: 100, pokemon_id: 64 },
    { id: 128, nombre: "Orbes Espectro",   tipo: "Fantasma",  potencia: 110,  precision: 100, pokemon_id: 64 },
    
    // ==================== GENERACIÓN 9 ====================
    // Sprigatito (id:65)
    { id: 129, nombre: "Follaje",          tipo: "Planta",    potencia: 40,  precision: 100, pokemon_id: 65 },
    { id: 130, nombre: "Carantoña",        tipo: "Hada",      potencia: 90,  precision: 90,  pokemon_id: 65 },
    
    // Fuecoco (id:66)
    { id: 131, nombre: "Vozarrón",         tipo: "Normal",    potencia: 90,  precision: 100, pokemon_id: 66 },
    { id: 132, nombre: "Colmillo Ígneo",   tipo: "Fuego",     potencia: 65,  precision: 95,  pokemon_id: 66 },
    
    // Quaxly (id:67)
    { id: 133, nombre: "Tajo Acuático",    tipo: "Agua",      potencia: 70,  precision: 100, pokemon_id: 67 },
    { id: 134, nombre: "Ataque Ala",       tipo: "Volador",   potencia: 60,  precision: 100, pokemon_id: 67 },
    
    // Koraidon (id:68)
    { id: 135, nombre: "Gigaimpacto",      tipo: "Normal",    potencia: 150, precision: 90,  pokemon_id: 68 },
    { id: 136, nombre: "Nitrochoque",      tipo: "Lucha",     potencia: 100, precision: 100, pokemon_id: 68 },
    
    // Miraidon (id:69)
    { id: 137, nombre: "Electroderrape",   tipo: "Eléctrico", potencia: 100, precision: 100, pokemon_id: 69 },
    { id: 138, nombre: "Colmillo Rayo",    tipo: "Eléctrico", potencia: 65,  precision: 100, pokemon_id: 69 },
    
    // Terapagos (id:70)
    { id: 139, nombre: "Teraclúster",      tipo: "Normal",    potencia: 120, precision: 100, pokemon_id: 70 },
    { id: 140, nombre: "Tierra viva",      tipo: "Tierra",    potencia: 90,  precision: 100, pokemon_id: 70 }
];

module.exports = movimientos;