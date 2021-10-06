var tema, foto, musica;
var seleccionTema = function(temaSeleccionado){
    tema = temaSeleccionado;
    if(temaSeleccionado=="temaProgramador"){
        document.getElementById("imagenes-programador").style.display = "block";
        document.getElementById("imagenes-navidad").style.display = "none";
        document.getElementById("imagenes-independencia").style.display = "none";
    }else if(temaSeleccionado=="temaNavidad"){
        document.getElementById("imagenes-programador").style.display = "none";
        document.getElementById("imagenes-navidad").style.display = "block";
        document.getElementById("imagenes-independencia").style.display = "none";
    }else if(temaSeleccionado=="temaIndependencia"){
        document.getElementById("imagenes-programador").style.display = "none";
        document.getElementById("imagenes-navidad").style.display = "none";
        document.getElementById("imagenes-independencia").style.display = "block";
    }
}
var fotografias = function(nombreFoto){
    foto = nombreFoto;
    if(nombreFoto=="navidad1"){
        document.getElementById(nombreFoto).style.border="2px solid #343A40";
        document.getElementById("navidad2").style.border="none";
        document.getElementById("navidad3").style.border="none";
    }else if(nombreFoto=="navidad2"){
        document.getElementById(nombreFoto).style.border="2px solid #343A40";
        document.getElementById("navidad1").style.border="none";
        document.getElementById("navidad3").style.border="none";
    }else if(nombreFoto=="navidad3"){
        document.getElementById(nombreFoto).style.border="2px solid #343A40";
        document.getElementById("navidad1").style.border="none";
        document.getElementById("navidad2").style.border="none";
    }else if(nombreFoto=="programador1"){
        document.getElementById(nombreFoto).style.border="2px solid #343A40";
        document.getElementById("programador2").style.border="none";
        document.getElementById("programador3").style.border="none";
    }else if(nombreFoto=="programador2"){
        document.getElementById(nombreFoto).style.border="2px solid #343A40";
        document.getElementById("programador1").style.border="none";
        document.getElementById("programador3").style.border="none";
    }else if(nombreFoto=="programador3"){
        document.getElementById(nombreFoto).style.border="2px solid #343A40";
        document.getElementById("independencia1").style.border="none";
        document.getElementById("independencia2").style.border="none";
    }else if(nombreFoto=="independencia1"){
        document.getElementById(nombreFoto).style.border="2px solid #343A40";
        document.getElementById("independencia2").style.border="none";
        document.getElementById("independencia3").style.border="none";
    }else if(nombreFoto=="independencia2"){
        document.getElementById(nombreFoto).style.border="2px solid #343A40";
        document.getElementById("independencia1").style.border="none";
        document.getElementById("independencia3").style.border="none";
    }else if(nombreFoto=="independencia3"){
        document.getElementById(nombreFoto).style.border="2px solid #343A40";
        document.getElementById("independencia1").style.border="none";
        document.getElementById("independencia2").style.border="none";
    }
    
    document.getElementById("foto").src="img/"+nombreFoto+".jpg";
}
var tarjeta = function(){
    var fondo = document.getElementById("barraDeColor").value;
    var imagen = document.getElementById("foto").getAttribute("src");
    document.getElementById("fondo-tarjeta").style.backgroundColor = fondo;
    document.getElementById("imagen-tarjeta").style = "background-image: url(./"+imagen+");";
    document.getElementById("imagen-tarjeta").style.backgroundSize = "cover";

    var titulo = document.getElementById("titulo-tarjeta").value;
    document.getElementById("tituloFinal-tarjeta").innerHTML = titulo;
    var subtitulo = document.getElementById("subtitulo-tarjeta").value;
    document.getElementById("subtituloFinal-tarjeta").innerHTML = subtitulo;
    var autor = document.getElementById("persona-tarjeta").value;
    document.getElementById("autorFinal-tarjeta").innerHTML = autor;
    var cuerpo = document.getElementById("textcuerpo-tarjeta").value;
    document.getElementById("cuerpoFinal-tarjeta").innerHTML = cuerpo;
    var persona = document.getElementById("persona-dirigida").value;
    document.getElementById("personaDirigidaFinal-tarjeta").innerHTML = persona;

    
    if(tema=="temaProgramador"){
        document.getElementById("tituloFinal-tarjeta").style = "font-family: Arial, Helvetica, sans-serif; font-style: normal; font-variant: normal; color: #ffffff;";
        document.getElementById("subtituloFinal-tarjeta").style = "font-family: Arial, Helvetica, sans-serif; font-style: normal; font-variant: normal; color: #ffffff;";
        document.getElementById("autorFinal-tarjeta").style = "font-family: Arial, Helvetica, sans-serif; font-style: normal; font-variant: normal; color: #ffffff;";
        document.getElementById("cuerpoFinal-tarjeta").style = "font-family: Arial, Helvetica, sans-serif; font-style: normal; font-variant: normal; color: #ffffff;";
        document.getElementById("personaDirigidaFinal-tarjeta").style = "font-family: Arial, Helvetica, sans-serif; font-style: normal; font-variant: normal; color: #ffffff;";
        musica = new Audio('sounds/programador.mp3');
        musica.play();
    }else if(tema=="temaNavidad"){
        if(foto=="navidad3"){
            document.getElementById("tituloFinal-tarjeta").style = "font-family: Mountains of Christmas; font-style: normal; font-variant: normal; color: #FDFEFE;";
            document.getElementById("subtituloFinal-tarjeta").style = "font-family: Mountains of Christmas; font-style: normal; font-variant: normal; color: #FDFEFE;";
            document.getElementById("autorFinal-tarjeta").style = "font-family: Mountains of Christmas; font-style: normal; font-variant: normal; color: #FDFEFE;" ;
            document.getElementById("cuerpoFinal-tarjeta").style = "font-family: Mountains of Christmas; font-style: normal; font-variant: normal; color: #FDFEFE;" ;
            document.getElementById("personaDirigidaFinal-tarjeta").style = "font-family: Mountains of Christmas; font-style: normal; font-variant: normal; color: #FDFEFE;";
        }else{
            document.getElementById("tituloFinal-tarjeta").style = "font-family: Mountains of Christmas; font-style: normal; font-variant: normal; color: #212F3D;";
            document.getElementById("subtituloFinal-tarjeta").style = "font-family: Mountains of Christmas; font-style: normal; font-variant: normal; color: #212F3D;";
            document.getElementById("autorFinal-tarjeta").style = "font-family: Mountains of Christmas; font-style: normal; font-variant: normal; color: #212F3D;" ;
            document.getElementById("cuerpoFinal-tarjeta").style = "font-family: Mountains of Christmas; font-style: normal; font-variant: normal; color: #212F3D;" ;
            document.getElementById("personaDirigidaFinal-tarjeta").style = "font-family: Mountains of Christmas; font-style: normal; font-variant: normal; color: #212F3D;";
        }
        musica = new Audio('sounds/navidad.mp3');
        musica.play();
    }else if(tema=="temaIndependencia"){
        if(foto == "independencia1"){
            document.getElementById("tituloFinal-tarjeta").style = "font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif; font-style: normal; font-variant: normal; color: #FDFEFE;";
            document.getElementById("subtituloFinal-tarjeta").style = "font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif; font-style: normal; font-variant: normal; color: #FDFEFE;";
            document.getElementById("autorFinal-tarjeta").style = "font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif; font-style: normal; font-variant: normal; color: #FDFEFE;";
            document.getElementById("cuerpoFinal-tarjeta").style = "font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif; font-style: normal; font-variant: normal; color: #FDFEFE;";
            document.getElementById("personaDirigidaFinal-tarjeta").style = "font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif; font-style: normal; font-variant: normal; color: #FDFEFE;";
        }else {
            document.getElementById("tituloFinal-tarjeta").style = "font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif; font-style: normal; font-variant: normal; color: #000000;";
            document.getElementById("subtituloFinal-tarjeta").style = "font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif; font-style: normal; font-variant: normal; color: #000000;";
            document.getElementById("autorFinal-tarjeta").style = "font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif; font-style: normal; font-variant: normal; color: #000000;";
            document.getElementById("cuerpoFinal-tarjeta").style = "font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif; font-style: normal; font-variant: normal; color: #000000;";
            document.getElementById("personaDirigidaFinal-tarjeta").style = "font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif; font-style: normal; font-variant: normal; color: #000000;";
        }
        musica = new Audio('sounds/independencia.mp3');
        musica.play();
    }
    document.getElementById("musicaBtn").style = "display: block;";
}
let pausar = function(){
    musica.pause();
}