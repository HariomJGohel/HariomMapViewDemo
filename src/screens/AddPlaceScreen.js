import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import Colors from '../common/colors'
import StaticText from '../common/StaticText'
import CustomButton from '../components/CustomButton'
import CustomHeader from '../components/CustomHeader'
import CustomTextInput from '../components/CutomTextInput'
import { addMapData } from '../redux/reducers'

const AddPlaceScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        ratings: '',
        imageUrl: '',
        lat: '',
        lng: '',
    })

    const handleAddPlace = () => {

        if (!formData.name ||
            !formData.location ||
            !formData.ratings ||
            !formData.imageUrl ||
            !formData.lat ||
            !formData.lng
        ) {
            Alert.alert('Error', 'Please fill all the fields');
            return;
        }

        dispatch(addMapData(formData));
        navigation.goBack();
    }

    const handleChangeText = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        })
    }

    return (
        <View style={styles.container}>

            <CustomHeader title={StaticText.addPlace} />

            <ScrollView keyboardShouldPersistTaps='handled' behavior='padding'>

                <CustomTextInput
                    placeholder={StaticText.placeName}
                    value={formData.name}
                    onChangeText={(value) => handleChangeText('name', value)}
                />

                <CustomTextInput
                    placeholder={StaticText.placeLocation}
                    value={formData.location}
                    onChangeText={(value) => handleChangeText('location', value)}
                />

                <CustomTextInput
                    placeholder={StaticText.placeRatings}
                    value={formData.ratings}
                    onChangeText={(value) => handleChangeText('ratings', value)}
                />

                <CustomTextInput
                    placeholder={StaticText.placeImageURL}
                    value={formData.imageUrl}
                    onChangeText={(value) => handleChangeText('imageUrl', value)}
                />

                <CustomTextInput
                    placeholder={StaticText.placeLatitude}
                    value={formData.lat}
                    onChangeText={(value) => handleChangeText('lat', value)}
                />

                <CustomTextInput
                    placeholder={StaticText.placeLongitude}
                    value={formData.lng}
                    onChangeText={(value) => handleChangeText('lng', value)}
                />

                <CustomButton title={StaticText.addPlace} onPress={handleAddPlace} />

            </ScrollView>
        </View>
    )
}

export default AddPlaceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_GREY,
    },
})