/*
Universidad Nacional de Colombia
Grafica Interactiva
Ejercicio 2 
Luis Antonio Zuluaga Ramirez
22/06/2020
*/

//-----------------------------------------Archivo de precarga de los archivos--------------------------------------

class Bootloader extends Phaser.Scene{                              //Se crea la clase Bootloader para compartir con las otras escenas
    constructor() {
        super({key: "Bootloader"});
    }
    preload() {                                                     // Archivos que se precargan
        this.load.on("complete", () => {                            // A penas se complete la carga, se llama a la escena menu
            this.scene.start("Menu");
        });

        this.load.image("ball", "./assets/ball.png");               // Imagen de la bola
        this.load.image("izquierda", "./assets/left_pallete.png");  // Imagen de las palas
        this.load.image("derecha", "./assets/right_pallete.png");   
        this.load.image("separador", "./assets/separator.png");     // Linea punteada del centro
        this.load.image("boton", "./assets/btn.png");               // Imagen para el boton de inicio  
        this.load.image('sky', './assets/sky.png');                 // Imagen de fondo para el segundo escenario
        this.load.image('plataforma', './assets/platform.png');
        this.load.image('bg', './assets/bg.jpeg');
    }
}

export default Bootloader;