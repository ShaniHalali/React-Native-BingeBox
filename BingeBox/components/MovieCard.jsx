import { useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";

const fontFamilyPlatform =
  Platform.OS === "ios" ? "Poppins-Bold" : "Poppins-Bold";

const MovieCard = ({ id, title, poster}) => {
  const router = useRouter();

  const onMoviePress = () => {
    router.push({
      pathname: `/movies/${id}`,
      params: {id, title, poster},
    });
  };

  return (
    <Pressable onPress={onMoviePress}>
      <View style={styles.card}>
        <Image source={{ uri: poster }} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 400,
    marginHorizontal: 8,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 20,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontFamily: fontFamilyPlatform,
    fontWeight: "bold",
    textAlign: "center",
    color: "#070707ff",
    padding: 10,
  },
});

export default MovieCard;
