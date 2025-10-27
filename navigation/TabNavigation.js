import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ElipcesIcon from "../assets/images/Elipces.svg";
import LockIcon from "../assets/images/LockIcon.svg";
import Icon from "../src/Icons/Icon";
import styles from "./style";

// Screens
import Home from "../screens/Home/Home";
import Favorites from "../screens/Favorites/Favorites";
import Profile from "../screens/Profile/Profile";
import Cart from "../screens/Cart/Cart";
import SecondScreen from "../screens/SecondScreen/SecondScreen";
import LikedScreen from '../screens/LikeScreen/LikedScreen';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                }}
            >
                <Tab.Screen
                    name="HomeTab"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" size={size} color={color} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Favorites"
                    component={Favorites}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="heart" size={size} color={color} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="profile" size={size} color={color} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <ElipcesIcon height={80} width={70} bottom={10} />
                                <LockIcon bottom={68} fill={color} />
                            </View>
                        ),
                    }}
                />
                {/* <Tab.Screen
                    name="SecondScreen"
                    component={SecondScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="profile" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="LikedScreen"
                    component={LikedScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="heart" size={size} color={color} />
                        ),
                    }}
                /> */}
            </Tab.Navigator>


        </>
    );
};

export default TabNavigation;
