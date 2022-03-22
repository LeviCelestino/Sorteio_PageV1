function escreverResultado(){
    let random = Math.floor(Math.random() * 101)
    document.getElementById("resultado").innerHTML = `<h1 class =" testando"> ${random} </h1>`
}