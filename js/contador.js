function getChecked() { // Está função pega qual alternativa foi selecionada
    
    input = document.querySelectorAll('input') // está variavél está pegando todos os inputs do formulário que são eles as opções A,B,C,D e E

    console.log(input) // Linha para testes

    for(c = 0; c < input.length; c++) { // Aqui fazemos um for para passar pelo Vetor formado pelo o querySelector da variavel input

        if(input[c].checked == true) { // Aqui verificamos se o input em determinada posição está selecionado, caso esteja
                                        // Caso esteja retorna o valor do input (no caso o valor da alternativa)
            return input[c].value
            break
        }
    }
}

function sobreEscrever(objeto, id, index) { // Substitui a alternativa
    
    memoriaSplit = memoria.split(" ")
    
    memoriaSplit[index] = `${id}:${entrada}`// id = Questão e Entrada = Alternativa selecionada

    return memoriaSplit.join(" ")
}

function escrever(objeto, id) { // Aqui grava caso não haja substituição
    
    memoriaSplit = memoria.split(" ")
    
    memoriaSplit.push(`${id}:${entrada}`) // Push adiciona ao final do vetor o item informado

    return memoriaSplit.join(" ")
}

function gravar(oQueGravar) { // Grava a subsituição da alternativa

    sessionStorage.setItem("respostas", oQueGravar)
}

function salvarFormulario(id) { // Está função serve para cada vez que a página for alterada ela salvará o formulário, essa função está sendo passada no body de cada página recebendo o número da questão
    
    entrada = getChecked() // Aqui pegamos o valor passado dentro da função getChecked()

    if(sessionStorage.getItem("respostas")) { // Aqui fazemos a verificação para caso tenha algo dentro da sessionStorage (local onde estão sendo armazenadas as respostas dos formulários)
        let substituiu = false 

        memoria = sessionStorage.getItem("respostas") // Aqui armazenamos o valor da nossa sessionStorage dentro da variavel memoria para facilitar a manipulação
        
        memoriaSplit = memoria.split(" ") // Aqui estamos declarando a variavel memoriaSplit recebendo o valor da memoria separando ela por espaço com a função split(" ")

        for(c = 0; c < memoriaSplit.length; c++) { // Aqui com a função já separada iremos percorrer o memoriaSplit
        
            if(memoriaSplit[c].split(":")[0] == id) { // Fazeremos uma validação para saber se a primeira parte da memoriaSplit e igual ao valor do id (id == questão que estamos), ex: Q1:D (Q1 remete a questão que estamos, e o D alternativa que foi respondida)
                                                        //Caso os valores sejam iguais iremos fazer a variavel substituiu receber o valor de true 
                substituiu = true 
                
                index = c; //Declarando a variavel index recebendo o valor de c (no caso a posição)
            
                gravar(sobreEscrever(memoria, id, index)) // Aqui chamamos a função que vai gravar esses dados e a função sobreEscrever (que vai sobrepor os dados que já existem)

                break // sai do for
            }
        }
        if(!substituiu) { // Validação para saber se não foi substitudo 
            gravar(escrever(memoria, id))
        }
    }
    else { // Caso não tenha nada na sessionStorage iremos setar ela como valor da questão -> id e o valor da entrada
        sessionStorage.setItem("respostas", `${id}:${entrada}`)
    }
}

function autofill(id) { // Está função e iniciada junto da página ligada no body da página html, ela serve para caso a função já tenha sido respondida, deixará a questão marcada
    memoria = sessionStorage.getItem("respostas") // Pega as respostas
        
        memoriaSplit = memoria.split(" ")

        for(c = 0; c < memoriaSplit.length; c++) {

            if(memoriaSplit[c].split(":")[0] == id) {

                toFill = memoriaSplit[c].split(":")[1]

                console.log(toFill) // Linha para testes

                document.querySelector(`input[value="${toFill}"]`).checked = true // Alterar para o querySelector
                break
            }
        }
}

function resultado() { // Está função e a parte do contador que mostrará o resultado final mostrando os acertos e erros
    gabarito = ["Q1:C","Q2:C","Q3:B","Q4:B","Q5:C","Q6:E","Q7:A","Q8:D"
    ,"Q9:B","Q10:C","Q11:C","Q12:D","Q13:C","Q14:C","Q16:A","Q17:D",
    "Q18:A","Q19:C","Q20:E","Q21:D","Q22:B","Q23:B","Q24:E","Q25:A",
    "Q26:A","Q27:D","Q28:E","Q29:D","Q30:A","Q31:B","Q32:C","Q33:D","Q34:B","Q35:C"] // Aqui é o gabarito da prova

    quebrar = sessionStorage.getItem("respostas").split(" ") // Variavel quebra ira receber o sessionStorage quebrando ela em espaços com o split()
    corretas = 0; // Variavel para o contador
    erradas = 0;
    realizou= 0;

    
    
    for(c = 0; c < quebrar.length; c++) { // aqui vai percorrer o sessionStorage
        if(gabarito.indexOf(quebrar[c]) > - 1) { // IndexOf retorna 0 caso encontre e -1 caso não encontre, então isso quer dizer que pra cada vez q retornar o valor 0 o a variavel corretas ira receber +1, dizendo que vc acertou a questão
            corretas++; realizou++;
        }  else {
            erradas++; realizou++;
        }
        

    }
    console.log(corretas) // Linha para testes

    document.getElementById("acertos").innerHTML = `Seus acertos: ${corretas} / 34` // Aqui ira apresentar o resultado mostrando a quantidade de acertos
    // document.getElementById("escolha").innerHTML = `Suas respostas: ${quebrar}`

    console.log(erradas) // Linha para testes
    


    document.getElementById("erros").innerHTML = `Seus erros: ${erradas} / 34` // Aqui ira apresentar o resultado mostrando a quantidade de acertos
    // document.getElementById("escolha").innerHTML = `Suas respostas: ${quebrar}`

   document.getElementById("realizou").innerHTML = `Questões respondidas: ${realizou} / 34` // Aqui ira apresentar o resultado mostrando a quantidade de acertos
    // document.getElementById("escolha").innerHTML = `Suas respostas: ${quebrar}` 
   
}


function reset() { // Função feita para resetar o sessionStorage para começar novamente o quiz
    sessionStorage.c
}

    google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var gabarito = []
var acertos = []
var erros = []

function teste(){
    alert("foiiiiiiii!")
}

function drawChart() {

    /* Grafico de acertos e erros em porcentagem. */

    var dados = new google.visualization.DataTable();
    dados.addColumn('string', 'Acertos e erros');
    dados.addColumn('number', 'Quantidade de acertos e erros');
    dados.addRows([
        ['Erros', corretas],
        ['Acertos', erradas]
    ]);

    var configuracoes = {
        'title':'Acertos e erros em porcentagem', 
        'pieHole': 0.4,
        'colors': ['#6495ED', '#1E90FF'],
    };

    var grafico = new google.visualization.PieChart(document.getElementById('grafico_AcertoErro_per'))
    grafico.draw(dados, configuracoes);

}



