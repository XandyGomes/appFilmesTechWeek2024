import React from "react";
import { Text, Image, ScrollView, View, StyleSheet } from "react-native";

export default function DetalhesFilmeScreen({ route }) {
  const { title, original_title, poster_path, overview, release_date } =
    route.params;

  const dataOriginal = new Date(release_date);
  const dataFormatada = new Intl.DateTimeFormat("pt-BR").format(dataOriginal);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.titleOriginal}>
            Título Original: {original_title}
          </Text>
          <Text style={styles.release_date}>
            Data Lançamento: {dataFormatada}
          </Text>
          <Text style={styles.overview}>Sinopse: {overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101217",
    padding: 10,
  },
  image: {
    flex: 1,
    height: 500,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  titleOriginal: {
    borderTopColor: "#666",
    borderTopWidth: 1,
    borderBottomColor: "#666",
    borderBottomWidth: 1,
    fontSize: 15,
    color: "#999",
    textAlign: "center",
  },
  release_date: {
    fontSize: 15,
    color: "#999",
    textAlign: "center",
  },
  overview: {
    fontSize: 15,
    color: "#999",
    textAlign: "center",
    padding: 10,
  },
});
