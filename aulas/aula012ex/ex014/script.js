function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=00 && hora <12){
        //BOM DIA!!
        img.src = 'fotos/manha.jpg'
        document.body.style.background = '#E4CAA9'
      
    } else if (hora >=12 && hora <=18){
        //BOA TARDE!!
        img.src = 'fotos/tarde.jpg'
        document.body.style.background = '#CD925A'
        // '#E18A3E'
    } else {
        //BOA NOITE!!
        img.src = 'fotos/noite.jpg'
        document.body.style.background = '#1655A4'
    }

}

