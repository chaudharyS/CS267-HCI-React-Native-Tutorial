import React from 'react';
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native-web';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            blurRadius={6}
            source={require("../assets/Dartmouth.jpeg")}
        >
            <Text style={styles.titleText}>Outdoor Activities Near You</Text>
            <View style={styles.activityContainer}>
                <Image source={{
                    height: 200,
                    width: 300,
                    uri: "https://picsum.photos/id/1011/200/300"
                }} />
                <Text>Rowing</Text>
                <Button title="Details" onPress={() => alert('Connecticut River')} />
                <Image source={{
                    height: 200,
                    width: 300,
                    uri: "https://picsum.photos/id/1000/200/300"
                }} />
                <Text>Skiing</Text>
                <Button title="Details" onPress={() => alert('Dartmouth Skiway')} />
            </View>
        </ImageBackground>        
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    titleText: {
        fontSize: 27,
        fontWeight: "bold",
        color: "#2c4547",
        position: "absolute",
        top: 35,
    },
    activityContainer: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "space-evenly",
        top: 85,
    }
})
export default WelcomeScreen;