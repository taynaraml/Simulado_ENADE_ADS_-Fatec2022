function closeButton(){
    var btn = document.getElementsByClassName("close_pop")
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var popAnulada = document.getElementById ("pop_anulada");


    if (btn [0]) {
        popErrado.style.display = "none";
    }
    if (btn[1]) {
        popCerto.style.display = "none";
    }
    if (btn[0]) {
        popAnulada.style.display = "none";
    }
}

function Q1A() {
    var opC = document.getElementById("opC");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opC.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "A diferença da contribuição do Reino Unido em relação a recebido do bloco econômico foi 38,94%."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: "A diferença da contribuição do Reino Unido em relação a recebido do bloco econômico foi 38,94%."'
        popErrado.style.display = "block";
    }
}
function Q2A() {
    var opC = document.getElementById("opC");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opC.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " I e II, apenas."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " I e II, apenas."'
        popErrado.style.display = "block";
    }
}

function Q3A() {
    var opB = document.getElementById("opB");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opB.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "  III, apenas."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: "  III, apenas."'
        popErrado.style.display = "block";
    }
}

function Q4A() {
    var opB = document.getElementById("opB");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opB.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " fragmentação e o excesso de informação, que evidenciam a opacidade do mundo contemporâneo,  cada vez mais impregnado de imagens e informações superficiais."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " fragmentação e o excesso de informação, que evidenciam a opacidade do mundo contemporâneo,  cada vez mais impregnado de imagens e informações superficiais."'
        popErrado.style.display = "block";
    }
}

function Q5A() {
    var opC = document.getElementById("opC");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opC.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " Os hidrogéis são usados em culturas agrícolas e florestais e em diferentes tipos de solos."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " Os hidrogéis são usados em culturas agrícolas e florestais e em diferentes tipos de solos."'
        popErrado.style.display = "block";
    }
}
function Q6A() {
    var opE = document.getElementById("opE");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opE.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " a crescente onda de xenofobia que vem se destacando no Brasil evidencia que o preconceito e a rejeição por parte dos brasileiros em relação aos imigrantes haitianos é pautada pela discriminação social e pelo racismo."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " a crescente onda de xenofobia que vem se destacando no Brasil evidencia que o preconceito e a rejeição por parte dos brasileiros em relação aos  imigrantes haitianos é pautada pela discriminação social e pelo racismo."'
        popErrado.style.display = "block";
    }
}
function Q7A() {
    var opA = document.getElementById("opA");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opA.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " A produção das panelas de barro abrange interrelações com a natureza local, de onde se extrai a matéria-prima  indispensável à confecção das peças ceramistas."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: "A produção das panelas de barro abrange interrelações com a natureza local, de onde se extrai a matéria-prima  indispensável à confecção das peças ceramistas."'
        popErrado.style.display = "block";
    }
}
function Q8A() {
    var opD = document.getElementById("opD");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opD.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "  I e III, apenas. "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " I e III, apenas. "'
        popErrado.style.display = "block";
    }
}
function Q9A() {
    var opB = document.getElementById("opB");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opB.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " I, II e V. "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " I, II e V. "'
        popErrado.style.display = "block";
    }
}
function Q10A() {
    var opC = document.getElementById("opC");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opC.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "  ~p + q * r."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " ~p + q * r. "'
        popErrado.style.display = "block";
    }
}

function Q11A() {
    var opC = document.getElementById("opC");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opC.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " II e IV."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " II e IV. "'
        popErrado.style.display = "block";
    }
}
function Q12A() {
    var opD = document.getElementById("opD");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opD.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " R2, R4 e R5."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: "R2, R4 e R5. "'
        popErrado.style.display = "block";
    }
}
function Q13A() {
    var opC = document.getElementById("opC");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opC.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " A asserção I é uma proposição verdadeira, e a lI é uma proposição falsa. "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é:" A asserção I é uma proposição verdadeira, e a lI é uma proposição falsa. "';
        popErrado.style.display = "block";
    }
}
function Q14A() {
    var opC = document.getElementById("opC");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opC.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "II e III.  "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " II e III. "'
        popErrado.style.display = "block";
    }
}

