/*google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var gabarito = []
var acertos = []
var erros = []

function teste(){
    alert("foiiiiiiii!")
}

function drawChart() {

     Grafico de acertos e erros em porcentagem. 

    var dados = new google.visualization.DataTable();
    dados.addColumn('string', 'Acertos e erros');
    dados.addColumn('number', 'Quantidade de acertos e erros');
    dados.addRows([
        ['Erros', 11],
        ['Acertos', 24]
    ]);

    var configuracoes = {
        'title':'Acertos e erros em porcentagem', 
        'pieHole': 0.4,
        'colors': ['#6495ED', '#1E90FF'],
    };

    var grafico = new google.visualization.PieChart(document.getElementById('grafico_AcertoErro_per'))
    grafico.draw(dados, configuracoes);

}*/
