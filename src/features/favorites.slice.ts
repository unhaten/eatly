import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/providers/store/store";

interface favoritesState {
    // favorites: [name: string, id: string];
    list: [];
    amount: number;
}

const initialState: favoritesState = {
    list: [],
    amount: 0,
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addItem: (state, { payload: item }) => {
            if (state.list.some((i) => i.id === item.id)) return;
            state.list.push(item);
            state.amount += 1;
        },
        removeItem: (state, action) => {
            state.list = state.list.filter(
                (item) => item.id !== action.payload.id
            );
            state.amount -= 1;
        },
    },
});

export const { addItem, removeItem } = favoritesSlice.actions;

export default favoritesSlice.reducer;
