const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrop=100;
var drops=[];

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    if (frameCount%150===0){
        for (var i=0; i<maxDrop; i++){
            drops.push(new Raindrop(random(0, 400), random(0, 400)))
            }
        }
    }


function draw(){
    Engine.update(engine)
    background(0);
    for(var i=0; i<maxDrop; i++){
        drops[i].showDrop();
        drops[i].rainPos();
    }
    drawSprites();
}   

