const SEND_MESSAGE ='dialogs/SEND-MESSAGE'
let initialState = {
  
    messages: [
      { id: 1, message: 'Yo' },
      { id: 2, message: "Yo" }
    ],
    dialogs: [
      { id: 1, name: 'Mama' },
      { id: 2, name: 'Papa' },
      { id: 3, name: 'Siostra' },
      { id: 4, name: 'Brat' }
    ],
    i: 2,
  }


const DialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE:
      let text = action.newMessage
      return{
        ...state,
        messages:[...state.messages, { id: state.i, message: text }]
      }
      default: return state

  }

}
export const sendMessage = (newMessage) => {
  return(
    {type: SEND_MESSAGE, newMessage}
  )
  }
export default DialogsReducer