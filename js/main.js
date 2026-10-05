const container = document.querySelector('#container')
const content = document.createElement("div")
content.classList.add('content')
content.textContent = "This is the glorious text-content!";

container.appendChild(content)

const pRed = document.createElement('p')
pRed.textContent = "Hey I'm red!"
pRed.style.color = 'red'

const h3Blue = document.createElement('h3')
h3Blue.textContent = 'I\'m a blue h3!'
h3Blue.style.color = 'blue'

const newDiv = document.createElement('div')
newDiv.setAttribute('style',"background: pink; border: 1px solid black;" )

const nDivH1 = document.createElement('h1')
nDivH1.textContent= 'I\'m in a div'
const nDivP = document.createElement('p')
nDivP.textContent = 'ME TOO!'

newDiv.appendChild(nDivH1)
newDiv.appendChild(nDivP)



container.appendChild(pRed)
container.appendChild(h3Blue)
container.appendChild(newDiv)



// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.