import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker'; 
import { useState } from "react";

const placeholderImage = require("../../assets/images/messi.jpg")
export default function Index() {
  const [selctedImage,setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1, 
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri )   
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <ImageViewer imgSource={placeholderImage} selectedImage={selctedImage} />
      </View>
      <Text style={{color:"white"}}>Please can you choose a picture</Text>
      {/* <Link style={styles.buttonLink} href={"/about"}>go to about page</Link> */}
      <View>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
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
  },
  ImageContainer:{
    flex:1
  }
})
