import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/women.png')}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.card}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy
                </Text>

                <TouchableOpacity
                    style={styles.googleBtn}
                    onPress={() => {
                        alert('Google Sign In');
                    }}
                >
                    <Text style={styles.googleBtnText}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                    <LinearGradient
                        colors={['#AEDC81', '#6CC51D']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Create an account</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <Text style={styles.loginText}>
                    Already have an account?{' '}
                    <Text
                        style={styles.loginLink}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Login
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default Welcome;
