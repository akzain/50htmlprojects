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


   heart.style.left = `${e.clientX - e.target.offsetLeft}px`
   heart.style.top = `${e.clientY - e.target.offsetTop}px`

   loveMe.appendChild(heart)

   times.innerHTML = ++timesClicked
}