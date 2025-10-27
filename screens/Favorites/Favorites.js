import React from "react";
import { View, Text, Image, Pressable, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseFromFavourites,
    increaseFromFavourites,
    removeFromFavourites
} from "../../redux/favouritesSlice";

import style from "./style";
import BackIcon from "../../src/Icons/BackIcon";
import DeleteIcon from "../../src/Icons/DeleteIcon";

const Favorites = ({ navigation }) => {
    const favourites = useSelector(state => state.favourites.items);
    const dispatch = useDispatch();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate("ProductDetail", { product: item })}
            style={style.card}
            activeOpacity={0.8}
        >
            <Image
                source={{ uri: item.images?.[0] }}
                style={style.productImage}
            />

            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: '600', fontSize: 15 }}>{item.title}</Text>
                <Text style={{ color: "gray", fontSize: 13 }}>
                    {item.quantity} plate{item.quantity > 1 ? 's' : ''}
                </Text>
                <Text style={{ color: "#1db954", fontWeight: 'bold', fontSize: 14 }}>
                    ₹{item.price} x {item.quantity} =  ₹{(item.price * item.quantity).toFixed(2)}
                </Text>
            </View>


            <View style={{ justifyContent: "space-evenly", alignItems: 'center' }}>
                <Pressable onPress={() => dispatch(increaseFromFavourites(item))}>
                    <Text style={style.counterText}>+</Text>
                </Pressable>

                <Text style={style.count}>{item.quantity}</Text>

                <Pressable onPress={() => dispatch(decreaseFromFavourites(item))}>
                    <Text style={style.counterText}>-</Text>
                </Pressable>

            </View>
            <TouchableOpacity onPress={() => dispatch(removeFromFavourites(item))}>
                <DeleteIcon height={26} width={26} stroke="red" />
            </TouchableOpacity>
        </TouchableOpacity>
    );



    return (
        <View style={style.container}>

            <View style={style.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={style.backButton}
                >
                    <BackIcon width={24} height={24} fill="#000" />
                </TouchableOpacity>
                <Text style={style.headerTitle}>Favorites</Text>
            </View>


            <View style={style.listWrapper}>
                {favourites.length === 0 ? (
                    <Text style={{ textAlign: "center", marginTop: 50 }}>
                        No favourites yet!
                    </Text>
                ) : (
                    <FlatList
                        data={favourites}
                        keyExtractor={(item, index) => item.id?.toString() ?? `fallback-${index}`}
                        renderItem={renderItem}
                    />
                )}
            </View>


            <View style={{ alignItems: "center", marginTop: 10, bottom: 20, padding: 30, backgroundColor: "#d6cdcdff" }}>
                <Text style={{ fontWeight: "bold", fontSize: 18, bottom: 7 }}>
                    Total Items: {favourites.reduce((sum, item) => sum + item.quantity, 0)}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 5, bottom: 5 }}>
                    Total Price: ₹{favourites.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                </Text>
            </View>
        </View>
    );
};

export default Favorites;
