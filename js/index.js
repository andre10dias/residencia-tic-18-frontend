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