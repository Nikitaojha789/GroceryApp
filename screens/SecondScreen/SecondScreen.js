import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./style";
import { TextInput } from "react-native-gesture-handler";
import SearchIcon from "../../assets/images/Search.svg";
import MyProducts from "../../screens/MyProducts/MyProducts";
import { useNavigation } from "@react-navigation/native";

const SecondScreen = ({ routes, navigation }) => {
    // const item = routes.params.item
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.TextWrapper}>
                <Text style={styles.Text}>Welcome...🙏🏻</Text>
            </View>
            <View style={styles.searchBar}>
                <SearchIcon style={styles.SearchIcon} />

                <TextInput
                    style={styles.searchPlaceholder}
                    placeholder="Search here..."
                    placeholderTextColor={"#a9aaafff"}
                />
            </View>
            <View style={styles.products}>
                <MyProducts
                    navigation={navigation}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

export default SecondScreen;