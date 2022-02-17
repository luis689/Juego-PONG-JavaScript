/*
Universidad Nacional de Colombia
Grafica Interactiva
Ejercicio 2 
Luis Antonio Zuluaga Ramirez
22/06/2020
*/

//-----------------------------------------Configuracion de las Palas--------------------------------------


class Palas extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, type) {               // Parametros que recibe
        super (scene, x, y, type);
        scene.add.existing(this);                   // Agregar el objeto en pantalla
        scene.physics.world.enable(this);           // Activar fisicas
        this.body.immovable = true;                 // Hacer el objeto inamovible
        this.body.setCollideWorldBounds(true)       // Hacer que sus bordes colisionen
    }
}

export default Palas;



