

async function abrirModal(index) {
    const resposta = await fetch('./assets/data/procedimentos.json');
    const procedimentos = await resposta.json();

    const modal = document.createElement('div');
    const modalConteudo = document.createElement('div')
    const fechar = document.createElement('span');
    const imagem = document.createElement('img');
    const titulo = document.createElement('h3');
    const descricao = document.createElement('p');

    modal.appendChild(modalConteudo)
    modalConteudo.appendChild(fechar);
    modalConteudo.appendChild(imagem);
    modalConteudo.appendChild(titulo);
    modalConteudo.appendChild(descricao);

    imagem.setAttribute('src', `${procedimentos[index].img}`);
    titulo.textContent = procedimentos[index].titulo;
    descricao.textContent = procedimentos[index].descricao;
    
    fechar.classList.add('fechar')
    fechar.addEventListener("click", ()=>{modal.remove()})
    fechar.innerHTML = "&times;"
    modal.classList.add('modal')
    modalConteudo.classList.add('modal-conteudo')
    
    modal.style.display = "block";
    document.body.appendChild(modal)
}

function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.onclick = function(event) {
  const modais = document.querySelectorAll(".modal");
  modais.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}