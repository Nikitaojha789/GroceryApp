import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import BackIcon from '../../src/Icons/BackIcon';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headerTitle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon width={23} height={16} right={70} />
                    </TouchableOpacity>
                    Password Recovery</Text>
            </View>

            <View style={styles.body}>
                <View>
                    <Text style={styles.mainTitle}>Forgot Password</Text>
                </View>

                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur{'\n'}
                    adipiscing elit, sed diam nonummy
                </Text>

                <TextInput
                    placeholder="Email Address"
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
                    <LinearGradient
                        colors={['#AEDC81', '#6CC51D']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Send link</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

export default ForgotPassword;
