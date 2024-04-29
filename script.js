// canvas API //
const canvas = document.getElementById("canvas");
// toolbox adjustment setting //
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");


const ctx = canvas.getContext("2d");

// global //
let size = 5
let color= 'purple'
let x
let y

// drawing //
canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false

  x = undefined
  y = undefined
})
// set drawing action //
canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
const x2 = e.offsetX
const y2 = e.offsetY

drawCircle(x2, y2) // brush shape //
drawLine(x, y, x2, y2) // drawing path //

x = x2
y = y2

  }

})

// shapes //
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2) // The end angle of the arc, measured in radians. Math.PI * 2 is equivalent to a full circle (360 degrees) in radians. //
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}



drawCircle(100, 200)
drawLine(100, 100, 300, 500) // pin down position x100, y100 / start to draw from x300 to y500 //


// set toolbox adjustment action //


function updateSizeOnScreen(){ // for both increaseBtn and decreaseBtn //
  sizeEl.innerText = size
}

increaseBtn.addEventListener('click', () => {
  size +=2
  if(size > 50){
    size = 50
  }

  updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
  size -=2
  if(size < 2){
    size = 2
  }

  updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)
clearEl.addEventListener('click',() => ctx.clearRect(0,0, canvas.width, canvas.height))
