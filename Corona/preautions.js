import React, { Component } from "react";
import { Text, View, Image, Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";
const width = Dimensions.get("window").width;
export class Precaution extends Component {
  render() {
    return (
      <View style={{ marginTop: Constants.statusBarHeight, marginBottom: 30 }}>
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
              fontSize: 25,
              alignSelf: "center",
              fontWeight: "bold",
              fontFamily: "sans-serif-condensed",
            }}
          >
            COVID-19 PREVENTIONS
          </Text>
        </View>
        <ScrollView style={{ marginBottom: Constants.statusBarHeight }}>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.53.10.jpg")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>
                Stay Home if {"\n"} you feel unwell
              </Text>
              <Text note>
                If you show symptoms {"\n"} of Covid-19 ,self {"\n"} associate
                yourself.
              </Text>
            </View>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.53.56.jpg")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>Avoid Close Contact</Text>
              <Text note>
                Maintain 6 Feet distance {"\n"} with people who are sick
              </Text>
            </View>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.54.37.jpg")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>Take Care of Yourself</Text>
              <Text note>Stay physically fit. {"\n"} Exercise regulary.</Text>
            </View>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.56.39.jpg")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>Cover Your Mouth</Text>
              <Text note>
                Cover your Mouth and {"\n"} Nose while coughing {"\n"}and
                sneezing{" "}
              </Text>
            </View>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.57.19.jpg")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>Wash Hand Frequently</Text>
              <Text note style={{ marginRight: 5 }}>
                Scrub Back hands,Between{"\n"} Fingers and under Nails at {"\n"}
                least 20 seconds with {"\n"} alkohol based hand rub {"\n"} to
                kill viruses
              </Text>
            </View>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.57.54.jpg")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>
                Avoid Touching {"\n"} Mouth,Eyes and Nose
              </Text>
              <Text note style={{ marginRight: 5 }}>
                Hand touches many surfaces{"\n"} can transfer virus into{"\n"}
                your Eyes,Nose or Mouth.
              </Text>
            </View>
          </View>
          <View style={styles.view}>
            <Image
              source={require("../assets/covid-19/PicsArt_06-30-02.58.43.jpg")}
              style={{
                opacity: 1,
                height: 120,
                width: width / 2,
                resizeMode: "contain",
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.text}>Clean</Text>
              <Text note>
                Maintain personal hygiene {"\n"} to keep cleaning your {"\n"}{" "}
                sorrounding
              </Text>
            </View>
          </View>
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
    marginHorizontal: 3,
    shadowRadius: 30,
    borderColor: "#dbb17a",
    backgroundColor: "#deded2",
  },
  text: {
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    color: "#e06000",
    marginBottom: 10,
  },
});
export default Precaution;
