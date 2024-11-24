import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>My first app mobile in react .</Text>
      <Link style={styles.buttonLink} href={"/about"}>go to about page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#0A3981"
  },
  bigTitle:{
    textAlign:"center",
    color:"white"
  },
  buttonLink:{
    backgroundColor: "#1F509A", // Couleur de fond du bouton
    paddingVertical: 12, // Espacement vertical
    paddingHorizontal: 30, // Espacement horizontal
    borderRadius: 5, // Coins arrondis
    alignItems: "center", // Centrer le texte
    justifyContent: "center",
  }
})
