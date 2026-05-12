const express = require("express");
const cors = require("cors");
const app = express();
const port = 5564;

app.use(cors()); // Agregar antes de las rutas
app.use(express.json());

// Importamos las rutas de los pokémons y los movimientos
const pokemonRoutes = require("./routes/pokemon");
const movimientosRoutes = require("./routes/movimientos");

// Se gestionan las operaciones
app.use("/api/pokemon", pokemonRoutes);
app.use("/api/movimientos", movimientosRoutes);

// Manejador global de errores
app.use((err, req, res, next) =>
    {
        console.error("Error inesperado:", err);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
);

app.listen(port, () => 
    {
        console.log(`Servidor Pokémon corriendo en http://localhost:${port}`);
    }
);