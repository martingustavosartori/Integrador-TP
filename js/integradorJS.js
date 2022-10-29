let valorTicket = 200
let estudiantes = 80
let trainee = 50
let junior = 15

function totalPagar(x) {
    let cant=document.getElementById("cantidad").value    
    let categoria=document.getElementById("categoria").value
    console.log("Cantidad = " + cant)
    console.log("categoria = " + categoria)

    let total=0

    if (categoria==="Seleccionar") {
        window.alert("Debe seleccionar una categoría")
    }else if(cant==""){
        window.alert("Debe ingresar la cantidad de tickets")
    }else if(cant<=-1){
        window.alert("Cantidad ingresada no válida")
    } else if (categoria=="Estudiantes") {
        total=(cant*valorTicket)*.2 //80%
    } else if(categoria=="Trainee"){
        total=cant*valorTicket*.5 //50%
    } else if(categoria=="Junior"){
        total=cant*valorTicket*.85 //15%
    } else{
        total = 0
    }
    document.getElementById("totalPagar").innerHTML=`Total a pagar: $${total}`
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
  }