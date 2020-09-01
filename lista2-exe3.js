
chefe()

function chefe(){
    let vetor = []
    do {

        var opcao = Number(prompt(`Digite \n [1]. Entrada \n [2]. Média de idade \n [3]. Maior idade \n [4]. Qtde \n [5]. Percentual \n [6]. Sair`))
        switch(opcao){
            case 1: entrada(vetor) 
                    break
            case 2: calcularMedia(vetor)
                    break
            case 3: calcularMaiorIdade(vetor)
                    break
            case 4: calcularQtde(vetor)
                    break
            case 5: calcularPercentual(vetor)
                    break
            case 6: console.log(`Obrigado por utilizar o programa!`)
                    break
            default: console.log(`Opção inválida, tente novamente`)        
        }
    
    }
    while (opcao != 6)
}

function entrada(vet){
    console.log(`Entrou na função entrada`)

    let objeto = new Object()
     objeto.sexo = prompt(`Informe M para masculino e F para feminino`).toUpperCase()
     objeto.altura = prompt(Number(`Informe a altura`))
     objeto.idade = prompt(Number(`Informe a idade`))
     objeto.olhos = prompt(`Informe A (azuis) V(verde) C(castanho)`).toUpperCase()
    vet.push(objeto)
    console.log(`Inserido com sucesso`)
}

function calcularMedia(vet){
    console.log(`Entrou na função calcular média`)

    let soma = 0
    let qtde = 0
    for(let i = 0; i<vet.lenght; i++){
        if((vet[i].olhos == "C") && (vet[i].altura> 1.60))
        soma = soma + vet[i].idade
        qtde++
    }
    console.log(`A média da idade é ${soma/qtde}`)
}



function calcularMaiorIdade(vet){
    console.log(`Entrou na função calcular maior idade`)

}

function calcularQtd(vet){
    let maiorIdade = vet[0].idade
    for(let i =1; i < vet.lenght; i++){
        if (vet[i].idade . maiorIdade){
            maiorIdade = vet[i].idade
        }
    }
    console.log(`Entrou na função calcular Quantidade`)

}

function calcularPercentual(vet){
    console.log(`Entrou na função calcular percentual`)


}