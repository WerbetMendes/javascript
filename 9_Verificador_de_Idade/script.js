function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.getElementById('res')
   
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert('Ano de nascimento inválido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - nasc.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 3) {
                img.setAttribute('src', 'img/bebe-homem.png')
            } else if (idade < 12){
                img.setAttribute('src', 'img/crianca-homem.png')
            }else if (idade < 49){
                img.setAttribute('src', 'img/jovem-homem.png')
            } else {
                img.setAttribute('src', 'img/homem-idoso.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 3) {
                img.setAttribute('src', 'img/bebe-mulher.png')
            } else if (idade < 12){
                img.setAttribute('src', 'img/crianca-mulher.png')
            }else if (idade < 49){
                img.setAttribute('src', 'img/jovem-mulher.png')
            } else {
                img.setAttribute('src', 'img/mulher-idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        res.appendChild(img)
    } 
}