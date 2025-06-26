import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllDashboardData = createAsyncThunk(
  "getAllDashboardData",
  async () => {
    const response = await fetch("http://localhost:5000/api/dashboardData");
    const data = await response.json();
    return data;
  }
);
const dashboardDataSlice = createSlice({
  name: "dashboardData",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers:(builder) =>{
    builder
    .addCase(getAllDashboardData.pending, (state)=>{
        state.loading = true
    })
    .addCase(getAllDashboardData.fulfilled, (state, action)=>{
        state.loading = false;
        state.data = action.payload;
    })
    .addCase(getAllDashboardData.rejected, (state, action)=>{
        state.loading = false;
        state.error = 'Failed to fetch dashboard data' ;
    })
  }
  
});

export default dashboardDataSlice.reducer;
