
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from '../../assets/styles/scaling.js';

const Splash1 = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Onboarding");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/imageTitle.png")}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    image: {
        width: 414,
        height: 896,
        resizeMode: "contain",
    },
});

export default Splash1;
