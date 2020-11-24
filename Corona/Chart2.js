import React, { Component, useState, useEffect } from "react";
import {
  Text,
  View,
  CheckBox,
  Button,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from "react-native";
import Flatlist from "./flatlist";
import Upcard from "./upcard";
import axios from "axios";
import { Line } from "./Line";
import { LineChart } from "react-native-chart-kit";
import Bar from "./Bar";
import { ScrollView } from "react-native-gesture-handler";
function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
export default function Chart2({ route }) {
  const { Country } = route.params;
  const { Country1 } = route.params;
  const [confirmed, setconfirmed] = useState([]);
  const [deaths, setdeaths] = useState([]);
  const [recovered, setrecovered] = useState([]);
  const [All, setAll] = useState([]);
  const [state, setstate] = useState([null]);
  const [val, setval] = useState("All");
  const [value, setvalue] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [refreshing, setrefreshing] = useState(false);

  var arrD = [];
  var arrR = [];
  var arrA = [];
  var arrC = [];
  var arr1 = [];
  var a = [];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    GetData();
  }, []);
  const GetData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.covid19api.com/country/${Country}`
      );
      console.log(data.length);
      let result = Object.values(
        data.reduce((c, { Date, Active, Confirmed, Recovered, Deaths }) => {
          c[Date] = c[Date] || {
            Date,
            Active: [],
            Confirmed: [],
            Recovered: [],
            Deaths: [],
          };
          c[Date].Active = c[Date].Active.concat(
            Array.isArray(Active) ? Active : [Active]
          );
          c[Date].Confirmed = c[Date].Confirmed.concat(
            Array.isArray(Confirmed) ? Confirmed : [Confirmed]
          );
          c[Date].Recovered = c[Date].Recovered.concat(
            Array.isArray(Recovered) ? Recovered : [Recovered]
          );
          c[Date].Deaths = c[Date].Deaths.concat(
            Array.isArray(Deaths) ? Deaths : [Deaths]
          );
          return c;
        }, {})
      );
      //console.log("hiii" + result[0].Confirmed);
      // console.log(data.length);
      console.log("hii" + result.length);
      //console.log(Re(data));

      // console.log(data);
      for (var j = result.length - 1; j >= 0; j = j - 30) {
        // console.log("hiii" + result[j].Confirmed);
        arrC.push(
          result[j].Confirmed.reduce(function (a, b) {
            return a + b;
          }, 0)
        );
        arrR.push(
          result[j].Recovered.reduce(function (a, b) {
            return a + b;
          }, 0)
        );
        arrD.push(
          result[j].Deaths.reduce(function (a, b) {
            return a + b;
          }, 0)
        );
        arrA.push(
          result[j].Active.reduce(function (a, b) {
            return a + b;
          }, 0)
        );
      }
      // console.log(data);
      // for (var j = data.length - 1; j >= 0; j = j - 30) {
      //   arrC.push(data[j].Confirmed);
      //   arrR.push(data[j].Recovered);
      //   arrD.push(data[j].Deaths);
      //   arrA.push(data[j].Active);
      //   arr1.push(data[j].Date);
      // }

      for (var i = 0; i < arrR.length - 1; i++) {
        arrA[i] = arrA[i] - arrA[i + 1] > 0 ? arrA[i] - arrA[i + 1] : 0;
        arrD[i] = arrD[i] - arrD[i + 1] > 0 ? arrD[i] - arrD[i + 1] : 0;
        arrR[i] = arrR[i] - arrR[i + 1] > 0 ? arrR[i] - arrR[i + 1] : 0;
        arrC[i] = arrC[i] - arrC[i + 1] > 0 ? arrC[i] - arrC[i + 1] : 0;
      }
      arrA.reverse();
      arrC.reverse();
      arrR.reverse();
      arrD.reverse();
      setconfirmed(arrC);
      setdeaths(arrD);
      setrecovered(arrR);
      setAll(arrA);
      setLoading(false);
      // console.log(confirmed);
      // console.log(deaths);
      // console.log(recovered);
      // console.log(All);
      // console.log(arr1);
      var d = new Date();
      console.log(d.getMonth());
      for (var i = 0; i < d.getMonth(); i++) {
        a[i] = months[i];
      }
      if (result.length % 30 === 0) {
        a[i] = months[i];
      }
      setvalue(a);
      console.log(a);
    } catch (error) {
      console.log("");
    }
  };

  const onRefresh = React.useCallback(() => {
    setrefreshing(true);

    wait(2000).then(() => setrefreshing(false));
  }, [refreshing]);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* <Text style={{ fontSize: 20, alignSelf: "center" }}>
        Current Status in {Country}
      </Text> */}
      {Loading ? (
        <View
          style={{
            //...StyleSheet.absoluteFill,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#0984e3" />
        </View>
      ) : (
        <View>
          <Text
            style={{
              fontSize: 25,
              alignSelf: "center",
              fontVariant: ["oldstyle-nums"],
              fontFamily: "sans-serif-condensed",
              fontWeight: "bold",
            }}
          >
            Current Status in {Country}
          </Text>
          {val === "All" ? (
            <Bar
              active={Country1.active}
              recovered={Country1.recovered}
              deaths={Country1.deaths}
            />
          ) : (
            <Line lb={value} Da={state} />
          )}
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <CheckBox
              value={val === "All" ? true : false}
              onValueChange={() => {
                setval("All");
              }}
            />
            <Text style={{ fontSize: 20, fontFamily: "sans-serif-condensed" }}>
              All
            </Text>
            <CheckBox
              value={val === "Confirmed" ? true : false}
              onValueChange={() => {
                setval("Confirmed"), setstate(confirmed);
              }}
            />
            <Text style={{ fontSize: 20, fontFamily: "sans-serif-condensed" }}>
              Confirmed
            </Text>
            <CheckBox
              value={val === "Active" ? true : false}
              onValueChange={() => {
                setval("Active"), setstate(All);
              }}
            />
            <Text style={{ fontSize: 20, fontFamily: "sans-serif-condensed" }}>
              Active
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <CheckBox
              value={val === "Recovered" ? true : false}
              onValueChange={() => {
                setval("Recovered"), setstate(recovered);
              }}
            />
            <Text style={{ fontSize: 20, fontFamily: "sans-serif-condensed" }}>
              Recovered
            </Text>
            <CheckBox
              value={val === "Deaths" ? true : false}
              onValueChange={() => {
                setval("Deaths"), setstate(deaths);
              }}
              style={{ alignSelf: "center" }}
            />
            <Text style={{ fontSize: 20, fontFamily: "sans-serif-condensed" }}>
              Deaths
            </Text>
          </View>
          {/* <Button onPress={() => setstate(deaths)} title="Confirmed"></Button> */}

          <View>
            {/* <Flatlist
              title="confirmed"
              value={Country1.cases}
              subValue={Country1.todayCases}
            /> */}
            {/* <Flatlist
              title="Active"
              value={Country1.active}
              subValue={
                Country1.todayCases -
                (Country1.todayDeaths + Country1.todayRecovered)
              }
            /> */}
            <View style={{ flexDirection: "row" }}>
              <Upcard
                mr={10}
                fx="flex-end"
                N="Confirmed"
                V={Country1.cases}
                color="black"
                // subvalue={Country1.todayCases}
              />
              <Upcard
                mr={10}
                fx="flex-end"
                N="Active"
                V={Country1.active}
                color="#d21e2b"
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Upcard
                mr={10}
                fx="flex-end"
                N="Deaths"
                V={Country1.deaths}
                color="#f6894b"
                // subvalue={Country1.todayDeaths}
              />
              <Upcard
                mr={10}
                fx="flex-end"
                N="Recovered"
                V={Country1.recovered}
                color="#95b43b"
                //subvalue={Country1.todayRecovered}
              />
            </View>
            {/* <Flatlist
              title="Deaths"
              value={Country1.deaths}
              subValue={Country1.todayDeaths}
            />
            <Flatlist
              title="Recovered"
              value={Country1.recovered}
              subValue={Country1.todayRecovered}
            /> */}
          </View>
        </View>
      )}
    </ScrollView>
  );
}
