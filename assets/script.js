const firstName = document.querySelector('input#fname')
const lastName = document.querySelector('input#lname')
const email = document.querySelector('input#email')
const password = document.querySelector('input#password')
const inputButton = document.querySelector('form')
const inputErrorFName = document.querySelector('span#errorFName')
const inputErrorLName = document.querySelector('span#errorLName')
const inputErrorEmail = document.querySelector('span#errorEmail')
const inputErrorPasswordIcon = document.querySelector('span#errorPasswordIcon')
const inputErrorPasswordEmpty = document.querySelector(
  'span#errorPasswordEmpty'
)
const inputErrorPasswordSmall = document.querySelector(
  'span#errorPasswordSmall'
)

inputButton.addEventListener('submit', onSubmit)
firstName.addEventListener('click', removeErrorFirst)
lastName.addEventListener('click', removeErrorLast)
email.addEventListener('click', removeErrorEmail)
password.addEventListener('click', removeErrorPassword)

function removeErrorFirst(e) {
  inputErrorFName.classList.remove('error')
}

function removeErrorLast(e) {
  inputErrorLName.classList.remove('error')
}

function removeErrorEmail(e) {
  inputErrorEmail.classList.remove('error')
}

function removeErrorPassword(e) {
  inputErrorPasswordIcon.classList.remove('error')
  inputErrorPasswordEmpty.classList.remove('error')
  inputErrorPasswordSmall.classList.remove('error')
}

function onSubmit(e) {
  e.preventDefault()
  inputVerify()
}

function inputVerify() {
  if (firstName.value === '') {
    inputErrorFName.classList.add('error')
  }
  if (lastName.value === '') {
    inputErrorLName.classList.add('error')
  }
  if (!email.value || !email.value.includes('@')) {
    inputErrorEmail.classList.add('error')
  }
  if (password.value === '') {
    inputErrorPasswordEmpty.classList.add('error')
    inputErrorPasswordIcon.classList.add('error')
  }
  if (password.value.length < 8) {
    inputErrorPasswordSmall.classList.add('error')
    inputErrorPasswordIcon.classList.add('error')
  }
}
