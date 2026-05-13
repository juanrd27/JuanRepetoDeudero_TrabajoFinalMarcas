const API = "http://localhost:5564/api";
let editingPokemonId = null;
let editingMovimientoId = null;

// Paleta completa de colores para todos los tipos de Pokémon
const typeColors = {
    "Normal":    { bg: "#A8A77A", text: "#fff" },
    "Fuego":     { bg: "#EE8130", text: "#fff" },
    "Agua":      { bg: "#6390F0", text: "#fff" },
    "Planta":    { bg: "#7AC74C", text: "#fff" },
    "Eléctrico": { bg: "#F7D02C", text: "#3a2e00" },
    "Hielo":     { bg: "#96D9D6", text: "#1a3a3a" },
    "Lucha":     { bg: "#C22E28", text: "#fff" },
    "Veneno":    { bg: "#A33EA1", text: "#fff" },
    "Tierra":    { bg: "#E2BF65", text: "#3a2e00" },
    "Volador":   { bg: "#A98FF3", text: "#1a0a3a" },
    "Psíquico":  { bg: "#F95587", text: "#fff" },
    "Bicho":     { bg: "#A6B91A", text: "#fff" },
    "Roca":      { bg: "#B6A136", text: "#fff" },
    "Fantasma":  { bg: "#735797", text: "#fff" },
    "Dragón":    { bg: "#6F35FC", text: "#fff" },
    "Siniestro": { bg: "#705746", text: "#fff" },
    "Acero":     { bg: "#B7B7CE", text: "#1a1a2a" },
    "Hada":      { bg: "#D685AD", text: "#fff" }
};

function getTypeStyle(tipo) {
    const c = typeColors[tipo] || { bg: "#444", text: "#fff" };
    return `background:${c.bg};color:${c.text}`;
}

// ── TOAST ──────────────────────────────────
function showToast(msg, type = "success") {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.className = `toast ${type} show`;
    setTimeout(() => t.classList.remove("show"), 3000);
}

// ── TABS ───────────────────────────────────
function showTab(tab, el) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    el.classList.add("active");
    document.getElementById(`tab-${tab}`).classList.add("active");
    if(tab === "estadisticas") { 
        cargarStats(); 
        cargarTotal(); 
        cargarAgrupar(); 
    }
}

// ── HEADER ─────────────────────────────────
async function cargarHeaderTotal() {
    try {
        const r = await fetch(`${API}/pokemon/total`);
        const d = await r.json();
        document.getElementById("total-pokemon").textContent = d.total_pokemon;
        document.getElementById("total-movimientos").textContent = d.total_movimientos;
    } catch(e) {
        console.error("Error al cargar totales:", e);
    }
}

// ── POKÉMON ────────────────────────────────
async function cargarPokemon() {
    try {
        const r = await fetch(`${API}/pokemon`);
        const data = await r.json();
        renderPokemon(data);
    } catch(e) {
        document.getElementById("pokemon-grid").innerHTML = 
            '<div class="empty">Error al conectar con la API. ¿Está el servidor arrancado?</div>';
    }
}

async function filtrarPokemon() {
    const params = new URLSearchParams();
    const tipo      = document.getElementById("f-tipo").value.trim();
    const region    = document.getElementById("f-region").value.trim();
    const gen       = document.getElementById("f-generacion").value.trim();
    const leg       = document.getElementById("f-legendario").value;
    const atMin     = document.getElementById("f-ataque-min").value.trim();
    const atMax     = document.getElementById("f-ataque-max").value.trim();
    const ordenar   = document.getElementById("f-ordenar").value;
    const orden     = document.getElementById("f-orden").value;

    if(tipo)    params.append("tipo", tipo);
    if(region)  params.append("region", region);
    if(gen)     params.append("generacion", gen);
    if(leg)     params.append("legendario", leg);
    if(atMin)   params.append("ataque_min", atMin);
    if(atMax)   params.append("ataque_max", atMax);
    if(ordenar) params.append("ordenar", ordenar);
    if(ordenar && orden) params.append("orden", orden);

    if(params.toString() === "") { 
        cargarPokemon(); 
        return; 
    }

    try {
        const r = await fetch(`${API}/pokemon/filtrar?${params}`);
        if(r.status === 404) {
            document.getElementById("pokemon-grid").innerHTML = 
                '<div class="empty">No se encontraron pokémon con esos filtros</div>';
            document.getElementById("pokemon-count").textContent = 0;
            return;
        }
        renderPokemon(await r.json());
    } catch(e) { 
        showToast("Error al filtrar", "error"); 
    }
}

