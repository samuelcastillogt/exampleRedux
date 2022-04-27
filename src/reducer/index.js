const counterReducer=(state=0, action)=>{
    switch(action.type){
      case "SUMAR":
      return state +1
      case "RESTAR":
        return state -1
        case "RESET":
          return 0
  
        default:
        return state
    }
  
  }
  export {counterReducer}