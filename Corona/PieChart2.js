import React from "react";
import axios from "axios";
import { Text, View, Dimensions } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import { Circle } from "react-native-shape";
import { PieChart } from "react-native-svg-charts";
import { ActivityIndicator } from "react-native-paper";
class PieChartWithDynamicSlices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: "",
        value: 0,
      },
      labelWidth: 0,
      redius: 125,
      PieData: [this.props.recovered, this.props.death, this.props.confirmed],
    };
  }
  render() {
    // title = params.title.title
    //body = param.body.body
    //const { navigation,route } = this.props.navigation;
    //const {CountryData}=navigation.getParam('CountryData')
    //  console.log(this.props.navigation.state.params.Countrydata);
    // console.log(this.props.navigation.state.params.Country);
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ["Recovered", "Deaths", "Confirmed"];
    // const values = [105.266, 120, 135];
    const values = { ...this.state.PieData };
    const colors = ["#6D0D8D", "#e8a534", "#d94b4d"];
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: {
          outerRadius: label === key ? this.state.redius + "%" : 120 + "%",
          padAngle: label === key ? 0.1 : 0,
        },
        onPress: () =>
          this.setState({
            selectedSlice: { label: key, value: values[index] },
          }),
      };
    });
    const deviceWidth = Dimensions.get("window").width;

    return (
      <View>
        <View style={{ justifyContent: "flex-start", marginTop: 25 }}>
          <PieChart
            style={{ height: 300 }}
            outerRadius={"80%"}
            innerRadius={"45%"}
            data={data}
          />
          <Text
            onLayout={({
              nativeEvent: {
                layout: { width },
              },
            }) => {
              this.setState({ labelWidth: width });
            }}
            style={{
              position: "absolute",
              left: deviceWidth / 2 - labelWidth / 2,
              textAlign: "center",
              marginTop: 120,
              fontSize: 25,
              color: "#000000",
            }}
          >
            {`${label} \n ${value}`}
          </Text>
        </View>
      </View>
    );
  }
}

export default PieChartWithDynamicSlices;
