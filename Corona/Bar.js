import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").Height / 2;
export class Bar extends Component {
  render() {
    const chartConfig = {
      backgroundGradientFrom: "#264d7e",
      backgroundGradientFromOpacity: 1,
      backgroundGradientTo: "#94bfac",
      backgroundGradientToOpacity: 1,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 16, // optional, default 3
      barPercentage: 1,
      decimalPlaces: 0,

      useShadowColorFromDataset: false, // optional,
    };
    const data = {
      labels: ["Infected", "Recovered", "Deaths"],
      datasets: [
        {
          data: [this.props.active, this.props.recovered, this.props.deaths],
        },
      ],
    };
    return (
      <View>
        <BarChart
          style={{
            marginVertical: 18,
            fontSize: 19,
            borderRadius: 10,
          }}
          // style={graphStyle}
          data={data}
          width={screenWidth}
          height={375}
          //yAxisLabel="$"
          chartConfig={chartConfig}
          //verticalLabelRotation={30}
          fromZero="true"
          showValuesOnTopOfBars="true"
        />
      </View>
    );
  }
}

export default Bar;
