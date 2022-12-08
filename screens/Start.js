import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    KeyboardAvoidingView,
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { NavigationContainer } from "@react-navigation/native";

const Start = ({navigation}) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [modalVisible, setModalVisible] = React.useState(false)

    //Logotipo e titulo
    function renderLogo() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    marginTop: 5,
                    height: 300,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{color: COLORS.white, fontSize: 25 }}>
                    Finance Manager Instance
                </Text>
                <Text style={{color: COLORS.white, fontSize: 20 }}>
                    Administrador de Finanças
                </Text>
                <Image
                    source={images.coffeelogo}
                    resizeMode="contain"
                    style={{
                        marginTop: 25,
                        width: "40%",
                        height: "45%",
                        borderRadius: 200,
                    }}
                />
            </View>
        )
    }

    function renderLogin() {
        return (
            <View
                style={{
                    marginTop: -20,
                    marginHorizontal: 10,
                }}
            >
                {/* Full Name */}
                <View>
                    <Text style={{color: COLORS.white, fontSize: 25 }}>
                        Usuário:
                    </Text>
                    <TextInput
                        style={{
                            marginTop: 7,
                            marginVertical: 0,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 0.5,
                            height: 30,
                            color: COLORS.white,
                            fontSize: 18
                        }}
                        selectionColor={COLORS.white}
                    />
                </View>

                {/* Password */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: COLORS.white, fontSize: 25 }}>
                        Senha:
                    </Text>
                    <TextInput
                        style={{
                            marginTop: 7,
                            marginVertical: 0,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 0.5,
                            height: 30,
                            color: COLORS.white,
                            fontSize: 18
                        }}
                        selectionColor={COLORS.white}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 20,
                            height: 15,
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
            <View style ={{alignItems: 'center',
            justifyContent: 'center'}}>
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
                        color: COLORS.white, fontSize: 15 }}>
                            Esqueceu sua senha?
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        height: 50,
                        width: 200,
                        backgroundColor: "#999",
                        borderRadius: SIZES.radius / 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1 }}>
                            Entrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: 0,
                        height: 50,
                        width: 300,
                        borderRadius: SIZES.radius / 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={{
                        color: COLORS.white,
                        fontSize: 15,
                        borderBottomColor: COLORS.white,
                        borderBottomWidth: 1,
                    }}>
                        Ainda não possui uma conta?
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
                                    marginTop: 20,
                                    height: 250,
                                    width: SIZES.width * 0.9,
                                    backgroundColor: COLORS.white,
                                    borderRadius: SIZES.radius,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <View>
                                    <Text style={{color: COLORS.black, fontSize: 18 }}>
                                        Insira seu e-mail para recuperação:
                                    </Text>
                                    <TextInput
                                        style={{
                                            marginVertical: 7,
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
                                        marginTop: 10,
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
                                        color: COLORS.white, ...FONTS.h1 }}>
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
                margin: 5,
                alignItems: 'center',
                justifyContent: 'flex-end'
                }}>
                    <Text style={{
                        backgroundColor: "#000",
                        borderColor: '#000',
                        borderRadius: 10,
                        color: COLORS.white,
                        fontSize: 15,
                        }}>
                        {' @ Midnight Coffee '}
                    </Text>
            </View>
        )
    }

// Background
return(
    <KeyboardAvoidingView
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
)
}
export default Start;
