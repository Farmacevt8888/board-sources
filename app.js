const board = document.querySelector('#board')
const colors = ['#239179', '#a7d513', '#5ffd5c', '#fc351c', '#7578a7', '#4f29b0', '#8cf6a0', '#b718f2', '#e1224a', '#53f83c', '#addc5e', '#7b3ca3', '#d2b2f6', '#5580ce', '#c16c83', '#f914cf']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', setColor)
   square.addEventListener('mouseleave', remooveColor)

   board.append(square)
}

function setColor(event) {
   const element = event.target
   const color = getRandomColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function remooveColor(event) {
   const element = event.target
   element.style.backgroundColor = '#1d1d1d'
   element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}