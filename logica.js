const divTablero = document.querySelector("#tablero");

const MAX_COL = 7;
const MAX_FILA = 7;

const POS_INICIAL_COL = 3; 
const POS_INICIAL_FIL = 3; 

const ARRIBA = "w";
const ABAJO = "s";
const IZQUIERDA = "a";
const DERECHA = "d";

let posJugador = [POS_INICIAL_FIL,POS_INICIAL_COL]

// este codigo esta agregando un evento/funcion a la pagina
document.addEventListener("keydown", function(event) {
    eliminarJugador();
    modificarPosJugador(event);
    agregarJugador(posJugador[0], posJugador[1]);
});

/**
 * Modifica la posicion del jugador si la tecla presionada es valida
 * @param {KeyboardEvent} event detectado del teclado
 */
function modificarPosJugador(event) {
    switch (event.key) {
        case ARRIBA:
            posJugador[0]--;
            break;
        case ABAJO:
            posJugador[0]++;
            break;
        case IZQUIERDA:
            posJugador[1]--;
            break;
        case DERECHA:
            posJugador[1]++;
    }
}

/**
 * Elimina el jugador en la casilla actual
 */
function eliminarJugador() {
    let jugador = document.querySelector(`#casilla-${posJugador[0] + "-" + posJugador[1]}`);
    jugador.innerHTML = ``;
    jugador.classList.remove("jugador");
}

/**
 * Genera el tablero en la pagina
 */
function generarMatriz() {
    divTablero.innerHTML = ""; 
    for (let fila = 0; fila < MAX_FILA; fila++) {
        divTablero.innerHTML += `
            <div class="row">
                ${ agregarColumnas(fila) }
            </div>`
    }
     ;
   
    agregarJugador(POS_INICIAL_FIL, POS_INICIAL_COL);
    
}

/**
 * Inserta al jugador en el tablero en la fila y col correspondiente
 * @param {Number} fila del jugador
 * @param {Number} col del jugador
 */
function agregarJugador(fila, col) {
    
    let jugador = document.querySelector(`#casilla-${fila + "-" + col}`)
    jugador.innerHTML = `<img src="jorgumo2.gif" alt="jorgumo" id=imagen>`;
    jugador.classList.add("jugador");
    
}


/**
 * Genera las casillas correspondientes a la fila actual
 * @param {Number} fila actual
 * @returns las casillas creadas
 */
function agregarColumnas(fila) {
    let columnasGeneradasHtml = "";
    for (let columna = 0; columna < MAX_COL; columna++) {
        columnasGeneradasHtml += `
        <div id="casilla-${fila+"-"+columna}" class="col casilla">
        </div>
    `;
    }
    return columnasGeneradasHtml;
}

generarMatriz();