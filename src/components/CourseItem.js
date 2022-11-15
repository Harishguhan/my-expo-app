import { StyleSheet, View, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function CourseItem(props) {
  return (
    <>
      <View style={styles.main}>
        <View>
          {props.courseList.map((data) => (
            // <Pressable onPress={deleteItem.bind(this, data.id)}>
            <View style={styles.data} key={data.id}>
              <Text>{data.name}</Text>
              <AntDesign
                name="close"
                onPress={() => props.deleteItem(data.id)}
                size={24}
                color="black"
              />
            </View>

            // </Pressable>
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderColor: "skyblue",
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "skyblue",
  },
});
