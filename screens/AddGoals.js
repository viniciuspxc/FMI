import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Alert
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images, Profiles, styles } from "../constants"

import app from "../src/config/firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const AddGoals = ({ navigation }) => {
    const [tipo, setTipo] = React.useState('')
    const [valor, setValor] = React.useState(0);
    const [data, setData] = React.useState('');
    const [descricao, setDescricao] = React.useState('');

    const firestore = getFirestore();
    const auth = getAuth();

    const adicionar = async () => {
        if (valor == 0 | data == "" | tipo == "") {
            Alert.alert("Inválido!", "Preencha todos os campos!")
        } else {
            await setDoc(doc(firestore, "users", auth.currentUser.uid, "Metas", tipo), {
                value: valor,
                currency: 'R$',
                date: data,
                descricao: descricao
            });

            navigation.navigate('Home')
        }
    }

    function renderHeader() {
        return (
            <View style={styles.headerView}>
                <Text style={{
                    color: COLORS.white, ...FONTS.largeTitle
                }}>
                    Adicionar Metas
                </Text>
            </View>
        )
    }

    function renderSwitch() {
        return (
            <Text>t</Text>
        )
    }

    function renderEntries() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 4,
                }}
            >
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Título:
                    </Text>
                    <TextInput
                        onChangeText={setTipo}
                        value={tipo}
                        style={styles.TextInput}
                        selectionColor={COLORS.white}
                    />
                </View>

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Valor:
                    </Text>
                    <TextInput
                        keyboardType="decimal-pad"
                        onChangeText={setValor}
                        value={valor}
                        style={styles.TextInput}
                        selectionColor={COLORS.white}
                    />
                </View>

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Data:
                    </Text>
                    <TextInput
                        onChangeText={setData}
                        value={data}
                        style={styles.TextInput}
                        selectionColor={COLORS.white}
                    />
                </View>

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Descrição:
                    </Text>
                    <TextInput
                        onChangeText={setDescricao}
                        value={descricao}
                        style={styles.TextInput}
                        selectionColor={COLORS.white}
                    />
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
                        marginTop: SIZES.padding * 3,
                        height: 50,
                        width: 200,
                        backgroundColor: "#999",
                        borderRadius: SIZES.radius / 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={adicionar}
                >
                    <Text style={{
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
        >
            <LinearGradient
                colors={["#000", "#222"]}
                style={{ flex: 1 }}
            >
                <ScrollView>
                    {renderHeader()}
                    {renderSwitch()}
                    {renderEntries()}
                    {renderButton()}

                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default AddGoals;
