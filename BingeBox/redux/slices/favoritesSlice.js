import { createSlice } from '@reduxjs/toolkit'

const initialState = [] 

const favoritesSlice = createSlice({
    name: 'favoritesMovies',
    initialState,
    reducers: {
        //actions for favorites movies redux
        addFavoriteMovie: (state, action) => {
            if(!state.includes(action.payload)) {
                state.push(action.payload)
            }
        },
        removeFavoriteMovie: (state, action) => {
            return state.filter(id => id !== action.payload)
        },
    },
})

export const {addFavoriteMovie, removeFavoriteMovie} = favoritesSlice.actions
export default favoritesSlice.reducer

