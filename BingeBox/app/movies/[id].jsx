import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Color";
import { useLocalSearchParams } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";

const fontFamilyPlatform =
  Platform.OS === "ios" ? "Poppins-Bold" : "Poppins-Bold";

const movieDetails = () => {
  const { id, title, poster } = useLocalSearchParams();
  console.log("selected movie details:", { id, title, poster });

  return (
    <ThemedView mode={"movieDetails"} style={[styles.container]}>
      <Image source={{ uri: poster }} style={styles.image} />
      <Spacer height={10} />
      <ThemedText style={[styles.title]}>{title}</ThemedText>
      <Spacer />
      <ThemedText style={[styles.detailsText]}>OverView: </ThemedText>
      <Spacer />
      <ThemedText style={[styles.detailsText]}> Rating: </ThemedText>

      <ThemedButton title="movie list">
        <Text style={[styles.btnText]}>Add To Favorite</Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default movieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: fontFamilyPlatform,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
  btnText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: fontFamilyPlatform,
  },

  image: {
    width: "80%",
    height: 250,
    borderRadius: 10,
    backgroundColor: "#ccc",
    resizeMode: "stretch",
  },
  detailsText: {
    fontWeight: "bold",
    alignItems: "flex-start",
    fontSize: 20,
    fontFamily: fontFamilyPlatform,
  },
});
