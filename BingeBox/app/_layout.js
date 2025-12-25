import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import {LoadFavorites} from "../redux/loadFavorites"

export default function RootLayout() {
  return (
    <Provider store={store}>
    <LoadFavorites/>
    <Stack>
     <Stack.Screen
        name="index"
        options={{
            title: "",
            headerShown: false
         }}
      />

      <Stack.Screen
        name="(tabs)"
        options={{
            title: "",
            headerShown: false
         }}
      />

      <Stack.Screen
        name="(movieDetails)/[id]"
        options={{
          title: "",
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
    </Provider>
  );
}