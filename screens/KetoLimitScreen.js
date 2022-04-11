// Home.js
import React, { useState, useEffect } from "react";
import CircularPicker from "react-native-circular-picker";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  View,
} from "react-native";

const KetoLimitScreen = ({ totalCarbsForReals }) => {
  const [totalCarbs, setTotalCarbs] = useState(0);
  const handleChange = (v) => setTotalCarbs((v * 20).toFixed(0));

  return (
    <CircularPicker
      size={400}
      steps={[15, 40, 70, 100]}
      gradients={{
        0: ["rgb(255, 97, 99)", "rgb(247, 129, 119)"],
        15: ["rgb(255, 204, 0)", "rgb(255, 214, 10)"],
        40: ["rgb(52, 199, 89)", "rgb(48, 209, 88)"],
        70: ["rgb(0, 122, 255)", "rgb(10, 132, 255)"],
      }}
      onChange={handleChange}
    >
      <>
        <Text style={{ textAlign: "center", fontSize: 24, marginBottom: 8 }}>
          {totalCarbs} g
        </Text>
        <Text style={{ textAlign: "center" }}>Keto limit 50g carbs</Text>
      </>
    </CircularPicker>
  );
};

export default KetoLimitScreen;

const styles = StyleSheet.create({});
