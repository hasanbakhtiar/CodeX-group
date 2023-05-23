const blogData = [];

export const blogReducer = (state=blogData,action)=>{
    switch (action.type) {
        
      case "CREATE_BLOG":
        return [...state,action.myblog]
        
        
      case "UPDATE_BLOG":
        return state.map(b=>{
          if (b.id === action.id) {
            return{
              ...b,...action.update
            }
            
          }else{
            return b
          }
        })
  
      case "DELETE_BLOG":
        return state.filter(({id})=>{
          return id !== action.myid
        })
  
     
      
      default:
            return state;
    }
  }