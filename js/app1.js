let btVitoriaCruzeiro = document.querySelector
("#vitoria-cruzeiro");

btVitoriaCruzeiro.oclick = () => {
    console.log(CalcurarPonto("Vitória"));
};


let btVitoriaFlamnengo = document.querySelector
("#Vitoria-Flamnego");

btVitoriaframengo.oclick = () => {
    console.log(CalcularPonto("Vitória"));
}

function CalcularPonto(resultado){
    if(resultado == "vitória"){
        return 3;
    }else if(resultado == "empate"){
        return 1;
    }else{
        return 0;
    }
}
function AtualizarTabelaPontos(time){
    if(time == "cruzeiro"){
        document.querySelector
    }
}