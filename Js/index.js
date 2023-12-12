"use strict";
class Noticia {
    constructor(id, titulo, introducao) {
        this._id = id;
        this._titulo = titulo;
        this._introducao = introducao;
    }
    get id() {
        return this._id;
    }
    get titulo() {
        return this._titulo;
    }
    get introducao() {
        return this._introducao;
    }
}
function getNoticias() {
    const apiUrl = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3';
    return fetch(apiUrl)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
        .catch(error => {
        console.error('Erro na requisição:', error);
        throw error;
    });
}
getNoticias().then(data => {
    data.items.forEach((item) => {
        let noticia = new Noticia(item.id, item.titulo, item.introducao);
        exibeNoticia(noticia);
    });
}).catch(error => console.error('Erro ao obter dados:', error));
function montarTag(tag, classe, texto) {
    let tagx = document.createElement(tag);
    if (classe != '') {
        tagx.classList.add(classe);
    }
    tagx.innerHTML = texto;
    return tagx;
}
function exibeNoticia(noticia) {
    let div = document.querySelector('.corpo');
    let h5 = montarTag('h5', '', noticia.titulo);
    let p = montarTag('p', '', noticia.introducao);
    div === null || div === void 0 ? void 0 : div.appendChild(h5);
    div === null || div === void 0 ? void 0 : div.appendChild(p);
}
