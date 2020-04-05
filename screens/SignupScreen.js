import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, StatusBar, LayoutAnimation } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {
    // static navigationOptions = {
    //     headerShown: false
    // };
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null,
    }
    handleSignup = () => {
        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(
                userCredentials => {
                    return userCredentials.user.updateProfile({
                        displayName: this.state.name
                    })
                }
            )
            .catch(error => this.setState({ errorMessage: error.message }));

    }

    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View style={styles.container}>
                <Image source={require("../assets/Upperdesign.png")}
                    style={{ marginLeft: 0, marginTop: -300, width: 550, height: 550 }}>
                </Image>

                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#000"></Ionicons>
                </TouchableOpacity>
                <View style={{ position: "absolute", top: 180, alignItems: "center", width: "100%" }}>

                    <TouchableOpacity style={styles.avatar}>
                        <Ionicons name="ios-add" size={48} color="#fff" style={{}}></Ionicons>
                    </TouchableOpacity>
                </View>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style={styles.form}>
                    <View style={styles.details}>
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput style={styles.input} autoCapitalize="none" onChangeText={name => this.setState({ name })}
                            value={this.state.name}></TextInput>
                    </View>
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
                <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{ color: "#8a8f9e" }}>Already an awesome member ? <Text style={{ color: "#487cdd", fontWeight: "500" }}>Login</Text></Text>
                </TouchableOpacity>
                <Image source={require("../assets/bottomdesign.png")} style={{ left: -160, bottom: -30, width: 600, height: 450 }}></Image>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: -32,
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        opacity: 0.5,
        marginBottom: 2
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
        marginBottom: 30,
        marginHorizontal: 50,
    },
    details: {
        marginBottom: 20,
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
    },
    back: {
        position: "absolute",
        alignItems: "center",
        top: 48,
        left: 32,
        width: 40,
        height: 32,
        borderRadius: 12,
        backgroundColor: "rgba(72, 124, 221, 0.2)",
        justifyContent: "center",
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#487cdd",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    }

})