import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialLoginState = {
  email: "",
  jwt_token: "",
  isLoggedIn: false,
};

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (payload, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:8083/login`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (payload, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:8083/adduser`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(response);
    }
    return response;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    user: (state, action) => {
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.email = "";
      state.jwt_token = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.jwt_token = action.payload?.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.jwt_token = "";
      state.isLoggedIn = false;
    });
  },
});

export const { user, logout } = loginSlice.actions;

export default loginSlice.reducer;
