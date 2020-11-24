import React, { Component } from "react";
import { Text, View, YellowBox } from "react-native";
import { ListItem } from "react-native-elements";
YellowBox.ignoreWarnings(["Remote debugger", "Warning: Failed prop type"]);

export class Flatlist extends Component {
  render() {
    return (
      <ListItem
        title={this.props.title}
        titleStyle={{ fontSize: 25, marginLeft: 12, fontWeight: "bold" }}
        rightSubtitle={
          this.props.subValue > 0 ? "+" + this.props.subValue : "0"
        }
        rightTitle={this.props.value}
        rightTitleStyle={{ fontSize: 20, marginTop: 19, fontWeight: "bold" }}
        rightSubtitleStyle={{ fontSize: 13 }}
        leftAvatar
        containerStyle={{
          height: 30,
          padding: 30,
          backgroundColor: "#f3d163",
          borderRadius: 30,
          marginTop: 2,
          //   // borderBottomWidth: 3,
          //   // borderBottomColor: "#ffa726",
        }}
        style={
          {
            //   // borderWidth: 1,
            //   //borderColor: "#21A45C",
            //   //borderBotttomWidth: 5,
            //   // borderEndColor: "#21A45C",
            //   // borderBotttomWidth: 5,
            //   //  borderBottomColor: "#21A45C",
            //   // backgroundColor: "#21A45C",
          }
        }
      />
    );
  }
}

export default Flatlist;
