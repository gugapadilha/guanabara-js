/*
num[3] = 6 // valor que estava no elemento 3 - atribuir o numero 6 no lugar
num.push(7) //adicionar um elemnto depois da ultima casa, nao impota qual seja  
num.lenght  // comprimento
num.sort() //pega os elementos e coloca em ordem ccrescente
*/

let  num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)  
var pos = num.indexOf(4) //BUSCAR O VALOR 8 DENTRO DO NUM -VAI RETORNAR O VALOR ONDE ESTA O 8 -
if (pos == -1) {
    console.log(`O valor nao foi encontrado!`)
}else {
    console.log(`O valor 8 esta na posicao ${pos}`)
}

