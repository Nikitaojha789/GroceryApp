import React, { useState } from 'react';
import { View, Image, StyleSheet, Pressable, Text, FlatList, TouchableOpacity } from 'react-native';

const Rough = ({ navigation }) => {
    const [selectedRadio, setSelectedRadio] = useState(1);
    const data = [
        { "id": 1, "title": "abc" },
        { "id": 2, "title": "abc" },
        { "id": 3, "title": "abc" },
        { "id": 4, "title": "abc" },
        { "id": 5, "title": "abc" },
    ];

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/React.jpg')}
                style={styles.image}
            />

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.listItemText}>
                            {item.id} - {item.title}
                        </Text>
                    </View>
                )}
                style={styles.flatList}
                contentContainerStyle={{ alignItems: 'center' }}
            />

            <View style={styles.ButtonWrapper}>
                <Pressable style={styles.ButtonIcon} onPress={() => navigation.navigate("SecondScreen")}>
                    <Text style={styles.Button} >Press</Text>
                </Pressable>
            </View>

            <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                <View style={styles.MainButton}>
                    <View style={styles.Radio} >
                        {
                            selectedRadio === 1 ? <View style={styles.RadioBg}></View> : null
                        }
                    </View>
                    <Text style={styles.RadioTxt}>Radio 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                <View style={styles.MainButton}>
                    <View style={styles.Radio} >
                        {
                            selectedRadio === 2 ? <View style={styles.RadioBg}></View> : null
                        }
                    </View>
                    <Text style={styles.RadioTxt}>Radio 2</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 16,
    },
    flatList: {
        maxHeight: 150,
        marginBottom: 16,
    },
    listItemText: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 2,
    },
    ButtonWrapper: {
        backgroundColor: "#5691c2ff",
        borderRadius: 30,
    },
    ButtonIcon: {
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
    Button: {
        color: "white",
        fontSize: 14,
        textAlign: "center"
    },
    MainButton: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
    },
    Radio: {
        borderWidth: 2,
        borderRadius: 20,
        height: 30,
        width: 30,
        borderColor: "#000",
        marginRight: 5,
    },
    RadioTxt: {
        textAlign: "center",
    },
    RadioBg: {
        borderWidth: 2,
        borderRadius: 20,
        height: 20,
        width: 20,
        borderColor: "#000",
        backgroundColor: "#000",
        margin: 3,
    },
});

export default Rough;
