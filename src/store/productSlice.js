import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    data:[],
    status:'idle'
}
const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // fetchProducts(state,action){
    //   state.data = action.payload;
    // }
  },
  extraReducers : (builder) =>{
     builder
     .addCase(getProducts.pending,(state,action)=>{
       state.status = 'loading'; 
     })
     .addCase(getProducts.fulfilled, (state, action)=>{
        state.data = action.payload;
        state.status='idle '
     })
     .addCase(getProducts.rejected, (state, action)=>{
        state.status='error'
     })
  }

});

export const { fetchProducts} = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProducts = createAsyncThunk('products/get',async ()=>{
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    return result;
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         try {
//             const data = await fetch("https://fakestoreapi.com/products");
//             const result = await response.json();
            
//             if (Array.isArray(result)) {
//                 dispatch(fetchProducts(result));
//             } else {
//                 // Handle the case where data is not an array
//                 console.error("Fetched data is not an array");
//             }
//         } catch (error) {
//             // Handle fetch error
//             console.error("Error fetching products:", error);
//         }
//     };
// }
