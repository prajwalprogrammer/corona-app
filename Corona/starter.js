import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { Button } from "native-base";
import BGImage from "../assets/covid-19/Covid-3.jpg";
import BGImage1 from "../assets/covid-19/image2.png";
class Starter1 extends Component {
  render() {
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;

    const Styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#32B78E",
      },
      Avatar: {
        width: deviceWidth,
        height: deviceHeight,
        resizeMode: "cover",
      },
    });

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ height: null, width: null, flex: 1 }}
          source={BGImage}
        >
          <View
            style={{
              flex: 5,
              justifyContent: "flex-end",
            }}
          >
            <Image
              source={BGImage1}
              style={{
                height: 130,
                width: 150,
                alignItems: "flex-start",
                opacity: 0.4,
              }}
            />
          </View>
          <View style={{ flex: 6 }}>
            <Text
              style={{
                alignItems: "center",
                color: "#ffffff",
                fontSize: 60,
                paddingTop: 50,
                marginLeft: 25,
                fontFamily: "serif",
                fontWeight: "bold",
              }}
            >
              COVID-19
            </Text>
            <Text
              style={{
                alignItems: "flex-end",
                color: "#ffffff",
                fontSize: 25,
                paddingLeft: 130,
                marginLeft: 65,
                justifyContent: "flex-end",
                fontFamily: "serif",
              }}
            >
              CoronaVirus
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "flex-end",
              padding: 30,
              marginTop: 40,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 20,
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              Coronavirus disease (COVID-19)
            </Text>
            <Text
              note
              style={{
                color: "#ffffff",
                alignItems: "center",
                justifyContent: "space-around",
                fontFamily: "sans-serif-condensed",
              }}
            >
              is an infectious disease caused by a newly discovered coronavirus.
            </Text>
          </View>

          <View style={{ flex: 2, justifyContent: "flex-start" }}>
            <Button
              rounded
              bordered
              transparent
              block
              style={{ width: 300, marginLeft: 34 }}
              onPress={() => {
                this.props.navigation.navigate("front");
              }}
            >
              <Text
                style={{ color: "#ffffff", fontSize: 27, fontFamily: "serif" }}
              >
                Get Started
              </Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Starter1;
