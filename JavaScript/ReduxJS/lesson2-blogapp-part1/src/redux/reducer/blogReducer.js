const blogData = [];

export const blogReducer = (state=blogData,action)=>{
    switch (action.type) {
        
      case "CREATE_BLOG":
        return [...state,action.myblog]
        
        
      case "UPDATE_BLOG":
        return 'updated blog'
  
      case "DELETE_BLOG":
        return 'deleted blog'
  
     
      
      default:
            return state;
    }
  }