import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Alert
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { NavigationContainer } from "@react-navigation/native";

import app from "../src/config/firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ScrollView } from "react-native-gesture-handler";

const SignUp = ({navigation}) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [modalVisible, setModalVisible] = React.useState(false)

    const auth = getAuth();

    const [usuario, setUsuario] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [senhaConfirm, setSenhaConfirm] = React.useState('');


    const criarConta = async () => {
        if(senha == senhaConfirm) {
            createUserWithEmailAndPassword(auth, email, senha)
                .then((userCredencial) => {
                    const user = userCredencial.user;
                })
                .catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                });

            const firestore = getFirestore();

            await setDoc(doc(firestore, usuario, usuario), {
                nome: usuario,
                moeda: 'real',
                saldoInicial: 0,
                descricao: ''
            });

        } else {
           console.log("Senhas não coincidem")
        }
    }

    //Logotipo e titulo
    function renderLogo() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    marginTop: SIZES.padding * 5,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{color: COLORS.white, ...FONTS.largeTitle }}>
                    Cadastro de Usuário
                </Text>
            </View>
        )
    }

    function renderCredentials() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 4,
                }}
            >
                {/* Usuario */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                        Usuário:
                    </Text>
                    <TextInput
                        onChangeText={setUsuario}
                        value={usuario}
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.h2,
                        }}
                        selectionColor={COLORS.white}
                    />
                </View>

                {/* e-mail */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                        E-mail:
                    </Text>
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
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

                {/* Confirmar Senhas */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Confirmar Senha:
                    </Text>
                    <TextInput
                        onChangeText={setSenhaConfirm}
                        value={senhaConfirm}
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
                        marginTop: SIZES.padding * 3,
                        height: 50,
                        width: 200,
                        backgroundColor: "#999",
                        borderRadius: SIZES.radius / 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={criarConta}
                >
                    <Text style={{
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1 }}>
                            Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }

// Background
return(
    <ScrollView>
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        >
            <LinearGradient
                colors={["#000", "#222"]}
                style={{ flex: 1 }}
            >
                <View>
                    {renderLogo()}
                    {renderCredentials()}
                    {renderButton()}
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    </ScrollView>
)
}
export default SignUp;
