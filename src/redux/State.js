
import ProfilePageReducer from "./reducer/profilePageReducer"
import DialogsReducer from "./reducer/dialogsReducer"
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE'
let store = {
  _state: {
    ProfilePage: {
      posts: [
        { id: 1, post: 'yo kurwa', like: 24 },
        { id: 2, post: ' kurwa', like: 1 }
      ],
      newPostText: 'kurwa',
      i: 2,
    },
    Dialogs: {
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
      newMessageText: 'kurwa',
      i: 2,
    }
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  _callSubscriber() {
  },
  
  //  addPost(Posting) {
  //   this.i++
  //   let newPost = {
  //     id: this.i,
  //     post: Posting,
  //     like: this.i
  //   }
  //   this._state.ProfilePage.posts.push(newPost)
  //   this._callSubscriber(this._state)
  // },
  // updateNewPostChange (newPost){
  //   this._state.ProfilePage.newPostText = newPost
  //   this._callSubscriber(this._state)
  // },
  disputch(action) {
    switch (action.type) {
      case SEND_MESSAGE:
        let text = this._state.newMessageText
        this._state.newMessageText = ''
        this._state.messages.push({ id: this._state.i, message: text })
        return this._state
      case UPDATE_NEW_MESSAGE_CHANGE:
        this._state.newMessageText = action.newMessage
        return this._state
        case ADD_POST:
          this._state.i++
      let newPost = {
        id: this._state.i,
        post: this._state.newPostText,
        like: this._state.i
      }
      this._state.posts.push(newPost)
      return this._state
    case UPDATE_NEW_POST_CHANGE:
      this._state.newPostText = action.newPost
      return this._state;
        default: return this._state

    
    this._callSubscriber(this._state)

  }

}

}
  
export const addTextActionCreator = () => {
  return(
    {type: 'ADD-POST'}
  )
  }
export const  OnPostChangeActionCreator = (text) =>{
      return(
        {type: 'UPDATE-NEW-POST-CHANGE', newPost:text}
      )
  }
export const addMessageActionCreator = () => {
  return(
    {type: 'SEND-MESSAGE'}
  )
  }
export const  OnMessageChangeActionCreator = (body) =>{
    return(
      {type: 'UPDATE-NEW-MESSAGE-CHANGE', newMessage: body}
    )
  }

export default store