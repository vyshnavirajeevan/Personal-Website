
/* global createCanvas, background, colorMode, HSB, random, width, height,
   ellipse, mouseX, mouseY, text, fill, keyCode, textSize */

   let backgroundColor, car1X, car1Y, car1V,car2V, car2X, car2Y, hit, car3X, car3Y, car3V, car4X, car4Y, car4V;

   function setup() {
     // Canvas & color settings
     createCanvas(500, 500);
     colorMode(HSB, 360, 100, 100);
     
     car1X = 0;
     car1Y = 100;
   }
   
   function draw() {
     moveCars();
     drawCars();
   }
   
   function moveCars() {
     // Move the car
     
       car1X+=car1V

       // Reset if it moves off screen
       if(car1X==width)
         {
           car1X = 0;
         }
   }
   
   
   function drawCars() {
     // Code for car 1
     fill(0, 80, 80);
     ellipse(car1X, car1Y, 100, 100);
   }
   
   
