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
// GET /api/pokemon/filtrar
// Filtros combinados.
// Acepta cualquier combinación de:
//   ?tipo=Fuego
//   ?region=Kanto
//   ?generacion=1
//   ?legendario=true
//   ?ataque_min=80
//   ?ataque_max=130
//   ?ps_min=50
//   ?velocidad_min=90
//   ?ordenar=ataque
//   ?orden=desc
// ─────────────────────────────────────────────
router.get("/filtrar", (req, res) =>
    {
        
        let resultado = [...pokemon];   // Copia del array original para no modificarlo
        
        const { tipo, region, generacion, legendario, ataque_min, ataque_max, ps_min, ps_max, velocidad_min, ordenar, orden } = req.query;
        
        // Filtro 3: Filtrar por múltiples campos simultáneamente (Todos los if juntos)
        // Filtro 1: Filtrar por campo de texto (búsqueda parcial)
        if(tipo)
        {
            resultado = resultado.filter(p =>
            {
                const tipo1 = p.tipo_1 && p.tipo_1.toLowerCase().includes(tipo.toLowerCase());
                const tipo2 = p.tipo_2 && p.tipo_2.toLowerCase().includes(tipo.toLowerCase());
                return tipo1 || tipo2;
            });
        }
        
        if(region) resultado = resultado.filter(p => p.region.toLowerCase() == region.toLowerCase());        
        if(generacion) resultado = resultado.filter(p => p.generacion == generacion);

        // Filtro 5: Condición booleana (legendario)
        if(legendario !== undefined)    
        {
            const esLegendario = legendario === "true";     // req.query siempre es texto, por se compara con "true"
            resultado = resultado.filter(p => p.legendario === esLegendario);
        }

        // Filtro 2: Filtrar por campo numérico con mínimo y/o máximo
        if(ataque_min) resultado = resultado.filter(p => p.ataque >= Number(ataque_min));
        if(ataque_max) resultado = resultado.filter(p => p.ataque <= Number(ataque_max));
        if(ps_min) resultado = resultado.filter(p => p.ps >= Number(ps_min));
        if(ps_max) resultado = resultado.filter(p => p.ps <= Number(ps_max));
        if(velocidad_min) resultado = resultado.filter(p => p.velocidad >= Number(velocidad_min));

        // Filtro 4: Ordenar ascendente o descendente
        if(ordenar)
        {
            resultado.sort((a, b) =>
            {
                if(a[ordenar] < b[ordenar]) return orden === "desc" ? 1 : -1;
                if(a[ordenar] > b[ordenar]) return orden === "desc" ? -1 : 1;
                return 0;
            });
        }

        if(resultado.length === 0)
            return res.status(404).json({ error: "No se encontraron pokémon con esos filtros" });

        return res.status(200).json(resultado);
    }
);

// ─────────────────────────────────────────────
// GET /api/pokemon/stats?campo=ataque
// Devuelve la media, el máximo y el mínimo
// del campo numérico indicado
// ─────────────────────────────────────────────
router.get("/stats", (req, res) => 
    {
        const { campo } = req.query;
        const camposPermitidos = ["ps", "ataque", "defensa", "velocidad"];  // Solo se permiten campos numéricos

        if(!campo)
            return res.status(400).json({ error: "Debes indicar ?campo=X (ps, ataque, defensa, velocidad)" });

        if(!camposPermitidos.includes(campo))
            return res.status(400).json({ error: `Campo no válido. Usa uno de: ${camposPermitidos.join(", ")}` });

        const valores = pokemon.map(p => p[campo]);     // Simplificamos el array a uno nuevo con solo los datos del campo concreto

        const media = valores.reduce((sum, v) => sum + v, 0) / valores.length;
        const maximo = Math.max(...valores);
        const minimo = Math.min(...valores);

        return res.status(200).json({ campo, media: Math.round(media *100)/100, maximo, minimo });

    }
);

// ─────────────────────────────────────────────
// GET /api/pokemon/top?campo=ataque&n=5&orden=desc
// Devuelve los N pokémon con más o menos valor
// en el campo indicado
// ─────────────────────────────────────────────
router.get("/top", (req, res) =>
    {
        const { campo, n, orden } = req.query;
        const camposPermitidos = ["ps", "ataque", "defensa", "velocidad"];

        if(!campo)
            return res.status(400).json({ error: "Debes indicar ?campo=X (ps, ataque, defensa, velocidad)" });

        if(!camposPermitidos.includes(campo))
            return res.status(400).json({ error: `Campo no válido. Usa uno de: ${camposPermitidos.join(", ")}` });

        const limite = n ? Number(n) : 5;   // Cogemos 5 por defecto si falla (núm.arbitrario)

        if(isNaN(limite) || limite <= 0)    // Validación de N
            return res.status(400).json({ error: "El parámetro n debe ser un número positivo" });

        const ordenados = [...pokemon].sort((a,b) => orden === "asc" ? a[campo] - b[campo] : b[campo] - a[campo]);
        const resultado = ordenados.slice(0, limite);   // Cogemos solo los N pedidos

        return res.status(200).json({ campo, orden: orden || "desc", n: limite, resultado });
    }
);

// ─────────────────────────────────────────────
// GET /api/pokemon/total
// Devuelve el total de pokémon y movimientos
// ─────────────────────────────────────────────
router.get("/total", (req, res) =>
    {
        const movimientos = require("../data/movimientos");     // Aquí es necesario immportar el array de movimientos
        return res.status(200).json({ total_pokemon: pokemon.length, total_movimientos: movimientos.length });
    }
);

// ─────────────────────────────────────────────
// GET /api/pokemon/agrupar/?campo=tipo_1
// GET /api/pokemon/agrupar/?campo=region
// Cuenta cuántos pokémon hay de cada valor
// ─────────────────────────────────────────────
router.get("/agrupar", (req, res) => 
    {
        const { campo } = req.query;
        const camposPermitidos = ["tipo_1", "tipo_2", "region", "generacion"];

        if(!campo)
            return res.status(400).json({ error: "Debes indicar ?campo=X (tipo_1, tipo_2, region, generacion)" });

        if(!camposPermitidos.includes(campo))
            return res.status(400).json({ error: `Campo no válido. Usa uno de: ${camposPermitidos.join(", ")}` });

        const grupos = pokemon.reduce((acumulador, p) => // reduce devuelve un objeto tal como : { "Fuego": 3, "Agua":3, "Planta":3, ... }
            {
                const valor = p[campo];

                if(valor === null) return acumulador;

                acumulador[valor] = (acumulador[valor] || 0) + 1;
                return acumulador;
            }, {}
        );

        return res.status(200).json({ campo, grupos });
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

        // Buscar el próximo Id disponible
        const idsExistentes = pokemon.map(p => p.id);
        let nuevoId = 1;
        while(idsExistentes.includes(nuevoId)) nuevoId++;

        const nuevoPokemon = 
        {
            id: nuevoId, // aumenta el id
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
        pokemon.sort((a,b) => a.id - b.id); // Ordenar el array por id
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