import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialProductSate = {product_list:[]}
  


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:8083/products/all`, {
      method: "GET"
    });
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:8083/products/${category}`, {
      method: "GET",
    });
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);


const productSlice = createSlice({
  name: "products",
  initialState: initialProductSate,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product_list = action.payload
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.product_list = []
    });
  },
});

export default productSlice.reducer;
