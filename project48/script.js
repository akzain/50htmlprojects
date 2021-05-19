const container = document.querySelector('.container')

const unsplanshURL = 'https://source.unsplash.com/random/'
const rows = 100

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img') 
  img.src = `${unsplanshURL}${getRandomSize()}`
  container.appendChild(img)
}

function getRandomSize() {
   return `${getRandomNr()}x${getRandomNr()}`
}
function getRandomNr() {
   return Math.floor(Math.random() * 10) + 500
   // console.log(Math.floor(Math.random() * 10) + 300)
}