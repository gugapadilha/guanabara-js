/* Calcular seu IMC - sabe se está no peso ideal, em relacao com sua altura*/
var kg = 82
var altura = 1.84
var IMC


IMC = kg / (altura * 2) 
console.log(`voce tem ${kg} kilos.`)
console.log(`voce tem ${altura} de altura`)

if (IMC < 17) {
    console.log("Voce está muito abaixo do seu peso ideal")
}else if (IMC >= 17 && IMC < 18.5){
    console.log("Voce está abaixo do seu peso ideal")
}else if(IMC >= 18.5 && IMC < 25){
    console.log("Voce está no seu peso ideal")
}else if(IMC >= 25 && IMC < 30){
    console.log(`Voce está acima do seu peso ideal`)
}else if(IMC >= 30 && IMC < 35){
    console.log("Voce esta com obesidade")
}else if(IMC >= 35 && IMC < 40){
    console.log("Voce esta com Obesidade severa")
}else {
    console.log("Parabéns amigao, você esta com obesidade morbida")
}