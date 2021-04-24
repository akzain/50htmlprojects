const toasts = document.getElementById('toasts')
const button = document.getElementById('button')


const messages = [
   "Message One",
   "Message two",
   "Message three",
   "Message four",
]

button.addEventListener('click', () => cnotification())

function cnotification() {
   const notif = document.createElement('div')
   notif.classList.add('toast')

   notif.innerText = grm()

   setTimeout(() => {
      notif.remove()
   }, 10000)
}

function grm() {
   return messages[Math.floor(Math.random() * messages.length)]
}