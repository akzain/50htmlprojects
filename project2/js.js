// defining const varibale

const progress = document.getElementById('progress')
const prev = document.getElementById('pre')
const next = document.getElementById('nxt')
const circles = document.querySelectorAll('.circle')

// defining  variable for knowing the location of progress with 1 as default
let currentActive = 1

// adding eventlistener to next for listening on click
next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

// adding eventlistener to prev for listening on click
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

// defining a function for updating the progress and stoppin it on the last one
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const active = document.querySelectorAll('.active')

    // making the line between the circles blue on progress
    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%'
// disabeling the buttons on some logic
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
// Done!!