import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class NotificationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> NotificationScreen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})