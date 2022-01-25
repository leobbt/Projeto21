
var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    music.preload("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(405,580,200,30);
    bloco3.shapeColor = "green";

    bloco4 = createSprite(550,580,200,30);
    bloco4.shapeColor = "white";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = 3;     bola.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
    arestas=createSprites();
    bola.bounceOff(arestas);

    bola.bounceOff(bloco1,bloco2,bloco3,bloco4);
    
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }

    if(bloco2.isTouching(bola) && bola.bounceOff(bloco2)){
        bola.shapeColor = "orange";
        music.play();
    }
    
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "green";
        music.play();
    }

    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "white";
        music.play();
    }
    
    drawSprites();
}