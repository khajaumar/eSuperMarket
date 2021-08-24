export const productReducer=(state={product:[]}, action)=>{
if(action.type=== "ADD_DATA" ) {
    
    return{
        ...state,
        product: [...action.data],
};

} 
if(action.type=== "SELECTED_PROD_ID"){
    return{
        ...state,
        selectedid: action.data,
    }
}  
if(action.type=== "REMOVE_PRODUCT"){
   
    state.product.pop();
    return{
        product: [...state.product],
    }
    
}
return state;
}




 // const newData = state.pop();
    // const newData= state.product.filter((item)=>item !== action.data);
    // return{
    //     ...state,
    //     product: newData,