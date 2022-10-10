window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  
const car = new Image();
const arrows = new Image();


car.src = "/images/car.png";
arrows.src = "/images/arrows.png";

let gap =90;
let score = 0;

let xPos = 10;
let yPos = 150;
let grav = 1.5;


  const img = new Image();
img.src = '/images/road.png';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const backgroundImage = {
  img: img,
  x: 0,
  y:0,
  speed: -1,
  move: function() {
    this.y += this.speed;
    this.y %= canvas.width;

    
  },

  
  draw: function() {
    ctx.drawImage(this.img, this.y, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.y + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.y - this.img.width, 0);
    }
  },
};
function updateCanvas() {
  backgroundImage.move();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  requestAnimationFrame(updateCanvas);
}
// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;
  function startGame() {}
};