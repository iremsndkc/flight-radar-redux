import { createSlice } from "@reduxjs/toolkit"
import { getFlights } from "../actions";

const initialState = {
    isLoading:true,
    error:null,
    flights:[],
    trail:[],
    path:[],
}
const flighSlice = createSlice ( {
    name:"flights",
    initialState,
    reducers:{
        setPath:(state,{payload}) => {
            state.path = payload;
        },
    },
    extraReducers:(builder) => {
        builder.addCase(getFlights.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getFlights.rejected, (state , {error}) => {
            state.isLoading = false;
            state.error = error.message;
        });
        builder.addCase(getFlights.fulfilled, (state ,action) => {
            state.isLoading = false;
            state.error = null;
            state.flights = action.payload;
        });
    },
});
export const {setPath} = flighSlice.actions;
export default flighSlice.reducer;


