document.querySelectorAll(".botao")
document.querySelectorAll(".aba-conteudo")
for (let i=0; <botoes.length;i++){
    botoes[i].onclick = function (){
        for (letj=0;j <botoes.length;j++){
            botoes[j].clasList.remove("ativo")
            textos[j].clasList.remove("ativo")
        }
        botoes[i].clasList.add("ativo")
        textos[i].clasList.add("ativo")
    }
}