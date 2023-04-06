import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    LoggedUser: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: { LoggedUser: null },
    reducers: {
        setLoggedUser : (state, action) => {
            state.LoggedUser = action.payload;
        },
        
    }


});

export const { setLoggedUser } = authSlice.actions;
export default authSlice.reducer;


    
