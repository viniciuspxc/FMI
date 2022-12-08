import React from "react";
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    onPressHandler

} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images, styles } from "../constants"

const Entries = ({navigation}) => {

function renderHeader(){
    return(
        <View style={styles.headerView}>
            <Text style={{
        color: COLORS.white, ...FONTS.largeTitle}}>
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
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                    Valor:
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
                    Data:
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
                    Tipo:
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
                    Categoria:
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
                    Recorrência?
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
                    Parcerlamento?
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
                    Em Atraso?
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
                    width: 200,
                    backgroundColor: "#999",
                    borderRadius: SIZES.radius / 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => console.log("Entries")}
            >
                <Text style={{ 
                    color: COLORS.white,
                    color: COLORS.white, ...FONTS.h1 }}>
                        Lançar
                </Text>
            </TouchableOpacity>
        </View>
        
    )
}
    
    return(   
        <LinearGradient
            colors={["#000", "#222"]}
            style={{ flex: 1 }}
        >   
        <View>
            {renderHeader()}
            {renderEntries()}
            {renderButton()}
                                  
        </View>
        </LinearGradient> 
    )
}

export default Entries;
