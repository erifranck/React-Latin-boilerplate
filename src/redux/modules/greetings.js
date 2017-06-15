//constantes para los actions types
const ChangeMessage = "myBoilerplate/greetings/ChangeMessage";

// estado inicial del reducer
const initialState = {
  value: "hola"
}
// reducer exportado por defecto
export default function reducer(state = initialState, action)  {
  switch (action.type) {
    case ChangeMessage:
      return {
        ...state,
        value: action.message
      }
      break;
    default:
      return state
  }
}

// creador de acciones

export function load(message) {
  return {
    type: ChangeMessage,
    message
  }
}
