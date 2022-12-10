import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images, styles } from "../constants"

const AddProfile = ({navigation}) => {
    
    function renderHeader() {
        return (
            <View
                style={styles.headerView}
            >
                <Text style={{color: COLORS.white, ...FONTS.largeTitle }}>
                    Adicionar Perfil
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
                    <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                        Nome do Perfil:
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
                    <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                        Moeda do Perfil::
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
                        Saldo:
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
                        Descrição (Opcional):
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
            <View style ={{alignItems: 'center',
            justifyContent: 'center'}}>

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
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{ 
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1 }}>
                            {'   Criar Perfil   '}
                    </Text>
                </TouchableOpacity>
            </View>
            
        )
    }
    
// Background
return(
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
export default AddProfile;