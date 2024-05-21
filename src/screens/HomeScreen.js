import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import api from "../services/api";
import MovieCard from "../components/MovieCard";

export default function HomeScreen({ navigation }) {
  const [filmes, setFilmes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    for (let i = 1; i <= 20; i++) {
      api
        .get(
          `movie/popular?${api.defaults.params.api_key}&${api.defaults.params.language}&page=${i}`
        )
        .then((response) => {
          response.data.results.map((filme) => {
            filme.vote_average = filme.vote_average.toFixed(1);
          });
          setFilmes((filmes) => [...filmes, ...response.data.results]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const filteredMovies = filmes.filter((filme) =>
  filme.title.toLowerCase().includes(search.toLowerCase())
);


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredMovies}
        keyExtractor={(filme, index) => `${filme.id}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetalhesFilme", {
                title: item.title,
                original_title: item.original_title,
                poster_path: item.poster_path,
                overview: item.overview,
                vote_average: item.vote_average,
                release_date: item.release_date,
              })
            }
          >
            <MovieCard filme={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    borderRadius: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#c0c0c0",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#292F33",
  },
});
