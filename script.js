const react = document.querySelector("#react"),
    vue = document.querySelector("#vue"),
    angular = document.querySelector("#angular")


const mais = document.querySelector("#mais"),
 menos = document.querySelector("#menos"),
 quant = document.querySelector("#quantidade")

 let a = 1

 mais.addEventListener("click", ()=>{
    a++
    a = (a<10) ? "0" + a: a
    quant.innerHTML = a
 })
 menos.addEventListener("click", ()=>{
    if(a > 1){
        a--
        a = (a<10) ? "0" + a: a
    quant.innerHTML = a
    }
 })
 const observacoes = document.querySelector("#obeservacoes")

function enviar(){
    alert("A funcão de finalizar a compra ainda não foi adicionada :(")
}