function mostrar(id) {
    let midiv = document.getElementById(id);
    midiv.animationduration = "2s";
    if (midiv.style.display == 'none'){

        midiv.style.display = 'block';
        midiv.style.width="auto";
        /*div.style.left="0px";*/
    }else{
        midiv.style.display = 'none';
        midiv.style.width="auto";
    }
}

function cerrar(id) {
    let midiv = document.getElementById(id);
    midiv.style.width="0px";
    midiv.style.display = 'none';
}

