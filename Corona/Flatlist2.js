import React, { Component } from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
export class Flatlist2 extends Component {
  render() {
    return (
      <View>
        <ListItem
          roundAvatar
          title={this.props.title}
          chevron
          chevronColor="red"
          titleStyle={{ fontSize: 20 }}
          leftAvatar={{ source: this.props.img }}
          containerStyle={{
            backgroundColor: "#b6d3cc",
            borderRadius: 30,
            marginTop: 10,
            borderBottomWidth: 3,
            borderBottomColor: "#5f7682",
          }}
          //   style={{
          //     borderBottomWidth: 3,
          //     borderBottomColor: "#ffa726",
          //     color: "rgb(53, 73, 101)",
          //   }}
        />
      </View>
    );
  }
}
export default Flatlist2;
