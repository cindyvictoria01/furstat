import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React from "react";
import { storage } from "../src/config/FIREBASE";

interface ReturnType {
  uploadFile: (
    uri: string,
    fileName: string,
    type: string
  ) => Promise<{ fileName: string; downloadURL: string }>;
  loading: boolean;
}

export default function useUploadFile(): ReturnType {
  const [loading, setLoading] = React.useState<boolean>(false);

  const uploadFile = async (uri: string, fileName: string, type: string) => {
    setLoading(true);
    const storageRef = ref(storage, `images/${fileName}`);

    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      await uploadBytes(storageRef, blob, { contentType: type });
      const downloadURL = await getDownloadURL(storageRef);

      setLoading(false);
      return { fileName: fileName, downloadURL: downloadURL };
    } catch (error) {
      setLoading(false);
      throw new Error("Error uploading file to Firebase Storage: " + error);
    }
  };

  return { uploadFile, loading };
}
