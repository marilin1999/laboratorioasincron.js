const listaDeTareas = [];

// Función para crear una tarea
function crearTarea(tarea) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      listaDeTareas.push(tarea);
      resolve("Tarea creada con éxito");
    }, 1000); 
  });
}

// Función para eliminar una tarea
function eliminarTarea(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index >= 0 && index < listaDeTareas.length) {
        const tareaEliminada = listaDeTareas.splice(index, 1);
        resolve(`Tarea "${tareaEliminada}" eliminada con éxito`);
      } else {
        reject("Índice de tarea no válido");
      }
    }, 1000); 
  });
}

// Función para marcar una tarea como completada
function completarTarea(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index >= 0 && index < listaDeTareas.length) {
        listaDeTareas[index] = `[COMPLETADA] ${listaDeTareas[index]}`;
        resolve(`Tarea marcada como completada`);
      } else {
        reject("Índice de tarea no válido");
      }
    }, 1000); 
  });
}

// Ejemplo de uso de las funciones con async/await
async function ejecutarTareas() {
  try {
    const crearMensaje = await crearTarea("Hacer compras");
    console.log(crearMensaje);

    const eliminarMensaje = await eliminarTarea(0);
    console.log(eliminarMensaje);

    const completarMensaje = await completarTarea(0);
    console.log(completarMensaje);
  } catch (error) {
    console.error(error);
  }
}

ejecutarTareas();






