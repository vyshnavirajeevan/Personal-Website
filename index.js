/* global createCanvas, background, loadImage, image, tint*/
let bg, x, y, imageWidth, imageHeight;

  
  imageWidth = 200;
  imageHeight = 150;

  
function setup(){
  //constructor ish
  // We only want to load the logo once.
  bg = loadImage("pw.jpg");
  x=50;
  y=50;

}




image(bg, x, y, imageWidth, imageHeight);