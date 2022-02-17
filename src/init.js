/*
Universidad Nacional de Colombia
Grafica Interactiva
Ejercicio 2 
Luis Antonio Zuluaga Ramirez
22/06/2020
*/

//----------------------------Archivo de configuracion inicial del juego (se cargan los escenarios del juego) -------------------------------------

import Bootloader from './bootloader.js';               // Este archivo contiene los archivos de preload
import Play from './scenes/play.js';                    // Con este archivo se ejecuta el juego en el primer escenario
import Menu from './scenes/menu.js';                    // En este archivo se encuentran las instrucciones y el boton de inicio
import Play2 from './scenes/play2.js';
import Play3 from './scenes/play3.js';
const config = {
    width: 640,                                         // Ancho de la ventana
    height: 400,                                        // Alto de la ventan
    parent: "contenedor",                               // Referencia al container de index.html
    physics: {                                          // Se crean las fisicas del juego tipo (Arcade)
        default: "arcade"
    },
    scene: [                                            // Se cargan las scenas del juego
        Bootloader,                                     // Precarga 
        Menu,                                           // Instrucciones y boton de inicio
        Play,                                           // Juego en el escenario 1
        Play2,                                          // Juego en el escenario 2
        Play3                                           // Juego en el escenario 3
    ]
}

new Phaser.Game (config);                               // Se crea el Juego.