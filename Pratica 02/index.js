function cadastro(){
    var user = document.getElementById('txt1')
    var password = document.getElementById('txt2')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (user.value.length == 0 || password.value.length == 0){
        alert('Por favor, preencha os dados.')
    } else if (user.value === password.value){
        res.innerHTML = 'A sua senha não pode ser igual ao seu usuário.'
    } else if (user.value.length < 6){
        res.innerHTML = 'O seu usuário deve conter no minimo 6 caracteres.'
    } else if (user.value.length > 10){
        res.innerHTML = 'O seu usuário deve conter no máximo 10 caracteres.'
    } else if (password.value.length < 8){
        res.innerHTML = ' A sua senha deve conter no mínimo 8 caracteres.'
    } else {
        res.innerHTML = 'Usuário cadastrado com sucesso. \u{2705}'
    }
}