function Q16A() {
    var opA = document.getElementById("opA");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opA.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "II, apenas.  "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " II, apenas."'
        popErrado.style.display = "block";
    }
}
function Q17A() {
    var opD = document.getElementById("opD");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opD.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "I, II, IV e V.  "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " I, II, IV e V."'
        popErrado.style.display = "block";
    }
}
function Q18A() {
    var opA = document.getElementById("opA");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opA.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "Pesquisa na web, jogos on-line, E-Commerce e o banco de dados das agências bancárias."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " Pesquisa na web, jogos on-line, E-Commerce e o banco de dados das agências bancárias."'
        popErrado.style.display = "block";
    }
}
function Q19A() {
    var opC = document.getElementById("opC");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opC.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "multiprogramação.  "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " multiprogramação."'
        popErrado.style.display = "block";
    }
}
function Q20A() {
    var opE = document.getElementById("opE");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opE.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " a da imagem que se encontra na alternativa E"';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: "  a da imagem que se encontra na alternativa E"'
        popErrado.style.display = "block";
    }
}
function Q21A() {
    var opD = document.getElementById("opD");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opD.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " I e III, apenas."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: "  I e III, apenas."'
        popErrado.style.display = "block";
    }
}
function Q22A() {
    var opB = document.getElementById("opB");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opB.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "  l e lll.   "';
        popCerto.style.display = "block"
    }
    else {
                        
        respostaErrada.innerHTML = 'A resposta correta é: "l e lll. "'
        popErrado.style.display = "block";
    }
}
function Q23A() {
    var opB = document.getElementById("opB");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opB.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "  I, III e V.  "';
        popCerto.style.display = "block"
    }
    else {
                        
        respostaErrada.innerHTML = 'A resposta correta é: "I, III e V. "'
        popErrado.style.display = "block";
    }
}
function Q20A() {
    var opE = document.getElementById("opE");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opE.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " a da imagem que se encontra na alternativa E"';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: "  a da imagem que se encontra na alternativa E"'
        popErrado.style.display = "block";
    }
}function Q20A() {
    var opE = document.getElementById("opE");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opE.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " a da imagem que se encontra na alternativa E"';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: "  a da imagem que se encontra na alternativa E"'
        popErrado.style.display = "block";
    }
}function Q24A() {
    var opE = document.getElementById("opE");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opE.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " I, II e III."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: "  I, II e III."'
        popErrado.style.display = "block";
    }
}
function Q25A() {
    var opA = document.getElementById("opA");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opA.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "void preorder (noArvore *raiz) { if (raiz != NULL) {cout << raiz->dado << “  “; preorder (raiz->esquerda); preorder (raiz->direita); }} "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é:  "void preorder (noArvore *raiz) { if (raiz != NULL) {cout << raiz->dado << “  “; preorder (raiz->esquerda); preorder (raiz->direita); }} "'
        popErrado.style.display = "block";
    }
}
function Q26A() {
    var opA = document.getElementById("opA");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opA.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "I, apenas. "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é:  "I, apenas. "'
        popErrado.style.display = "block";
    }
}
function Q27A() {
    var opD = document.getElementById("opD");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opD.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " Na classe Simulador Boeing 757, os métodos setVoar e setPousar são os responsáveis por aplicar, respectivamente, as saídas "Voar durante o dia"  e "Pousar durante o dia" para as saídas "Voar durante a noite" e "Pousar durante a noite".';          
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " Na classe Simulador Boeing 757, os métodos setVoar e setPousar são os responsáveis por aplicar, respectivamente, as saídas "Voar durante o dia"  e "Pousar durante o dia" para as saídas "Voar durante a noite" e "Pousar durante a noite".';
        popErrado.style.display = "block";
    }
}
function Q28A() {
    var opE = document.getElementById("opE");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opE.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " I, II e III e IV."';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: "  I, II e III e IV."'
        popErrado.style.display = "block";
    }
}
function Q29A() {
    var opD = document.getElementById("opD");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opD.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "  A condição 1 do programa e as expressões 1 e 2, que representam o mesmo subconjunto, são equivalentes."';          
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " A condição 1 do programa e as expressões 1 e 2, que representam o mesmo subconjunto, são equivalentes."';
        popErrado.style.display = "block";
    }
}
function Q30A() {
    var opA = document.getElementById("opA");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opA.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " II, apenas. "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é:  " II, apenas. "'
        popErrado.style.display = "block";
    }
}
function Q31A() {
    var opB = document.getElementById("opB");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opB.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " l e IV. "';
        popCerto.style.display = "block"
    }
    else {
                        
        respostaErrada.innerHTML = 'A resposta correta é: " l e IV. "'
        popErrado.style.display = "block";
    }
}
function Q32A() {
    var opC = document.getElementById("opC");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opC.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: "SELECT c.nome, p.nome, SUM(v.votos) FROM Partido p, Candidato c, Votacao v WHERE c.numero = p.numero and v.partido = c.numero GROUP BY c.none, p.nome "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " SELECT c.nome, p.nome, SUM(v.votos) FROM Partido p, Candidato c, Votacao v WHERE c.numero = p.numero and v.partido = c.numero GROUP BY c.none, p.nome "';
        popErrado.style.display = "block";
    }
}
function Q33A() {
    var opD = document.getElementById("opD");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opD.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " Linha 05; vetor [j + 1]  <- vetor [j] "';          
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " Linha 05; vetor [j + 1]  <- vetor [j] "';
        popErrado.style.display = "block";
    }
}
function Q34A() {
    var opB = document.getElementById("opB");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opB.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " I e IV. "';
        popCerto.style.display = "block"
    }
    else {
                        
        respostaErrada.innerHTML = 'A resposta correta é: " I e IV. "'
        popErrado.style.display = "block";
    }
}
function Q35A() {
    var opC = document.getElementById("opC");
    var popCerto = document.getElementById ("pop_certo");
    var popErrado = document.getElementById ("pop_errado");
    var respostaCorreta = document.getElementById ("correta");
    var respostaErrada = document.getElementById ("errada");

    if (opC.checked==true) {
        respostaCorreta.innerHTML= 'A resposta é: " acessibilidade, pois a possibilidade de acesso à página por pessoas com deficiência visual, para que interajam com os conteúdos, oferece condições de igualdade às pessoas na interação com o sistema web. "';
        popCerto.style.display = "block"
    }
    else {
        respostaErrada.innerHTML = 'A resposta correta é: " acessibilidade, pois a possibilidade de acesso à página por pessoas com deficiência visual, para que interajam com os conteúdos, oferece condições de igualdade às pessoas na interação com o sistema web. "';
        popErrado.style.display = "block";
    }
}
/* OLHAR A O GABARITO DA QUESTÃO E COPIAR DE ALGUMA QUE FOR IGUAL, APENAS MUDAR O NUMERO DA QUESTÃO E A RESPOSTA CERTA DENTRO DAS ASPAS (A RESPOSTA TEM QUE ESTAR EM UMA LINHA SÓ SE NÃO BUGA ) */