import React, { useState } from 'react';
import { View, Text, Pressable, Alert, Touchable } from 'react-native';
import style from './style';
import LikeIcon from "../../../assets/images/like.svg";
import { addToFavourites } from '../../../redux/favouritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ item, icon, title, quantity, price, onPress }) => {
    const [liked, setLiked] = useState(false);
    const [added, setAdded] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.favourites.items);
    const isAdded = favourites.some(favItem => favItem.id === item.id);



    const handleAddToFav = () => {
        if (!isAdded) {
            dispatch(addToFavourites(item));
            Alert.alert("Added to favourites ❤️");
        } else {
            navigation.navigate("favourites");
        }
    };



    return (
        <Pressable style={style.productCard} onPress={onPress}>

            <Pressable
                style={style.Press}
                onPress={handleAddToFav}
            >
                <LikeIcon
                    width={20}
                    height={20}
                    left={60}
                    fill={liked ? "red" : "gray"}
                />
            </Pressable>


            <View style={style.productImageWrapper}>
                {icon}
            </View>


            <Text style={style.productTitle}>{title}</Text>
            <Text style={style.productQuantity}>{quantity}</Text>
            <Text style={style.productPrice}>{price}</Text>


            <Pressable
                style={[
                    style.addButton,
                    added && { backgroundColor: "lightgray" }
                ]} onPress={handleAddToFav}
            >
                <Text style={[style.addButtonText, isAdded && { color: " gray" }]}>
                    {isAdded ? "Go to favourites" : "Add to Favourites"}
                </Text>


            </Pressable>


        </Pressable>
    );
};

export default ProductCard;