function limpiarFiltros() {
    ["f-tipo","f-region","f-generacion","f-ataque-min","f-ataque-max"].forEach(id => 
        document.getElementById(id).value = ""
    );
    document.getElementById("f-legendario").value = "";
    document.getElementById("f-ordenar").value = "";
    document.getElementById("f-orden").value = "asc";
    cargarPokemon();
}

function renderPokemon(data) {
    document.getElementById("pokemon-count").textContent = data.length;
    if(!data.length) { 
        document.getElementById("pokemon-grid").innerHTML = 
            '<div class="empty">No hay pokémon</div>'; 
        return; 
    }
    
    document.getElementById("pokemon-grid").innerHTML = data.map(p => `
        <div class="pokemon-card">
            <div class="pokemon-id">#${String(p.id).padStart(3,'0')}</div>
            <div class="pokemon-name">${p.nombre}</div>
            <div class="pokemon-types">
                <span class="type-badge" style="${getTypeStyle(p.tipo_1)}">${p.tipo_1}</span>
                ${p.tipo_2 ? `<span class="type-badge" style="${getTypeStyle(p.tipo_2)}">${p.tipo_2}</span>` : ''}
                ${p.legendario ? '<span class="legendario-badge">★ Legendario</span>' : ''}
            </div>
            <div class="pokemon-stats">
                <div class="stat-item">PS <span>${p.ps}</span></div>
                <div class="stat-item">ATK <span>${p.ataque}</span></div>
                <div class="stat-item">DEF <span>${p.defensa}</span></div>
                <div class="stat-item">VEL <span>${p.velocidad}</span></div>
            </div>
            <div class="pokemon-info">Gen ${p.generacion} · ${p.region}</div>
            <div class="card-actions">
                <button class="btn btn-edit btn-sm" onclick="editarPokemon(${p.id})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="eliminarPokemon(${p.id},'${p.nombre}')">Eliminar</button>
            </div>
        </div>
    `).join('');
}

function abrirModalPokemon() {
    editingPokemonId = null;
    document.getElementById("modal-pokemon-title").textContent = "Nuevo Pokémon";
    document.getElementById("btn-guardar-pokemon").textContent = "Crear";
    document.getElementById("p-nombre").value = "";
    document.getElementById("p-tipo1").value = "";
    document.getElementById("p-tipo2").value = "";
    document.getElementById("p-region").value = "";
    document.getElementById("p-generacion").value = "";
    document.getElementById("p-ps").value = "";
    document.getElementById("p-ataque").value = "";
    document.getElementById("p-defensa").value = "";
    document.getElementById("p-velocidad").value = "";
    document.getElementById("p-legendario").value = "false";
    document.getElementById("modal-pokemon").classList.add("open");
}

async function editarPokemon(id) {
    try {
        const p = await (await fetch(`${API}/pokemon/${id}`)).json();
        editingPokemonId = id;
        document.getElementById("modal-pokemon-title").textContent = `Editar: ${p.nombre}`;
        document.getElementById("btn-guardar-pokemon").textContent = "Guardar";
        document.getElementById("p-nombre").value = p.nombre;
        document.getElementById("p-tipo1").value = p.tipo_1;
        document.getElementById("p-tipo2").value = p.tipo_2 || "";
        document.getElementById("p-generacion").value = p.generacion;
        document.getElementById("p-region").value = p.region;
        document.getElementById("p-ps").value = p.ps;
        document.getElementById("p-ataque").value = p.ataque;
        document.getElementById("p-defensa").value = p.defensa;
        document.getElementById("p-velocidad").value = p.velocidad;
        document.getElementById("p-legendario").value = p.legendario ? "true" : "false";
        document.getElementById("modal-pokemon").classList.add("open");
    } catch(e) { 
        showToast("Error al cargar pokémon", "error"); 
    }
}

async function guardarPokemon() {
    const body = {
        nombre:     document.getElementById("p-nombre").value.trim(),
        tipo_1:     document.getElementById("p-tipo1").value,
        tipo_2:     document.getElementById("p-tipo2").value || null,
        generacion: Number(document.getElementById("p-generacion").value),
        region:     document.getElementById("p-region").value.trim(),
        ps:         Number(document.getElementById("p-ps").value),
        ataque:     Number(document.getElementById("p-ataque").value),
        defensa:    Number(document.getElementById("p-defensa").value),
        velocidad:  Number(document.getElementById("p-velocidad").value),
        legendario: document.getElementById("p-legendario").value === "true"
    };
    
    try {
        const url    = editingPokemonId ? `${API}/pokemon/${editingPokemonId}` : `${API}/pokemon`;
        const method = editingPokemonId ? "PUT" : "POST";
        const r = await fetch(url, { 
            method, 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(body) 
        });
        const data = await r.json();
        if(!r.ok) { 
            showToast(data.error, "error"); 
            return; 
        }
        cerrarModal("modal-pokemon");
        cargarPokemon();
        cargarHeaderTotal();
        showToast(editingPokemonId ? `${data.nombre} actualizado` : `${data.nombre} creado`);
    } catch(e) { 
        showToast("Error al guardar", "error"); 
    }
}

