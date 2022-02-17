/*
Universidad Nacional de Colombia
Grafica Interactiva
Ejercicio 2 
Luis Antonio Zuluaga Ramirez
22/06/2020
*/

//-----------------------------------------Primer escenario del juego--------------------------------------


import Palas from '../gameObjects/palas.js';                                // Contiene las fisicas  e imagenes de las palas
import Obstaculo from '../gameObjects/obstaculo.js';

var puntos1;                                                                // Cuenta los puntos del jugador de la izquierda
var t_puntos_1;                                                             // Texto para los puntos del jugador de la izquierda
var puntos2;                                                                // Cuenta los puntos del jugador de la derecha
var t_puntos_2;                                                             // Texto para los puntos del jugador de la derecha

class Play2 extends Phaser.Scene {
    constructor() {
        super({key: "Play2"});
    }

    create() {
        let cen_w = this.sys.game.config.width/2;                           // Variable local que guarda la mitad del ancho
        let cen_h = this.sys.game.config.height/2;                          // Variable local que guarda la mitad del alto

        // fondo
        this.add.image(400, 300, 'sky');

        // Separador
        this.add.image(cen_w, cen_h, "separador");                          // Ubica la imagen de la linea divisoria en la mitad de la pantalla            

        this.left = new Palas(this, 30, cen_h, "izquierda");                // Se cargan las palas izquierda y derecha
        this.right = new Palas(this, 2*cen_w-30, cen_h, "derecha")

        // Agregar obstaculos
        this.plataforma = new Obstaculo(this, 180, 300, "plataforma")
        this.plataforma2 = new Obstaculo(this, 450, 100, "plataforma")

        //Bola
        this.physics.world.setBoundsCollision(false,false,true,true);       // Se establece la collision de los bordes del entorno solo en la parte superior e inferior (izquierda, derecha, arriba, abajo)
        this.ball = this.physics.add.image(cen_w,cen_h, "ball");            // Se cargan fisicas e imgaen de la bola
        this.ball.setCollideWorldBounds(true);                              // Se establece el borde de la bola con colision
        this.ball.setBounce(1);                                             // La bola toma velocidad opuesta al chocar
        this.ball.setVelocityX(-180);                                       // Velocidad inicial de la bola

        //Fisicas
        this.physics.add.collider(this.ball,this.left, this.choque, null, this); // Se llama a la funcion choque, cuando la bola choca con alguna de las palas
        this.physics.add.collider(this.ball,this.right,this.choque, null, this);
        this.physics.add.collider(this.ball,this.plataforma,this.choque, null, this); // Se llama a la funcion choque, cuando la bola choca con algun obstaculo
        this.physics.add.collider(this.ball,this.plataforma2,this.choque, null, this);
    
        // Controles
        // Pala derecha
        this.cursor = this.input.keyboard.createCursorKeys();               // Controles de la pala derecha con las flechas direccionales

        // Pala izquierda
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);   // Control de la pala izquierda, S-> abajo
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);   // Control de la pala izquierda, W-> arriba
        puntos1 = 0;                                                        // Se inicializa los contadores de puntos
        puntos2 = 0;
        t_puntos_1 = this.add.text(160,20,'0',{                             // Se inicializan los textos que muestran el puntaje
            fontSize: 40,
            align: 'left'
        });

        t_puntos_2 = this.add.text(450,20,'0',{
            fontSize: 40,
        });

    }
    update() {

        if(this.ball.x>this.sys.game.config.width){                         // Evalua cuando la bola pasa el borde derecho de la pantalla
            puntos1+=1;                                                     // Suma un punto al jugador de la izquierda
            t_puntos_1.text = puntos1;                                      // Se muestra el puntaje del jugador 1
        }else if (this.ball.x < 0){                                         // Evalua si la bola sobrepasa el lado izquierdo de la pantalla
            puntos2+=1;                                                     // Suma un punto al jugador de la derecha
            t_puntos_2.text = puntos2                                       // Se muestra el puntaje del jugador de la derecha
        }

        if(this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {   // Evalua si la bola sale por algun borde
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2); // Ubica la bola en el centro del escenario
        }

        if(this.cursor.down.isDown) {                                       // Evalua si se oprime la tecla flecha abajo
            this.right.body.setVelocityY(250);                              // Se mueve la pala derecha hacia abajo 
        }else if(this.cursor.up.isDown) {                                   // Evalua si se oprime la tecla flecha arriba
            this.right.body.setVelocityY(-250);                             // Se mueve la pala derecha hacia arriba 
        }else {
            this.right.body.setVelocityY(0);                                // Deja la pala derecha quieta
        }

        if(this.cursor_S.isDown) {                                          // Evalua si se oprime la tecla S
            this.left.body.setVelocityY(250);                               // Se mueve la pala izquierda hacia arriba
        }else if(this.cursor_W.isDown) {                                    // Evalua si se oprime la tecla W
            this.left.body.setVelocityY(-250);                              // Se mueve la pala izquierda hacia abajo   
        }else {
            this.left.body.setVelocityY(0);                                 // Deja la pala izquierda quieta
        }

        if(puntos1 == 5 || puntos2 == 5){                                   // Evalua si alguno de los dos jugadores llega a 5 puntos
            this.scene.start('Play3');                                      // Se llama a la escena 3 del juego 
        }
        
    }

    choque() {                                                              // Si la bola choca con una pala, toma una velocidad random en Y
        this.ball.setVelocityY(Phaser.Math.Between(-120,120));
    }
}
export default Play2;