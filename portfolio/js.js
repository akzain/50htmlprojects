const date = document.getElementById('card-title ')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1000);

function getData() {
   date.innerHTML = 'Hi I\'m ZainKamaal'

   animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
   animated_bg_text.forEach(bg => bg.classList.remove('animated-bg_text'))
}