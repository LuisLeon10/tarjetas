document.getElementById('reservacion').addEventListener("change",function(){mesas();});
document.getElementById('mostrar').addEventListener("click", function(){mostrar();});
var numA=0;
let numAdultos0, numAdultos1, numAdultos2, numAdultos3, numAdultos4, numAdultos5;
let numMenores0, numMenores1, numMenores2, numMenores3, numMenores4, numMenores5;
let mesas = function(){
    let nm = document.getElementById("reservacion").value;
    var contenido="";
    for(i=0; i<nm; i++){
        contenido += '<br><h5>Mesa: '+(i+1)+'</h5>'+
        '<h6> Numero de comensales</h6>'+
        '<form name="formularioReservacion'+i+'" action="#">'+
        'Adultos <select id="adultos'+i+'" name="adultos'+i+'" onchange="functionMenores'+i+'()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Adulto</option>'+
        '<option value="2">2 Adultos</option>'+
        '<option value="3">3 Adultos</option>'+
        '<option value="4">4 Adultos</option>'+
        '</select><br><br>'+
        '</form><br>';
    }
    document.getElementById("mesas").innerHTML = contenido;
}
let functionMenores0 = function(){
    numA = document.formularioReservacion0.adultos0.value;
    numAdultos0 = numA;
    let contenido="";
    if(numA==1){
        contenido+='Menores <select id="menores0" name="menores0" onchange="obtMenores0()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '<option value="3">3 Menores</option>'+
        '<option value="4">4 Menores</option>'+
        '</select><br><br>';
    }else if(numA==2){
        contenido+='Menores <select id="menores0" name="menores0" onchange="obtMenores0()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '<option value="3">3 Menores</option>'+
        '</select><br><br>';
    }else if(numA==3){
        contenido+='Menores <select id="menores0" name="menores0" onchange="obtMenores0()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '</select><br><br>';
    }else if(numA==4){
        contenido+='Menores <select id="menores0" name="menores0" onchange="obtMenores0()">'+
        '<option value="0">Ya no se pueden menores</option>'+
        '</select><br><br>';
    }
    document.formularioReservacion0.innerHTML += contenido;
}
let obtMenores0 = function(){
    let numM = document.formularioReservacion0.menores0.value;
    numMenores0 = numM;
    let contenido="";
        for(let i=0;i<numM;i++){
            contenido+='Edad menor '+(i+1)+':<input type="number" name="edad'+i+'" min="0"><br>';
        }
    document.formularioReservacion0.innerHTML += contenido;
}
let functionMenores1 = function(){
    let numA = document.formularioReservacion1.adultos1.value;
    numAdultos1 = numA;
    let contenido="";
    if(numA==1){
        contenido+='Menores <select id="menores1" name="menores1" onchange="obtMenores1()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '<option value="3">3 Menores</option>'+
        '<option value="4">4 Menores</option>'+
        '</select><br><br>';
    }else if(numA==2){
        contenido+='Menores <select id="menores1" name="menores1" onchange="obtMenores1()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '<option value="3">3 Menores</option>'+
        '</select><br><br>';
    }else if(numA==3){
        contenido+='Menores <select id="menores1" name="menores1" onchange="obtMenores1()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '</select><br><br>';
    }else if(numA==4){
        contenido+='Menores <select id="menores1" name="menores1">'+
        '<option value="0">Ya no se pueden menores</option>'+
        '</select><br><br>';
    }
    document.formularioReservacion1.innerHTML += contenido;
}
let obtMenores1 = function(){
    let numM = document.formularioReservacion1.menores1.value;
    numMenores1 = numM;
    let contenido="";
        for(let i=0;i<numM;i++){
            contenido+='Edad menor '+(i+1)+':<input type="number" name="edad'+i+'" min="0"><br>';
        }
    document.formularioReservacion1.innerHTML += contenido;
}
let functionMenores2 = function(){
    let numA = document.formularioReservacion2.adultos2.value;
    numAdultos2 = numA;
    let contenido="";
    if(numA==1){
        contenido+='Menores <select id="menores2" name="menores2" onchange="obtMenores2()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '<option value="3">3 Menores</option>'+
        '<option value="4">4 Menores</option>'+
        '</select><br><br>';
    }else if(numA==2){
        contenido+='Menores <select id="menores2" name="menores2" onchange="obtMenores2()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '<option value="3">3 Menores</option>'+
        '</select><br><br>';
    }else if(numA==3){
        contenido+='Menores <select id="menores2" name="menores2" onchange="obtMenores2()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '</select><br><br>';
    }else if(numA==4){
        contenido+='Menores <select id="menores2" name="menores2">'+
        '<option value="0">Ya no se pueden menores</option>'+
        '</select><br><br>';
    }
    document.formularioReservacion2.innerHTML += contenido;
}
let obtMenores2 = function(){
    let numM = document.formularioReservacion2.menores2.value;
    numMenores2 = numM;
    let contenido="";
        for(let i=0;i<numM;i++){
            contenido+='Edad menor '+(i+1)+':<input type="number" name="edad'+i+'" min="0"><br>';
        }
    document.formularioReservacion2.innerHTML += contenido;
}
let functionMenores3 = function(){
    let numA = document.formularioReservacion3.adultos3.value;
    numAdultos3 = numA;
    let contenido="";
    if(numA==1){
        contenido+='Menores <select id="menores3" name="menores3" onchange="obtMenores3()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '<option value="3">3 Menores</option>'+
        '<option value="4">4 Menores</option>'+
        '</select><br><br>';
    }else if(numA==2){
        contenido+='Menores <select id="menores3" name="menores3" onchange="obtMenores3()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '<option value="3">3 Menores</option>'+
        '</select><br><br>';
    }else if(numA==3){
        contenido+='Menores <select id="menores3" name="menores3" onchange="obtMenores3()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '</select><br><br>';
    }else if(numA==4){
        contenido+='Menores <select id="menores3" name="menores3">'+
        '<option value="0">Ya no se pueden menores</option>'+
        '</select><br><br>';
    }
    document.formularioReservacion3.innerHTML += contenido;
}
let obtMenores3 = function(){
    let numM = document.formularioReservacion3.menores3.value;
    numMenores3 = numM;
    let contenido="";
        for(let i=0;i<numM;i++){
            contenido+='Edad menor '+(i+1)+':<input type="number" name="edad'+i+'" min="0"><br>';
        }
    document.formularioReservacion3.innerHTML += contenido;
}
let functionMenores4 = function(){
    let numA = document.formularioReservacion4.adultos4.value;
    numAdultos4 = numA;
    let contenido="";
    if(numA==1){
        contenido+='Menores <select id="menores4" name="menores4" onchange="obtMenores4()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '<option value="3">3 Menores</option>'+
        '<option value="4">4 Menores</option>'+
        '</select><br><br>';
    }else if(numA==2){
        contenido+='Menores <select id="menores4" name="menores4" onchange="obtMenores4()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '<option value="3">3 Menores</option>'+
        '</select><br><br>';
    }else if(numA==3){
        contenido+='Menores <select id="menores4" name="menores4" onchange="obtMenores4()">'+
        '<option value="0">Seleccione...</option>'+
        '<option value="1">1 Menor</option>'+
        '<option value="2">2 Menores</option>'+
        '</select><br><br>';
    }else if(numA==4){
        contenido+='Menores <select id="menores4" name="menores4">'+
        '<option value="0">Ya no se pueden menores</option>'+
        '</select><br><br>';
    }
    document.formularioReservacion4.innerHTML += contenido;
}
let obtMenores4 = function(){
    let numM = document.formularioReservacion4.menores4.value;
    numMenores4 = numM;
    let contenido="";
        for(let i=0;i<numM;i++){
            contenido+='Edad menor '+(i+1)+':<input type="number" name="edad'+i+'" min="0"><br>';
        }
    document.formularioReservacion4.innerHTML += contenido;
}

