const addButton = document.querySelector('#addBtn')
const inputEle = document.querySelector('#inputVal')
addButton.addEventListener('click',addItem)


function addItem(event){
    const delBtn = document.createElement('button')
    delBtn.textContent = "Delete"

    const newLi = document.createElement('li')
    newLi.textContent = inputEle.value
    newLi.appendChild(delBtn)
    document.querySelector('#list').appendChild(newLi)
    inputEle.value= ""

    delBtn.addEventListener('click',remove)
    function remove(event){
       event.target.parentElement.remove()
    }
    
   
}



