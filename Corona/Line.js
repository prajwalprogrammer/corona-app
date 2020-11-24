import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
export class Line extends Component {
  render() {
    return (
      <View>
        <LineChart
          data={{
            labels: this.props.lb,
            datasets: [
              {
                data: this.props.Da,
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={Dimensions.get("window").height / 2}
          //yAxisLabel="$"
          //yAxisSuffix="k"
          fromZero="true"
          // yLabelsOffset={3}
          // yAxisLabel={3}
          //yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#264d7e",
            backgroundGradientFrom: "#264d7e",
            backgroundGradientTo: "#94bfac",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
              // marginVertical: 18,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          verticalLabelRotation={20}
          l
          showValuesOnTopOfBars="true"
          style={{
            marginVertical: 18,
            borderRadius: 16,
          }}
        />
      </View>
    );
  }
}

export default Line;
