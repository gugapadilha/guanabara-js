function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.lenght == 0) { 
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(num.value) // numero que alguem digita-ra no programa
        var c = 1
        tab.innerHTML = '' // ANTES DE MOSTRAR A TABUADA LIMPA A AREA PARA NAO ACUMULAR
            while (c <= 10) {
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                item.value = `tab ${c}`
                tab.appendChild(item) //adicionar um elemento flho - ITEM
                c++
            }
    }  
}