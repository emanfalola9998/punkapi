// src/redux/beerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BeerType } from '../types/types';

export interface BeerState {
    searchTerm: string;
    isHighABV: boolean;
    isClassic: boolean;
    isAcidic: boolean;
    hasBeerBeenSelected: boolean;
    showNav: boolean;
    beerData?: BeerType[];
    currentPage: number;
}

const initialState: BeerState = {
    searchTerm: '',
    isHighABV: false,
    isClassic: false,
    isAcidic: false,
    hasBeerBeenSelected: false,
    showNav: false,
    beerData: undefined,
    currentPage: 1,
};

const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
        state.searchTerm = action.payload;
        },
        setIsHighABV: (state, action: PayloadAction<boolean>) => {
        state.isHighABV = action.payload;
        },
        setIsClassic: (state, action: PayloadAction<boolean>) => {
        state.isClassic = action.payload;
        },
        setIsAcidic: (state, action: PayloadAction<boolean>) => {
        state.isAcidic = action.payload;
        },
        setHasBeerBeenSelected: (state, action: PayloadAction<boolean>) => {
        state.hasBeerBeenSelected = action.payload;
        },
        setShowNav: (state, action: PayloadAction<boolean>) => {
        state.showNav = action.payload;
        },
        setBeerData: (state, action: PayloadAction<BeerType[] | undefined>) => {
        state.beerData = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
        state.currentPage = action.payload;
        },
    },
});

export const {
    setSearchTerm,
    setIsHighABV,
    setIsClassic,
    setIsAcidic,
    setHasBeerBeenSelected,
    setShowNav,
    setBeerData,
    setCurrentPage,
} = beerSlice.actions;

export default beerSlice.reducer;
