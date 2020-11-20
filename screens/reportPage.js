/***************************************************************
 * reportPage.js
 *
 * Last modified: October 16, 2020
 *
 * reportPage.js gives users the ability to submit a report on their location
 ***************************************************************/

// import functions and libraries
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { StackActions } from "@react-navigation/native";

// import custom functions and styles
import StatusButton from "../shared/statusButton";
import SubmitButton from "../shared/submitButton";
import { globalStyles } from "../styles/global";

export default function ReportPage({ route, navigation }) {
  //makes a list for report buttons, the weight property is for the database
  const [buttonList, setButtons] = useState([
    {
      name: "NOT BUSY",
      bgColor: globalStyles.notBusyBackground,
      chart: require("../assets/pie-charts/1.png"),
      isSelected: false,
      weight: "1",
      key: "1",
    },
    {
      name: "SLIGHTLY BUSY",
      bgColor: globalStyles.slightlyBusyBackground,
      chart: require("../assets/pie-charts/2.png"),
      isSelected: false,
      weight: "2",
      key: "2",
    },
    {
      name: "BUSY",
      bgColor: globalStyles.busyBackground,
      chart: require("../assets/pie-charts/3.png"),
      isSelected: false,
      weight: "3",
      key: "3",
    },
    {
      name: "VERY BUSY",
      bgColor: globalStyles.veryBusyBackground,
      chart: require("../assets/pie-charts/4.png"),
      isSelected: false,
      weight: "4",
      key: "4",
    },
    {
      name: "EXTREMELY BUSY",
      bgColor: globalStyles.extremelyBusyBackground,
      chart: require("../assets/pie-charts/5.png"),
      isSelected: false,
      weight: "5",
      key: "5",
    },
  ]);

  // stores the active button to allow only one button as "grayed out"
  const [activeButton, setActiveButton] = useState(false);

  // keeps the submit button disabled until a selection is made
  const [submitBlocker, setSubmitBlocker] = useState(true);

  // handles changing button status
  const statusButtonCallback = (activeID) => {
    // find the button to change status
    const index = buttonList.findIndex((element) => element.key == activeID);
    // create copy of active and change isSelected of target button to 'true'
    let newButtons = [...buttonList];
    // check if one button has already been selected
    for (var i = 0; i < newButtons.length; i++) {
      if (newButtons[i].isSelected) {
        // change isSelected of previously selected button to 'false'
        newButtons[i].isSelected = false;
      }
    }
    // change isSelected of target button to 'true'
    newButtons[index] = {
      ...newButtons[index],
      isSelected: !newButtons[index].isSelected,
    };

    // update buttonList
    setButtons(newButtons);

    //sets the SubmitBlocker hook to false
    setSubmitBlocker(false);
  };

  const numCols = 1;

  return (
    <View style={globalStyles.reportScreenContainer}>
      {/* Location name */}
      <View style={globalStyles.locationTextContainer}>
        <Text style={globalStyles.locationText}>
          {route.params.locationname}{" "}
        </Text>
      </View>

      {/* Report button list */}
      <View style={globalStyles.statusListContainer}>
        <FlatList
          key={numCols}
          style={globalStyles.statusList}
          data={buttonList}
          numColumns={numCols}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <StatusButton
                name={item.name}
                buttonColor={item.bgColor}
                buttonID={item.key}
                selected={item.isSelected}
                reportCallback={statusButtonCallback}
              >
                <View style={globalStyles.reportImageContainer}>
                  <Image source={item.chart} style={globalStyles.pieChart} />
                </View>
                <View style={globalStyles.reportTextContainer}>
                  <Text style={globalStyles.statusText}>{item.name}</Text>
                </View>
              </StatusButton>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>

      {/* Submit button */}
      <View style={globalStyles.submitContainer}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
          disabled={submitBlocker}
        >
          <SubmitButton
            name="SUBMIT"
            isSelected={true}
            buttonColor={[
              submitBlocker
                ? globalStyles.submitButtonDisabled
                : globalStyles.submitButtonEnabled,
            ]}
            invalid={submitBlocker}
          >
            <Text style={globalStyles.submitText}>SUBMIT</Text>
          </SubmitButton>
        </TouchableOpacity>
      </View>
    </View>
  );
}
