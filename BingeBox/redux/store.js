import { configureStore } from '@reduxjs/toolkit'
import favoritesMoviesReducer from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesMoviesReducer,
  },
})