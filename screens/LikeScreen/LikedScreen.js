import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import style from './style';
import BackIcon from '../../src/Icons/BackIcon';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseFromLikes, increaseFromLikes, removeLikedItem } from '../../redux/LikedProductsSlice';

const LikedScreen = ({ navigation }) => {

    const likedProducts = useSelector(state => state.LikedProducts);
    console.log("Liked Products:", likedProducts);

    const dispatch = useDispatch();
    const handleRemove = (item) => {
        dispatch(removeLikedItem(item));
    };


    const renderItem = ({ item }) => (
        <View style={style.Container}>
            <View style={style.ImageWrapper}>
                <Image source={{ uri: item.images[0] }} style={style.image} />
            </View>
            <View style={style.TextWrapper}>
                <Text style={style.title}>{item.title}</Text>
                <Text style={style.price}>{item.price} x {item.quantity} : {item.price * item.quantity}</Text>


            </View>
            <View style={style.buttonstyle}>
                <View style={style.quantityContainer}>
                    <TouchableOpacity onPress={() => dispatch(increaseFromLikes(item))} style={style.quantityButton}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    <Text style={style.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => dispatch(decreaseFromLikes(item))} style={style.quantityButton}>
                        <Text>-</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => handleRemove(item)} style={style.handleRemove}>
                    <Text>Remove</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
    return (
        <View style={style.mainContainer}>

            <View style={style.heading}>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={style.backButton}
                >
                    <BackIcon width={24} height={24} fill="#000" />
                </TouchableOpacity>
                <Text style={style.text}>LikeScreen</Text>
            </View>
            {likedProducts && likedProducts.length > 0 ? (
                <FlatList
                    data={likedProducts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ padding: 16 }}
                />
            ) : (
                <View style={style.EmptyContainer}>
                    <Text style={style.Empty}>No Products Yet...!</Text>
                </View>
            )
            }
        </View>
    )
}

export default LikedScreen;