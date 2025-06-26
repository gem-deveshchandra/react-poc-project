
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getAllDashboardCharts = createAsyncThunk(
  "getAllDashboardCharts",
  async () => {
    
      const response = await fetch("http://localhost:5000/api/dashboardCharts");
      const data = await response.json();
      return data;
  }
);

const dashboardChartSlice = createSlice({
  name: "dashboardCharts",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDashboardCharts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDashboardCharts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllDashboardCharts.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch dashboard charts data';
      });
  },
});

export default dashboardChartSlice.reducer;
