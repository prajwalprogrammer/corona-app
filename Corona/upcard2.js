import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import AnimateNumber from "react-native-countup";
import { View } from "native-base";
import { Image, Dimensions } from "react-native";
const width = Dimensions.get("screen").width;
export default class Upcard2 extends React.Component {
  render() {
    return (
      <View>
        <Card
          elevation={8}
          style={{
            width: width / 2,
            borderRadius: 20,
            marginTop: this.props.mr,
            marginLeft: 7,
            marginRight: 8,
            // marginHorizontal: "%",
            zIndex: 99,
            // alignSelf: this.props.fx,
          }}
        >
          <View style={{ zIndex: 99, height: 80, alignSelf: "center" }}>
            <Image
              source={this.props.img}
              style={{
                //resizeMode: "contain",
                // backgroundColor: "red",
                height: 120,
                width: 120,
                // flex: 5,
                marginTop: 10,
                resizeMode: "contain",
              }}
            />
          </View>
          <Card.Content
            style={{
              backgroundColor: this.props.color,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              height: 120,
              zIndex: -1,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          >
            <View style={{ alignSelf: "center", paddingTop: 40 }}>
              <Title
                style={{
                  fontSize: 25,
                  color: "white",
                  fontFamily: "sans-serif-condensed",
                }}
              >
                {this.props.N}
              </Title>
            </View>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
