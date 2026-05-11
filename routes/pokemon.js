const express = require("express");
const router = express.Router();    // mini-servidor de rutas
const pokemon = require("../data/pokemon");

// ─────────────────────────────────────────────
// GET /api/pokemon
// Devuelve todos los pokemon
// ─────────────────────────────────────────────
router.get("/",(req, res) =>
    {
        return res.status(200).json(pokemon);   // HTTP 200 - OK
    }
);

// ─────────────────────────────────────────────
// GET /api/pokemon/buscar/query?id=1
// GET /api/pokemon/buscar/query?nombre=Pikachu
// Buscar por Query Param.
// ─────────────────────────────────────────────
router.get("/buscar/query", (req, res) =>
    {
        const{id, nombre} = req.query;  // Extraer los query params de la URL

        if(id)
        {
            const poke = pokemon.find(p => p.id == id); // Busca en el array por id
            if(!poke)
                return res.status(404).json({ error: `No existe ningún pokémon con id ${id}` });
            return res.status(200).json(poke);   // HTTP 200 - OK
        }

        if(nombre)
        {
            const poke = pokemon.find(p => p.nombre.toLowerCase() == nombre.toLowerCase()); // Busca en el array por nombre
            if(!poke)
                return res.status(404).json({ error: `No existe ningún pokémon llamado ${nombre}` });
            return res.status(200).json(poke);   // HTTP 200 - OK
        }

        return res.status(400).json({ error: "Debes indicar ?id=X o ?nombre=X"} );   // 400 - Bad Request
    }
);

// ─────────────────────────────────────────────
// GET /api/pokemon/1
// Buscar por Route Param
// ─────────────────────────────────────────────
router.get("/:id", (req, res) =>
    {
        const poke = pokemon.find(p => p.id == req.params.id);  // Buscar en el array
        if(!poke)
            return res.status(404).json({ error: `No existe ningún pokémon con id ${req.params.id}` });
        return res.status(200).json(poke);
    }
);

// ─────────────────────────────────────────────
// POST /api/pokemon
// Crear un nuevo pokemon.
// tipo_1 es obligatorio, tipo_2 es opcional (null por defecto).
// ─────────────────────────────────────────────
router.post("/", (req, res) =>
    {
        const { nombre, tipo_1, tipo_2, generacion, region, ps, ataque, defensa, velocidad, legendario } = req.body;    // Extraemos del body los campos
        
        if (!nombre || !tipo_1 || !generacion || !region || ps == null || ataque == null|| defensa == null || velocidad == null)
        {
            return res.status(400).json({ error: "Faltan campos obligatorios: nombre, tipo_1, generacion, region, ps, ataque, defensa, velocidad" });
        }

        // To do: Parse tipos de la entrada
        const nuevoPokemon = 
        {
            id: pokemon.length + 1, // aumenta el id
            nombre,
            tipo_1,
            tipo_2: tipo_2 ?? null, // se pone null si no se recibe nada (operador nullish coalescing)
            generacion,
            region,
            ps, 
            ataque,
            defensa,
            velocidad,
            legendario: legendario ?? false
        };

        pokemon.push(nuevoPokemon);
        return res.status(201).json(nuevoPokemon);  // HTTP 201 - Created
    }
);

// ─────────────────────────────────────────────
// PUT /api/pokemon/1
// Modificiar un pokemon.
// Solo se actualizan los campos que vengan en e body.
// ─────────────────────────────────────────────
router.put("/:id", (req, res) => 
    {
        const poke = pokemon.find(p => p.id == req.params.id);  // Busca por id

        if(!poke)
            return res.status(404).json({ error: `No existe ningún pokémon con id ${req.params.id}` });

        const { nombre, tipo_1, tipo_2, generacion, region, ps, ataque, defensa, velocidad, legendario } = req.body;

        if(nombre) poke.nombre = nombre;
        if(tipo_1) poke.tipo_1 = tipo_1;
        if(tipo_2 !== undefined) poke.tipo_2 = tipo_2;
        if(generacion) poke.generacion = generacion;
        if(region) poke.region = region;
        if(ps) poke.ps = ps;
        if(ataque) poke.ataque = ataque;
        if(defensa) poke.defensa = defensa;
        if(velocidad) poke.velocidad = velocidad;
        if(legendario !== undefined) poke.legendario = legendario;

        return res.status(200).json(poke);
    }
);

// ─────────────────────────────────────────────
// DELETE /api/pokemon/1
// Eliminar un pokémon
// ─────────────────────────────────────────────
router.delete("/:id", (req, res) =>
    {
        const index = pokemon.findIndex(p => p.id == req.params.id);    // Buscar el id
        if(index === -1)
            return res.status(404).json({ error: `No existen ningún pokémon con id ${req.params.id}` });

        const eliminado = pokemon.splice(index, 1); // El pokémon eliminado
        return res.status(200).json({ mensaje: `Pokémon ${eliminado[0].nombre} eliminado correctamente` });
    }
);

module.exports = router;