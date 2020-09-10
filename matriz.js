//lista 3 exe 0 

chefe()

function chefe(){

    let matriz = []

    matriz [0] = []
    matriz [1] = []
    matriz [2] = []

    cadastra(matriz)// cadastra 3 alunos
    
    consultaMediaAlunos(matriz)//calcula media das notas
}


function cadastra(mat){

    for(let i=0; i<3; i++){
        alert(`Informe 4 notas`)
        for(let j=0; j<4; j++){
            mat[i][j] =Number(prompt(`Informe a nota ${j + 1}`))
        }

    }
}

function consultaMediaAlunos(mat){
    let medias = [0,0,0]
    for(let i =0; i< 3; i++){
        for(let j=0; j< 4; j++){
            medias[i] = medias[i] + mat[i][j]
        }
        medias[i] = medias[i] / 4
    }
    console.log(`Valor das médias ${medias}`)

}

// 1.)Antes da entrada das notas de um aluno, solicitar o nome e o RG dele
// 2.)Calcular e mostrar a média de cada prova
// 3.)Calcular e mostrar a maior nota de cada prova