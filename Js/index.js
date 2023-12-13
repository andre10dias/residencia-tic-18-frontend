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
class Servico {
    constructor(titulo, dataHora, condicaoTempo, temperatura, humidade, nebulosidade, volumeChuva, velocidadeVento) {
        this._titulo = titulo;
        this._dataHora = dataHora;
        this._condicaoTempo = condicaoTempo;
        this._temperatura = temperatura + " °C";
        this._humidade = humidade + "%";
        this._nebulosidade = nebulosidade + "%";
        this._volumeChuva = volumeChuva + " mm";
        this._velocidadeVento = velocidadeVento;
    }
    get titulo() {
        return this._titulo;
    }
    get dataHora() {
        return this._dataHora;
    }
    get condicaoTempo() {
        return this._condicaoTempo;
    }
    get temperatura() {
        return this._temperatura;
    }
    get humidade() {
        return this._humidade;
    }
    get nebulosidade() {
        return this._nebulosidade;
    }
    get volumeChuva() {
        return this._volumeChuva;
    }
    get velocidadeVento() {
        return this._velocidadeVento;
    }
}
class Destaque {
    constructor(id, url, largura, altura) {
        this._id = id;
        this._url = url;
        this._largura = largura;
        this._altura = altura;
    }
    get id() {
        return this._id;
    }
    get url() {
        return this._url;
    }
    get largura() {
        return this._largura;
    }
    get altura() {
        return this._altura;
    }
}
function requisicao(apiUrl) {
    return fetch(apiUrl)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
        .catch(error => {
        console.log('Erro na requisição:', error);
        throw error;
    });
}
function getNoticias() {
    const apiUrl = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3';
    return requisicao(apiUrl);
}
getNoticias().then(data => {
    data.items.forEach((item) => {
        let noticia = new Noticia(item.id, item.titulo, item.introducao);
        exibeNoticia(noticia);
    });
}).catch(error => console.log('Erro ao obter dados:', error));
function getServicos() {
    const key = '7khc!cGDu3hsnWK';
    const apiUrl = `https://api.hgbrasil.com/weather?key=${key}&lat=-14.792&lon=-39.051&user_ip=remote`;
    return requisicao(apiUrl);
}
getServicos().then(data => {
    let titulo = "Previsão do tempo para a cidade de ";
    data.results.forEach((item) => {
        let servico = new Servico(titulo + item.city, item.date + " " + item.time, item.description, item.temp, item.humidity, item.cloudiness, item.rain, item.wind_speedy);
        exibeServico(servico);
    });
}).catch(error => console.log('Erro ao obter dados:', error));
function getDestaques() {
    const key = 'live_B1QYG01HL57Lx8NXfFSXxCIouu94SBOYVoE6HhKmAhow3y3GeIskzb8zNQbi1cxU';
    const limite = 2;
    const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=${limite}&api_key=${key}`;
    return requisicao(apiUrl);
}
getDestaques().then(data => {
    let count = 0;
    data.forEach((item, index) => {
        let destaque = new Destaque(item.id, item.url, item.width, item.height);
        if (count < 2) { //O parâmetro "limit" da API não funciona direito
            exibeDestaque(destaque, 'img' + index);
        }
        count++;
    });
}).catch(error => console.log('Erro ao obter dados:', error));
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
function exibeNoticia(noticia) {
    let div = document.querySelector('#noticias');
    let h5 = montarTag('h5', '', noticia.titulo);
    let p = montarTag('p', '', noticia.introducao);
    div === null || div === void 0 ? void 0 : div.appendChild(h5);
    div === null || div === void 0 ? void 0 : div.appendChild(p);
}
function exibeServico(servico) {
    let div = document.querySelector('#servicos');
    let h5 = montarTag('h5', '', servico.titulo);
    let ul = montarTag('ul', '', '');
    let lis = [];
    lis.push(montarTag('li', '', "Data/Hora: " + servico.dataHora));
    lis.push(montarTag('li', '', "Condição atual do tempo: " + servico.condicaoTempo));
    lis.push(montarTag('li', '', "Temperatura: " + servico.temperatura));
    lis.push(montarTag('li', '', "Humidade: " + servico.humidade));
    lis.push(montarTag('li', '', "Nebulosidade: " + servico.nebulosidade));
    lis.push(montarTag('li', '', "Volume de chuva: " + servico.volumeChuva));
    lis.push(montarTag('li', '', "Velocidade do vento: " + servico.velocidadeVento));
    lis.forEach(li => {
        ul.appendChild(li);
    });
    div === null || div === void 0 ? void 0 : div.appendChild(h5);
    div === null || div === void 0 ? void 0 : div.appendChild(ul);
}
function exibeDestaque(destaque, classe) {
    let div = document.querySelector('.imagens');
    let img = montarTagImg(classe, destaque.url);
    div === null || div === void 0 ? void 0 : div.appendChild(img);
}
