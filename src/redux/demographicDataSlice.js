import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getAllDemographicData = createAsyncThunk(
    "getAllDemographicData", async() =>{
        const response = await fetch('http://localhost:5000/api/demographicData');
        const data = await response.json();
        return data;
    }
)

const demographicDataSlice = createSlice(
    {
        name :'demographicData',
        initialState:{
            loading:false,
            data:[],
            error:null
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(getAllDemographicData.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getAllDemographicData.fulfilled, (state, action)=>{
               state.data = action.payload;
               state.loading = false;
            })
            .addCase(getAllDemographicData.rejected, (state, action)=>{
                state.error = action.payload;
                state.loading = false;
             })
        }

    }
)

export default demographicDataSlice.reducer;