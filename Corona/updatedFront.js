import React, { Component, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  RefreshControl,
  ImageBackground,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import Upcard2 from "./upcard2";
import axios from "axios";
import Upcard from "./upcard";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
// import Icon from "react-native-vector-icons/FontAwesome";

import PieChartWithDynamicSlices from "./PieChart";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
export class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      worldRecord: "",
      refreshing: true,
    };
  }

  componentDidMount() {
    //  const WorldData = async () => await fetchdailydata();
    try {
      axios
        .get("https://api.covid19api.com/world/total")
        .then((result) => {
          const world = {
            confirmed: result.data.TotalConfirmed,
            death: result.data.TotalDeaths,
            recovered: result.data.TotalRecovered,
            active:
              result.data.TotalConfirmed -
              (result.data.TotalDeaths + result.data.TotalRecovered),
          };
          this.setState({ worldRecord: world, refreshing: false });
          //  console.log(this.state.worldRecord.recovered);
        })
        .catch((err) => {});
    } catch (error) {
      console.log(error);
    }
  }
  _onRefresh() {
    this.componentDidMount();
    //this.hi();
    //this._GetState();
    // this.render();
    // this.setState({ refreshing: !this.state.refreshing });
  }
  render() {
    var date1 = new Date();
    const supportedURL = "https://www.akshayapatra.org/covid-relief-services";

    const OpenURLButton = ({ url, children }) => {
      const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);

      return (
        <Button
          icon={<Icon name="hands-helping" size={25} color="#6e4a75" />}
          //type="outline"
          type="clear"
          title={children}
          titleStyle={{
            fontWeight: "bold",
            fontSize: 19,
            color: "#6e4a75",
            // paddingLeft: 3,
          }}
          containerStyle={{
            borderRadius: 20,
            borderColor: "red",
            backgroundColor: "#b6d3cc",
            marginHorizontal: 15,
            marginTop: 10,
          }}
          onPress={handlePress}
        />
      );
    };
    const dialCall = () => {
      let phoneNumber = "";

      if (Platform.OS === "android") {
        phoneNumber = "tel:${011-239 78046}";
      } else {
        phoneNumber = "telprompt:${011-239 78046}";
      }

      Linking.openURL(phoneNumber);
    };
    return (
      <ScrollView
        style={{ backgroundColor: "white" }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => {
              this._onRefresh();
            }}
          />
        }
      >
        <View
          style={{
            ...styles.container1,
            backgroundColor: "#3b6879",
            borderBottomLeftRadius: 130,
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flex: 1,
              backgroundColor: "red",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                paddingTop: 30,
                fontSize: 32,
                paddingLeft: 20,
                fontWeight: "bold",
                fontFamily: "serif",
              }}
            >
              <Text style={{ fontSize: 20 }}>
                Corona Updates {"\n"}
                {"\n"}
                {"\n"}
              </Text>
              Stay Home {"\n"} Stay Safe
            </Text>
            <Text
              style={{
                alignSelf: "flex-start",
                paddingTop: 60,
                paddingLeft: 40,
                fontSize: 25,
                fontFamily: "sans-serif-condensed",
              }}
            >
              All Cases Updates {"\n"}
              <Text style={{ fontSize: 12, fontFamily: "sans-serif-thin" }}>
                Last Updated {date1.getFullYear()}-{date1.getMonth()+1}-
                {date1.getDate() - 1}
              </Text>
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
            <Image
              source={require("../assets/covid-19/Coronavirus.png")}
              style={{
                height: 180,
                width: 180,
                alignSelf: "flex-end",
                opacity: 0.7,
                marginTop: 70,
              }}
            />
          </View>
          <Upcard
            mr={50}
            fx="flex-end"
            N="Active"
            V={this.state.worldRecord.active}
            color="black"
          />
          <Upcard
            mr={-100}
            fx="flex-start"
            N="Cases"
            V={this.state.worldRecord.confirmed}
            color="green"
          />
        </View>
        <View style={{ backgroundColor: "#3b6879", zIndex: -1 }}>
          <View
            style={{
              ...styles.container,
              borderTopRightRadius: 130,
              backgroundColor: "white",
            }}
          >
            <Upcard
              mr={90}
              fx="flex-start"
              N="Recovered"
              V={this.state.worldRecord.recovered}
              color="red"
            />
            <Upcard
              mr={-100}
              fx="flex-end"
              N="Deaths"
              V={this.state.worldRecord.death}
              color="#6e4a75"
            />
          </View>
        </View>
        <View>
          <PieChartWithDynamicSlices
            recovered={this.state.worldRecord.recovered}
            death={this.state.worldRecord.death}
            confirmed={this.state.worldRecord.active}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            iconRight={true}
            raised={true}
            icon={{
              name: "arrow-forward",
              size: 30,
              color: "#6e4a75",
            }} //type="outline"
            type="solid"
            title="Browse All Country Status"
            titleStyle={{
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              paddingLeft: 10,
              fontFamily: "sans-serif-condensed",
            }}
            containerStyle={{
              borderRadius: 20,
              borderColor: "red",
              backgroundColor: "#b6d3cc",
              marginHorizontal: 15,
              marginTop: 10,
            }}
            onPress={() => this.props.navigation.navigate("Home")}
          />
          {/* <Button
            bordered
            full
            rounded
            style={{
              alignSelf: "center",
              marginHorizontal: 40,
            }}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text
              style={{
                color: "#122b3e",
                fontFamily: "sans-serif-medium",
                fontSize: 19,
              }}
            >
              Browse All Country Status
            </Text>
            <Icon name="arrow-forward" style={{ color: "#d21e2b" }} />
          </Button> */}
        </View>
        <View
          style={{
            marginVertical: 10,
            marginBottom: 15,
            width: "100%",
            flexDirection: "row",
            //flexWrap: "wrap",
          }}
        >
          <View>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate("india")}
            >
              <Upcard2
                mr={20}
                fx="flex-start"
                N="India Corona Status"
                V="1111"
                height={200}
                img={require("../assets/covid-19/india123.png")}
                color="#d04e09"
              />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate("stm")}
            >
              <Upcard2
                mr={20}
                fx="flex-start"
                N="Symptoms"
                V="1111"
                height={200}
                img={require("../assets/covid-19/han.png")}
                color="#d21e2b"
              />
            </TouchableNativeFeedback>
          </View>
          <View>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate("Pre")}
            >
              <Upcard2
                mr={20}
                fx="flex-start"
                N="Prevent Getting Sick"
                V="1111"
                height={200}
                img={require("../assets/covid-19/hand.png")}
                color="#64a0aa"
              />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate("faq")}
            >
              <Upcard2
                mr={20}
                fx="flex-start"
                N="FAQ's"
                V="1111"
                height={200}
                img={require("../assets/covid-19/fa.png")}
                color="#68ab77"
              />
            </TouchableNativeFeedback>
          </View>
        </View>
        <View>
          <Card
            elevation={7}
            style={{
              borderRadius: 20,
              marginHorizontal: 10,
              backgroundColor: "#b19083",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/covid-19/doctor2.png")}
                style={{
                  height: 150,
                  borderColor: "red",
                  width: 150,
                  resizeMode: "contain",
                  marginVertical: 5,
                  opacity: 1,
                }}
              />
              <Card.Content style={{ marginVertical: 10 }}>
                <Title style={{ fontFamily: "serif", fontWeight: "bold" }}>
                  Call Your Doctor
                </Title>
                <Paragraph>
                  If you think you have been {"\n"} exposed to Covid-19
                </Paragraph>
                <Card.Actions>
                  <Button
                    icon={{
                      name: "call",
                      size: 25,
                      color: "#6e4a75",
                    }} //type="outline"
                    type="clear"
                    title="Call Now"
                    titleStyle={{
                      fontWeight: "bold",
                      fontSize: 19,
                      color: "#006539",
                      paddingLeft: 10,
                    }}
                    containerStyle={{
                      borderRadius: 20,
                      borderColor: "red",
                      backgroundColor: "#b6d3cc",
                      marginHorizontal: 15,
                      marginTop: 10,
                    }}
                    onPress={dialCall}
                  />
                  {/* <Button
                    bordered
                    full
                    rounded
                    style={{
                      alignSelf: "center",
                      marginRight: 10,
                      backgroundColor: "#647489",
                    }}
                  >
                    <Icon name="call" />

                    <Text
                      style={{
                        textAlign: "center",
                        marginHorizontal: 10,
                        fontSize: 20,
                        fontFamily: "sans-serif-condensed",
                      }}
                    >
                      Call Now
                    </Text>
                  </Button> */}
                </Card.Actions>
              </Card.Content>
            </View>
          </Card>
          <Card
            elevation={7}
            style={{
              marginVertical: 10,
              borderRadius: 20,
              marginHorizontal: 10,
              backgroundColor: "#647489",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/covid-19/hh.png")}
                style={{
                  height: 150,
                  borderColor: "red",
                  width: 150,
                  resizeMode: "contain",
                }}
              />
              <Card.Content style={{ marginVertical: 10 }}>
                <Title
                  style={{
                    fontFamily: "serif",
                    fontWeight: "bold",
                    marginLeft: -24,
                  }}
                >
                  Donate For Humanity
                </Title>
                <Paragraph>
                  If you want to help and {"\n"}support for Covid-19 {"\n"}
                  Patients
                </Paragraph>
                <Card.Actions>
                  <OpenURLButton url={supportedURL}>Donate Now</OpenURLButton>
                  {/* <Button
                    bordered
                    full
                    rounded
                    style={{
                      alignSelf: "center",
                      marginRight: 10,
                      backgroundColor: "#874840",
                    }}
                  >
                    <Icon name="hands-helping" />

                    <Text
                      style={{
                        textAlign: "center",
                        marginHorizontal: 10,
                        fontSize: 20,
                        fontFamily: "sans-serif-condensed",
                      }}
                    >
                      Donate Now
                    </Text>
                  </Button> */}
                </Card.Actions>
              </Card.Content>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 220,
    width: "100%",
    zIndex: -1,
  },
  container1: {
    height: 340,
    width: "100%",
  },
});

export default Update;
