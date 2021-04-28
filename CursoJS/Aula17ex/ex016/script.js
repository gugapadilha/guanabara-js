function contar () {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')      
    } else {
        res.innerHTML = 'Contando: <br> '
        var i = Number(inicio.value)
        var f = Number(fim.value)  // CONVERTENDO PARA NUMERICO! ! ! 
        var p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo inválido!')
            p = 1
        }

        if(i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` //Só funciona entre crazes 
            }   
        }else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }          
        }
        res.innerHTML += `\u{1F3f4}` 
    }
}       