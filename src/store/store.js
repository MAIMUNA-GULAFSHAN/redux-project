import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import ProductSlice from './productSlice';
const Store = configureStore({
 reducer :{
         cart:cartSlice,
         products:ProductSlice
 }
});

export default Store;