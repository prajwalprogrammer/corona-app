import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import Starter1 from "./starter";
import Listitem from "./trial";
import PieChartWithDynamicSlices from "./PieChart";
import Chart2 from "./Chart2";
import FrontPage from "./FrontPage";
import App1 from "./FAq1";
import Symptoms from "./Symptoms";
import MyComponent from "./state";
import Precaution from "./preautions";
import Update from "./updatedFront";
import GraphQL from "./Graphql";
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();
export default function Navigation1() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Get Started" component={Starter1} />
      <Stack.Screen name="front" component={Update} />
      <Stack.Screen name="india" component={MyComponent} />
      <Stack.Screen name="faq" component={App1} />
      <Stack.Screen name="Home" component={Listitem} />
      <Stack.Screen name="stm" component={Symptoms} />
      <Stack.Screen name="Pre" component={Precaution} />
      <Stack.Screen name="About" component={Chart2} />
    </Stack.Navigator>
  );
}
