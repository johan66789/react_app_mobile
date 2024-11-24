import { Text,View,StyleSheet } from "react-native";
export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>About app</Text>
        </View>
    );
}

// styles

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#0A3981"
    },
    title:{
        textAlign:"center",
        color:"white"
    }
})