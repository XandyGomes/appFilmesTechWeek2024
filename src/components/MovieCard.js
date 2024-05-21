import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";

export default function MovieCard({ filme }) {
  const dataOriginal = new Date(filme.release_date);
  const dataFormatada = new Intl.DateTimeFormat("pt-BR").format(dataOriginal);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500${filme.poster_path}` }}
      />
      <Text style={styles.title}>{filme.title}</Text>
      <Text style={styles.vote_average}>Nota: {filme.vote_average}</Text>
      <Text style={styles.release_date}>Lançamento: {dataFormatada}</Text>
      <Text numberOfLines={1} style={styles.overview}>
        Sinopse: {filme.overview}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101217",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "#fff",
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  release_date: {
    fontSize: 15,
    color: "#999",
  },
  image: {
    borderRadius: 10,
    width: 130,
    height: 200,
    marginBottom: 10,
  },
  vote_average: {
    borderTopColor: "#666",
    borderTopWidth: 1,
    borderBottomColor: "#666",
    borderBottomWidth: 1,
    padding: 5,
    fontSize: 15,
    color: "#999",
  },
  overview: {
    fontSize: 15,
    color: "#999",
    textAlign: "center",
  },
});
