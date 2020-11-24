import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import React, { Component } from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import Video from "react-native-video";
export class UpSymptom extends Component {
  render() {
    const Prop = (props) => {
      return (
        <View
          style={{ flexDirection: "row", marginTop: 10, marginHorizontal: 10 }}
        >
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                height: 180,
                width: 180,
                alignSelf: "center",
                borderRadius: 28,
                backgroundColor: "#deded2",
                borderColor: "#dbb17a",
              }}
              elevation={6}
            >
              <Image
                source={props.ur1}
                style={{
                  height: 100,
                  width: 130,
                  resizeMode: "contain",
                  marginVertical: 10,
                  alignSelf: "center",
                }}
              />

              <Card.Content style={{ alignSelf: "center" }}>
                <Title>{props.title1}</Title>
              </Card.Content>
            </Card>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Card
              style={{
                height: 180,
                width: 180,
                borderRadius: 28,
                backgroundColor: "#deded2",
                borderColor: "#dbb17a",
              }}
              elevation={6}
            >
              <Image
                source={props.ur2}
                style={{
                  height: 100,
                  width: 130,
                  resizeMode: "contain",
                  marginVertical: 10,
                  alignSelf: "center",
                }}
              />

              <Card.Content
                style={{
                  alignSelf: "center",
                  marginTop: 10,
                }}
              >
                <Title>{props.title2}</Title>
              </Card.Content>
            </Card>
          </View>
        </View>
      );
    };
    return (
      <ScrollView style={{ marginVertical: 20 }}>
        <Prop
          title1="High Fever"
          title2="Dry Cough"
          ur1={require("../assets/covid-19/PicsArt_06-30-02.40.42.png")}
          ur2={require("../assets/covid-19/PicsArt_06-30-02.42.28.png")}
        />
        <Prop
          title1="Shortness of Breath"
          title2="Sore Throat"
          ur1={require("../assets/covid-19/PicsArt_06-30-02.43.30.png")}
          ur2={require("../assets/covid-19/PicsArt_06-30-02.44.29.png")}
        />
        <Prop
          title1="HeadAche"
          title2="BodyAche"
          ur1={require("../assets/covid-19/PicsArt_06-30-02.45.47.png")}
          ur2={require("../assets/covid-19/PicsArt_06-30-02.46.44.png")}
        />
        <Prop
          title1="Loss of Taste & Smell"
          title2="Chills"
          ur1={require("../assets/covid-19/PicsArt_06-30-02.49.07.png")}
          ur2={require("../assets/covid-19/PicsArt_06-30-02.48.01.png")}
        />
        <View>
          {/* <Video
            source={{
              uri: "https://www.youtube.com/watch?v=DCdxsnRF1F",
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 300, height: 300 }}
          /> */}
          {/* <Video
            source={{ uri: "https://www.youtube.com/watch?v=DCdxsnRF1F" }} // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError} // Callback when video cannot be loaded
            style={styles.backgroundVideo}
          /> */}
        </View>
      </ScrollView>
    );
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default UpSymptom;
