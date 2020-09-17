
chefe()

function chefe(){

    let matriz = []
    let vetor = []

    cadastraTimesePontos(matriz,vetor)
    calculaMediaPontos(matriz,vetor)
    calculaTimeMaisPontosRodada(matriz, vetor)

}

function calculaTimeMaisPontosRodada(mat, vet){
    for (let j =0; j<3; j++){
        let maisPontos = mat[0][j]
        let nomeTimeMaisPontos = vet[0].nome
        for(let i=0; i<4; i++){
            if(mat[i][j] > maisPontos){
                maisPontos = mat[i][j]
                nomeTimeMaisPontos = vet[i].nome
            }
        }
        console.log(`O time ${nomeTimeMaisPontos}fez ${maisPontos}na rodada ${j+1}`)
    }

}
function calculaMediaPontos(mat,vet){
    for (let i=0; i<4; i++){
        for(let j=0; j<3 ; j++){
            vet[i].media= vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media/3
    }
    console.log(vet)
}


function cadastraTimesePontos(mat,vet){

    for(let i=0; i<4; i++){
        let times = new Object()
        times.nome  = prompt(`Informe o time de basquete`)
        times.cidade = prompt(`Informe a cidade do time`)
        times.media = 0 // define com zero a media
        vet.push(times)
        mat[i] = []
        for(let j=0; j<3; j++){//para cada rodada
            mat[i][j] = Number(prompt(`Informe os pontos do time${times.nome}na rodada${j+1}`))

        }
        
    }
    
}
