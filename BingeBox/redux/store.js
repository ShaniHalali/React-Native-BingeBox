import { configureStore } from '@reduxjs/toolkit'
import favoritesMoviesReducer from './slices/favoritesSlice'
import moviesReducer from './slices/moviesSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesMoviesReducer,
    movies: moviesReducer,
  },
})