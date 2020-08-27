chefe()

function chefe(){
    var vetor =[]
    exe7(vetor)
}

function exe7(vet){

    var numero = Number(prompt('informe um número'))
    do{
        vet.push(numero)
        numero = Number(prompt('informe um outro número, informe número negativo para encerrar'))
    }
    while(numero >= 0)


}