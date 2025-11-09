import React from "react";
import { View, FlatList, Image, StyleSheet, Pressable } from "react-native";
import products from "../data/products";

const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("ProductDetails", { id: item.id })
            }
            style={styles.itemContainer}
          >
            <Image
              source={{ uri: item.image }}
              style={[
                styles.image,
                (item.id === "2" || item.id === "13") && styles.rotatedImage,
              ]}
            />
          </Pressable>
        )}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  rotatedImage: {
    transform: [{ rotate: "-90deg" }],
  },
});
