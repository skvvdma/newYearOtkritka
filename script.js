let elem = myForm.elements
let uName = document.querySelector('#compliment__person')
let compl = document.querySelector('.compliment')
let compltext = document.querySelector('.compliment__text')
elem.mybtn.addEventListener('click', function(event){
    event.preventDefault()
    uName.textContent = elem.userName.value
    compl.style.display = 'flex'
    myForm.style.display = 'none'
    compltext.style.color = elem.usrclr.value
})