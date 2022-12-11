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
import { COLORS, SIZES, FONTS, icons, images, Profiles, Categories, styles, GoalsList } from "../constants"
import app from "../src/config/firebase";
import { getFirestore, setDoc, doc, collection, query} from "firebase/firestore"
import { getAuth } from "firebase/auth"


function renderHeader() {
    return (
        <View style={styles.headerView}>
            <Text style={{
                color: COLORS.white, ...FONTS.largeTitle
            }}>
                Metas
            </Text>
        </View>
    )
}

function RenderGoalsList({ data }) {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            marginTop: SIZES.padding * 1,
            marginStart: SIZES.padding * 2,
            marginEnd: SIZES.padding * 2,
            marginBottom: SIZES.padding * 1,
            alignItems: 'stretch',
            justifyContent: 'flex-start',

        }}
            onPress={() => console.log("Abrir lançamento id: " + data.id)}
        >
            <Text style={styles.list}>   {data.id}. {data.date} {data.currency} {data.value}   </Text>
        </TouchableOpacity>
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
                    width: 300,
                    backgroundColor: "#444",
                    borderRadius: SIZES.radius / 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => console.log("Adicionar Metas")}
            >
                <Text style={{
                    color: COLORS.white,
                    color: COLORS.white, ...FONTS.h1
                }}>
                    Adicionar Metas
                </Text>
            </TouchableOpacity>
        </View>

    )
}

const Goals = () => {
    const firestore = getFirestore();
    const auth = getAuth();

    const [locations, setLocations] = React.useState([])

    useEffect(() => {
        receberDocumentos()
    })

    const receberDocumentos = async () => {
        const querySnapshot = await getDocs(collection(firestore, "users", auth.currentUser.uid, "Metas"));
        let d = [];
        querySnapshot.forEach((doc) => {
            const user = {
                id: doc.id,
                valor: doc.data().valor,
                tipo: doc.data().tipo
            }
            d.push(user);
        });
        setLocations(d);
    }


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

                    <FlatList
                        data={locations}
                        keyExtractor={(item) => String(item.id)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <RenderGoalsList data={item}
                        />}
                    />

                    {renderButton()}
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default Goals;
