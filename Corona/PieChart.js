import React from "react";
import { Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-svg-charts";

class PieChartWithDynamicSlices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: "Recovered",
        value: 0,
      },
      labelWidth: 0,
    };
  }
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ["Recovered", "Deaths", "Confirmed"];
    const values = [
      this.props.recovered,
      this.props.death,
      this.props.confirmed,
    ];
    const colors = ["#6D0D8D", "#e8a534", "#d94b4d"];
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: {
          outerRadius: label === key ? 125 + "%" : 120 + "%",
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
      <View style={{ justifyContent: "center", flex: 1 }}>
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
            fontSize: 25,
            color: "#cd6d71",
            fontFamily: "serif",
          }}
        >
          {`${label} \n ${value ? value : this.props.recovered}`}
        </Text>
      </View>
    );
  }
}

export default PieChartWithDynamicSlices;
