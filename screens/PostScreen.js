import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class PostScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> PostScreen </Text>
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