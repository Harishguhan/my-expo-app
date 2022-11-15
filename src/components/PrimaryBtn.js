import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
export default function PrimaryBtn(props){
    const press = () => {
        props.modalShow();
    }
  return (
    <Pressable onPress={press}>
    <View style={styles.btnContainer}>
      <Text style={styles.btnText}>{props.name}</Text>
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    btnContainer:{
        padding:15,
        backgroundColor:'#2596be',
        borderRadius:8,
    },
    btnText:{
        color:Colors.primary,
        textTransform:'uppercase',
        fontWeight:'bold',
        textAlign:'center'
    }
});
