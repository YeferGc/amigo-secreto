let listaDeNombres = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    listaDeNombres.push(nombreAmigo);
    console.log(listaDeNombres);
    limpiar();
    
}

function limpiar(){ //Limpia la caja para no tener que borrar el nombre repetidamente
    let limpiarCaja = document.getElementById('amigo');
    limpiarCaja.value = '';

}