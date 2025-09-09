'use strict'
/********************************************************************************************
* Objetivo: Aprender a interagir com uma Dog API gratuita.
* Autor: Kauan Lopes Pereira
* Data: 09/09/2025
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************
* async - Deixar uma função assincrona, utilizada para funcoes que buscam informações de 
servidores, o servidor pode demorar para responder e a função esperaria a resposta.
* await - Indica os break points onde deveram esperar mais tempo para a resposta chegar na 
variavel
******************************** BIBLIOTECAS UTILIZADAS *************************************

********************************************************************************************/

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response =  await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}

buscarImagens('pinscher')