async function eliminarPokemon(id, nombre) {
    if(!confirm(`¿Eliminar a ${nombre}?`)) return;
    try {
        const r = await fetch(`${API}/pokemon/${id}`, { method: "DELETE" });
        const data = await r.json();
        if(!r.ok) { 
            showToast(data.error, "error"); 
            return; 
        }
        cargarPokemon();
        cargarHeaderTotal();
        showToast(`${nombre} eliminado`);
    } catch(e) { 
        showToast("Error al eliminar", "error"); 
    }
}

// ── MOVIMIENTOS ────────────────────────────
async function cargarMovimientos() {
    document.getElementById("search-movimiento").value = "";
    try {
        const data = await (await fetch(`${API}/movimientos`)).json();
        renderMovimientos(data);
    } catch(e) {
        document.getElementById("movimientos-tbody").innerHTML = 
            '<tr><td colspan="7" class="empty">Error al cargar</td></tr>';
    }
}

async function buscarMovimiento() {
    const nombre = document.getElementById("search-movimiento").value.trim();
    if(!nombre) { 
        cargarMovimientos(); 
        return; 
    }
    try {
        const r = await fetch(`${API}/movimientos/buscar?nombre=${encodeURIComponent(nombre)}`);
        if(r.status === 404) {
            document.getElementById("movimientos-tbody").innerHTML = 
                '<tr><td colspan="7" class="empty">No se encontraron movimientos</td></tr>';
            document.getElementById("movimientos-count").textContent = 0;
            return;
        }
        renderMovimientos(await r.json());
    } catch(e) { 
        showToast("Error al buscar", "error"); 
    }
}

