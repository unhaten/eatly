import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "Favorite",
    initialState: {
        favorite: [],
        amount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.favorite.push(action.payload.item);
            state.amount += 1;
        },
        removeItem: (state, action) => {
            state.favorite.filter((item) => item.id !== action.payload.id);
            state.amount -= 1;
        },
    },
});

export const { addItem, removeItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;
