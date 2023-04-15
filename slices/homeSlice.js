import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hi: 'hello',
    total: '2,456,321.00',
    credit: "1,453",
    debit: "2,311",
}

export const homeSlice = createSlice({
    name: 'home', 
    initialState,
    reducer: {
        setHi: (state, action) => {
            state.hi = action.payload; 
        }
    }
})

export const { setHi } = homeSlice.actions;

export const selectHi = (state) => state.home.hi;
export const selectTotal = (state) => state.home.total;
export const selectCredit = (state) => state.home.credit;
export const selectDebit = (state) => state.home.debit;

export default homeSlice.reducer