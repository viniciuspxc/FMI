import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    Modal,
    KeyboardAvoidingView,
    FlatList
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

import app from "../src/config/firebase";
import { getAuth, signOut } from "firebase/auth";

import { COLORS, SIZES, FONTS, icons, images, Profiles, RenderProfiles, styles } from "../constants"

const Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false)
    const [saldo, setSaldo] = React.useState(0)

    const auth = getAuth();

    const deslogar = () => {
        signOut(auth);
        navigation.navigate('Start');
    }

    function renderProfile() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 8
                }}
                onPress={() => setModalVisible(true)}
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

                <Text style={{
                    borderBottomColor: COLORS.white,
                    borderBottomWidth: 1,
                    marginLeft: SIZES.padding * 1.5,
                    color: COLORS.white,
                    ...FONTS.h1
                }}>
                    Perfil
                </Text>
            </TouchableOpacity>
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
                        width: 450,
                        backgroundColor: "#333",
                        borderRadius: SIZES.radius / 1,
                        borderLeftColor: COLORS.white,
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}
                    onPress={() => console.log("Saldo")}
                >
                    <Text style={{
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Saldo:
                    </Text>
                    <View style={{
                        height: 45,
                        width: 250,
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
                            VALOR
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 2,
                        height: 60,
                        width: 450,
                        backgroundColor: "#333",
                        borderRadius: SIZES.radius / 1,
                        borderLeftColor: COLORS.white,
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Entries")}
                >
                    <Text style={{

                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Lançamentos e Despesas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 2,
                        height: 60,
                        width: 450,
                        backgroundColor: "#333",
                        borderRadius: SIZES.radius / 1,
                        borderLeftColor: COLORS.white,
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Goals")}
                >
                    <Text style={{

                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Metas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 2,
                        height: 60,
                        width: 450,
                        backgroundColor: "#333",
                        borderRadius: SIZES.radius / 1,
                        borderLeftColor: COLORS.white,
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Reports")}
                >
                    <Text style={{

                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Estatísticas e Relatórios
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 2,
                        height: 60,
                        width: 450,
                        backgroundColor: "#333",
                        borderRadius: SIZES.radius / 1,
                        borderLeftColor: COLORS.white,
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log("botao1")}
                >
                    <Text style={{

                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Transferência entre Perfís
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 2,
                        height: 60,
                        width: 450,
                        backgroundColor: "#333",
                        borderRadius: SIZES.radius / 1,
                        borderLeftColor: COLORS.white,
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.navigate("Configs")}
                >
                    <Text style={{

                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Configurações
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: SIZES.padding * 2,
                        height: 60,
                        width: 450,
                        backgroundColor: "#333",
                        borderRadius: SIZES.radius / 1,
                        borderLeftColor: COLORS.white,
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={deslogar}
                >
                    <Text style={{

                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1
                    }}>
                        Sair
                    </Text>
                </TouchableOpacity>
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
                onPress={() => console.log("Trocar perfil: " + data.name)}
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
                <Text style={styles.list}>  {data.name}</Text>

            </TouchableOpacity>

        )
    }

    function renderChangeProfile() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, backgroundColor: "#111", alignItems: 'center', justifyContent: 'center' }}>

                        <View
                            style={{
                                marginTop: SIZES.padding * 1,
                                height: 600,
                                width: SIZES.width * 0.9,
                                backgroundColor: "#777",
                                borderRadius: SIZES.radius,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
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
                                style={{
                                    marginTop: SIZES.padding * 1,
                                    height: 60,
                                    width: 450,
                                    backgroundColor: "#333",
                                    borderRadius: SIZES.radius / 1,
                                    borderLeftColor: COLORS.white,
                                    borderBottomWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={() => navigation.navigate("AddProfile")}
                            >
                                <Text style={{
                                    color: COLORS.white, ...FONTS.h1
                                }}>
                                    Adicionar Perfil
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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
                    {renderProfile()}
                    {renderButton()}

                </View>
            </LinearGradient>
            {renderChangeProfile()}
        </KeyboardAvoidingView>
    )
}
export default Home;
