import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import BackIcon from '../../src/Icons/BackIcon';

const ResetScreen = ({ navigation }) => {
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headerTitle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon width={23} height={16} right={70} />
                    </TouchableOpacity>
                    Password Recovery
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.mainTitle}>Reset Password</Text>
                <Text style={styles.subtitle}> Lorem ipsum dolor sit amet, consectetur{'\n'}
                    adipiscing elit, sed diam nonummy</Text>
                <TextInput
                    placeholder="New Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ResetScreen;
