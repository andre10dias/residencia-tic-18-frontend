let container = document.querySelector('.container-destinos');
let roteiroViagens = container.querySelectorAll('.roteiros-viagens');

for (let i = 0; i < roteiroViagens.length; i++) {
    let comprar = roteiroViagens[i].querySelector('.roteiro-comprar');

    comprar.addEventListener('click', function() {
        let destino = roteiroViagens[i].querySelector('.roteiro-destino').innerHTML;
        let preco = roteiroViagens[i].querySelector('.roteiro-preco').innerHTML;
        let obs = roteiroViagens[i].querySelector('.roteiro-obs').innerHTML;
        let parcelamento = roteiroViagens[i].querySelector('.roteiro-parcelamento').innerHTML;
        
        let roteiro = roteiroViagens[i].querySelector('.roteiro-incluso');
        let listaLi = roteiro.querySelectorAll('li');
        let listaRoteiros = [];
        for (let j = 0; j < listaLi.length; j++) {
            listaRoteiros.push(listaLi[j].innerHTML);
        }

        let pacoteTuristico = {
            destino: destino,
            roteiro: listaRoteiros,
            preco: preco,
            obs: obs,
            parcelamento: parcelamento
        };
    
        console.log(JSON.stringify(pacoteTuristico));
    });
}

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

function retornarDadosForm() {
    let map = new Map();

    map.set('imagemURL', document.querySelector('#imagemURL').value);
    map.set('destino', document.querySelector('#destino').value);
    map.set('roteiro', document.querySelector('#roteiro').value);
    map.set('preco', document.querySelector('#preco').value);
    map.set('observacao', document.querySelector('#observacao').value);
    map.set('parcelamento', document.querySelector('#parcelamento').value);

    return map;
}

function retornarTagsDestinos() {
    let dadosForm = retornarDadosForm();
    let listaTags = [];

    let divRoteiroIncluso = montarTag('div', 'roteiro-incluso', '');
    let ul = montarTagUlComLi(dadosForm.get('roteiro').length, dadosForm.get('roteiro'))
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

    document.querySelector('hr').classList.remove('esconder');  

    for (let i = 0; i < listaTags.length; i++) {
        document.querySelector('.container-destinos').appendChild(listaTags[i]);
    }

    document.getElementById('form').reset();
}