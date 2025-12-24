import {
  View,
  useColorScheme,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Colors } from "../constants/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import lightBackground from "../assets/image/cloudsBackground.png";
import darkBackground from "../assets/image/darkCloudsBackground.png";
import lightMovieDetails from "../assets/image/lightMovieDetailsBack.png";
import darkMovieDetails from "../assets/image/darkMovieDetailsBack.png";

const backgrounds = {
  moviesList: {
    light: lightBackground,
    dark: darkBackground,
  },
  movieDetails: {
    light: lightMovieDetails,
    dark: darkMovieDetails,
  },
};

const ThemedView = ({ mode, style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const scheme = colorScheme ?? "light";

  const selectedMode = mode === "moviesList" ? "moviesList" : "movieDetails";
  const background = backgrounds[selectedMode][scheme];

  return (
    <>
      <ImageBackground source={background} style={styles.background}>
        <SafeAreaView style={[{ flex: 1 }, style]} {...props}>
          {children}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default ThemedView;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
