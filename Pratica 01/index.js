function verificar(){
    var num1 = document.getElementById('txtn1')
    var num2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    if (num1.value.length == 0 || num2.value.length == 0){
        alert('ERRO! Preencha ambos campos.')
    } else if (num1.value < 0 || num2.value < 0){
        alert('A sua nota não pode ser menor que ZERO (0)')
    } else if (num1.value > 10 || num2.value > 10){
        alert('A nota tem um valor máximo de DEZ (10)')
    }
    else{
        res.innerHTML = ''
        n1 = Number(num1.value)
        n2 = Number(num2.value)
        m = (n1 + n2) / 2
        if (m < 6){
            document.body.style.background = 'red'
            res.innerHTML = 'REPROVADO! \u{1F621} <br>'
        } else if ( m > 6 && m < 7){
            document.body.style.background = '#e29c12'
            res.innerHTML = 'ARRASTADO! \u{1F64F} <br>'
        } else{
            document.body.style.background = 'green'
            res.innerHTML = 'APROVADO!!!! \u{1F973} <br>'
        }
    res.innerHTML += `A sua primeira nota foi ${n1} e a segunda ${n2}.<br>
    Sua média foi ${m}.`
    }

}
    