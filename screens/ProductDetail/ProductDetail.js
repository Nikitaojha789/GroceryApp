import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./styles"
import BackIcon from "../../src/Icons/BackIcon";

const ProductDetail = ({ route, navigation }) => {
    const product = route?.params?.product;

    if (!product) {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'red', fontSize: 16 }}>Product not found.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            >
                <BackIcon width={24} height={24} fill="#000" />
            </TouchableOpacity>

            <Image
                source={{ uri: product.images?.[0] }}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>

            <Text style={styles.info}>
                Price: ₹{product.price} x {product.quantity}
            </Text>
            <Text style={styles.info}>
                Quantity: {product.quantity}
            </Text>
            <Text style={styles.total}>
                Total: ₹{(product.price * product.quantity).toFixed(2)}
            </Text>
        </View>
    );
};


export default ProductDetail;
