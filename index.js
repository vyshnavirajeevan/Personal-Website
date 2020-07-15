
/* global createCanvas, background, colorMode, HSB, random, width, height,
   ellipse, mouseX, mouseY, text, fill, keyCode, textSize */

   let backgroundColor, car1X, car1Y, car1V,car2V, car2X, car2Y, hit, car3X, car3Y, car3V, car4X, car4Y, car4V;

   function setup() {
     // Canvas & color settings
     createCanvas(500, 500);
     colorMode(HSB, 360, 100, 100);
     
     car1X = 0;
     car1Y = 100;
     car1V = 4;
     
     car2X = width;
     car2Y = 150;
     car2V = 1;
     
     car3X = 0;
     car3Y = 200;
     car3V = 2;
     
     car4X = width;
     car4Y = 300;
     car4V = 3;
   }
   
   function draw() {
     background(backgroundColor);
     // Code for gold goal line
     // Code to display Frog
     moveCars();
     drawCars();
   }
   
   function moveCars() {
     // Move the car
     
       car1X+=car1V
       car2X-= car2V
       car3X+= car3V
       car4X-= car4V
       // Reset if it moves off screen
       if(car1X==width)
         {
           car1X = 0;
         }
       if(car2X==0)
         {
           car2X = width;
         }
       if(car3X==width)
         {
           car3X = 0;
         }
       if(car4X==0)
         {
           car4X = width;
         }
   }
   
   
   function drawCars() {
     // Code for car 1
     fill(0, 80, 80);
     ellipse(car1X, car1Y, 40, 30);
     // Code for additional cars
     fill(100, 50, 100);
     ellipse(car2X, car2Y, 40, 30);
     fill(20, 50, 20);
     ellipse(car3X, car3Y, 40, 30);
     fill(100, 100, 50);
     ellipse(car4X, car4Y, 40, 30);
   }
   
   
