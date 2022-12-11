import React, { useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images, Profiles, Categories, styles, GoalsList } from "../constants"

import app from "../src/config/firebase";
import { getFirestore, collection, getDocs} from "firebase/firestore"
import { getAuth } from "firebase/auth"

const Item = ({ title }) => (
    <View style = {styles.title}>
        <Text style = {styles.title}>
            {title}
        </Text>
    </View>
);

const Goals = ( { navigation } ) => {
    const firestore = getFirestore();
    const auth = getAuth();

    const renderItem = ({item}) => <Item title={item.title}/>

    const [locations, setLocations] = React.useState([])

    useEffect(() => {
        getDocumentos();
    })

    const getDocumentos = async () => {
        const users = [];
        const querySnapshot = await getDocs(collection(firestore, "users", auth.currentUser.uid, "Metas"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        })
    }

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
                    onPress={() => navigation.navigate("AddGoals")}
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

export default Goals;
