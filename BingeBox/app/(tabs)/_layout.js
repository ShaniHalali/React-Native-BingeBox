import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons'

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="movies/moviesList"
                options={{
                    title: 'Movies',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused? 'film' : 'film-outline'} size={24} color={color}/>
                    )
                }}
            />
            <Tabs.Screen
                name="favoritesMoviesList"
                options={{
                    title: 'Favorites',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused? 'heart' : 'heart-outline'} size={24} color={color}/>
                    )
                }}
            />
        </Tabs>
    )
}