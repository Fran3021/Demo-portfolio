import './sass/style.scss'

let formulario = document.querySelector('.formulario')
let inputEmail = document.querySelector('.email')
let iconError = document.querySelector('.icon-error-email')
let mensajeError = document.querySelector('.mensaje-error-email')

formulario.addEventListener('submit', (event) => {
    if(!inputEmail.validity.valid){
        event.preventDefault()
        inputEmail.classList.add('invalid')
        iconError.style.display = 'block'
        mensajeError.style.display = 'block'
    }
})

inputEmail.addEventListener('input', () => {
    if(inputEmail.validity.valid){
        inputEmail.classList.remove('invalid')
        iconError.style.display = 'none'
        mensajeError.style.display = 'none'
    }
})
