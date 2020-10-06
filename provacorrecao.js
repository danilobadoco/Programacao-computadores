/*Utilizando 1 matriz e 1 vetor de objetos e um menu de opções (dentro da função chefe como feita em aula), faça um programa que crie funções para (não se esqueça dos parâmetros da função):

1) cadastrar em um vetor 4 carros contendo marca, modelo, ano e valor, e para cada carro, informar em uma matriz a nota do carro para cada uma das 5 avaliações que ele recebe da empresa 
Guia Quatro Rodas da Editora Abril.

2) calcular e mostrar a média de notas de cada carro, informe junto a marca e modelo do carro

3) calcular e mostrar o modelo do carro com menor nota em cada avaliação  */


chefe()

function chefe(){
    let vetor = []
    let matriz = []
    do{
        var opcao = Number(prompt(`\n [1] Cadastro. \n [2] Média de notas de cada carro. \n [3] Modelo com menor nota. \n [4]Sair.`))
        switch(opcao){
            case 1 : entrada(vetor, matriz)
                    break
            case 2 : mediaNotas(vetor, matriz)
                    break  
            case 3 : menorNota(vetor, matriz)
                    break              
        }
    }
    while(opcao != 4)

}


function entrada(vet, mat){
    for(var i=0; i<4;i++){
       var carros = new Object()
         carros.modelo = prompt(`Informe o modelo do carro`)
         carros.marca = prompt(`Informe a marca do carro`)
         carros.ano = Number(prompt(`Informe o ano do modelo do carro`))
         carros.valor = Number(prompt(`Informe o valor do modelo do carro`))
         vet.push(carros)
         
         
           
                for(var j=0; j<5; j++){
                    mat[i][j] = Number(prompt(`Informe a nota`))
                }
            }
         
    }   
    
        


function mediaNotas(vet,mat){
   
    for(let i=0; i<4; i++){
        let soma =0
        for(let j=0; j<5; j++){
            soma = soma + mat[i][j]            
        }
        console.log(`O modelo ${vet[i].modelo} da marca ${vet[i].marca} tem a média de nota de ${soma/5}} `)
    }
   
}

function menorNota(vet, mat){
    for(let j = 0; j<5; j++){
        var menor = mat[0][j]
        var modelo = vet[0].modelo
        for(let i=0; i<4; i++){
            if(mat[i][j]< menor){
                menor = mat[i][j]
                modelo = vet[i].modelo
            }

        }
        console.log(`${menor} ${modelo}`)
    }



}








/*Utilizando dois vetores de objetos e menu de opções (dentro da função chefe como os 
    feitos em aula), faça um programa que crie funções para

1) cadastrar 1 pessoa contendo rg, cpf e nome

2) cadastrar 1 imóvel contendo código, endereço, tamanho, tipo, valor e rg do dono. 
Não pode criar imóvel de pessoa que não esteja cadastrada

3) A partir de um RG informado, calcula e mostra o valor total em imóvel desta pessoa,
 mostrando também o nome 

4) Calcula e mostra o cpf da pessoa que tem o imóvel mais caro */



function chefe (){
 let pessoa = []
 let imovel = []

 do{
    var opcao = Number(prompt(`\n [1] Cadastrar pessoa. \n [2] Cadastrar imóvel. \n [3] Valor total Imóvel. \n [4]imóvel mais caro. \n [5]Sair.`))
    switch(opcao){
        case 1 : cadastraPessoa(pessoa)
                break
        case 2 : cadastraImovel(imovel, pessoa)
                break  
        case 3 : calculaTotal(imovel, pessoa)
                break              
    }
}
while(opcao != 5)

}

function cadastraPessoa(vet1){

    let pessoa = new Object()
        pessoa.nome = prompt(`Informe o nome`)
        pessoa.rg = Number(prompt(`Informe o RG`))
        pessoa.cpf = Number(prompt(`Informe o CPF`))
        for(let i=0; i<vet1.lenght; i++){
            if(vet1[i].rg == pessoa.rg){
                console.log(`RG já cadastrado`)
                return 0
            }
        }
    vet1.push(pessoa)  
    console.log(`Cadastrado com sucesso`)

}

function cadastraImovel(vet2, vet1){

    let imovel = new Object()
     imovel.rg = Number(prompt(`Informe o RG do dono`))
     imovel.codigo = Number(prompt(`Informe o código`))
     imovel.endereco = prompt(`Informe o endereço`)
     imovel.tamanho = Number(prompt(`Informe o tamanho`))
     imovel.tipo = prompt(`Informe o tipo`)
     imovel.valor = Number(prompt(`Informe o Valor`)) 
     
     for(let i=0;i<vet1.length;i++){
        if (vet1[i].rg == imovel.rg){
            vet2.push(imovel)
            return 0 // sai do for e da função
        }
    }

}


function calculaTotal(vet2, vet1){

    let rg = prompt(`Infome RG`)
    let soma = 0
    for(let i =0; i< vet2.length; i++){
        if (vet2[i].rg == rg){
            soma = soma + imv[i].valor
        }
    }
    for(let i=0;i<vet1.length;i++){
        if (vet1[i].rg == rg){
            nome = vet1[i].nome
            break
        }

        }

        console.log(`${soma} ${nome}`)
}
 