// This sheet is copied from Listing 3.12 in React Native in Action

import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

// Create button and add styling
// Destructure submitTodo function
const Button = ({ submitTodo }) => (
    <View style = {styles.buttonContainer}>
        <TouchableHighlight
            underlayColor='#efefef'
            style={styles.button}
            // Call submitTodo when button is selected
            onPress={submitTodo}>
                <Text style={styles.submit}>
                    Submit
                </Text>
            </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20, 
        backgroundColor: '#ffffff',
        width: 200, 
        marginRight: 20, 
        marginTop: 15, 
        borderWidth: 1, 
        borderColor: 'rgba(0,0,0,.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: '#666666',
        fontWeight: '600'
    }
})

export default Button