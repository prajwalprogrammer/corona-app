import * as React from "react";
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { List, Checkbox } from "react-native-paper";
import Axios from "axios";
import { View, Text } from "native-base";
import { Divider } from "react-native-elements";
import constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import Constants from "expo-constants";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true,
      arr: [],
      isLoading: true,
      refreshing: false,
    };
  }

  componentDidMount() {
    this._GetState();
  }
  _GetState = async() =>{
    try {
      await Axios.get(`https://api.covid19india.org/state_district_wise.json`)
      .then((Response)=>{
        let val = Response.data;
        this.setState({ arr: val, isLoading: false });
       // console.log(Response.data.Maharashtra.districtData)
       // Object.entries(arr[`${i}`]["district"]).map((i2) =>
       // this.setState({ Videos: Response});
      })
     // console.log(data.Maharashtra);
    
    } catch (error) {
      console.log(error);
    }

  }
  // _GetState = async () => {
  //   axios
  //     .get(
  //       "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",
  //       {
  //         method: "GET",
  //         headers: {
  //           "x-rapidapi-host":
  //             "corona-virus-world-and-india-data.p.rapidapi.com",
  //           "x-rapidapi-key":
  //             "bce536fc87msh2b78d8b82eca030p1b24d7jsn7c511e53b431",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       //console.log(response.data.state_wise.Bihar.district);
  //       let val = response.data.state_wise;
  //       //  this.setState({ arr: response.data.state_wise });
  //       this.setState({ arr: val, isLoading: false });
  //       //console.log(this.state.arr);
  //       // response.data.map((hii, i) => {
  //       //   console.log("first" + hii);
  //       // });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    });

  hi() {
    alert("hii123");
  }
  _onPress = (i) => {
    let da1 = [];
    let stName = i;
    // alert(i);
    da1 = this.state.arr;
    console.log(da1["Maharashtra"]["district"]["Latur"]);
  };
  _onRefresh() {
    //this.hi();

    this._GetState();

    // this.render();
    // this.setState({ refreshing: !this.state.refreshing });
  }

  render() {
    var a = this.state.arr;
    const { arr } = this.state;
    var data1 = [];
    for (var key in this.state.arr) {
      if(key !="State Unassigned")
      data1.push(key);
    }

    return (
      // <View>
      //   <List.Section
      //     title="Accordions"
      //     style={{ backgroundColor: "transparent", marginTop: 50 }}
      //   >
      //     <List.Accordion
      //       title="Uncontrolled Accordion"
      //       left={(props) => <List.Icon {...props} icon="folder" />}
      //     >
      //       <List.Accordion
      //         title="First item"
      //         style={{ backgroundColor: "red" }}
      //         onPress={() => this.gg()}
      //       >
      //         <List.Item title="Second item" onPress={() => this.gg()} />
      //       </List.Accordion>
      //       <List.Item title="Second item" />
      //       <List.Item title="First item" />
      //       <List.Item title="Second item" />
      //     </List.Accordion>

      //     <List.Accordion
      //       title="Controlled Accordion"
      //       left={(props) => <List.Icon {...props} icon="folder" />}
      //       expanded={this.state.expanded}
      //       onPress={this._handlePress}
      //     >
      //       <List.Item title="First item" />
      //       <List.Item title="Second item" />
      //     </List.Accordion>
      //   </List.Section>
      <View
        style={{
          // marginTop: Constants.statusBarHeight,
          backgroundColor: "#a2b398",
        }}
      >
        <View
          style={{
            backgroundColor: "#f5c964",
            // borderBottomWidth: 10,
            // borderBottomColor: "#6e4a75",
            paddingBottom: 15,
            marginTop: Constants.statusBarHeight,
          }}
        >
          <Text
            style={{
              fontSize: 37,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "serif",
              // paddingTop: 10,
            }}
          >
            States In India
          </Text>
        </View>
        {this.state.isLoading ? (
          <View
            style={{
              //flex: 1,
              justifyContent: "center",
              alignItems: "center",
              ...StyleSheet.absoluteFill,
            }}
          >
            <ActivityIndicator size="large" color="#0984e3" />
          </View>
        ) : null}
        {/* <Text>{this.hi()}</Text> */}
        {/* <View>
            {this.state.arr.forEach(function (item) {
              return <Text>{item}</Text>;
            })}
          </View> */}
        <ScrollView
          style={{ marginBottom: 50 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this._onRefresh();
              }}
            />
          }
        >
          <List.Section>
            {data1.map((i) =>(
              
              <List.Accordion
                title={i}
                //  left={(props) => <List.Icon {...props} icon="folder" />}
                id={Math.random()}
                titleStyle={{
                  fontWeight: "bold",
                  fontSize: 25,
                  paddingLeft: 20,
                  color: "white",
                  fontFamily: "monospace",
                }}
                style={{
                  backgroundColor: "#79a196",
                  borderBottomWidth: 6,
                  borderBottomColor: "#646e83",
                }}
               // onPress={() => this._onPress(i)}
              >
                {/* <List.Item title={i} /> */}
                <Divider style={{ backgroundColor: "blue" }} />
                <List.Section>
                  {Object.entries(arr[`${i}`]["districtData"]).map((i2) => (
                    <List.Accordion
                      title={`${i2[0]}`}
                      id={Math.random()}
                      titleStyle={{
                        fontSize: 20,
                        paddingLeft: 50,
                        fontFamily: "sans-serif-condensed",
                        fontWeight: "600",
                      }}
                      style={{
                        backgroundColor: "#a2b398",
                        borderBottomWidth: 5,
                        borderBottomColor: "#93612b",
                      }}
                    >
                      <Divider style={{ backgroundColor: "blue" }} />

                      <List.Item
                        title={
                          "Cases: " +
                          arr[`${i}`]["districtData"][`${i2[0]}`].confirmed
                        }
                        style={styles.Con}
                        titleStyle={{ fontSize: 17 }}
                      />
                      <List.Item
                        title={
                          "Active: " +
                          arr[`${i}`]["districtData"][`${i2[0]}`].active
                        }
                        style={styles.Con}
                        titleStyle={{ fontSize: 17 }}
                      ></List.Item>

                      <List.Item
                        title={
                          "Recovered: " +
                          arr[`${i}`]["districtData"][`${i2[0]}`].recovered
                        }
                        style={styles.Con}
                        titleStyle={{ fontSize: 17 }}
                      />
                      <List.Item
                        title={
                          "Deaths: " +
                          arr[`${i}`]["districtData"][`${i2[0]}`].deceased
                        }
                        titleStyle={{ fontSize: 17 }}
                        style={styles.Con}
                      />
                      {/* console.log(arr[`${i}`]["district"][`${i2[0]}`]) */}
                      <Divider style={{ backgroundColor: "blue" }} />
                    </List.Accordion>
                  ))}
                </List.Section>
                {/* {Object.entries(arr[`${i}`]["district"]).forEach(
                    ([key, value]) => (
                      // <List.Item title="kii" />
                      <Text>{`${key}`}</Text>
                    )
                    //
                  )} */}
                {/* {a.map((i2) => console.log(i2))} */}
              </List.Accordion>
            ))}
          </List.Section>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Con: {
    justifyContent: "flex-end",
    paddingLeft: 70,
    backgroundColor: "#d1d2bf",
  },
});

export default MyComponent;
