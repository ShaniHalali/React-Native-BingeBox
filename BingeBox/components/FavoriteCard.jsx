import { useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import { Colors } from "../constants/Color";

const fontFamilyPlatform =
  Platform.OS === "ios" ? "Poppins-Bold" : "Poppins-Bold";

const FavoriteCard = ({ favorite}) => {
  const router = useRouter();

  const onMoviePress = () => {
    router.push({
      pathname: `/${favorite.id}`,
      params: {
        id: favorite.id,
        title: favorite.title,
        poster: favorite.poster,
        overview: favorite.overview,
        voteAverage: favorite.voteAverage,
      }
    });
  };

  return (
    <Pressable onPress={onMoviePress}>
      <View style={styles.card}>

        <View style={styles.textContainer}>
        <Image source={{ uri: favorite.poster }} style={styles.image} />
        <Text style={styles.title} numberOfLines={3}>
          {favorite.title}
        </Text>
        </View>
        
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 100,
    marginVertical: 8,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginTop: 10,
    resizeMode: "contain",    
  },
  title: {
    fontSize: 20,
    fontFamily: fontFamilyPlatform,
    fontWeight: "bold",
    color: "#070707ff",
    flex: 1,
    flexShrink: 1,
    marginTop: 20,
  },

  textContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
});

export default FavoriteCard;
