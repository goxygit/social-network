import { getUserData } from "./authReducer"
let INITILAIZED_SUCCESS = 'app/INITILAIZED-SUCCESS'

type InitialStateType = typeof initialState

let initialState = {
  initialized:false
  };

type InitializedSuccessActionType ={
  type: typeof INITILAIZED_SUCCESS
}
  const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
      case INITILAIZED_SUCCESS:
        return {
          ...state,
          initialized:true
        };
      default:
        return state;
    }
  };
  export const initilize = (): InitializedSuccessActionType => ({ type: INITILAIZED_SUCCESS, });
  
  export const getInitilize = () => (dispatch: any)=>{
    let promise = [dispatch(getUserData())]
      Promise.all([promise]).then(()=>{dispatch(initilize())})
    }

  
  export default appReducer;
  