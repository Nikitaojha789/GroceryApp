import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Routes from '../../navigation/Routes';
import BackIcon from '../../src/Icons/BackIcon';
import LockIcon from '../../assets/images/LockIcon.svg';
import EyeIcon from '../../assets/images/Eye.svg';
import EmailIcon from '../../assets/images/EmailIcon.svg';
import Telephone from '../../assets/images/Telephone.svg';

const CreateAccount = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            {/* Background Image */}
            <Image
                source={require('../../assets/images/Female.png')}
                style={styles.image}
                resizeMode="cover"
            />

            {/* Header on top of the image */}
            <View style={styles.headerOverlay}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                    <BackIcon width={24} height={24} fill={'#ffffff'} />
                </TouchableOpacity>

                <Text style={styles.welcomeText}>Welcome</Text>
            </View>

            {/* Card Section */}
            <View style={styles.card}>
                <Text style={styles.title}>Create account</Text>
                <Text style={styles.subtitle}>Quickly create account</Text>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <EmailIcon fill="#868889" width={22} height={22} />
                    <TextInput
                        placeholder="Email Address"
                        style={styles.input}
                        placeholderTextColor="#868889"
                        value={email}
                        onChangeText={setEmail}
                        left={10}
                    />
                </View>

                {/* Phone Input */}
                <View style={styles.inputContainer}>
                    <Telephone fill="#868889" width={22} height={22} />
                    <TextInput
                        placeholder="Phone number"
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                        left={10}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <LockIcon fill="#868889" width={22} height={22} />
                    <TextInput
                        keyboardType='numeric'
                        placeholder="Password"
                        style={[styles.input, { flex: 1 }]}
                        placeholderTextColor="#868889"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        left={10}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <EyeIcon width={22} height={22} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate(Routes.Login)}>
                    <LinearGradient
                        colors={['#AEDC81', '#6CC51D']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Signup</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <Text style={styles.loginText}>
                    Already have an account?{' '}
                    <Text
                        style={styles.loginLink}
                        onPress={() => navigation.navigate(Routes.Login)}
                    >
                        Login
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default CreateAccount;
