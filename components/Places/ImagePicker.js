import { launchCameraAsync, MediaTypeOptions, requestCameraPermissionsAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

const ImagePicker = () => {
    const [image, setImage] = useState(null);
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    const verifyPermissions = async () => {

        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }
        
        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient permission', 'You need to grant camera permissions to use this app');
            return false;
        };
        return true;
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions();
        
        if (!hasPermission) {
            return;
        }
        const image = await launchCameraAsync({
            mediaTypes: MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        console.log(image);
        setImage(image)
    }
    return (
        <View>
            <View>

            </View>
            <Button title='Take Image' onPress={takeImageHandler} />
        </View>
    )
}

export default ImagePicker;