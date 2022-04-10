import React, { useState, useMemo, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import TrackerScreen from "./screens/TrackerScreen";
import KetoLimitScreen from "./screens/KetoLimitScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackerContext, { TrackerProvider } from "./TrackerContext";

function HelpScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Put GI Load etc info here</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function AppTabs() {
  const { trackerItems } = useContext(TrackerContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarItemStyle: {
            backgroundColor: "#ff15",
          },
        }}
      />
      <Tab.Screen
        name="Tracker"
        component={TrackerScreen}
        options={{
          tabBarBadge: trackerItems.length,
          tabBarItemStyle: {
            backgroundColor: "#1344",
          },
          tabBarBadgeStyle: {
            backgroundColor: "#334444",
            color: "#BBBBBB",
          },
        }}
      />
      <Tab.Screen
        name="Limit"
        component={KetoLimitScreen}
        options={{
          tabBarItemStyle: {
            backgroundColor: "#1b1344",
          },
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarItemStyle: {
            backgroundColor: "#1b1344",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  // const renderGlyItem = ({ item }) => <Item title={item.title} />;
  const [trackerItems, setTrackerItems] = useState([]);
  // the memoization is here to prevent is re-rendering needlessly
  const value = useMemo(
    () => ({ trackerItems, setTrackerItems }),
    [trackerItems]
  );
  console.log("App RE-RENDER, trackerItems:" + JSON.stringify(trackerItems));
  return (
    // <View style={styles.root}>
    //   <Home />
    // </View>
    <TrackerProvider value={value}>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </TrackerProvider>
  );
}

const styles = StyleSheet.create({});
