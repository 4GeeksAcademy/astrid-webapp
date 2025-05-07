export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: []
  }
}
// 1. Definición y exportación de la función reducer llamada 'storeReducer'.
//    Esta función tomará el estado actual ('store') y una acción ('action') como argumentos.
//    El parámetro 'action' tiene un valor por defecto de un objeto vacío ({}),
//    lo que significa que si no se proporciona una acción al llamar a la función,
//    se utilizará un objeto vacío.
export default function storeReducer(store, action = {}) {
  // 2. Inicio de una estructura de control 'switch' que evalúa el tipo de acción ('action.type').
  //    El 'switch' permite ejecutar diferentes bloques de código basados en el valor de 'action.type'.
  switch (action.type) {
    // 3. Primer 'case': Se ejecuta si el tipo de la acción es 'add_task'.
    case 'add_task':

      // 4. Desestructuración del 'payload' de la acción. Se extraen las propiedades 'id' y 'color'.
      //    Se asume que la acción despachada para 'add_task' tendrá una propiedad 'payload'
      //    que es un objeto conteniendo estas dos propiedades.
      const { id, color } = action.payload

      // 5. Retorno de un nuevo objeto de estado. Es importante no mutar el estado directamente,
      //    por lo que se crea un nuevo objeto utilizando el spread operator ('...store').
      return {
        // 6. Se copian todas las propiedades del estado actual ('store') al nuevo objeto de estado.
        ...store,
        // 7. Se actualiza la propiedad 'todos' del estado. Se utiliza el método 'map' para iterar
        //    sobre el array 'store.todos' y crear un nuevo array.
        todos: store.todos.map((todo) => (
          // 8. Para cada 'todo' en el array:
          //    - Se verifica si el 'id' del 'todo' coincide con el 'id' extraído del 'payload'.
          todo.id === id
            // 9. Si los IDs coinciden, se crea un nuevo objeto 'todo' utilizando el spread operator
            //    para copiar las propiedades existentes y se actualiza la propiedad 'background'
            //    con el 'color' proporcionado en el 'payload'.
            ? { ...todo, background: color }
            // 10. Si los IDs no coinciden, se devuelve el objeto 'todo' sin modificaciones.
            : todo
        ))
      };

    // 11. Segundo 'case': Se ejecuta si el tipo de la acción es 'set_personajes'.
    case "set_personajes":
      // 12. Desestructuración del 'payload' de la acción. Se extrae la propiedad 'personaje'.
      //     Se asume que la acción despachada para 'set_personajes' tendrá una propiedad
      //     'payload' que es un objeto conteniendo la propiedad 'personaje'.
      const { personaje } = action.payload
      // 13. Retorno de un nuevo objeto de estado. Nuevamente, se evita la mutación directa.
      return {
        // 14. Se copian todas las propiedades del estado actual ('store').
        ...store,
        // 15. Se actualiza la propiedad 'characters' del estado con el valor de 'personaje'
        //     proporcionado en el 'payload'.
        characters: personaje
      }

    // 16. 'default' case: Se ejecuta si el tipo de la acción no coincide con ningún 'case' anterior.
    default:
      // 17. Se lanza un error. Esto es una buena práctica para indicar que se ha despachado
      //     una acción con un tipo desconocido, lo que podría indicar un problema en la lógica
      //     de la aplicación.
      throw Error('Unknown action.');
  }
}
