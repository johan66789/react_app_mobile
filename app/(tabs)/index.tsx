import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";
import { type ImageSource } from "expo-image";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker'; 
import { useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const placeholderImage = require("../../assets/images/messi.jpg")
export default function Index() {
  const [selectedImage,setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji,setPickedEmoji] = useState<ImageSource | undefined>(
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
      setShowAppOptions(true);   
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const closeModal = ()=>{
    setIsModalVisible(false)
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };    
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.ImageContainer}>
          <ImageViewer imgSource={placeholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View> 
        ) : (
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
          </View>
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={closeModal}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={closeModal}></EmojiList>
        </EmojiPicker>
      </View>
    </GestureHandlerRootView>
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
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
