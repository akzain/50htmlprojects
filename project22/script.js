const canvas = document.getElementById('canvas')
const ctx = document.getContext('2d')


let size = 20
let color = 'black'

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

drawCircle(100, 100)