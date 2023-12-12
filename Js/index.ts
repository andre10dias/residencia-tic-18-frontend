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

function getNoticias(): Promise<any> {
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

getNoticias().then(
    data => {
        data.items.forEach((item: any) => {
            let noticia: Noticia = new Noticia(item.id, item.titulo, item.introducao);
            exibeNoticia(noticia);
        });
    }
).catch(
    error => console.error('Erro ao obter dados:', error)
);   

function montarTag(tag: string, classe: string, texto: string) {
    let tagx = document.createElement(tag);

    if (classe != '') {
        tagx.classList.add(classe);
    }

    tagx.innerHTML = texto;
    return tagx;
}

function exibeNoticia(noticia: Noticia) {
    let div = document.querySelector('.corpo');

    let h5 = montarTag('h5', '', noticia.titulo);
    let p = montarTag('p', '', noticia.introducao);

    div?.appendChild(h5);
    div?.appendChild(p);
}
