import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Image } from "../modules/Image";

export const imagesSlice = createSlice({
    name: 'images',
    initialState: new Array<Image>(),
    reducers: {
        loadMoreImages: (state, action: PayloadAction<Image[]>) => {
            return [...state, ...action.payload];
        },
        resetImages: (state, action: PayloadAction<Image[]>) => {
            return action.payload;
        },
    },
});

export const { loadMoreImages, resetImages } =
    imagesSlice.actions;

export default imagesSlice.reducer;