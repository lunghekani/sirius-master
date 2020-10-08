import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Colors from "../config/colors";
import ListItem from "../components/ListItem";
function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/dreamville.jpg")}
      />
      <View style={styles.detailedcont}>
        <AppText style={styles.title}> Dreamville Jacket for sale</AppText>
        <AppText style={styles.price}> R2000</AppText>
        <View style={styles.usercont}>
          <ListItem
            image={require("../assets/cole.jpg")}
            title="Jermaine Cole"
            subtitle="11 listings"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailedcont: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  usercont: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
