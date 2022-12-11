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
    navigation
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images, Profiles, Categories, styles, GoalsList } from "../constants"

const EditProfile = ({ navigation }) => {

    function renderHeader() {
        return (
            <View style={styles.headerView}>
                <Text style={{
                    color: COLORS.white, ...FONTS.largeTitle
                }}>
                    Editar Perfís
                </Text>
            </View>
        )
    }

    function RenderProfiles({ data }) {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                marginTop: SIZES.padding * 2,
                alignItems: 'center',
                justifyContent: 'center',
            }}
                onPress={() => console.log("Editar perfil: " + data.name)}
            >
                <Image
                    source={icons.user}
                    resizeMode="contain"
                    style={{
                        width: 40,
                        height: 40,
                        tintColor: COLORS.white
                    }}
                />
                <View>
                    <Text style={styles.EditProfileList}>  Nome: {data.name}</Text>
                    <Text style={styles.EditProfileList}>  Saldo: {data.value}</Text>
                    <Text style={styles.EditProfileList}>  Moeda: {data.type}</Text>
                </View>
            </TouchableOpacity>

        )
    }

    function renderSelectProfile() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{
                    marginTop: SIZES.padding * 3,
                    marginLeft: SIZES.padding * 1.5,
                    color: COLORS.white,
                    ...FONTS.title
                }}>
                    Selecione um perfil:
                </Text>

                <FlatList
                    data={Profiles.Profiles}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <RenderProfiles data={item}
                        style={styles.list}
                    />}
                >
                    <TouchableOpacity>

                    </TouchableOpacity>
                </FlatList>


                <TouchableOpacity
                    style={styles.HomeButton}
                    onPress={() => navigation.navigate("AddProfile")}
                >
                    <Text style={styles.TextHomeButton}>
                        Adicionar Perfil
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
                    {renderSelectProfile()}
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default EditProfile;
