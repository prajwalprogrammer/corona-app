import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Image,
  Dimensions,
} from "react-native";
import { Searchbar } from "react-native-paper";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  ListItem,
  Left,
  Body,
  Content,
  Thumbnail,
} from "native-base";
import axios from "axios";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { TouchableNativeFeedback } from "react-native-gesture-handler";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class Listitem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchitem: [],
      isloading: true,
      search: "",
      CountryData: {},
      country: "",
      refreshing: false,
    };
  }
  _onChangeSearch = (value) => {
    this.setState({
      search: value,
      searchitem: this.state.data.filter((i) =>
        i.country.toLowerCase().includes(value.toLowerCase())
      ),
    });
  };

  componentDidMount() {
    this.fetchdata();
  }
  fetchdata = async () => {
    await axios
      .get("https://corona.lmao.ninja/v2/countries")
      .then((res) => {
        this.setState({
          data: res.data,
          searchitem: res.data,
          isloading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  _onPress = async (value) => {
    //console.log(value);
    const fetcheddata = await this._fetchcountry(value);
    //console.log(fetcheddata.active);

    this.setState({ CountryData: fetcheddata, country: value });
    // console.log(this.state.CountryData);
    {
      this.props.navigation.navigate("About", {
        Country:
          value == "USA" || value == "UAE"
            ? value == "USA"
              ? "united-states"
              : "united-arab-emirates"
            : value,
        Country1: this.state.CountryData,
      });
    } // alert(value);
  };
  handleCon1 = async (country) => {
    const fetcheddata = await fetchit(country);
    this.setState({ data1: fetcheddata, country: country });
    console.log(fetcheddata);
    // console.log(this.state.country);
  };
  _fetchcountry = async (country) => {
    try {
      const {
        data: {
          cases,
          recovered,
          deaths,
          active,
          todayCases,
          todayRecovered,
          todayDeaths,
        },
      } = await axios.get(`https://corona.lmao.ninja/v2/countries/${country}`);
      return {
        cases,
        recovered,
        deaths,
        active,
        todayCases,
        todayRecovered,
        todayDeaths,
      };
    } catch (error) {
      console.log(error);
    }
  };
  _onRefresh() {
    this.fetchdata();
    //this.hi();
    //this._GetState();
    // this.render();
    // this.setState({ refreshing: !this.state.refreshing });
  }
  render() {
    const { search } = this.state;

    return (
      <Container>
        <View style={styles.container}>
          <Header>
            <View style={styles.Header_width}>
              <Searchbar
                placeholder="Search Country"
                onChangeText={this._onChangeSearch}
                value={search}
              />
            </View>
          </Header>
          {this.state.isloading ? (
            <View
              style={{
                ...StyleSheet.absoluteFill,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#0984e3" />
            </View>
          ) : null}
          <Content
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this._onRefresh();
                }}
                progressBackgroundColor="#0984e3"
              />
            }
          >
            {this.state.searchitem.map((item, index) => {
              if (
                item.country === "Aruba" ||
                item.country === "Anguilla" ||
                item.country === "Turks and Caicos Islands" ||
                item.country === "Syrian Arab Republic" ||
                item.country === "St. Barth" ||
                item.country === "Sint Maarten" ||
                item.country === "Saint Pierre Miquelon" ||
                item.country === "Saint Martin" ||
                item.country === "S. Korea" ||
                item.country === "Reunion" ||
                item.country === "New Caledonia" ||
                item.country === "Montserrat" ||
                item.country === "Mayotte" ||
                item.country === "Martinique" ||
                item.country === "Macao" ||
                item.country === "MS Zaandam" ||
                item.country === "Libyan Arab Jamahiriya" ||
                item.country === "Lao People's Democratic Republic" ||
                item.country === "Isle of Man" ||
                item.country === "Hong Kong" ||
                item.country === "Holy See (Vatican City State)" ||
                item.country === "Gusdeloupe" ||
                item.country === "Guadeloupe" ||
                item.country === "Greenland" ||
                item.country === "Gibraltar" ||
                item.country === "French Polynesia" ||
                item.country === "French Guiana" ||
                item.country === "Finland" ||
                item.country === "Faroe Islands" ||
                item.country === "Falkland Islands (Malvinas)" ||
                item.country === "Diamond Princess" ||
                item.country === "DRC" ||
                item.country === "Curaçao" ||
                item.country === "Côte d'Ivoire" ||
                item.country === "Réunion" ||
                item.country === "Congo" ||
                item.country === "Cayman Islands" ||
                item.country === "Channel Islands" ||
                item.country === "Caribbean Netherlands" ||
                item.country === "British Virgin Islands" ||
                item.country === "Bosnia" ||
                item.country === "Bermuda"
              ) {
                return;
              } else {
                return (
                  <TouchableNativeFeedback
                    onPress={() => this._onPress(item.country)}
                    key={index}
                  >
                    <ListItem avatar style={styles.list} key={index}>
                      <Thumbnail
                        source={{ uri: item.countryInfo.flag }}
                        key={index}
                      />

                      <View style={styles.country}>
                        <Text key={index} style={styles.country_name}>
                          {item.country === "UAE"
                            ? "united-arab-emirates"
                            : item.country}
                        </Text>
                      </View>
                    </ListItem>
                  </TouchableNativeFeedback>
                );
              }
            })}
          </Content>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dcdde1",
    marginTop: 2,
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 8,
    paddingTop: 8,
    width: windowWidth,
  },
  Header_width: {
    width: windowWidth,
  },
  country: {
    justifyContent: "center",
    paddingLeft: 25,
    alignItems: "flex-end",
  },
  country_name: {
    color: "#dd7b00",
    fontSize: 25,
    fontFamily: "monospace",
  },
});
export default Listitem;
