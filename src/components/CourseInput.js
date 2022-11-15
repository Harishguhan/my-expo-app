import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View,useWindowDimensions, ScrollView,Dimensions } from "react-native";
import PrimaryBtn from "./PrimaryBtn";
import Colors from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

export default function CourseInput(props) {

  const { height,width } = useWindowDimensions();
  

  let imgSize = 300;


  if(width > 412){
    imgSize = 100
  }

  // if(height > 412){
  //   imgSize = 100
  // }

  const imgStyles = {
    width:imgSize,
    height:imgSize,
    borderRadius:imgSize / 2
  }
  
  const [courseName, setCourseName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (enteredText) => {
    setCourseName(enteredText);
    if (enteredText == "") {
      setError("This field is Required!");
    } else {
      setError("");
    }
  };

  const handleClick = () => {
    if (courseName == "") {
      setError("This field is Required!");
    } else {
      props.handleClick(courseName);
      setCourseName("");
    }
  };
  const cancelMod = () => {
    props.modalCancel();
  };
  const backGo = () => {
    props.CancelModel();
  }
  return (
    <>
    <ScrollView>
      <View style={styles.IconContent}>
        <Ionicons
          style={styles.backIcon}
          name="arrow-back"
          size={24}
          color="black"
          onPress={backGo}
        />
      </View>
      <View style={styles.inutContainer}>
        <Image
          style={[styles.image,imgStyles]}
          source={require("../../assets/images.png")}
        />
        <View style={styles.inputBox}>
          <TextInput
            maxLength={10}
            autoCorrect={false}
            name="course"
            placeholder="Enter Your Course"
            onChangeText={handleChange}
            value={courseName}
            style={styles.inputText}
          />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <View style={styles.btn1}>
            {/* <Button title="Add" onPress={handleClick} /> */}
            <PrimaryBtn name="Add" modalShow={handleClick} />
          </View>
          <View style={styles.btn1}>
            {/* <Button title="cancel" onPress={cancelMod}/> */}
            <PrimaryBtn name="Cancel" modalShow={cancelMod} />
          </View>
        </View>
        <View style={styles.bottomContent}>
        <Text style={styles.bottomtext}>Every <Text style={styles.hignlight}>Man</Text> Must choose his <Text style={styles.hignlight}>Own</Text> course.</Text>
        </View>
      </View>
      </ScrollView>
    </>
  );
}

const windowWidth = Dimensions.get('window').height;

const styles = StyleSheet.create({
  inutContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  inputBox: {
    borderColor: Colors.secondary,
    borderWidth: 2,
    padding: 14,
    margin: 10,
    borderRadius: 5,
  },
  btn1: {
    width: "50%",
    flex: 1,
    margin: 10,
  },
  image: {
    marginLeft: windowWidth > 415 ? "15%" : "45%",
  },
  error: {
    marginLeft: 20,
    color: "red",
  },
  inputText: {
    fontSize: 20,
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
  bottomContent:{
    margin:10,
    marginTop:20,
    borderColor:Colors.secondary,
    borderWidth:2,
    padding:30,
    borderRadius:5,
  },
  bottomtext:{
    fontSize:18,
    textAlign:'center'   
  },
  hignlight:{
    fontWeight:'bold',
    color:Colors.secondary
  },
  bottomIconText: {},
});
