const resultEL = document.getElementById('result')
const lengthEL = document.getElementById('length')
const uppercaseEL = document.getElementById('uppercase')
const lowercaseEL = document.getElementById('lowercase')
const numbersEL = document.getElementById('numbers')
const symbolsEL = document.getElementById('symbols')
const generateEL = document.getElementById('generate')
const clipboardEL = document.getElementById('clipboard')
const h1 = document.getElementById('h-one')

const randomFunc = {
   lower: getRandomLower,
   upper: getRandomUpper,
   number: getRandomNumber,
   symbol: getRandomSymbol
}

clipboardEL.addEventListener('click', () => {
   const textarea = document.createElement('textarea')

   const password = resultEL.innerText

   if(!password) { return }

   textarea.value = password
   document.body.appendChild(textarea)
   textarea.select()
   document.execCommand('copy')
   textarea.remove()
   // alert('password is coppied to clipboard!')
   h1.classList.add('h1')
   h1.innerText = 'password is coppied to clipboard!'
   setTimeout(() => {
      h1.classList.remove('h1')
      h1.innerText = ''
   }, 5000);
})

generateEL.addEventListener('click', () => {
   const length = +lengthEL.value
   const haslower = lowercaseEL.checked
   const hasupper = uppercaseEL.checked
   const hasnumber = numbersEL.checked
   const hassymbols = symbolsEL.checked

   resultEL.innerText = generatePassword(haslower, hasupper, hasnumber, hassymbols, length)
})

function generatePassword(lower, upper, number, symbol, length) {
   let generatedPassword = ''

   const typesCount = lower + upper + number + symbol
   const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

   if (typesCount === 0) {
      return ''
   }

   for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
         const funcname = Object.keys(type)[0]
         generatedPassword += randomFunc[funcname]()
      })
   }

   const finalpassword = generatedPassword.slice(0, length)

   return finalpassword
}

function getRandomLower() { return String.fromCharCode(Math.floor(Math.random() * 26) + 97) }

function getRandomUpper() { return String.fromCharCode(Math.floor(Math.random() * 26) + 65) }

function getRandomNumber() { return String.fromCharCode(Math.floor(Math.random() * 10) + 48) }

function getRandomSymbol() {
   const symbols = '!@#$$%^&*(){}[]=<>/,.'
   return symbols[Math.floor(Math.random() * symbols.length)]
}