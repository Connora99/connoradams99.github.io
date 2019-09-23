var Speed = 1; 
var BitmojiX = 40;
var BitmojiY = 57; 
var frogX = 28; 
var frogY = 200; 
var bunnyX = -54; 
var bunnyY = 263; 
var eyeSize = 100; 
var tooth =100; 
var BitmojiSpeed = round(random(1,5)); 
var frogSpeed = round(random(1,5)); 
var bunnySpeed = round(random(1,5)); 

draw = function() { 
    background(255, 255, 255);
    noStroke();  
 fill(255,224,189); 
 ellipse(BitmojiX,BitmojiY,94,107); //head 
 fill(255, 215, 189);
arc(BitmojiX-43,BitmojiY- 6,16,41,0,360); //left ear
arc(BitmojiX+45,BitmojiY-3,16,41,0,360); //right ear
fill(139, 69, 19); 
ellipse(BitmojiX,BitmojiY-42,79,28); //hair top 
quad(BitmojiX-47,BitmojiY-21,BitmojiX-44,BitmojiY-38,BitmojiX+9,BitmojiY-57,BitmojiX-33,BitmojiY-26); //hair left
quad(BitmojiX+49,BitmojiY-20,BitmojiX+50,BitmojiY-32,BitmojiX+9,BitmojiY-56,BitmojiX+26,BitmojiY-25); //hair right
fill(255, 255, 255);
ellipse(BitmojiX-11,BitmojiY-7,19,14); //left eye
ellipse(BitmojiX+14,BitmojiY-7,19,14); //right eye
fill(14, 117, 26);
ellipse (BitmojiX+14,BitmojiY-7,3,5); //right pupil 
ellipse(BitmojiX-11,BitmojiY-7,3,5); //left pupil
fill(255, 207, 207);
arc(BitmojiX+1,BitmojiY+30,38,23,0,180); //mouth 
fill(255, 197, 161); 
bezier(BitmojiX+1,BitmojiY,BitmojiX+18,BitmojiY+30,BitmojiX-14,BitmojiY+12,BitmojiX-9,BitmojiY+17); //nose 
fill(0, 0, 0);
fill(116, 116, 122);
rect(BitmojiX-40, BitmojiY+52,84,75); //shirt 
textSize(30); 
fill(255, 255, 255);
text("C",BitmojiX-23,BitmojiY+76,84,76); 
textSize(30);
fill(255, 255, 255); 
text("A",BitmojiX+3,BitmojiY+76,84,76); 
BitmojiX = BitmojiX + BitmojiSpeed; 


noStroke();
fill(30, 204, 91); 

ellipse(frogX, frogY, 200, 100); // face
ellipse(frogX - 50, frogY - 50, 40, 40); // left eye socket
ellipse(frogX + 50, frogY - 50, 40, 40); // right eye socket

fill(255, 255, 255); 
ellipse(frogX - 50, frogY - 50, 30, 30); // left eyeball
ellipse(frogX + 50, frogY - 50, 30, 30); // right eyeball
fill(0, 0, 0);
rect(frogX-50,frogY-50,10,10);
rect(frogX+50,frogY-50,10,10); 
fill(0, 0, 0);
ellipse(frogX,frogY,102,39); 
frogX = frogX + frogSpeed; 

fill(171, 156, 156);
ellipse(bunnyX +51, bunnyY  -0, 60, 84);  // left ear
ellipse(bunnyX +140, bunnyY-0, 60, 84);  // right ear

ellipse(bunnyX + 99, bunnyY+76, 111, 110);    // face

fill(255, 255, 255);
ellipse(bunnyX + 70, bunnyY+68, eyeSize -90, eyeSize-90);  // left eye
ellipse(bunnyX +130, bunnyY+68, eyeSize-90, eyeSize-90);  // right eye

line(bunnyX+50, bunnyY+100, bunnyX+150, bunnyX+100);   // mouth

fill(255, 255, 255);
rect(bunnyX+85, bunnyY+100, 15, tooth-77); // left tooth
rect(bunnyX+102, bunnyY+100, 15, tooth-77); // right tooth
bunnyX = bunnyX + bunnySpeed; 


 
}; 

var x = random(30,370);
var y = random(30,370); 

noStroke(); 
fill(255,224,189); 
ellipse(x,y,94,107); //head 
fill(255, 215, 189);
arc(x-43,y- 6,16,41,0,360); //left ear
arc(x+45,y-3,16,41,0,360); //right ear
fill(139, 69, 19); 
ellipse(x,y-42,79,28); //hair top 
quad(x-47,y-21,x-44,y-38,x+9,y-57,x-33,y-26); //hair left
quad(x+49,y-20,x+50,y-32,x+9,y-56,x+26,y-25); //hair right
fill(255, 255, 255);
ellipse(x-11,y-7,19,14); //left eye
ellipse(x+14,y-7,19,14); //right eye
fill(14, 117, 26);
ellipse (x+14,y-7,3,5); //right pupil 
ellipse(x-11,y-7,3,5); //left pupil
fill(255, 207, 207);
arc(x+1,y+30,38,23,0,180); //mouth 
fill(255, 197, 161); 
bezier(x+1,y,x+18,y+30,x-14,y+12,x-9,y+17); //nose 
fill(0, 0, 0);
line(x-14,y+24,119,124); //mouth line
fill(116, 116, 122);
rect(x-40, y+52,84,75); //shirt 
textSize(30); 
fill(255, 255, 255);
text("C",x-23,y+76,84,76); 
textSize(30);
fill(255, 255, 255); 
text("A",x+3,y+76,84,76); 

noStroke(); 
fill(255,224,189); 
ellipse(100,100,94,107); //head 
fill(255, 215, 189);
arc(57,94,16,41,0,360); //left ear
arc(145,97,16,41,0,360); //right ear
fill(139, 69, 19); 
ellipse(100,58,79,28); //hair top 
quad(53,79,56,62,109,43,67,74); //hair left
quad(149,80,150,68,109,44,126,75); //hair right
fill(255, 255, 255);
ellipse(89,93,19,14); //left eye
ellipse(114,93,19,14); //right eye
fill(14, 117, 26);
ellipse (114,93,3,5); //right pupil 
ellipse(89,93,3,5); //left pupil
fill(255, 207, 207);
arc(101,130,38,23,0,180); //mouth 
fill(255, 197, 161); 
bezier(101,100,118,130,86,112,91,117); //nose 
fill(0, 0, 0);
line(86,124,119,124); //mouth line
fill(116, 116, 122);
rect(60,152,84,75); //shirt 
textSize(30); 
fill(255, 255, 255);
text("C",77,176,84,76); 
textSize(30);
fill(255, 255, 255); 
text("A",103,176,84,76); 
