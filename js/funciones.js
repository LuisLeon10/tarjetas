function ejecutarCajas(){
    var numeroDeCajas = parseInt(document.getElementById("numero").value); 
    var colorDeCaja = document.getElementById("color").value; 
    var bordeDeCaja = document.getElementById("borde").value; 
    var caja = "";

    for(var i = 0; i < numeroDeCajas; i++)
    {
        caja += "<article style='width: 50px; height: 50px; margin: 10px; paddin: 0px; background-color:"+colorDeCaja+"; border: 5px "+bordeDeCaja+" #000; justify-content: center;'></article>";
    }

    document.getElementById("res").innerHTML=caja;
}
function encuesta(){
    let dec1 = document.getElementById("decision1").value;
    let dec2 = document.getElementById("decision2").value;
    let dec3 = document.getElementById("decision3").value;
    let dec4 = document.getElementById("decision4").value;
    let dec5 = document.getElementById("decision5").value;
    alert(dec1);
    var resultado = "";
    resultado+="<label><b>Pregunta 1: ¿Qué es un objeto en Javascript?</b></label><br>";
    resultado+="R= "+dec1+"<br>";
    resultado+="<label><b>Pregunta 2: ¿Cómo se define un objeto en JavaScript?</b></label><br>";
    resultado+="R= "+dec2+"<br>";
    resultado+="<label><b>Pregunta 3: ¿Cómo se separan los miembros que constituyen al objeto?</b></label><br>";
    resultado+="R= "+dec3+"<br>";
    resultado+="<label><b>Pregunta 4: ¿Para que sirve el uso del This en el tema?</b></label><br>";
    resultado+="R= "+dec4+"<br>";
    resultado+="<label><b>Pregunta 5: ¿Qué facilidad te otorga los objetos?</b></label><br>";
    resultado+="R= "+dec5+"<br>";
    var titulo = "<h2>Los resultados seleccionados por el usuario son:</h2><br>"
    document.getElementById("resultado").innerHTML = titulo;
    document.getElementById("resultado").innerHTML += resultado;
}