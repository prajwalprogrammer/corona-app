import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  YellowBox,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-view";

import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";
YellowBox.ignoreWarnings(["Remote debugger", "Warning: Each child in a list"]);
export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View key={this.props.key}>
        <TouchableOpacity
          key={this.props.key}
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}
        >
          <Text key={this.props.key} style={[styles.title, styles.font]}>
            {this.props.title}
          </Text>
          <Icon
            key={this.props.key}
            name={this.state.expanded ? "remove" : "add"}
            size={20}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} key={this.props.key} />
        {this.state.expanded && (
          <View style={styles.child} key={this.props.key}>
            <Text
              key={this.props.key}
              style={{ fontFamily: "monospace", fontWeight: "300" }}
            >
              {this.props.data}
            </Text>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    fontFamily: "sans-serif-condensed",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#CDA380",
  },
  parentHr: {
    height: 1,
    color: "#80A3CD",
    width: "100%",
  },
  child: {
    backgroundColor: "#80A3CD",
    padding: 16,
  },
});
