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
cont tempoObjetivo 1 = new Date("2023-10-05T00;00:00")
cont tempoObjetivo 2 = new Date("2023-12-05T00;00:00")
cont tempoObjetivo 3 = new Date("2023-12-03T00;00:00")
cont tempoObjetivo 4 = new Date("2024-02-01T00;00:00")
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
let dias = Math.floor(horas/24);
segundos % = 60;
minutos % = 60;
horas % = 24;
if (tempoFinal>0) {
    return [dias, horas, minutos, segundos];
} else {
    return [0, 0, 0, 0];
}