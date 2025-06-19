import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../common/colors';

const CustomTextInput = ({ placeholder, value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                placeholderTextColor={Colors.GREY}
            />
        </View>
    )
}

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.GREY,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '100%',
        alignSelf: 'center',
        fontSize: 16,
        color: Colors.BLACK,
        height: 55,
        marginTop: 10,
    }
})