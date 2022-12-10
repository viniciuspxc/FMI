import React from "react";
import{
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

const Configs = ({navigation}) => {
 
    function renderHeader(){
        return(
            <View style={styles.headerView}>
                <Text style={{
            color: COLORS.white, ...FONTS.largeTitle}}>
                    Configurações
                </Text>
            </View>
        )
    }
    
    function renderButton() {
        return (
            <View style ={{alignItems: 'center',
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
                        flexDirection:'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}
                    onPress={() => console.log("Trocar moeda padrão")}
                >
                    <Text style={{                     
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1 }}>
                            Moeda Padrão:
                    </Text>
                        <View style={{height: 45,
                            //width: 200,   
                            backgroundColor: "#999",    
                            borderRadius: SIZES.radius / 1,
                            alignItems: 'center',
                            justifyContent: 'space-evenly' }}>                    
                        <Text
                            style={{                                                
                                color: COLORS.white,
                                ...FONTS.h1
                            }}
                            selectionColor={COLORS.white}
                        >
                        {'  MOEDA  '}
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
                    onPress={() => console.log("Adicionar Conta Compartilhada")}
                >
                    <Text style={{ 
                        
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1 }}>
                            Adicionar Conta Compartilhada
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
                    onPress={() => console.log("Editar Perfís")}
                >
                    <Text style={{ 
                        
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1 }}>
                            Editar Perfís
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
                    onPress={() =>console.log("Editar Categorias")}
                >
                    <Text style={{ 
                        
                        color: COLORS.white,
                        color: COLORS.white, ...FONTS.h1 }}>
                            Editar Categorias
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
                {renderButton()}

            </View>
        </LinearGradient>
        
    </KeyboardAvoidingView>
)
}
export default Configs;
