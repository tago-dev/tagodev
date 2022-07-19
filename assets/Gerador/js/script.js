let slideElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#btn");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ12356789!@"
let novaSenha = "";

sizePassword.innerHTML = slideElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function genaratePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < slideElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}


function copyPassword() {
    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha);
}