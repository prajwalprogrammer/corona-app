import "react-native-gesture-handler";

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  RefreshControl,
} from "react-native";
import { YellowBox } from "react-native";
import Constants from "expo-constants";
import Starter1 from "./Corona/starter";
import Listitem from "./Corona/trial";
import { NavigationContainer } from "@react-navigation/native";
import Navigation1 from "./Corona/navigation";
import { SafeAreaProvider } from "react-native-safe-area-view";
import Chart from "./Corona/Chart";
import NetInfo from "@react-native-community/netinfo";
import Axios123 from "./Corona/axios3";
import Check from "./Corona/check";
import Axios from "./Corona/axios";
import FrontPage from "./Corona/FrontPage";
import FAQ from "./Corona/FAQ";
import App1 from "./Corona/FAq1";
import MyComponent from "./Corona/state";
import Symptoms from "./Corona/Symptoms";
import Precaution from "./Corona/preautions";
import FABExample from "./Corona/FAb";
import App4 from "./Corona/FAb";
import Chart2 from "./Corona/Chart2";
import { Button } from "native-base";
import { Update } from "./Corona/updatedFront";
import UpSymptoms from "./Corona/upSymptoms";
import UPNavigation1 from "./Corona/upNavigation";
import GraphQL from "./Corona/Graphql";
YellowBox.ignoreWarnings(["Remote debugger"]);
function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
export default function App() {
  const [isInternetReachable, setisInternetReachable] = useState(true);
  const [refreshing, setrefreshing] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setisInternetReachable(state.isInternetReachable);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);
  if (!isInternetReachable) {
    return (
      <SafeAreaView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor="#0984e3"
            tintColor="#0984e3"
          />
        }
      >
        <View style={{ backgroundColor: "red" }}>
          <Text
            style={{
              color: "white",
              fontSize: Platform.OS === "android" ? 20 : 15,
              paddingTop: 20,
              textAlign: "center",
            }}
          >
            No Internet Connection
          </Text>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",

            paddingTop: 150,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Oops!!!</Text>

          <Image
            source={require("./assets/covid-19/1593632384913.png")}
            style={{
              height: 180,
              width: 180,
              resizeMode: "contain",
              marginVertical: 40,
            }}
          />
          <Text style={{ fontSize: 15, opacity: 0.8 }}>
            Something Goes Wrong...
          </Text>
          <Text style={{ fontSize: 15, opacity: 0.8 }}>
            Please Check Your Internet Connection
          </Text>
          <Text style={{ fontSize: 25, paddingVertical: 10 }}>
            Try Again...
          </Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaProvider style={styles.container}>
        {/* <Check /> */}
        <NavigationContainer>
          <Navigation1 />
        </NavigationContainer>
        {/* <GraphQL /> */}
        {/* <Chart2 /> */}
        {/* <MyComponent /> */}
        {/* <Update /> */}
        {/* <NavigationContainer>
          <UPNavigation1 />
        </NavigationContainer> */}
        {/* <UpSymptoms /> */}
        {/* <Axios /> */}
        {/* <App4 /> */}
        {/* <Precaution /> */}
        {/* <Symptoms /> */}
        {/* <Axios123 /> */}
        {/* <Chart /> */}
        {/* <FrontPage /> */}
        {/* <FAQ /> */}
        {/* <App1 /> */}
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});
