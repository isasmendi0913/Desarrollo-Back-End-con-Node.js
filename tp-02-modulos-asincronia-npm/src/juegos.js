function formatearJuego(juego, index) {
  const rangoJugadores =
    juego.jugadoresMin === juego.jugadoresMax? `${juego.jugadoresMin} jugador` : `${juego.jugadoresMin}-${juego.jugadoresMax} jugadores`;
  const estado = juego.disponible ? " * Disponible" : " * No disponible";
  const categorias = juego.categorias.join(", ");

  return `
${index + 1}. <*> ${juego.titulo}
   * Editorial: ${juego.editorial} (${juego.anio})
   * Participantes: ${rangoJugadores}
   * Categorías: ${categorias}
   * Estado: ${estado}`;
}

function crearCatalogo(juegos) {
  const lineas = juegos.map((juego, index) => formatearJuego(juego, index));
  const disponibles = juegos.filter(j => j.disponible).length;
  
  return `
═══════════════════════════════════════════
     CATÁLOGO DE JUEGOS DE MESA
═══════════════════════════════════════════

>< Total de juegos: ${juegos.length}
>< Juegos disponibles: ${disponibles}
>< No disponibles: ${juegos.length - disponibles}

───────────────────────────────────────────
${lineas.join("\n")}
───────────────────────────────────────────

 ¡Disfrutá de los juegos de mesa!
  `;
}

module.exports = { crearCatalogo };