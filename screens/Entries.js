import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Alert,
    Switch
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES, FONTS, icons, images, Profiles, styles } from "../constants";

import app from "../src/config/firebase";
import { getFirestore, getDoc, setDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Entries = ({ navigation }) => {
    const [valor, setValor] = React.useState(0)
    const [data, setData] = React.useState("")
    const [tipo, setTipo] = React.useState("")
    const [saldo, setSaldo] = React.useState(0)
    const [isRecorrencia, setRecorrencia] = React.useState(false)
    const toggleRecorrencia = () => { setRecorrencia(previousState => !previousState) }
    const [isParcelamento, setParcelamento] = React.useState(false)
    const toggleParcelamento = () => { setParcelamento(previousState => !previousState) }
    const [isAtraso, setAtraso] = React.useState(false)
    const toggleAtraso = () => { setAtraso(previousState => !previousState) }

    const firestore = getFirestore();
    const auth = getAuth();

    const lançar = async () => {
        if (valor == 0.0 | data == "" | tipo == "") {
            Alert.alert("Inválido!", "Preencha todos os campos!")
        } else {
            await setDoc(doc(firestore, "users", auth.currentUser.uid, "Lançamentos", tipo), {
                value: valor,
                label: 'lançamento',
                currency: 'R$',
                date: data,
                tipo: tipo,
                recorrencia: isRecorrencia,
                parcelamento: isParcelamento,
                atraso: isAtraso,
                type: 0
            });

            const docRef = doc(firestore, "users", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setSaldo(docSnap.data().saldo)
            } else {
                console.log("No such document!");
            }

            const novoSaldo = parseInt(saldo + valor);

            await updateDoc(doc(firestore, "users", auth.currentUser.uid), {
                saldo: novoSaldo
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

                <View style={styles.SwitchView}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Recorrência?
                    </Text>
                    <View style={{
                        marginStart: SIZES.padding * 10, marginTop: SIZES.padding * 1, alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                            {isRecorrencia ? 'Sim' : 'Não'}
                        </Text>
                        <Switch
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            trackColor={{ false: 'darkred', true: 'green' }}
                            thumbColor={isRecorrencia ? 'grey' : 'white'}
                            onValueChange={toggleRecorrencia}
                            value={isRecorrencia}
                        />
                    </View>
                </View>

                <View style={styles.SwitchView}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Parcelamento?
                    </Text>
                    <View style={{
                        marginStart: SIZES.padding * 10, marginTop: SIZES.padding * 1, alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                            {isParcelamento ? 'Sim' : 'Não'}
                        </Text>
                        <Switch
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            trackColor={{ false: 'darkred', true: 'green' }}
                            thumbColor={isParcelamento ? 'grey' : 'white'}
                            onValueChange={toggleParcelamento}
                            value={isParcelamento}
                        />
                    </View>
                </View>

                <View style={styles.SwitchView}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        Em Atraso?
                    </Text>
                    <View style={{
                        marginStart: SIZES.padding * 10, marginTop: SIZES.padding * 1, alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                            {isAtraso ? 'Sim' : 'Não'}
                        </Text>
                        <Switch
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            trackColor={{ false: 'darkred', true: 'green' }}
                            thumbColor={isAtraso ? 'grey' : 'white'}
                            onValueChange={toggleAtraso}
                            value={isAtraso}
                        />
                    </View>
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
