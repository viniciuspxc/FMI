import React, { useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    FlatList,
    Modal,
    KeyboardAvoidingView,
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS, SIZES, FONTS, icons, images, Profiles, styles } from "../constants"

import app from "../src/config/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const Configs = ({ navigation }) => {
    const firestore = getFirestore();
    const auth = getAuth();

    const [moeda, setMoeda] = React.useState('');

    useEffect( () => {
        getMoeda();
    });

    const getMoeda = async () => {
        const docRef = doc(firestore, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setMoeda(docSnap.data().moeda)
            console.log(docSnap.data().moeda)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    function renderHeader() {
        return (
            <View style={styles.headerView}>
                <Text style={{
                    color: COLORS.white, ...FONTS.largeTitle
                }}>
                    Configurações
                </Text>
            </View>
        )
    }

    function renderButton() {
        return (
            <View style={{
                alignItems: 'center',
            }}>
                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 4,
                        height: 60,
                        width: 400,
                        backgroundColor: "#333",
                        borderRadius: SIZES.radius / 1,
                        borderLeftColor: COLORS.white,
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}
                    onPress={() => console.log("Trocar moeda padrão")}
                >
                    <Text style={{
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Moeda Padrão:
                    </Text>
                    <View style={{
                        height: 45,
                        width: 100,
                        backgroundColor: "#999",
                        borderRadius: SIZES.radius / 1,
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h1
                            }}
                            selectionColor={COLORS.white}
                        >
                            {moeda}
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.HomeButton}
                    onPress={() => navigation.navigate("AddSharedProfile")}
                >
                    <Text style={styles.TextHomeButton}>
                        Adicionar Conta Compartilhada
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.HomeButton}
                    onPress={() => navigation.navigate("EditProfile")}
                >
                    <Text style={styles.TextHomeButton}>
                        Editar Perfís
                    </Text>
                </TouchableOpacity>

            </View>

        )
    }

    // Background
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
        >
            <LinearGradient
                colors={["#000", "#222"]}
                style={{ flex: 1 }}
            >
                <View>
                    {renderHeader()}
                    {renderButton()}

                </View>
            </LinearGradient>

        </KeyboardAvoidingView>
    )
}
export default Configs;
