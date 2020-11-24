import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import Accordian from "./faq2";
import { ScrollView } from "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-view";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          id: 1,
          title: "What is corona virus ",
          body:
            "Corona viruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19",
        },
        {
          id: 2,
          title: "What is COVID-19 ",
          body:
            "COVID-19 is the infectious disease caused by the most recently discovered corona virus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019",
        },
        {
          id: 3,
          title: "What are the symptoms of COVID-19  ",
          body:
            "The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment",
        },
        {
          id: 4,
          title: "How does COVID-19 spread  ",
          body:
            "People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick",
        },

        {
          id: 5,
          title:
            "Can the virus that causes COVID-19 be transmitted through the air?  ",
          body:
            "Studies to date suggest that the virus that causes COVID-19 is mainly transmitted through contact with respiratory droplets rather than through the air.  See previous answer on “How does COVID-19 spread?” ",
        },
        {
          id: 6,
          title: "How could I become infected with this virus?  ",
          body:
            "To date, we do not know how humans have become infected with this virus. Investigations are underway to determine the virus source, types of exposure that lead to infection, mode of transmission and the clinical pattern and course of disease ",
        },
        {
          id: 7,
          title: "Is there a vaccine for the coronavirus?",
          body: "There is no vaccine currently available.            ",
        },
        {
          id: 8,
          title: "What can I do to protect myself?            ",
          body:
            "Exactly how people become infected with this virus is not known at this time. However, some general measures that would be prudent and help prevent the acquisition of any respiratory illness are to avoid close contact, when possible, with anyone who shows symptoms of illness (coughing and sneezing), and to maintain good hand hygiene.",
        },
      ],
    };
  }

  render() {
    return (
      <View>
        <Image
          source={require("../assets/covid-19/faqoncovid.png")}
          style={{ maxHeight: height / 4, maxWidth: width }}
        />
        {/* <ScrollView> */}
        <ScrollView style={styles.container} key={Math.random()}>
          {this.renderAccordians()}
        </ScrollView>
        {/* </ScrollView> */}
      </View>
    );
  }

  renderAccordians = () => {
    const items = [];
    for (item of this.state.menu) {
      items.push(
        <Accordian key={items.title} title={item.title} data={item.body} />
      );
    }
    return items;
  };
}

const styles = StyleSheet.create({
  container: {
    //flex: 5,
    //paddingTop: 100,
    maxHeight: height - 180,
    backgroundColor: "white",
    borderTopWidth: 10,
    borderTopColor: "#4C90DF",
  },
});
