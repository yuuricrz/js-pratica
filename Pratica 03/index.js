function confirmar(){
    var nome = document.getElementById('txtnome')
    var idade = document.getElementById('txtidade')
    var sal = document.getElementById('txtsal')
    var emp = ''
    var sex = document.getElementsByName('radsex')
    var gen = ''
    var civil = document.getElementsByName('radcivil')
    var estc = ''
    var res = document.getElementById('res')
    
    if (nome.value.length == 0){
        alert('Por favor, preencha o campo "NOME"')
    } else if (nome.value.length < 3){
        alert('O seu NOME deve conter no minimo 3 letras.')
    }
    if (idade.value < 0 || idade.value > 150){
        alert('A sua idade está fora do limite (0 a 150)')
    }
    if ( sal.value == 0){
        var emp = 'Sem salário'
    } else if (sal.value < 0){
        alert('Insira um valor válido no SALÁRIO')
    } else{
        var emp = 'R$ ' + sal.value
    }
    if (sex[0].checked){
        var gen = 'Masculino'
    } else {
        var gen = 'Feminino'
    }
    if (civil[0].checked){
        if (sex[0].checked){
            var estc = 'Solteiro'
        } else{
            var estc = 'Solteira'
        }
    } else if (civil[1].checked){
        if (sex[0].checked){
            var estc = 'Casado'
        } else {
            var estc = 'Casada'
        }
    } else if (civil[2].checked){
        if (sex[0].checked){
            var estc = 'Viúvo'
        } else {
            var estc = 'Viúva'
        } 
    } else {
        if (sex[0].checked){
            var estc = 'Divorciado'
        } else {
            var estc = 'Divorciada'
        }
    }
    res.innerHTML = `Segue a sua ficha! <br>` 
    res.innerHTML += 
    `<strong>NOME</strong>: ${nome.value} <br>
    <strong>Idade</strong>: ${idade.value} <br>
    <strong>Salário</strong>: ${emp} <br>
    <strong>Sexo</strong>: ${gen} <br>
    <strong>Estado Civil</strong>: ${estc}`
}