import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Routes from '../../navigation/Routes';

// SVGs
import BackIcon from '../../src/Icons/BackIcon';
import EmailIcon from '../../assets/images/EmailIcon.svg';
import LockIcon from '../../assets/images/LockIcon.svg';
import EyeIcon from '../../assets/images/Eye.svg';
import ToggleIcon from '../../assets/images/ToggleIcon.svg';
// import CheckBox from '@react-native-community/checkbox';

const Login = ({ navigation }) => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    // const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {/* Background Image */}
            <Image
                source={require('../../assets/images/Laddies.png')}
                style={styles.image}
                resizeMode="cover"
            />

            {/* Back icon and Welcome Text */}
            <View style={styles.headerOverlay}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <BackIcon width={24} height={24} fill="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.headerTitleOverlay}>Welcome</Text>
            </View>

            {/* Card Section */}
            <View style={styles.card}>
                <Text style={styles.headerTitle}>Welcome back !</Text>
                <Text style={styles.subtitle}>Sign in to your account</Text>

                {/* Email/Phone Input */}
                <View style={styles.inputContainer}>
                    <EmailIcon fill="#868889" width={22} height={22} />
                    <TextInput
                        placeholder="Email Address"
                        style={styles.input}
                        keyboardType='email-address'
                        placeholderTextColor="#868889"
                        value={emailOrPhone}
                        onChangeText={setEmailOrPhone}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <LockIcon fill="#868889" width={22} height={22} />
                    <TextInput
                        keyboardType='visible-password'
                        placeholder="Password"
                        style={[styles.input, { flex: 1 }]}
                        placeholderTextColor="#868889"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <EyeIcon width={22} height={22} />
                    </TouchableOpacity>
                </View>


                <View style={styles.rememberContainer}>
                    <View style={styles.rememberLeft}>
                        <ToggleIcon />
                        <Text style={styles.rememberText}>Remember me</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate(Routes.ForgotPassword)}>
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                {/* Login Button */}
                <TouchableOpacity onPress={() => navigation.navigate(Routes.Home)}>
                    <LinearGradient
                        colors={['#AEDC81', '#6CC51D']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* Signup Link */}
                <Text style={styles.loginText}>
                    Don’t have an account?{' '}
                    <Text
                        style={styles.loginLink}
                        onPress={() => navigation.navigate(Routes.CreateAccount)}
                    >
                        Sign up
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Login;
