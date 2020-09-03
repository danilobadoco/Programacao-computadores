chefe()

function chefe(){
    let vendedores = []
    let vendas = []
    let opcao

    do{
         opcao = Number(prompt(`Escolha[1]. Cadastrar Vendedor[2]. Cadastrar Venda[3]. Sair`))
        switch(opcao){

            case 1 :cadastraVendedor(vendedores)
                break
            case 2: cadastraVendas(vendas, vendedores)
                break
            case 3: console.log(`Tchau`)
            default: console.log(`Tente novamente....`)        
        } 
    }

    while(opcao !=3)
    

}



function cadastraVendedor(vended){
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informa código do vendendor`))
    objeto.nome = prompt(`infomre nome do vendendor`)
    for(let i = 0; i<vended.length; i++){

        if(vended[i].codigo == objeto.codigo){
            console.log(`Cadastro cancelado pois já existe um vendendor com este código`)
            return 0 // sai da função
        }
    }


    vended.push(objeto)



}

function cadastraVendas(vdas, vdes){

    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe código da venda`))
    objeto.vendedor = Number(prompt(`Informe código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe valor da venda`))

    for(let i=0; i<vdes.length; i++){
        if(objeto.vendedor == vdes[i].codigo){
         for(let j = 0; j < vdas.length; j++){
             
             if((objeto.mes == vdas[i].mes) && (objeto.vendedor == vdas[i].vendedor)){
                 console.log(`Não podemos registrar a venda`)
                 return 0 
             }
         }
         vdas.push(objeto)
         console.log(`venda registrada`)
         return 0
        }
    }

   console.log(`vendedor não existe!`) 



}
