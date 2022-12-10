import React, { useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    Platform
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { NavigationContainer } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import { app } from "../src/config/firebase";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const Start = ({ navigation }) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [modalVisible, setModalVisible] = React.useState(false)

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if(data) {
                navigation.navigate('Home')
            }
        })
    })

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const acessarConta = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home');
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    //Logotipo e titulo
    function renderLogo() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    marginTop: SIZES.padding * 20,
                    height: 500,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>
                    Finance Manager Instance
                </Text>
                <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                    Admnistrador de Finanças
                </Text>
                <Image
                    source={images.coffeelogo}
                    resizeMode="contain"
                    style={{
                        marginTop: SIZES.padding * -30,
                        width: "40%"
                    }}
                />
            </View>
        )
    }

    function renderLogin() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * -20,
                    marginHorizontal: SIZES.padding * 4,
                }}
            >
                {/* Full Name */}
                <View>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        E-mail:
                    </Text>
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.h2
                        }}
                        selectionColor={COLORS.white}
                    />
                </View>

                {/* Password */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Senha:
                    </Text>
                    <TextInput
                        onChangeText={setSenha}
                        value={senha}
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.h2
                        }}
                        selectionColor={COLORS.white}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 20,
                            height: 30,
                            width: 30
                        }}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={showPassword ? icons.disable_eye : icons.eye}
                            style={{
                                height: 30,
                                width: 30,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderButton() {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 1.5,
                        borderRadius: SIZES.radius / 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{
                        borderBottomColor: COLORS.white,
                        borderBottomWidth: 1,
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h3
                    }}>
                        Esqueci minha Senha
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 3,
                        height: 50,
                        width: 200,
                        backgroundColor: "#999",
                        borderRadius: SIZES.radius / 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={acessarConta}
                >
                    <Text style={{
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Entrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 3,
                        height: 50,
                        width: 100,
                        backgroundColor: "#999",
                        borderRadius: SIZES.radius / 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={{
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h4
                    }}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }

    function renderForgotPassword() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        <View
                            style={{
                                marginTop: SIZES.padding * 20,
                                height: 250,
                                width: SIZES.width * 0.9,
                                backgroundColor: COLORS.white,
                                borderRadius: SIZES.radius,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <View>
                                <Text style={{ color: COLORS.black, ...FONTS.h1 }}>
                                    Insira seu e-mail para recuperação:
                                </Text>
                                <TextInput
                                    style={{
                                        marginVertical: SIZES.padding,
                                        borderBottomColor: COLORS.black,
                                        borderBottomWidth: 1,
                                        height: 40,
                                        color: COLORS.black,
                                        ...FONTS.h2
                                    }}
                                    selectionColor={COLORS.black}
                                />
                            </View>
                            <TouchableOpacity
                                style={{
                                    marginTop: SIZES.padding * 3,
                                    height: 50,
                                    width: 200,
                                    backgroundColor: "#999",
                                    borderRadius: SIZES.radius / 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={() => console.log("Enviar")}
                            >
                                <Text style={{
                                    color: COLORS.white,
                                    color: COLORS.white, ...FONTS.h1
                                }}>
                                    Enviar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    function renderGroup() {
        return (
            <View style={{
                margin: SIZES.padding * 8,
                alignItems: 'center',
                justifyContent: 'flex-end'
            }}>
                <Text style={{
                    backgroundColor: "#000",
                    borderColor: '#000',
                    borderRadius: 10,
                    color: COLORS.white,
                    fontSize: 30,
                }}>
                    {' Midnight Coffee '}
                </Text>
            </View>
        )
    }

    // Background
    return (
        <ScrollView>
            <KeyboardAvoidingView
                enabled behavior={Platform.OS === "ios" ? padding : null}
                style={{ flex: 1 }}
            >
                <LinearGradient
                    colors={["#000", "#222"]}
                    style={{ flex: 1 }}
                >
                    <View>
                        {renderLogo()}
                        {renderLogin()}
                        {renderButton()}
                        {renderGroup()}
                    </View>
                </LinearGradient>
                {renderForgotPassword()}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
export default Start;
