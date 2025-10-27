import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Splash3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image
                    source={require('../../assets/images/fruits.jpg')}
                    style={styles.image2}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Buy Premium{'\n'}Quality Fruits</Text>
                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Splash4')}>
                    <LinearGradient
                        colors={['#AEDC81', '#6CC51D']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Splash3;
