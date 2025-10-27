import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Splash2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image
                    source={require('../../assets/images/newGroceryWala.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>


            <View style={styles.card}>
                <Text style={styles.title}>
                    Premium Food{'\n'}At Your Doorstep
                </Text>
                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Splash3')}>
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

export default Splash2;