let mostrar = function(){
    let nm = document.getElementById("reservacion").value;
    var contenido = "";
    for(let i=0;i<nm;i++){
        contenido+='<br><h5>Mesa: '+(i+1)+'</h5><br>';
        if(i==0){
            contenido += '<p>Adultos = '+numAdultos0+'</p><br>';
            if(numAdultos0==4){
                numMenores0=0;
            }
            contenido += '<p>Menores = '+numMenores0+'</p><br>';
            var edadMenores0 = [];
            for(let y=0; y<numMenores0;y++){
                edadMenores0[y] = document.formularioReservacion0.edad0.value;
                contenido+='Edad menor '+(y+1)+': '+edadMenores0[y]+'<br>';
            }
        }else if(i==1){
            contenido += '<p>Adultos = '+numAdultos1+'</p><br>';
            if(numAdultos1==4){
                numMenores1=0;
            }
            contenido += '<p>Menores = '+numMenores1+'</p><br>';
            var edadMenores1 = [];
            for(let y=0; y<numMenores1;y++){
                edadMenores1[y] = document.formularioReservacion1.edad1.value;
                contenido+='Edad menor '+(y+1)+': '+edadMenores1[y]+'<br>';
            }
        }else if(i==2){
            contenido += '<p>Adultos = '+numAdultos2+'</p><br>';
            if(numAdultos2==4){
                numMenores2=0;
            }
            contenido += '<p>Menores = '+numMenores2+'</p><br>';
            var edadMenores2 = [];
            for(let y=0; y<numMenores2;y++){
                edadMenores2[y] = document.formularioReservacion2.edad2.value;
                contenido+='Edad menor '+(y+1)+': '+edadMenores2[y]+'<br>';
            }
        }else if(i==3){
            contenido += '<p>Adultos = '+numAdultos3+'</p><br>';
            if(numAdultos3==4){
                numMenores3=0;
            }
            contenido += '<p>Menores = '+numMenores3+'</p><br>';
            var edadMenores3 = [];
            for(let y=0; y<numMenores3;y++){
                edadMenores3[y] = document.formularioReservacion3.edad3.value;
                contenido+='Edad menor '+(y+1)+': '+edadMenores3[y]+'<br>';
            }
        }else if(i==4){
            contenido += '<p>Adultos = '+numAdultos4+'</p><br>';
            if(numAdultos4==4){
                numMenores4=0;
            }
            contenido += '<p>Menores = '+numMenores4+'</p><br>';
            var edadMenores4 = [];
            for(let y=0; y<numMenores4;y++){
                edadMenores4[y] = document.formularioReservacion4.edad4.value;
                contenido+='Edad menor '+(y+1)+': '+edadMenores4[y]+'<br>';
            }
        }
    }
    document.getElementById("resultado").innerHTML = contenido;
}