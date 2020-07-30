// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.
/* global createCanvas, background, colorMode, HSL, windowWidth, windowHeight,
   random, width, height, ellipse, text, fill, noStroke */

   let dots, numberOfDots;

   function setup() {
     createCanvas(windowWidth - 40, windowHeight - 80);
     colorMode(HSL, 360, 100, 100);
     numberOfDots = 100;
     dots = [];
     for (let i = 0; i < numberOfDots; i++) {
       dots.push(new BouncyDot());
       //dots[i] = new BouncyDot();
     }
   }
   
   function draw() {
     background(220, 0, 95);
     for (let i = 0; i < numberOfDots; i++) {
       dots[i].float();
       dots[i].display();
     }
   }
   
   function mousePressed() {
     // We'll use this for console log statements only.
     console.log(dots[0].x);
   }
   
   
   class BouncyDot {
     constructor() {
       // Randomly generate position
       this.x = random(width);
       this.y = random(height);
       // Randomly generate radius
       this.r = random(5, 12);
       // Randomly generate color
       this.color = random(360);
       // Randomly generate a master velocity (broken into components)...
       this.masterXvelocity = random(0.5, 3);
       this.masterYvelocity = random(0.5, 3);
       // ...and use those as starting velocities.
       this.xVelocity = this.masterXvelocity;
       this.yVelocity = this.masterYvelocity;
     }
   
     float() {
       this.x += this.xVelocity;
       this.y += this.yVelocity;
       // Standard bounce code - like the DVD logo, but for spheres.
       if (this.x + this.r > width) {
         this.xVelocity = -1 * this.masterXvelocity;
       }
       if (this.x - this.r < 0) {
         this.xVelocity = this.masterXvelocity;
       }
       if (this.y + this.r > height) {
         this.yVelocity = -1 * this.masterYvelocity;
       }
       if (this.y - this.r < 0) {
         this.yVelocity = this.masterYvelocity;
       }
     }
   
     display() {
       fill(this.color, 80, 70);
       noStroke();
       ellipse(this.x, this.y, this.r * 2);
     }
   }