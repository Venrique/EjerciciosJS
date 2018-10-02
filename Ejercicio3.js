var journal = [];

function agregar(evento,accidente){
    let dia = {
        eventos: evento,
        accidente: accidente
    }
    journal.push(dia);
}