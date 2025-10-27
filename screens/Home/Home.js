import React, { useEffect } from 'react';
import { View, Text, Pressable, Image, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productsSlice';
import style from './style';

import ProductCard from '../../src/Component/ProductCard/ProductCard';
import Filter from '../../assets/images/Filter.svg';
import BackIcon from '../../assets/images/Back.svg';
import SearchIcon from '../../assets/images/Search.svg';
import GroceryIcon from '../../assets/images/Grocery.svg';
import OilIcon from '../../assets/images/Oil.svg';
import VacuumIcon from '../../assets/images/vacuum.svg';
import VectorIcon from '../../assets/images/Vector.svg';


import { addToFavourites } from '../../redux/favouritesSlice';

const categories = [
    { id: 1, title: 'Vegetables', icon: <VectorIcon width={32} height={32} /> },
    { id: 2, title: 'Fruits', icon: <Image source={require('../../assets/images/Apple.png')} style={style.categoryIcon} /> },
    { id: 3, title: 'Beverages', icon: <Image source={require('../../assets/images/beverage.png')} style={style.categoryIcon} /> },
    { id: 4, title: 'Grocery', icon: <GroceryIcon width={32} height={32} /> },
    { id: 5, title: 'Edible oil', icon: <OilIcon width={32} height={32} /> },
    { id: 6, title: 'Household', icon: <VacuumIcon width={32} height={32} /> },
];

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <SafeAreaView style={style.Main}>

            <View style={style.searchBar}>
                <SearchIcon width={20} height={20} />
                <Text style={style.searchPlaceholder}>Search keywords...</Text>
                <View style={style.spacer} />
                <Pressable>
                    <Filter width={20} height={20} />
                </Pressable>
            </View>

            {loading && <ActivityIndicator size="large" color="green" />}
            {error && <Text style={{ color: 'red' }}>{error}</Text>}

            <FlatList
                data={items}
                numColumns={2}
                keyExtractor={(item, index) =>
                    item?.id ? item.id.toString() : index.toString()
                }
                contentContainerStyle={{ paddingBottom: 50 }}
                ListHeaderComponent={
                    <>

                        <Image
                            source={require('../../assets/images/food.png')}
                            style={style.highlightedImage}
                            resizeMode="cover"
                        />


                        <View style={style.categoryHeader}>
                            <Text style={style.sectionTitle}>Categories</Text>
                            <BackIcon width={20} height={15} />
                        </View>

                        <FlatList
                            data={categories}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={style.categories}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={style.categoryItem}>
                                    <View style={style.categoryIconWrapper}>
                                        <Image
                                            source={require('../../assets/images/Ellipse.png')}
                                            style={style.categoryBg}
                                        />
                                        <View style={style.iconCentered}>
                                            {item.icon}
                                        </View>
                                    </View>
                                    <Text style={style.categoryText}>{item.title}</Text>
                                </View>
                            )}
                        />


                        <View style={style.categoryHeader}>
                            <Text style={style.sectionTitle}>Featured Products</Text>
                        </View>
                    </>
                }

                renderItem={({ item }) => (
                    <ProductCard
                        item={item}
                        icon={<Image source={{ uri: item.images?.[0] ?? "https://via.placeholder.com/70" }} style={{ width: 70, height: 70, borderRadius: 50 }} />}
                        title={item.title}
                        quantity="1 plate"
                        price={item.price}
                        onPress={() => navigation.navigate("Categories", { product: item })}
                    />
                )}


            />
        </SafeAreaView>
    );
};

export default Home;
