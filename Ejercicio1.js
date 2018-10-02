var recordatorios = [];

function recordatorio(re){
    recordatorios.push(re);
}

function recordatorioUrgente(re){
    recordatorios.unshift(re);
}

function recordar(){
    console.log(recordatorios.shift());
}