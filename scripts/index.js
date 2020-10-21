const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const charTimer = null;
const mario = { img: null, x: 0, y: 0, width: 28, height:42, currentframe: 0, totalframes: 6 }

mario.img = new Image();
mario.img.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/160783/mario.png";

mario.img.onload = function(){
  charTimer = setInterval(animateChar, 120);
}

function animateChar(){
  mario.currentframe++;
  
  ctx.drawImage(mario.img, mario.currentframe*mario.width, 0, mario.width, mario.height, 0, 0, mario.width, mario.height);
  
  
  if(mario.currentframe >= mario.totalframes){
    mario.currentframe = 0;
  }
}