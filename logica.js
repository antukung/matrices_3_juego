const divTablero = document.querySelector("#tablero");

const MAX_COL = 7;
const MAX_FILA = 7;

const POS_INICIAL_COL = 3;
const POS_INICIAL_FIL = 3;

const POS_INICIAL_MAQUINA_COL = 0;
const POS_INICIAL_MAQUINA_FIL = 0;

const ARRIBA = "w";
const ABAJO = "s";
const IZQUIERDA = "a";
const DERECHA = "d";

const DIRECCIONES_MAQUINA = [ARRIBA, ABAJO, IZQUIERDA, DERECHA]; // Declarado antes de usarlo

let posJugador = [POS_INICIAL_FIL, POS_INICIAL_COL];
let posMaquina = [POS_INICIAL_MAQUINA_FIL, POS_INICIAL_MAQUINA_COL];

// Este código está agregando un evento/función a la página
document.addEventListener("keydown", function (event) {
    eliminarJugador();
    eliminarMaquina();
    modificarPosJugador(event);
    modificarPosMaquina();
    agregarJugador(posJugador[0], posJugador[1]);
    agregarMaquina(posMaquina[0], posMaquina[1]);
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

function modificarPosMaquina() {
    const direccionAleatoria = DIRECCIONES_MAQUINA[Math.floor(Math.random() * DIRECCIONES_MAQUINA.length)];

    switch (direccionAleatoria) {
        case ARRIBA:
            if (posMaquina[0] > 0) {
                posMaquina[0]--;
            }
            break;
        case ABAJO:
            if (posMaquina[0] < MAX_FILA - 1) {
                posMaquina[0]++;
            }
            break;
        case IZQUIERDA:
            if (posMaquina[1] > 0) {
                posMaquina[1]--;
            }
            break;
        case DERECHA:
            if (posMaquina[1] < MAX_COL - 1) {
                posMaquina[1]++;
            }
            break;
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
    agregarMaquina(POS_INICIAL_MAQUINA_FIL,POS_INICIAL_MAQUINA_COL );   
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

function agregarMaquina(fila,col) {
    let maquina = document.querySelector(`#casilla-${fila + "-" + col}`)
    maquina.innerHTML = `<img src="jorgumo1.gif" alt="jorgumo" id=imagen>`;
    maquina.classList.add("maquina");
}

function eliminarMaquina() {
    let maquina= document.querySelector(`#casilla-${posMaquina[0] + "-" + posMaquina[1]}`);
    maquina.innerHTML = ``;
    maquina.classList.remove("maquina");
}

generarMatriz();