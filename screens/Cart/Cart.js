import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import style from "./style";
import LinearGradient from 'react-native-linear-gradient';

const Cart = ({ navigation }) => {
    // const list = [
    //     { "id": 1, "name": "test" },
    //     { "id": 1, "name": "test" }, { "id": 1, "name": "test" }, { "id": 1, "name": "test" }, { "id": 1, "name": "test" },
    // ]

    // const keyExtractor = (item) => item.id.toString();

    // const renderItem = ({ item }) => (
    //     <Text style={{ fontSize: 28, margin: 50 }}>
    //         {item.id} - {item.name}
    //     </Text>
    // );

    return (
        <View style={style.container}>
            {/* <View style={style.list}>
                console.log("Rendering item:", item);
                <FlatList
                    data={list}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                />
            </View> */}
            <View style={style.header}>
                <Text style={style.headerTitle}>Shopping Cart</Text>
            </View>

            <View style={[style.bottom, { flex: 1, justifyContent: "center", alignItems: "center" }]}>
                <Image
                    source={require("../../assets/images/Cart.png")}
                    style={{ height: 80, width: 80 }}
                    resizeMode="contain"
                />
                <Text style={style.title}>
                    Your cart is empty !
                </Text>
                <Text style={style.subTitle}>
                    You will get a response within {'\n'}
                    a few minutes.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <LinearGradient
                        colors={['#AEDC81', '#6CC51D']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={style.button}
                    >
                        <Text style={style.buttonText}>Start shopping</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart
