import utils from './utils'

const canvas = document.querySelector('canvas');
const data = document.querySelector('.data');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

const gravity = 1;
const friction = 0.88;

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

addEventListener('click', () => {
  init()
})


// Objects
class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dy = dy 
    this.dx = dx
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.stroke();
    c.closePath()
  }

  update() {

    if(this.y + this.radius + this.dy > canvas.height){
      this.dy = -this.dy * friction;
     }else{
      this.dy += gravity;
    }

    if(this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0){
      this.dx = -this.dx;
    }

    this.y += this.dy;
    this.x += this.dx;
    this.draw()
  }
}

// Implementation
let ballArray = [];
let ball;


function init() {
  ballArray = [];
  for (let i = 0; i < 100; i++){
    let radius = utils.randomIntFromRange(20,40);
    let x = utils.randomIntFromRange(radius, canvas.width - radius);
    let y = utils.randomIntFromRange(0, canvas.height - radius);
    let dx = utils.randomIntFromRange(-2,2);
    let dy = utils.randomIntFromRange(-2,2);
    let color = utils.randomColor(colors);

    ballArray.push( (new Ball(x, y, dx, dy, radius, color) ));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillText('yolo', mouse.x, mouse.y)

 // data.innerHTML = 'dy: ' + ball.dy + '<br> y:' + ball.y + '<br>x:' + ball.x ;

  ballArray.forEach(object => {
   object.update()
  })
}

init()
animate()
