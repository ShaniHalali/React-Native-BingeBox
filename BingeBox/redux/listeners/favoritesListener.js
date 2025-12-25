import AsyncStorage  from "@react-native-async-storage/async-storage";
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addFavoriteMovie, removeFavoriteMovie } from "../slices/favoritesSlice";
import { FAVORITES_MOVIES_IDS_KEY } from "../../constants/storageKeys";

const favoritesListenerMiddleware = createListenerMiddleware();

favoritesListenerMiddleware.startListening({
    actionCreator: addFavoriteMovie,
    effect: async(action, listenerApi) => {
        const state = listenerApi.getState();
        const ids = state.favorites;
        await AsyncStorage.setItem(FAVORITES_MOVIES_IDS_KEY,  JSON.stringify(ids) )
    },

});

favoritesListenerMiddleware.startListening({
    actionCreator: removeFavoriteMovie,
    effect: async(action, listenerApi) => {
        const state = listenerApi.getState();
        const ids = state.favorites;
        await AsyncStorage.setItem(FAVORITES_MOVIES_IDS_KEY,  JSON.stringify(ids) )
    },

});

export default favoritesListenerMiddleware;

