import { getUserData } from "./authReducer";
let INITILAIZED_SUCCESS = 'app/INITILAIZED-SUCCESS'
let initialState = {
  initialized:false
  };
  
  const appReducer = (state = initialState, action) => {
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
  export const initilize = () => ({ type: INITILAIZED_SUCCESS, });
  
  export const getInitilize = () => (dispatch)=>{
    let promise = [dispatch(getUserData())]
      Promise.all([promise]).then(()=>{dispatch(initilize())})
    }

  
  export default appReducer;
  