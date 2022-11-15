import { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CourseInput from "./src/components/CourseInput";
import CourseItem from "./src/components/CourseItem";
import PrimaryBtn from "./src/components/PrimaryBtn";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./constants/colors";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modelvisible, setmodelvisible] = useState(false);
  const [courseList, setCourseList] = useState([]);

  const CancelModel = () => {
    setmodelvisible(false);
  };
  const modalCancel = () => {
    Alert.alert("Oops..!", "Do you want to Cancel", [
      { text: "No", style: "cancel", onPress: modalShow },
      { text: "Yes", style: "destructive", onPress: CancelModel },
    ]);
    // setmodelvisible(false);
  };
  const modalShow = () => {
    setmodelvisible(true);
  };
  const deleteItem = (id) => {
    setCourseList((current) => {
      return current.filter((course) => course.id !== id);
    });
  };
  const handleClick = (value) => {
    setCourseList((current) => [
      ...current,
      { name: value, id: Math.random().toString() },
    ]);
    setmodelvisible(false);
  };

  return (
    <>
    <StatusBar style="light" />
      <SafeAreaView>
        {modelvisible && (
          <Modal
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <CourseInput handleClick={handleClick} modalCancel={modalCancel} CancelModel={CancelModel}/>
          </Modal>
        )}
        <ImageBackground
          source={require("./assets/homeimage.jpg")}
          resizeMode="cover"
          style={styles.screen}
        >
          <ScrollView>
            <View>
              <View style={styles.container}>
                <Text style={styles.heading}>E-Learning</Text>
                <View style={styles.btnMain}>
                <PrimaryBtn
                  modalShow={modalShow}
                  name={"Add new Course"}
                ></PrimaryBtn>
                </View>
              </View>
            </View>
            <CourseItem courseList={courseList} deleteItem={deleteItem} />
          </ScrollView>
          <View style={styles.BottomIcons}>
        <View>
          <Entypo
            name="user"
            style={{ textAlign: "center" }}
            size={24}
            color="black"
          />
          <Text>user</Text>
        </View>
        <View>
          <Ionicons
            style={{ textAlign: "center" }}
            name="search"
            size={24}
            color="black"
          />
          <Text>Search</Text>
        </View>
        <View>
          <Ionicons
            name="ios-settings"
            style={{ textAlign: "center" }}
            size={24}
            color="black"
          />
          <Text>Info</Text>
        </View>
        <View>
          <AntDesign
            name="profile"
            style={{ textAlign: "center" }}
            size={24}
            color="black"
          />
          <Text>Profile</Text>
        </View>
      </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 50,
    marginTop: 30,
  },
  screen: {
    width: "100%",
    height: "100%",
  },
  btnMain:{
    flex:1,
    marginTop:30,
    // flexDirection:'row',
    // justifyContent:'center',
    alignItems:'center',
    
  },
  heading: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth:2,
    borderColor:'white',
    padding:10,
    marginBottom:5,
    width:"100%",
  },
  backIcon: {
    padding: 20,
  },
  IconContent: {
    backgroundColor: Colors.secondary,
  },
  BottomIcons: {
    backgroundColor: Colors.secondary,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems:"center"
    alignContent: "center",
    // padding:8,
  },
});
