import React, { Component } from "react";
import { Text, View, Image, Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import UpSymptom from "./upSymptoms";
const width = Dimensions.get("window").width;
export class Symptoms extends Component {
  render() {
    return (
      <View style={{ paddingTop: 20, marginBottom: 30 }}>
        <View
          style={{
            paddingVertical: 15,
            borderBottomColor: "#69474f",
            borderBottomWidth: 5,
            backgroundColor: "#dbb17a",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              alignSelf: "center",
              fontWeight: "bold",
              fontFamily: "sans-serif-condensed",
            }}
          >
            Symptoms Of Covid-19
          </Text>
        </View>
        <ScrollView style={{ marginBottom: Constants.statusBarHeight }}>
          <UpSymptom />
          {/* <View style={styles.view}>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={require("../assets/covid-19/PicsArt_06-30-02.40.42.png")}
                style={{
                  opacity: 1,
                  height: 120,
                  width: width / 2,
                  resizeMode: "contain",
                }}
              />
              <Text>Higher Fever</Text>
            </View> */}
          {/* </View> */}
          {/* <View style={{ flexDirection: "column", ...styles.view2 }}>
              <Image
                source={require("../assets/covid-19/PicsArt_06-30-02.42.28.png")}
                style={{
                  opacity: 1,
                  height: 120,
                  width: width / 2,
                  resizeMode: "contain",
                }}
              />
              <Text>DRY COUGH</Text>
            </View>
          </View> */}
          {/* <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.43.30.png")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <Text>SHORTNESS OF BREATH</Text>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.44.29.png")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <Text>SORE THROAT</Text>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.45.47.png")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <Text>HEADACHE</Text>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.46.44.png")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text>BODE ACHE</Text>
              <Text> fhkgjydgjfbddddddddddd ddddd </Text>
            </View>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.48.01.png")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text>CHILLS AND/OR REPEATED</Text>
              <Text>SHEKING WITH CHILLS</Text>
            </View>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.49.07.png")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text> NEW LOSS OF</Text>
              <Text>TASTE OR SMELL</Text>
            </View>
          </View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    borderWidth: 2,
    marginVertical: 5,
    paddingVertical: 5,
    borderRadius: 20,
    //marginHorizontal: 3,
    shadowRadius: 30,
    // borderColor: "#dbb17a",
    backgroundColor: "#deded2",
  },
  view2: {
    marginRight: 10,
    borderColor: "red",
  },
});
export default Symptoms;
