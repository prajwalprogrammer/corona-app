import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import AnimateNumber from "react-native-countup";
export default class Upcard extends React.Component {
  render() {
    return (
      <Card
        elevation={5}
        style={{
          width: "45%",
          borderRadius: 20,
          marginTop: this.props.mr,
          // marginLeft: 10,
          //marginRight: 7,
          marginHorizontal: "2%",
          zIndex: 99,
          alignSelf: this.props.fx,
        }}
      >
        {/* <Card.Cover
          source={require("../assets/covid-19/Coronavirus.png")}
          style={{ height: 50, resizeMode: "contain", width: 80, zIndex: 99 }}
        /> */}
        <Card.Content
          style={{
            // backgroundColor: "red",
            // borderTopLeftRadius: 20,
            //  borderTopRightRadius: 20,
            height: 100,
            // zIndex: -1,
          }}
        >
          <Title
            style={{
              fontSize: 30,
              fontFamily: "sans-serif-condensed",
              color: this.props.color1,
            }}
          >
            {this.props.N}
          </Title>
          <Paragraph
            style={{
              fontFamily: "serif",
              fontSize: 25,
              color: this.props.color,
              paddingTop: 10,
            }}
          >
            <AnimateNumber
              initial={0}
              value={this.props.V}
              timing="easeOut"
              interval={2.5}
              countBy={100000}
            />
          </Paragraph>
        </Card.Content>
      </Card>
    );
  }
}
