/*
Universidad Nacional de Colombia
Grafica Interactiva
Ejercicio 2 
Luis Antonio Zuluaga Ramirez
22/06/2020
*/

//---------------------------------Scena de presentacion del Juego, Instrucciones y boton de inicio--------------------------------------

class Menu extends Phaser.Scene {                           // Se crea la clase Menu
    constructor() {
        super({key: "Menu"});
    }
    
    create() {                                              // Texto para el titulo del juego "PONG"
        this.add.text(280,20,
            'PONG',{
            fontSize: 40,
            align: 'center'
        });

        this.add.text(10,75,                                // Instrucciones del juego
            ' 1) La bola se movera sola automaticament \n 2) Para mover la pala del lado izquierdo use las letras "S" (arriba) y "W" (abajo) \n 3) Para mover la pala de la drecha utilice flecha arriba y flecha abajo \n 4) Cuando uno de los jugadores llega a 5 puntos, el escenario cambia \n 5) Haga click en cualquier parte de la pantalla para iniciar el juego',{
            fontSize: 12,
            align: 'left'
        });

        this.add.sprite(320, 250, 'boton');                 // Boton de inicio
        this.input.once('pointerdown', function (event) {   // Al hacer click en el boton inicia el juego en la primera escena
            this.scene.start('Play');
        }, this);
    }
}

export default Menu;