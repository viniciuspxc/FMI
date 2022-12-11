import React from "react";
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

const AddSharedProfile = () => {

    function renderHeader() {
        return (
            <View style={styles.headerView}>
                <Text style={{
                    color: COLORS.white, ...FONTS.largeTitle
                }}>
                    Adicionar Conta Compartilhada
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

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
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

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.h1 }}>
                        E-mail:
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
                        //width: 250,
                        backgroundColor: "#999",
                        borderRadius: SIZES.radius / 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log("Adicionar Conta")}
                >
                    <Text style={{
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        {'   Adicionar Conta   '}
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
                    {renderCredentials()}
                    {renderButton()}
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default AddSharedProfile;
