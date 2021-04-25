const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

loveMe.addEventListener('dblclick', (e) => {
   // console.log(123)
   createHeart(e)
})

let timesClicked = 0


const createHeart = (e) => {
   const heart = document.createElement('i')

   heart.classList.add('fas')
   heart.classList.add('fa-heart')

   const x = e.clientX
   const y = e.clientY

   const leftOffset = e.target.offsetLeft
   const topOffset = e.target.offsetTop

   const xInside = x - leftOffset
   const yInside = y - topOffset

   heart.style.top = `${yInside}px`
   heart.style.left = `${xInside}px`

   loveMe.appendChild(heart)

   times.innerHTML = ++timesClicked
}