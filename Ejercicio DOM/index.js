// se adiciona un "event listener " paera cuando se cargue todo el contenido de la pagina:

document.addEventListener("DOMContentLoaded",  () =>  {

    // se obtiene referencia a la lista dinámica:
    const taskList = document.getElementById("taskList");

    // referencia al elemento seleccionado de la lista:
    let selectedTask = null;


    // se adiciona event listener a cada botón:
    document.getElementById("addTask").addEventListener(  "click", ()=>{
        const textoTarea = prompt("Ingrese el nombre de la tarea:");
        if(textoTarea)
        {
            
            //crea un nuevo elemento HTML de tipo "li":
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea;
            taskList.appendChild(nuevaTarea);

            //se adiciona el handler de seleccion a la nueva tarea creada:
            selectedTaskHandler(nuevaTarea);
        }
    }  );

    document.getElementById("deleteTask").addEventListener( "click", ()=>{
        if(selectedTask)
        {
            taskList.removeChild(selectedTask);
            selectedTask = null;
        }
        else{
            alert("No has seleccionado ninguna tarea para eliminar");
        }
    });

    document.getElementById("editTask").addEventListener("click", () =>{
        if(selectedTask)
        {
            const nuevoTexto = prompt("Modificar la tarea",selectedTask.textContent);
            if(nuevoTexto)
            {
                selectedTask.textContent = nuevoTexto;
            }
        }
        else{
            alert("Seleccione una tarea para modificar");
        }
    });




    function selectedTaskHandler(task)
    {
        task.addEventListener("click", () => {
            selectedTask = task;
        });
    }

    });             