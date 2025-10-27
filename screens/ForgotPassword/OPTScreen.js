import React, { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const OPTScreen = ({ navigation }) => {
    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    const et5 = useRef();
    const et6 = useRef();
    const [f1, setF1] = useState('');
    const [f2, setF2] = useState('');
    const [f3, setF3] = useState('');
    const [f4, setF4] = useState('');
    const [f5, setF5] = useState('');
    const [f6, setF6] = useState('');

    return (
        <View style={style.container}>
            <Text style={style.optTxt}>OPT Screen</Text>
            <View style={style.boxContainer}>
                <TextInput
                    ref={et1}
                    style={[style.box, { borderColor: f1?.length >= 1 ? "#2373ebff" : "#b3b0b0ff" }]}
                    keyboardType='number-pad'
                    value={f1}
                    maxLength={1}
                    onChangeText={txt => {
                        setF1(txt);
                        if (txt.length >= 1) {
                            et2.current.focus();
                        }
                    }}
                />
                <TextInput
                    ref={et2}
                    style={[style.box, { borderColor: f2?.length >= 1 ? "#2373ebff" : "#b3b0b0ff" }]}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={f2}
                    onChangeText={txt => {
                        setF2(txt);
                        if (txt.length >= 1) {
                            et3.current.focus();
                        } else if (txt.length < 1) {
                            et1.current.focus();
                        }
                    }}
                />
                <TextInput
                    ref={et3}
                    style={[style.box, { borderColor: f3?.length >= 1 ? "#2373ebff" : "#b3b0b0ff" }]}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={f3}
                    onChangeText={txt => {
                        setF3(txt);
                        if (txt.length >= 1) {
                            et4.current.focus();
                        } else if (txt.length < 1) {
                            et2.current.focus();
                        }
                    }}
                />
                <TextInput
                    ref={et4}
                    style={[style.box, { borderColor: f4?.length >= 1 ? "#2373ebff" : "#b3b0b0ff" }]}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={f4}
                    onChangeText={txt => {
                        setF4(txt);
                        if (txt.length >= 1) {
                            et5.current.focus();
                        } else if (txt.length < 1) {
                            et3.current.focus();
                        }
                    }}
                />
                <TextInput
                    ref={et5}
                    style={[style.box, { borderColor: f5?.length >= 1 ? "#2373ebff" : "#b3b0b0ff" }]}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={f5}
                    onChangeText={txt => {
                        setF5(txt);
                        if (txt.length >= 1) {
                            et6.current.focus();
                        } else if (txt.length < 1) {
                            et4.current.focus();
                        }
                    }}
                />
                <TextInput
                    ref={et6}
                    style={[style.box, { borderColor: f6?.length >= 1 ? "#2373ebff" : "#b3b0b0ff" }]}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={f6}
                    onChangeText={txt => {
                        setF6(txt);
                        if (txt.length >= 1) {
                            et6.current.focus();
                        } else if (txt.length < 1) {
                            et5.current.focus();
                        }
                    }}
                />

            </View>
            <Text style={style.resend}>Resend</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('ResetPassword')}
                disabled={
                    f1 !== '' &&
                        f2 !== '' &&
                        f3 !== '' &&
                        f4 !== '' &&
                        f5 !== '' &&
                        f6 !== '' ?
                        false : true
                }
                style={[style.center,
                {
                    backgroundColor:
                        f1 !== '' &&
                            f2 !== '' &&
                            f3 !== '' &&
                            f4 !== '' &&
                            f5 !== '' &&
                            f6 !== '' ?
                            "#4fbb45ff" : "#b3b0b0ff"

                },
                ]}
            >

                <Text style={style.button}>Verify OPT</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        paddingHorizontal: 20,
        paddingTop: 90,
        // marginTop: 50,
    },
    optTxt: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 35,
    },
    box: {
        borderWidth: 2,
        height: 50,
        width: 50,
        borderColor: "#b3b0b0ff",
        borderRadius: 10,
        marginLeft: 5,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",

    },
    boxContainer: {
        flexDirection: "row",
        right: 10,
        marginBottom: 10,
    },
    resend: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",
        color: "#2373ebff",
        marginBottom: 40,
    },
    center: {
        // backgroundColor: "#4fbb45ff",
        width: "100%",
        // textAlign: "center",
        padding: 15,
        alignItems: "center",
        borderRadius: 20,

        // marginTop: 50,
    },
    button: {
        color: "#fff",
    }
})

export default OPTScreen;
