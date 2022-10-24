//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Constants from "../constants/Constants";
import { Ionicons } from "react-native-vector-icons";
import call from "react-native-phone-call";
import * as Linking from "expo-linking";
import { ScrollView } from "react-native-gesture-handler";

// create a component
const About = () => {
  //make call to organizer
  const MakeCall = (phone) => {
    const args = {
      number: phone, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logobackground}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.p2bLogo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.description}>
     Event promoter and event-related information provider by leveraging world-class technologies.
      </Text>

      <Text style={styles.contactTitle}>Contact us</Text>
      <View style={styles.phoneContainer}>
        <Pressable
          onPress={() => MakeCall("+251949390840")}
          style={styles.phone}
        >
          <Ionicons
            name="call"
            size={20}
            color={Constants.Success}
            style={styles.callIcon}
          />
          <Text style={{fontFamily: Constants.fontFam}}>+251949390840</Text>
        </Pressable>
        <Pressable
          onPress={() => MakeCall("+251911314175")}
          style={styles.phone}
        >
          <Ionicons
            name="call"
            size={20}
            color={Constants.Success}
            style={styles.callIcon}
          />
          <Text style={{fontFamily: Constants.fontFam}}>+251911287645</Text>
        </Pressable>
      </View>

      <View style={styles.email}>
        <Ionicons
          name="mail"
          size={20}
          color={Constants.purple}
          style={styles.callIcon}
        />
        <Text style={{fontFamily: Constants.fontFam}}>contact@p2b-ethiopia.com</Text>
      </View>

      <View style={styles.bottomSection}>
        <Text>Beta Version</Text>
        <View style={styles.developer}>
          <Text style={styles.developedBy}>Powered By - </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://afromina-digitals.com/")}
          >
            <Text style={styles.afromina}>AfroMiNA Digital Technologies PLC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    backgroundColor: Constants.background,
  },
  logobackground: {
    backgroundColor: Constants.background,
    borderRadius: Constants.borderRad,
    marginTop: 18,
  },
  p2bLogo: {
    width: 180,
    height: 180,
  },

  description: {
    width: "88%",
    alignSelf: "center",
    padding: 8,
    textAlign:"center",
    lineHeight: 18,
    fontFamily: Constants.fontFam,
    fontSize: Constants.headingthree,
    color: Constants.Secondary,
    
  },
  contactTitle: {
    fontFamily: Constants.fontFam,
    fontWeight: Constants.Bold,
    fontSize: Constants.headingone,
    color: Constants.purple,
    paddingTop: 20,
  },
  phoneContainer: {
    width: "90%",
    flexDirection: "column",
    padding: 10,
    marginTop: 10,
  },
  phone: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Constants.Faded,
    marginHorizontal: 10,
    padding: 5,
    paddingRight: 20,
    borderRadius: Constants.tinybox,
    borderColor: Constants.Success,
    borderWidth:0.4,
  },
  callIcon: {
    // backgroundColor: Constants.background,
    padding: 8,
    borderRadius: Constants.tiny,
    marginRight: 5,
  },
  email: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    padding: 5,
    borderRadius: Constants.tinybox,
    backgroundColor: Constants.Faded,
    borderColor: Constants.purple,
    borderWidth:0.4,
  },
  bottomSection: {
    marginTop: 40,
 margin:20,
    justifyContent: "center",
    alignItems: "center",
  },
  developer: {
    flexDirection: "row",
    marginTop: 10,
  },
  developedBy:{
   fontFamily: Constants.fontFam,
   fontWeight: Constants.Boldtwo,
   fontSize: Constants.headingthree
  },
  afromina: {
    color: "#1264A4",
    fontWeight: Constants.Boldtwo,
    textDecorationLine: "underline",
  },
});

//make this component available to the app
export default About;
