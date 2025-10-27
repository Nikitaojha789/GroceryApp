import React, { useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import style from "./style";
import LikeIcon from "../../assets/images/like.svg";
import BackIcon from "../../src/Icons/BackIcon";
import LockIcon from "../../assets/images/LockIcon.svg";

const Categories = ({ navigation }) => {
    const [liked, setLiked] = useState(false);

    const route = useRoute();
    const { product } = route.params;

    return (
        <View style={style.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={style.backButton}
            >
                <BackIcon width={24} height={24} fill="#000" />
            </TouchableOpacity>
            <View style={style.imagestyle}>
                {/* Product Image */}
                <Image source={require("../../assets/images/Lemon.png")} style={style.image} resizeMode="contain" />
            </View>
            <View style={style.Detail}>
                <Pressable
                    style={style.Press}
                    onPress={() => setLiked(!liked)}
                >
                    <LikeIcon left={300} width={20} height={20} fill={liked ? "red" : "gray"} />
                </Pressable>

                {/* Product Info */}
                <Text style={style.price}>{product.price}</Text>
                <Text style={style.title}>{product.title}</Text>
                <Text style={style.quantity}>{product.quantity}</Text>
                <Text style={style.description}>
                    Organic {product.title} are carefully grown and handpicked.
                    Fresh, healthy and directly from farm.Lemons are tart, oval-shaped
                    yellow citrus fruits that grow on small trees or bushes and
                    are widely used in cooking, drinks, and even cleaning due to
                    their sour flavor from citric acid.
                </Text>

                {/* Add to Cart */}
                <Pressable style={style.addButton}>
                    <Text style={style.addButtonText}>Add to cart</Text>
                    <LockIcon left={180} color={"white"} />
                </Pressable>

            </View>
        </View>
    );
};

export default Categories;
