chefe()

function chefe(){
    var vetor =[]
    exe7(vetor)
    console.log(vetor)
    calculaMedia(vetor)
}

function exe7(vet){

    var numero = Number(prompt('informe um número'))
    do{
        vet.push(numero)
        numero = Number(prompt('informe um outro número, informe número negativo para encerrar'))
    }
    while(numero >= 0)


}

function calculaMedia(vet){
    var soma = 0 
    for(var i=0; i<vet.lenght; i++){
        soma = soma + vet[i]
    }
    
    (console.log)(`A média é ${soma/vet.lenght}`)
}