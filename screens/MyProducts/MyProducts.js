import React, { useEffect } from "react";
import { Alert, FlatList, Image, Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, fetchSuccess } from "../../redux/myProductsSlice";
import { addLikedItem } from '../../redux/LikedProductsSlice';
import style from './style';

const MyProducts = ({ navigation }) => {
    const dispatch = useDispatch();
    const { items: products } = useSelector(state => state.myProducts);
    const LikedProducts = useSelector(state => state.LikedProducts || []);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchStart());
            try {
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();
                dispatch(fetchSuccess(data.products));
            } catch (error) {
                console.error("API Error:", error);
                dispatch(fetchFail(error.toString()));
            }
        };
        fetchData();
    }, [dispatch]);

    const renderItem = ({ item }) => {
        const isLiked = LikedProducts.some(likedItem => likedItem.id === item.id);

        // eslint-disable-next-line no-shadow
        const handleAdd = (item) => {
            const isAdded = LikedProducts.some(likedItem => likedItem.id === item.id);
            if (isAdded) {
                Alert.alert("Already in favourites", "This product has already been added to your favorites.");
                console.log("Already Added");
            } else {
                dispatch(addLikedItem(item));
                Alert.alert("Success", `${item.title} has been added to your favorites ❤️`);
                console.log("Added")
            }
        };

        return (
            <Pressable
                style={style.container}
                onPress={() => navigation.navigate("RoughDetail", { product: item })}
            >
                <View style={style.ImageWrapper}>
                    <Image
                        source={{ uri: item.images[0] }}
                        style={style.image}
                    />
                </View>
                <View style={style.TextWrapper}>
                    <Text style={style.Text}>{item.title}</Text>
                    {/* <Text style={style.Text}>{item.quantity}</Text> */}
                </View>
                <View style={style.expression}>
                    <Pressable
                        onPress={() => handleAdd(item)}
                        // disabled={isLiked}
                        style={({ pressed }) => [
                            style.buttonWrappper,
                            {
                                backgroundColor: pressed ? '#a6cebaff' : (isLiked ? '#d3d3d3' : '#6eaa92ff'),
                            }
                        ]}
                    >
                        <Text style={style.Button}>
                            {isLiked ? "Added" : "Add"}
                        </Text>
                    </Pressable>
                </View>
            </Pressable>
        );
    };

    return (
        <View style={{ height: '90%' }}>
            <FlatList
                data={products}
                renderItem={renderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                keyExtractor={item => item.id.toString()}
                extraData={LikedProducts}
            />
        </View>
    );
};

export default MyProducts;
