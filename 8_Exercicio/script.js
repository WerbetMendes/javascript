function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12) {
        msg.innerHTML += '<p>Bom dia!</p>'
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#edcd9f'
    } else if (hora < 18) {
        msg.innerHTML += '<p>Boa Tarde!</p>'
        img.src = 'img/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += '<p>Boa noite!</p>'
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#515154'
    }
}


