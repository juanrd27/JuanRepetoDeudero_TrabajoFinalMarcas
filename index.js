const express = require("express");
const app = express();
const port = 5564;

app.use(express.json());

// Importamos las rutas de los pokémons y los movimientos
const pokemonRoutes = require("./routes/pokemon");
const movimientosRoutes = require("./routes/movimientos");

// Se gestionan las operaciones
app.use("/api/pokemon", pokemonRoutes);
app.use("/api/movimientos", movimientosRoutes);

app.listen(port, () => 
    {
        console.log(`Servidor Pokémon corriendo en http://localhost:${port}`);
    }
);