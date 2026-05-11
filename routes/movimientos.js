const express = require("express");
const router = express.Router();
const movimientos = require("../data/movimientos");

// ─────────────────────────────────────────────
// GET /api/movimientos
// Devuelve todos los movimientos.
// ─────────────────────────────────────────────
router.get("/", (req, res) =>
    {
        return res.status(200).json(movimientos);
    }
);

// ─────────────────────────────────────────────
// GET /api/movimientos/pokemon/1
// Devuelve los movimientos del pokémon en concreto.
// ─────────────────────────────────────────────
router.get("/pokemon/:pokemon_id", (req, res) => 
    {
        const movs = movimientos.filter(m => m.pokemon_id == req.params.pokemon_id);    // filter() reccorre todo el array y devuelve todos los que coincidan
        if(movs.length === 0)   // Si el array está vacío y no se encontró nada
            return res.status(404).json({ error: `No se encontraron movimientos para el pokémon con id ${req.params.pokemon_id}` });

        return res.status(200).json(movs);
    }
);

// ─────────────────────────────────────────────
// POST /api/movimientos
// Crear un nuevo movimiento.
// ─────────────────────────────────────────────
router.post("/" , (req, res) => 
    {
        const { nombre, tipo, potencia, precision, pokemon_id } = req.body;

        if(!nombre || !tipo || potencia == null || precision == null || pokemon_id == null)
        {
            return res.status(400).json({ error: "Faltan campos obligatorios: nombre, tipo, potencia, precision, pokemon_id" });
        }

        // Buscar el próximo Id disponible
        const idsExistentes = movimientos.map(m => m.id);
        let nuevoId = 1;
        while(idsExistentes.includes(nuevoId)) nuevoId++;

        const nuevoMovimiento =
        {
            id: nuevoId,
            nombre,
            tipo,
            potencia,
            precision,
            pokemon_id
        };

        movimientos.push(nuevoMovimiento);
        movimientos.sort((a,b) => a.id - b.id); // Ordenar el array por id
        return res.status(201).json(nuevoMovimiento);
    }
);

// ─────────────────────────────────────────────
// PUT /api/movimientos/1
// Modificiar un movimiento.
// Solo se actualizan los campos que vengan en el body.
// ─────────────────────────────────────────────
router.put("/:id", (req, res) =>
    {
        const movs = movimientos.find(p => p.id == req.params.id);  // Busca por id

        if(!movs)
            return res.status(404).json({ error: `No existe ningún movimiento con id ${req.params.id}` });

        const { nombre, tipo, potencia, precision, pokemon_id } = req.body;

        if(nombre) movs.nombre = nombre;
        if(tipo) movs.tipo = tipo;
        if(potencia != null) movs.potencia = potencia;
        if(precision != null) movs.precision = precision;
        if(pokemon_id) movs.pokemon_id = pokemon_id;

        return res.status(200).json(movs);
    }
);

// ─────────────────────────────────────────────
// DELETE /api/movimientos/1
// Eliminar un movimiento
// ─────────────────────────────────────────────
router.delete("/:id", (req, res) => 
    {
        const index = movimientos.findIndex(m => m.id == req.params.id);
        if(index === -1)
            return res.status(404).json({ error: `No existe ningún movimiento con id ${req.params.id}` });
        
        const eliminado = movimientos.splice(index, 1);
        return res.status(200).json({ mensaje: `Movimiento ${eliminado[0].nombre} eliminado correctamente` });
    }
);

module.exports = router;