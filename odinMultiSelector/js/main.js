const buttons = document.querySelectorAll('button')
Array.from(buttons).forEach(btn =>btn.addEventListener('click',randomize))

function rndNum(num){
    return Math.floor(Math.random()*(num+1))
}

function rndRgb(){
    return `rgb(${rndNum(255)} ${rndNum(255)} ${rndNum(255)})`
}

function randomize(event){
    
    event.target.style.backgroundColor = rndRgb()
    event.target.style.color = rndRgb()
    event.target.style.fontSize = `${rndNum(200)}px`
}