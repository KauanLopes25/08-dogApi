'use strict'

function buscarImagens() {
    const url = 'https://dog.ceo/api/breed/hound/images'
    const imagens = fetch (url)
    console.log(imagens)
}

buscarImagens()