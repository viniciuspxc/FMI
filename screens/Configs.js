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
                        width: 400,
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
