import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import BackIcon from '../../src/Icons/BackIcon';

const RoughDetail = ({ route, navigation }) => {
    const item = route?.params?.product;

    if (!item) {
        return (
            <View style={[style.screenContainer, style.centerContent]}>
                <Text style={{ color: 'red', fontSize: 16 }}>Product not found.</Text>
            </View>
        );
    }

    return (
        <View style={[style.screenContainer, style.centerContent]}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={style.backButton}
            >
                <BackIcon width={24} height={24} fill="#000" />
            </TouchableOpacity>
            <View style={style.HeadingWrapper}>
                <Text style={style.Heading}>Detail🛒</Text>
            </View>
            <View style={style.container}>

                <View style={style.ImageWrapper}>
                    <Image
                        source={{ uri: item.images[0] }}
                        style={style.image}
                    />
                </View>
                <View style={style.TextWrapper}>
                    <Text style={style.Text}>{item.title}</Text>
                </View>
                <View style={style.expression}>
                    <Text style={style.add}>+</Text>
                    <Pressable >
                        <Text style={[style.Button, style.add]}>Add</Text>
                    </Pressable>
                    <Text style={style.add}>-</Text>
                </View>
            </View>
        </View>
    )
}

export default RoughDetail