// import { createSlice } from "@reduxjs/toolkit";

// initialCartSate = [];

// export const fetchProducts = createAsyncThunk(
//   "cart/fetchCart",
//   async (_, { rejectWithValue }) => {
//     const response = await fetch(`http://localhost:8083/getcartlist/{email}`);
//     const data = await response.json();
//     if (response.status < 200 || response.status >= 300) {
//       return rejectWithValue(data);
//     }
//     return data;
//   }
// );

// const productSlice = createSlice({
//   name: "products",
//   initialState: initialProductSate,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       return action.payload;
//     });
//     builder.addCase(fetchProducts.rejected, () => {
//       return [];
//     });
//   },
// });

// export default productSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const intialCartState = {items:[], totalQuantity:0}

const cartSlice = createSlice({
    name: 'cart',
    initialState:intialCartState,
    reducers:{
        addItemtoCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item=> item.id === newItem.id)
            state.totalQuantity++
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                })
            } else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;          
            }
        },

        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find((item)=>item.id === id);
            state.totalQuantity--;
            // state.changed = true;
            if(existingItem.quantity ===1){
                state.items = state.items.filter((item)=>item.id !==id)
            }else{
                existingItem.quantity--;
                // existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }

        }
    }
})

export const {cartAction} = cartSlice.actions

export default cartSlice.reducer;