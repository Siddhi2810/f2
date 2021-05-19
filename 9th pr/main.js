var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("olaf.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);

    });

}

if(keyPressed == '38')
{
    up();
    console.log("up");
}
if(keyPressed == '40')
{
    down();
    console.log("down");
}
if(keyPressed == '37')
{
    left();
    console.log("left");
}
if(keyPressed == '39')
{
    right();
    console.log("right");
}
if(keyPressed == '65')
{
    new_image('a1.jpg'); 
    console.log("a");
}
if(keyPressed == '66')
{
    new_image('a2.jpg'); 
    console.log("b");
}
if(keyPressed == '67')
{
    new_image('a3.jpg'); 
    console.log("c");
}
if(keyPressed == '68')
{
    new_image('a4.jpg'); 
    console.log("d");
}
if(keyPressed == '69')
{
    new_image('a5.jpg'); 
    console.log("e");
}
if(keyPressed == '70')
{
    new_image('b1.jpg'); 
    console.log("f");
}
if(keyPressed == '71')
{
    new_image('b2.jpg'); 
    console.log("g");
}
if(keyPressed == '72')
{
    new_image('b3.jpg'); 
    console.log("h");
}
if(keyPressed == '73')
{
    new_image('b4.jpg'); 
    console.log("i");
}
if(keyPressed == '74')
{
    new_image('b5.jpg'); 
    console.log("j");
}
if(keyPressed == '75')
{
    new_image('c1.jpg'); 
    console.log("k");
}
if(keyPressed == '76')
{
    new_image('c2.jpg'); 
    console.log("l");
}
if(keyPressed == '77')
{
    new_image('c3.jpg'); 
    console.log("m");
}
if(keyPressed == '78')
{
    new_image('c4.jpg'); 
    console.log("n");
}
if(keyPressed == '79')
{
    new_image('c5.jpg'); 
    console.log("o");
}
if(keyPressed == '80')
{
    new_image('p1.jpg'); 
    console.log("p");
}
if(keyPressed == '81')
{
    new_image('p2.jpg'); 
    console.log("q");
}
if(keyPressed == '82')
{
    new_image('p3.jpg'); 
    console.log("r");
}
if(keyPressed == '83')
{
    new_image('p4.jpg'); 
    console.log("s");
}
if(keyPressed == '84')
{
    new_image('p5.jpg'); 
    console.log("t");
}
if(keyPressed == '85')
{
    new_image('w1.jpg'); 
    console.log("u");
}
if(keyPressed == '86')
{
    new_image('w2.jpg'); 
    console.log("v");
}
if(keyPressed == '87')
{
    new_image('w3.jpg'); 
    console.log("w");
}
if(keyPressed == '88')
{
    new_image('w4.jpg'); 
    console.log("x");
}
if(keyPressed == '89')
{
    new_image('w5.jpg'); 
    console.log("y");
}
function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}