import { configureStore } from '@reduxjs/toolkit'
import favoritesMoviesReducer from './slices/favoritesSlice'
import moviesReducer from './slices/moviesSlice'
import favoritesListenerMiddleware from './listeners/favoritesListener'

export const store = configureStore({
  reducer: {
    favorites: favoritesMoviesReducer,
    movies: moviesReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(favoritesListenerMiddleware.middleware),
  
})