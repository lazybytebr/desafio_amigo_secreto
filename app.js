//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // array onde serão inseridos os nomes 
let lista = document.querySelector('#listaAmigos');

function adicionarAmigo()
{
    let nome = document.querySelector('#amigo').value;

    if( nome == "" )
    {
        alert("Por favor, insira um nome.");
    }
    else
    {
        amigos.push( nome );

        document.querySelector('#amigo').value = "";

    }

    listarAmigos();

}

function listarAmigos()
{
    lista.innerHTML = "";

    for ( let i = 0; amigos.length > i; i++ )
    {
        let elemento = document.createElement('li');
        elemento.innerText = amigos[i];
        lista.appendChild(elemento);
    }
}