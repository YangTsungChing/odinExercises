const button = document.querySelector('button')
button.addEventListener('click',magic)

function random(number){
    return Math.floor(Math.random()*(number+1))
}

function magic(event){
    const rndRgb = `rgb(${random(255)},${random(255)},${random(255)})`
    event.target.style.backgroundColor = rndRgb
    const rndfontSize = `${random(100)}px`
    event.target.style.fontSize = rndfontSize
    const rndRgb2 = `rgb(${random(255)},${random(255)},${random(255)})`
    event.target.style.color = rndRgb2
}