function montarTag(tag, classe, texto) {
    let tagx = document.createElement(tag);

    if (classe != '') {
        tagx.classList.add(classe);
    }

    tagx.innerHTML = texto;
    return tagx;
}

function montarTagImg(classe, src) {
    let imagem = montarTag('img', classe, '');
    imagem.src = src;

    return imagem;
}

function montarTagUlComLi(qtdeLi, listaTextoLi) {
    let ul = montarTag('ul', '', '');

    for (let i = 0; i < qtdeLi; i++) {
        let li = montarTag('li', '', listaTextoLi[i]);
        ul.appendChild(li);
    }

    return ul;
}

function montaTr(descricaoRoteiro) {
    let tr = montarTag('tr', '', '');
    let tdDescricao = montarTag('td', '', descricaoRoteiro);
    let tdBtnExcluir = montarTag('td', 'btn-excluir-roteiro', '');
    let btn = montarTag('button', 'btn-excluir', 'Excluir');

    tdBtnExcluir.appendChild(btn);

    tr.appendChild(tdDescricao);
    tr.appendChild(tdBtnExcluir);

    return tr;
}

function exibirTabela() {
    tabela = document.querySelector('#tbl-roteiros');
    tabela.classList.remove('esconder');
}

function adicionarRoteiro(descricaoRoteiro) {
    let tbody = document.querySelector('#tabela-roteiros');
    let tr = montaTr(descricaoRoteiro);

    tbody.appendChild(tr);
    exibirTabela();
}

let botaoAdicionar = document.querySelector("#add-destino");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let roteiro = document.querySelector("#roteiro").value;
    if (roteiro != ''.trim()) {
        adicionarRoteiro(roteiro);
        document.querySelector("#roteiro").value = '';
    }
});

function retornaDadosTabelaRoteiros() {
    let tbody = document.querySelector('#tabela-roteiros');
    let tr = tbody.querySelectorAll('tr');

    let listaRoteiros = [];
    for (let i = 0; i < tr.length; i++) {
        let roteiro = tr[i].querySelector('td').innerHTML;
        listaRoteiros.push(roteiro);
    }

    return listaRoteiros;
}

function retornarDadosForm() {
    let map = new Map();

    map.set('imagemURL', document.querySelector('#imagemURL').value);
    map.set('destino', document.querySelector('#destino').value);
    map.set('listaRoteiros', retornaDadosTabelaRoteiros());
    map.set('preco', document.querySelector('#preco').value);
    map.set('observacao', document.querySelector('#observacao').value);
    map.set('parcelamento', document.querySelector('#parcelamento').value);

    return map;
}

function retornarTagsDestinos() {
    let dadosForm = retornarDadosForm();
    let listaTags = [];

    let divRoteiroIncluso = montarTag('div', 'roteiro-incluso', '');
    let listaRoteiros = dadosForm.get('listaRoteiros');

    let ul = montarTagUlComLi(listaRoteiros.length, listaRoteiros)
    divRoteiroIncluso.appendChild(ul);
    
    let img = montarTagImg('postal', dadosForm.get('imagemURL'));
    let destino = montarTag('div', 'roteiro-destino', dadosForm.get('destino'));
    let preco = montarTag('div', 'roteiro-preco', dadosForm.get('preco'));
    let obs = montarTag('div', 'roteiro-obs', dadosForm.get('observacao'));
    let parcelamento = montarTag('div', 'roteiro-parcelamento', dadosForm.get('parcelamento'));
    let botao = montarTag('button', 'roteiro-comprar', 'Comprar');    

    listaTags.push(img);
    listaTags.push(destino);
    listaTags.push(divRoteiroIncluso);
    listaTags.push(preco);
    listaTags.push(obs);
    listaTags.push(parcelamento);
    listaTags.push(botao);

    return listaTags;
}

function inserirPacote() {
    let listaTags = retornarTagsDestinos();
    let roteiros = montarTag('div', 'roteiros-viagens', '');

    document.querySelector('hr').classList.remove('esconder');  

    for (let i = 0; i < listaTags.length; i++) {
        roteiros.appendChild(listaTags[i]);
    }
    
    document.querySelector('.container-destinos').appendChild(roteiros);
    document.getElementById('form').reset();
}