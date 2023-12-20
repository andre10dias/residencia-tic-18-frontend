class Noticia {
    private _id: number;
    private _titulo: string;
    private _introducao: string;

    constructor(id: number, titulo: string, introducao: string) {
        this._id = id;
        this._titulo = titulo;
        this._introducao = introducao;
    }

    public get id(): number {
        return this._id;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public get introducao(): string {
        return this._introducao;
    }
}

class Servico {
    private _titulo: string;
    private _dataHora: string;
    private _condicaoTempo: string;
    private _temperatura: string;
    private _humidade: string;
    private _nebulosidade: string;
    private _volumeChuva: string;
    private _velocidadeVento: string;

    constructor(titulo: string, dataHora: string, condicaoTempo: string, temperatura: string, humidade: string, nebulosidade: string, volumeChuva: string, velocidadeVento: string) {
        this._titulo = titulo;
        this._dataHora = dataHora;
        this._condicaoTempo = condicaoTempo;
        this._temperatura = temperatura + " °C";
        this._humidade = humidade + "%";
        this._nebulosidade = nebulosidade + "%";
        this._volumeChuva = volumeChuva + " mm";
        this._velocidadeVento = velocidadeVento;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public get dataHora(): string {
        return this._dataHora;
    }

    public get condicaoTempo(): string {
        return this._condicaoTempo;
    }

    public get temperatura(): string {
        return this._temperatura;
    }

    public get humidade(): string {
        return this._humidade;
    }

    public get nebulosidade(): string {
        return this._nebulosidade;
    }

    public get volumeChuva(): string {
        return this._volumeChuva;
    }

    public get velocidadeVento(): string {
        return this._velocidadeVento;
    }

}

class Destaque {
    private _id: string;
    private _url: string;
    private _largura: number;
    private _altura: number;

    constructor(id: string, url: string, largura: number, altura: number) {
        this._id = id;
        this._url = url;
        this._largura = largura;
        this._altura = altura;
    }

    public get id(): string {
        return this._id;
    }

    public get url(): string {
        return this._url;
    }

    public get largura(): number {
        return this._largura;
    }

    public get altura(): number {
        return this._altura;
    }
}

function requisicao(apiUrl: string): Promise<any> {
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

function getNoticias(): Promise<any> {
    const apiUrl = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3';
    return requisicao(apiUrl);
}

getNoticias().then(
    data => {
        data.items.forEach((item: any) => {
            let noticia: Noticia = new Noticia(item.id, item.titulo, item.introducao);
            exibeNoticia(noticia);
        });
    }
).catch(
    error => console.log('Erro ao obter dados:', error)
);   

function getServicos(): Promise<any> {
    const key = '7khc!cGDu3hsnWK';
    const apiUrl = `https://api.hgbrasil.com/weather?format=json-cors&key=${key}&lat=-14.792&lon=-39.051&user_ip=remote`;
    return requisicao(apiUrl); //Está sendo bloqueado pela política de CORS
}

getServicos().then(
    data => {
        let titulo: string = "Previsão do tempo para a cidade de "
        data.results.forEach((item: any) => {
            let servico: Servico = new Servico(
                titulo + item.city, 
                item.date + " " + item.time, 
                item.description, 
                item.temp, 
                item.humidity, 
                item.cloudiness, 
                item.rain, 
                item.wind_speedy
            );

            exibeServico(servico);
        });
    }
).catch(
    error => console.log('Erro ao obter dados:', error)
); 

function getDestaques(): Promise<any> {
    const key = 'live_B1QYG01HL57Lx8NXfFSXxCIouu94SBOYVoE6HhKmAhow3y3GeIskzb8zNQbi1cxU';
    const limite = 2;
    const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=${limite}&api_key=${key}`;
    return requisicao(apiUrl);
}

getDestaques().then(
    data => {
        let count = 0;
        data.forEach((item: any, index: number) => {
            let destaque: Destaque = new Destaque(
                item.id,
                item.url,
                item.width,
                item.height
            );
            
            if (count < 2) { //O parâmetro "limit" da API não funciona direito
                exibeDestaque(destaque, 'img'+index);
            }

            count++;
        });
    }
).catch(
    error => console.log('Erro ao obter dados:', error)
); 

function montarTag(tag: string, classe: string, texto: string): HTMLElement {
    let tagx: HTMLElement = document.createElement(tag);

    if (classe != '') {
        tagx.classList.add(classe);
    }

    tagx.innerHTML = texto;
    return tagx;
}

function montarTagImg(classe: string, src: string): HTMLImageElement {
    let imagem: HTMLImageElement = montarTag('img', classe, '') as HTMLImageElement;
    imagem.src = src;

    return imagem;
}

function exibeNoticia(noticia: Noticia) {
    let div = document.querySelector('#noticias');

    let h5 = montarTag('h5', '', noticia.titulo);
    let p = montarTag('p', '', noticia.introducao);

    div?.appendChild(h5);
    div?.appendChild(p);
}

function exibeServico(servico: Servico) {
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

    div?.appendChild(h5);
    div?.appendChild(ul);
}

function exibeDestaque(destaque: Destaque, classe: string) {
    let div = document.querySelector('.imagens');
    let img = montarTagImg(classe, destaque.url);

    div?.appendChild(img);
}
