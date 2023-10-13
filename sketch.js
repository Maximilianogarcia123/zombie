var bg,bgImg;//bg es el tamaño de el espacio o background is bgimg es el fondo como las lapidas.
var player, shooterImg, shooter_shooting;
var zombie,zombie2,bala;
var zombieImg,zombie2Img,balaImg;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bgImg = loadImage("assets/bg.jpeg")
  zombieImg= loadImage("assets/zombie.png")
  zombie2Img= loadImage("assets/zombie2.jpg")
  balaImg= loadImage("assets/bala.jpg")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//Crear el sprite del jugador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

zombie = createSprite(displayWidth-300, displayHeight-250, 50, 50);
zombie.addImage(zombieImg)
zombie.scale=0.2;

zombie2= createSprite(displayWidth-100, displayHeight-250, 50, 50);
zombie2.addImage(zombie2Img)
zombie2.scale=1;
}

function draw() {
  background(0); 




  //Mover al jugador arriba y abajo y hacer que el juego móvil sea compatible de forma táctil.
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//Liberar las balas y cambiar la imagen del tirador a la posición de disparo cuando la barra espaciadora se presiona.
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//El jugador regresa a la imagen de posición original una vez que dejamos de presionar la barra de espacio.
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
