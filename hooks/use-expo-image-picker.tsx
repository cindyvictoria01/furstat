import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ToastAndroid } from "react-native";
import useUploadFile from "./use-upload-file";

export default function useExpoImagePicker() {
  const { uploadFile, loading: isUploadingFile } = useUploadFile();
  const handleCamera = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Camera permission is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    try {
      if (
        !pickerResult.canceled &&
        pickerResult.assets &&
        pickerResult.assets.length > 0
      ) {
        const selectedAsset = pickerResult.assets[0];
        const result = await uploadFile(
          selectedAsset.uri,
          selectedAsset.fileName ? selectedAsset.fileName : "",
          selectedAsset.type ? selectedAsset.type : "image"
        );

        const fileName = result.fileName;
        const downloadUrl = result.downloadURL;

        setImage(downloadUrl);
      }
    } catch (e: any) {
      e.message &&
        ToastAndroid.showWithGravity(
          "Error",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
    }
  };

  const [image, setImage] = useState<string>();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    try {
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (e: any) {
      e.message &&
        ToastAndroid.showWithGravity(
          "Error",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
    }
  };

  const handleOpenCamera = async () => {
    handleCamera();
  };

  const handleOpenImageLibrary = async () => {
    pickImage();
  };

  return {
    handleOpenCamera,
    handleOpenImageLibrary,
    isUploadingFile,
    image,
  };
}
