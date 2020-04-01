import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Button, Image} from 'react-native'
import {globalStyles} from './globalStyles'
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'

export default function Camera() {
    const [photo, setPhoto] = React.useState(null)
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()
        if(permissionResult.granted === false){
            alert('Access Denied')
            return
        }
        let pickerResult = await ImagePicker.launchCameraAsync()
        if(pickerResult.cancelled === true){
            return
        }
        setPhoto({localUri: pickerResult.uri})
    }
    let openSharingDialogAsync = async () => {
        if(!(await Sharing.isAvailableAsync())){
            alert('Denied')
            return
        }
        Sharing.shareAsync(photo.localUri)
    }
    if(photo !== null){
        console.log(photo.localUri)
        return(
        <View style={globalStyles.container}>
            <Image source={{uri: photo.localUri}} style={globalStyles.thumbnail} />
                <Button mode="outlined" onPress={openSharingDialogAsync} title="Share" style={globalStyles.button} /> 
                <Button onPress={openImagePickerAsync} title="Cam" style={globalStyles.button}/>
        </View>
        )    
    }
        return (
            <View style={globalStyles.container}>
                <Text>Camera</Text>
                <Button onPress={openImagePickerAsync} title="Cam" style={globalStyles.button}/>
            </View>    
        )
    
}
