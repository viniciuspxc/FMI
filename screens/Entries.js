import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Alert
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES, FONTS, icons, images, Profiles, styles } from "../constants";
import app from "../src/config/firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Entries = ({ navigation }) => {
    const [valor, setValor] = React.useState(0)
    const [data, setData] = React.useState("")
    const [tipo, setTipo] = React.useState("")
    const [recorrencia, setRecorrencia] = React.useState(false)
    const [parcelamento, setParcelamento] = React.useState(false)
    const [atraso, setAtraso] = React.useState(false)

    const firestore = getFirestore();
    const auth = getAuth();

    const lançar = async () => {
        if (valor == 0 | data == "" | tipo == "") {
            Alert.alert("Inválido!", "Preencha todos os campos!")
        } else {
            await setDoc(doc(firestore, "users", auth.currentUser.uid, "Lançamentos", tipo), {
                valor: valor,
                data: data,
                tipo: tipo,
                recorrencia: recorrencia,
                parcelamento: parcelamento,
                atraso: atraso
            });
        }
    }

    function renderHeader() {
        return (
            <View style={styles.headerView}>
                <Text style={{
                    color: COLORS.white, ...FONTS.largeTitle
                }}>
                    Lançamentos e Despesas
                </Text>
            </View>
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
                        Valor:
                    </Text>
                    <TextInput
                        onChangeText={setValor}
                        value={valor}
                        keyboardType="decimal-pad"
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



                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Data:
                    </Text>
                    <TextInput
                        onChangeText={setData}
                        value={data}
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

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Tipo:
                    </Text>
                    <TextInput
                        onChangeText={setTipo}
                        value={tipo}
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

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Recorrência?
                    </Text>
                    <TextInput
                        onChangeText={setRecorrencia}
                        value={recorrencia}
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

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Parcerlamento?
                    </Text>
                    <TextInput
                        onChangeText={setParcelamento}
                        value={parcelamento}
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

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Em Atraso?
                    </Text>
                    <TextInput
                        onChangeText={setAtraso}
                        value={atraso}
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
                    onPress={lançar}
                >
                    <Text style={{
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Lançar
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
                    {renderEntries()}
                    {renderButton()}

                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default Entries;
