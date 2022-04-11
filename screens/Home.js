// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  View,
} from "react-native";

import List from "../components/List";
import SearchBar from "../components/SearchBar";
import glycemicPrunedData from "../data/glycemic_pruned.json";

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <View>
      <SafeAreaView style={styles.root}>
        {!clicked && <Text style={styles.title}>Glycemic Index</Text>}

        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
        {!glycemicPrunedData ? (
          <ActivityIndicator size="large" />
        ) : (
          <List
            searchPhrase={searchPhrase}
            data={glycemicPrunedData}
            setClicked={setClicked}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
