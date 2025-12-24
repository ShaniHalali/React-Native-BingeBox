import { StyleSheet, Text, View, Platform, Image, ScrollView } from "react-native";
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
  const { title, poster, overview, voteAverage } = useLocalSearchParams();
  console.log("selected movie details:", { title, poster, overview, voteAverage });

  return (
    <ThemedView mode={"movieDetails"} style={[styles.container]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Image source={{ uri: poster }} style={styles.image} />
      <Spacer height={10} />
      <ThemedText style={[styles.title]}>{title}</ThemedText>
      <Spacer height={10} />

      <View style={{paddingHorizontal: 40}}>
      <ThemedText style={[styles.overviewText]}>OverView:</ThemedText>
      <ThemedText style={[styles.detailsText]}>{overview} </ThemedText>
      </View>
      
      <Spacer height={10} />
      <ThemedText style={[styles.ratingText]}> Rating: {voteAverage} ⭐ </ThemedText>

      <ThemedButton title="movie list">
        <Text style={[styles.btnText]}>Add To Favorite</Text>
      </ThemedButton>
      </ScrollView>
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
    overviewText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    fontSize: 20,
    fontFamily: fontFamilyPlatform,
  },
  detailsText: {
    alignSelf: "flex-start",
    fontSize: 20,
    fontFamily: fontFamilyPlatform,
  },

    ratingText: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: fontFamilyPlatform,
  },
  scrollContent: {
  alignItems: "center",
  paddingBottom: 40,
},

});

