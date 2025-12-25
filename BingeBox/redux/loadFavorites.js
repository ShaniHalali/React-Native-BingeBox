import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { FAVORITES_MOVIES_IDS_KEY } from "../constants/storageKeys";
import { setFavorites } from "./slices/favoritesSlice";


export const LoadFavorites = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        const LoadFavoritesFromStorage = async () => {
            try {
                const stored = await AsyncStorage.getItem(FAVORITES_MOVIES_IDS_KEY);
                const ids = stored ? JSON.parse(stored) : [];
                dispatch(setFavorites(ids));
                console.log("Loaded favorites fro, Storage: ", ids);


            } catch (error) {
                console.error("Faild to load favorites movies from Storage", error);
            }
        }
        LoadFavoritesFromStorage();
    },[]);

    return null;
};

