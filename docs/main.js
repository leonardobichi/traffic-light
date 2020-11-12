var estadoSemaforo = 0

function cambiarSemaforo(){
    console.log(estadoSemaforo)


       switch(estadoSemaforo){
        //rojo
        case 0:
            luzSemaforo ('red', true)
            luzSemaforo ('yellow', false)
            luzSemaforo ('green', false)
        break;
        case 1:
            luzSemaforo ('red', true)
            luzSemaforo ('yellow', true)
            luzSemaforo ('green', false)
        break;  
        case 2:
            luzSemaforo ('red', false)
            luzSemaforo ('yellow', false)
            luzSemaforo ('green', true)
        break;
        case 3:
            luzSemaforo ('red', false)
            luzSemaforo ('yellow', true)
            luzSemaforo ('green', false)
        break;
            default:       
            luzSemaforo ('red', true)
            luzSemaforo ('yellow', false)
            luzSemaforo ('green', false)
            estadoSemaforo = 0
            break;
    } 

    estadoSemaforo ++
    if(estadoSemaforo > 3) estadoSemaforo = 0

}

function luzSemaforo(id,prender){
    var color = 'gray'
    if(prender) color = id
    document.getElementById(id).style.backgroundColor = color
}

function cambiarSemaforoBoton(){
  if(!modoAuto)  cambiarSemaforo()
}

var modoAuto = false
var refTimer
function cambiarAutomatico(){
    modoAuto = !modoAuto
    console.log(modoAuto)

    if(modoAuto){
        refTimer = setInterval(cambiarSemaforo, 2000)
    }else{
        clearInterval(refTimer)
    }

    document.querySelector('h4').innerText = modoAuto? 'Modo automático' : 'Modo manual'
}


luzSemaforo ('red', false)
luzSemaforo ('yellow', false)
luzSemaforo ('green', false)

