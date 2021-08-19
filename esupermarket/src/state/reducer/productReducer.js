export const productReducer=(state={product:["titan watch"]}, action)=>{
if(action.type=== "ADD_DATA" ) {
    
    return{
        ...state,
        product: [...action.data,...state.product],
};

}   
if(action.type=== "REMOVE_PRODUCT"){
    // const newData = state.pop();
    // const newData= state.product.filter((item)=>item !== action.data);
    // return{
    //     ...state,
    //     product: newData,
    state.product.pop();
    return{
        product: [...state.product]
    }
    
}
return state;
}