function renderMovimientos(data) {
    document.getElementById("movimientos-count").textContent = data.length;
    if(!data.length) { 
        document.getElementById("movimientos-tbody").innerHTML = 
            '<tr><td colspan="7" class="empty">No hay movimientos</td></tr>'; 
        return; 
    }
    
    document.getElementById("movimientos-tbody").innerHTML = data.map(m => `
        <tr>
            <td style="font-family:var(--mono);color:var(--text-dim)">#${m.id}</td>
            <td><strong>${m.nombre}</strong></td>
            <td><span class="type-badge" style="${getTypeStyle(m.tipo)}">${m.tipo}</span></td>
            <td style="font-family:var(--mono)">${m.potencia}</td>
            <td style="font-family:var(--mono)">${m.precision}%</td>
            <td style="color:var(--text-dim)">#${m.pokemon_id}</td>
            <td>
                <div style="display:flex;gap:6px">
                    <button class="btn btn-edit btn-sm" onclick="editarMovimiento(${m.id})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarMovimiento(${m.id},'${m.nombre}')">Eliminar</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function abrirModalMovimiento() {
    editingMovimientoId = null;
    document.getElementById("modal-movimiento-title").textContent = "Nuevo Movimiento";
    document.getElementById("btn-guardar-movimiento").textContent = "Crear";
    document.getElementById("m-nombre").value = "";
    document.getElementById("m-tipo").value = "";
    document.getElementById("m-potencia").value = "";
    document.getElementById("m-precision").value = "";
    document.getElementById("m-pokemon-id").value = "";
    document.getElementById("modal-movimiento").classList.add("open");
}

async function editarMovimiento(id) {
    try {
        const m = await (await fetch(`${API}/movimientos/${id}`)).json();
        editingMovimientoId = id;
        document.getElementById("modal-movimiento-title").textContent = `Editar: ${m.nombre}`;
        document.getElementById("btn-guardar-movimiento").textContent = "Guardar";
        document.getElementById("m-nombre").value = m.nombre;
        document.getElementById("m-tipo").value = m.tipo;
        document.getElementById("m-potencia").value = m.potencia;
        document.getElementById("m-precision").value = m.precision;
        document.getElementById("m-pokemon-id").value = m.pokemon_id;
        document.getElementById("modal-movimiento").classList.add("open");
    } catch(e) { 
        showToast("Error al cargar movimiento", "error"); 
    }
}

async function guardarMovimiento() {
    const body = {
        nombre:     document.getElementById("m-nombre").value.trim(),
        tipo:       document.getElementById("m-tipo").value,
        potencia:   Number(document.getElementById("m-potencia").value),
        precision:  Number(document.getElementById("m-precision").value),
        pokemon_id: Number(document.getElementById("m-pokemon-id").value)
    };
    
    try {
        const url    = editingMovimientoId ? `${API}/movimientos/${editingMovimientoId}` : `${API}/movimientos`;
        const method = editingMovimientoId ? "PUT" : "POST";
        const r = await fetch(url, { 
            method, 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(body) 
        });
        const data = await r.json();
        if(!r.ok) { 
            showToast(data.error, "error"); 
            return; 
        }
        cerrarModal("modal-movimiento");
        cargarMovimientos();
        cargarHeaderTotal();
        showToast(editingMovimientoId ? `${data.nombre} actualizado` : `${data.nombre} creado`);
    } catch(e) { 
        showToast("Error al guardar", "error"); 
    }
}

async function eliminarMovimiento(id, nombre) {
    if(!confirm(`¿Eliminar "${nombre}"?`)) return;
    try {
        const r = await fetch(`${API}/movimientos/${id}`, { method: "DELETE" });
        const data = await r.json();
        if(!r.ok) { 
            showToast(data.error, "error"); 
            return; 
        }
        cargarMovimientos();
        cargarHeaderTotal();
        showToast(`"${nombre}" eliminado`);
    } catch(e) { 
        showToast("Error al eliminar", "error"); 
    }
}

// ── ESTADÍSTICAS ───────────────────────────
async function cargarStats() {
    const campo = document.getElementById("stats-campo").value;
    try {
        const d = await (await fetch(`${API}/pokemon/stats?campo=${campo}`)).json();
        document.getElementById("stat-media").textContent = d.media;
        document.getElementById("stat-maximo").textContent = d.maximo;
        document.getElementById("stat-minimo").textContent = d.minimo;
    } catch(e) {
        console.error("Error al cargar estadísticas:", e);
    }
}

async function cargarTotal() {
    try {
        const d = await (await fetch(`${API}/pokemon/total`)).json();
        document.getElementById("stat-total-pokemon").textContent = d.total_pokemon;
        document.getElementById("stat-total-movimientos").textContent = d.total_movimientos;
    } catch(e) {
        console.error("Error al cargar totales:", e);
    }
}

async function cargarTop() {
    const campo = document.getElementById("top-campo").value;
    const n     = document.getElementById("top-n").value;
    const orden = document.getElementById("top-orden").value;
    
    try {
        const d = await (await fetch(`${API}/pokemon/top?campo=${campo}&n=${n}&orden=${orden}`)).json();
        document.getElementById("top-list").innerHTML = d.resultado.map((p, i) => `
            <div class="top-item">
                <div class="top-rank">${i + 1}</div>
                <div class="top-name">${p.nombre}</div>
                <div class="pokemon-types" style="margin:0">
                    <span class="type-badge" style="${getTypeStyle(p.tipo_1)}">${p.tipo_1}</span>
                    ${p.tipo_2 ? `<span class="type-badge" style="${getTypeStyle(p.tipo_2)}">${p.tipo_2}</span>` : ''}
                </div>
                <div class="top-value">${p[campo]}</div>
            </div>
        `).join('');
    } catch(e) { 
        showToast("Error al cargar ranking", "error"); 
    }
}

async function cargarAgrupar() {
    const campo = document.getElementById("agrupar-campo").value;
    try {
        const d = await (await fetch(`${API}/pokemon/agrupar?campo=${campo}`)).json();
        const max = Math.max(...Object.values(d.grupos));
        document.getElementById("bar-chart").innerHTML = Object.entries(d.grupos)
            .sort((a, b) => b[1] - a[1])
            .map(([key, val]) => `
                <div class="bar-row">
                    <div class="bar-label">${key}</div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width:${Math.max((val/max)*100, 15)}%">
                            <span class="bar-count">${val}</span>
                        </div>
                    </div>
                </div>
            `).join('');
    } catch(e) {
        console.error("Error al cargar agrupación:", e);
    }
}

// ── MODAL ──────────────────────────────────
function cerrarModal(id) {
    document.getElementById(id).classList.remove("open");
}

// Cerrar modal al hacer clic fuera
document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", e => {
        if(e.target === overlay) overlay.classList.remove("open");
    });
});

// Cerrar modal con tecla Escape
document.addEventListener("keydown", e => {
    if(e.key === "Escape") {
        document.querySelectorAll(".modal-overlay.open").forEach(modal => {
            modal.classList.remove("open");
        });
    }
});

// ── INIT ───────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    cargarPokemon();
    cargarMovimientos();
    cargarHeaderTotal();
});