const SEND_MESSAGE ='dialogs/SEND-MESSAGE'

type ArrayMessageType ={
  id: number,
  message: string
}
type ArrayDialogsType ={
  id: number,
  name: string
}

let initialState = {
    messages: [
      { id: 1, message: 'Yo' },
      { id: 2, message: "Yo" }
    ] as Array<ArrayMessageType>,
    dialogs: [
      { id: 1, name: 'Mama' },
      { id: 2, name: 'Papa' },
      { id: 3, name: 'Siostra' },
      { id: 4, name: 'Brat' }
    ] as Array<ArrayDialogsType>,
    i: 2,
  }
  export type InitialStateType = typeof initialState

const DialogsReducer = (state = initialState, action: any): InitialStateType  => {
  
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
type SendMessage ={
  type: typeof SEND_MESSAGE,
  newMessage: string
}
export const sendMessage = (newMessage: string): SendMessage => {
  return(
    {type: SEND_MESSAGE, newMessage}
  )
  }
export default DialogsReducer