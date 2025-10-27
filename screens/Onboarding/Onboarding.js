import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import styles from './style';

const { width } = Dimensions.get('window');

const Onboarding = ({ navigation }) => {
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNextPress = () => {
        if (currentIndex < 2) {
            swiperRef.current.scrollBy(1);
        } else {
            navigation.navigate('Welcome');
        }
    };

    return (
        <Swiper
            ref={swiperRef}
            loop={false}
            showsButtons={false}
            activeDotColor="#6CC51D"
            dotColor="#ccc"
            onIndexChanged={(index) => setCurrentIndex(index)}
            paginationStyle={{ bottom: 90 }}

        >
            {/* Slide 1 */}
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

                    <TouchableOpacity onPress={onNextPress}>
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

            {/* Slide 2 */}
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Image
                        source={require('../../assets/images/fruits.jpg')}
                        style={styles.image2}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>
                        Buy Premium{'\n'}Quality Fruits
                    </Text>
                    <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </Text>

                    <TouchableOpacity onPress={onNextPress}>
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

            {/* Slide 3 */}
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Image
                        source={require('../../assets/images/meet.jpg')}
                        style={styles.image3}
                        resizeMode="stretch"
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>
                        Get Discounts{'\n'}On All Products
                    </Text>
                    <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy
                    </Text>

                    <TouchableOpacity onPress={onNextPress}>
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
        </Swiper>
    );
};

export default Onboarding;
