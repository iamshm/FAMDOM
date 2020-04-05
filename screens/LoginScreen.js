import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, StatusBar, LayoutAnimation } from 'react-native'

import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    // static navigationOptions = {
    //     headerShown: false
    // };
    state = {
        email: "",
        password: "",
        errorMessage: null,
    }
    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => { this.setState({ errorMessage: error.message }) })
    }
    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}></StatusBar>
                <Image source={require("../assets/Upperdesign.png")} style={{ marginLeft: 0, marginTop: -300, width: 550, height: 550 }}></Image>
                <View>
                    <Text style={styles.logo}>{`FAMDOM`}</Text>
                </View>
                <Text style={styles.greeting}> {`Glad.. You Came`} </Text>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style={styles.form}>
                    <View style={styles.details}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input} autoCapitalize="none" onChangeText={email => this.setState({ email })}
                            value={this.state.email}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => this.props.navigation.navigate("Signup")}>
                    <Text style={{ color: "#8a8f9e" }}>Want to Join Us ? <Text style={{ color: "#487cdd", fontWeight: "500" }}>Sign Up</Text></Text>
                </TouchableOpacity>
                <Image source={require("../assets/bottomdesign.png")} style={{ left: -160, bottom: -4, width: 600, height: 450 }}></Image>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        color: "#487ccd",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.93,
        shadowRadius: 9.51,
        elevation: 5,
    },
    greeting: {
        marginTop: 8,
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        opacity: 0.5
    },
    errorMessage: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 50,
        height: 72,
    },
    error: {
        color: "#487cdd",
        fontSize: 13,
        fontWeight: "600",
        alignItems: "center"

    },
    form: {
        marginBottom: 40,
        marginHorizontal: 50,
    },
    details: {
        marginBottom: 30,
    },
    inputTitle: {
        color: "#8a8f9e",
        textTransform: "uppercase",

    },
    input: {
        borderBottomColor: "#8a8f9e",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161f3d",
    },
    button: {
        marginHorizontal: 50,
        backgroundColor: "#487cdd",
        borderRadius: 34,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    }

})