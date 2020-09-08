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
            case 3 : consultaVendasFuncionarioMes(vendas)
                break
            case 4 :consultaVendasFuncionario(vendas) 
                break 
            case 5 :consultaVendedorMes(vendas)
                break
            case 6 : consultaMes(vendas)
                break        
            
            
            
            case 7: console.log(`Tchau`)
            default: console.log(`Tente novamente....`)        
        } 
    }

    while(opcao !=7)
    

}


function consultaMes(vdas){
    let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 0 ; i<vdas.length; i++){
        let posicao = vdas[i].mes -1
        meses[posicao] = meses[posicao] + vdas[i].valor
    }
        let maiorValor = meses[0]
        for(let i=0; i<meses.length; i++){
            if (meses[i] > maiorValor){
                maiorValor = meses[i]
            }
        }
        let posicao = meses.indexOf(maiorValor)
        console.log(`O Mês que mais vendeu ${posicao + 1}`)
}

function consultaVendedorMes(vdas){
    let mes = Number(prompt("Informe o Mês"))
    maiorVenda = 0 
    vendedorMaisVendeu = 0
    for(let i = 0; i  < vdas.length; i++){
        if (vdas[i].mes == mes){
            if(vdas[i].valor > maiorVenda){
                maiorVenda = vdas[i].valor
                vendedorMaisVendeu = vdas[i].vendedor
            }
        }
    }
    console.log(`Vendedor com mais vendas ${vendedorMaisVendeu} e valor ${maiorVenda}`)
}

function consultaVendasFuncionarioMes(vdas){
        let vendedor = Number(prompt(`Informe o código do vendedor`))
        let mes = Number(prompt(`Informe o Mês da venda`))

        for(let i=0; i < vdas.length; i++){
            if((vdas[i].vendedor ==  vendedor) && (vdas[i].mes.getMonth()==mes)){
                console.log(`Valor da venda ${vdas[i].valor}`)
                return

            }
            
        }
        console.log(`Não existe venda para este funcionário neste mês`)
}

function consultaVendasFuncionario(vendas){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let soma = 0
    
    for(let i=0; i < vdas.length; i++){
        if(vdas[i].vendedor ==  vendedor){
            soma = soma + vdas[i].valor
           
          

        }
        
    }
    console.log(`A soma das vendas é ${soma}`)
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
