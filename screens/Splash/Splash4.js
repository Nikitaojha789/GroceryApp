import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Splash4 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image
                    source={require('../../assets/images/meet.jpg')}
                    style={styles.image3}
                    resizeMode="stretch"
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Get Discounts{'\n'}On All Products</Text>
                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <LinearGradient
                        colors={['#AEDC81', '#6CC51D']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Splash4;
