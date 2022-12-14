import React from "react";
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images, styles } from "../constants"

const Start = ({navigation}) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [modalVisible, setModalVisible] = React.useState(false)

    //Logotipo e titulo

    function renderHeader(){
        return(
            <View style={styles.logoView}>
                <Text style={{
            color: COLORS.white, ...FONTS.largeTitle}}>
                    Finance Manager Instance
                </Text>
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                    Admnistrador de Finanças
                </Text>
                
            </View>
        )
    }

    function renderLogo() {
        return (
            <View
                style={
                    styles.logoView
                }
            >
                <Image
                    source={images.coffeelogo}
                    resizeMode="contain"
                    style={{
                        marginTop: SIZES.padding * -40,
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
                    marginTop: SIZES.padding * -35,
                    marginHorizontal: SIZES.padding * 4,
                }}
            >
                {/* Full Name */}
                <View>
                    <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                        Usuário:
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
                        Senha:
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
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{ 
                        borderBottomColor: COLORS.white,
                        borderBottomWidth: 1,
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
                        color: COLORS.white, ...FONTS.h4 }}>
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
                                    <Text style={{color: COLORS.black, ...FONTS.h1 }}>
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
return(
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    >
        <LinearGradient
            colors={["#000", "#222"]}
            style={{ flex: 1 }}
        >
            <ScrollView>
                {renderHeader()}
                {renderLogo()}
                {renderLogin()}
                {renderButton()}
                {renderGroup()}
            </ScrollView>
        </LinearGradient>
        {renderForgotPassword()}
    </KeyboardAvoidingView>
)
}
export default Start;