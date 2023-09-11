
let tareas = [];

function agregarTarea() {
  let tarea = prompt(`Ingrese la nueva tarea:`);
  tareas.push(tarea);
  console.log(`Tarea agregada correctamente.`);
}


let flag = true

while (flag) {
    agregarTarea()
    flag = confirm(`¿Quieres seguir agregando tareas?`)
    if (!flag) {
        let tareasMostrar = tareas.join(`\n`)
        alert(`Los tareas pendientes son: \n${tareasMostrar}`);
        
        eliminar = confirm(`¿Completo alguna tarea?`);
        if (eliminar == true) {
            tareasMostrar = tareas.shift();
            alert(`Los tareas actuales son: \n${tareasMostrar}`);
          } else {
              alert(`Tiene tareas pendientes de realizar`);
          }

    }
}

