const pass = document.querySelector('#password')
const p = document.querySelector(".passInfo")
const letters = /[a-z]/;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.textContent = "Masz wspaniałe hasło!"
        p.style.color ="lime"
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.textContent = "Masz dobre hasło"
        p.style.color = 'gold'
    } else {
        p.textContent ="Masz słabe hasło"
        p.style.color ="Red"
    }
}

const checkPassword = () => {
    if(pass.value !== '')
 {
    showMsg()
 }
else{
    p.textContent = "Nie podałeś hasła"
    p.style.color =''
}

}

pass.addEventListener('keyup', checkPassword)