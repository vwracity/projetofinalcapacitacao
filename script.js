let contador = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 6000)

function nextImage(){
    contador++;
    if(contador>3){
        contador = 1;
    }

    document.getElementById("radio"+contador).checked = true;
}

