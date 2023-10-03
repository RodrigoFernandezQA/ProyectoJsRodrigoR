const fecha = document.querySelector('#fecha') //llamamos al HTML por querySelector para trabajar con sus variables.
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const LIST = []


//Funcion agregar tarea
function agregarTarea(tarea, eliminado){
    if (eliminado){return}

    //html en formato str para implementar la estructura 
    //fisica de las nuevas tareas
    const elemento = 
    `<li id="elemento">
    <i class="far fa-circle co"></i>
    <p class="text"> ${tarea}</p>
    <i class="fas fa-trash de" data="eliminado" id="0"></i> 
    </li>`
    //método que inserta el elemento antes del final
    lista.insertAdjacentHTML("beforeend", elemento) 
}

//Agregamos un evento de 'click' al elmento botonEnter,
//al precionar el boton se ejecuta la funcion flecha
botonEnter.addEventListener('click', () =>{
    const tarea = input.value //asignamos a tarea el valor del input
    if (tarea) { //si la tarea tiene algun valor, se ejecuta la funcion
        agregarTarea(tarea, false)
    }

    input.value =''
    LIST.push({ //agregamos a la lista el valor del input actual 
        nombre : tarea,
        eliminado : false
    })
    console.log(LIST)
}) 

//Agregamos un evento de 'click' al elmento lista,
lista.addEventListener('click',function(event){
    const element = event.target //Se obtiene el elemento específico en el que se hizo clic
    const elementData = element.attributes.data.value //Se accede al valor del atributo data 
    
    if(elementData == 'eliminado') {
        tareaEliminada(element)
    }
    //Se utiliza setItem del objeto localStorage para almacenar los datos actualizados de la 
    //lista de tareas (LIST)
    //localStorage.setItem('TODO',JSON.stringify(LIST))
})


function tareaEliminada(element){
    //elimina el elemento padre del elemento element del DOM. Para hacer esto, se accede al 
    //padre del elemento (element.parentNode) y luego se elimina ese padre del DOM utilizando el 
    //método removeChild.
     element.parentNode.parentNode.removeChild(element.parentNode)
     LIST[element].eliminado = true
 }

 // Función para guardar los datos en un archivo JSON

function guardarDatos() {
    const datosJSON = JSON.stringify(LIST);
    
    console.log("Datos guardados:", datosJSON);
  }

guardarDatos()