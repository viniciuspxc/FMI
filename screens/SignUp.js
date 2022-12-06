import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS, SIZES, FONTS, icons, images } from "../constants"


const SignUp = () => {
    const [showPassword, setShowPassword] = React.useState(false)

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
                <Text style={{color: COLORS.white, ...FONTS.largeTitle }}>
                    Finance Manager Instance
                </Text>
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
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
                    <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                        Usuário
                    </Text>
                    <TextInput
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
                        Senha
                    </Text>
                    <TextInput
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
            <View style ={{alignItems: 'center',
            justifyContent: 'center'}}>
                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 1.5,
                        borderRadius: SIZES.radius / 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log("Tela esqueci senha")}
                >
                    <Text style={{ 
                        borderBottomColor: COLORS.white,
                        borderBottomWidth: 1,
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h3 }}>
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
                    onPress={() => console.log("Home")}
                >
                    <Text style={{ 
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1 }}>
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
                    onPress={() => console.log("Cadastrar")}
                >
                    <Text style={{ 
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h4 }}>
                            Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
            
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
                        {'  '}
                        Midnight Coffee
                        {'  '}
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
    </KeyboardAvoidingView>
)
}
export default SignUp;