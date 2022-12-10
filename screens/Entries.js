import React from "react";
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    onPressHandler,
    KeyboardAvoidingView,
    ScrollView,
    Switch

} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images, Profiles, styles } from "../constants"

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

function renderSwitch(){
    return(
        <Text>t</Text>
    )
}

function renderEntries() {
    const[isRecorrencia, setRecorrencia] = React.useState(false);
    const toggleRecorrencia = () =>{setRecorrencia(previousState => !previousState)}
    const[isParcelamento, setParcelamento] = React.useState(false);
    const toggleParcelamento = () =>{setParcelamento(previousState => !previousState)}    
    const[isAtraso, setAtraso] = React.useState(false);
    const toggleAtraso = () =>{setAtraso(previousState => !previousState)}    


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
                    style={styles.TextInput}
                    selectionColor={COLORS.white}
                />
            </View>
                  
            <View style={{ marginTop: SIZES.padding * 2 }}>
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                    Data:
                </Text>
                <TextInput
                    style={styles.TextInput}
                    selectionColor={COLORS.white}
                />
            </View>

            <View style={{ marginTop: SIZES.padding * 2 }}>
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                    Tipo:
                </Text>
                <TextInput
                    style={styles.TextInput}
                    selectionColor={COLORS.white}
                />
            </View>

            <View style={styles.SwitchView}>
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                    Recorrência?
                </Text>
                <View style={{ marginStart: SIZES.padding * 10,marginTop: SIZES.padding * 1, alignItems: 'center',
        justifyContent: 'center' }}>
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                    {isRecorrencia ? 'Sim' : 'Não'}
                </Text>
                <Switch
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    trackColor={{false: 'darkred', true:'green'}}
                    thumbColor={isRecorrencia ? 'grey' : 'white'}
                    onValueChange={toggleRecorrencia}
                    value={isRecorrencia}
                />
                </View>
                </View>

            <View style={styles.SwitchView}>
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                    Parcerlamento?
                </Text>
                <View style={{ marginStart: SIZES.padding * 10,marginTop: SIZES.padding * 1, alignItems: 'center',
        justifyContent: 'center' }}>
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                    {isParcelamento ? 'Sim' : 'Não'}
                </Text>
                <Switch
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    trackColor={{false: 'darkred', true:'green'}}
                    thumbColor={isParcelamento ? 'grey' : 'white'}
                    onValueChange={toggleParcelamento}
                    value={isParcelamento}
                />
                </View>
                </View>

            <View style={styles.SwitchView}>
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                    Em Atraso?
                </Text>
                <View style={{ marginStart: SIZES.padding * 10,marginTop: SIZES.padding * 1, alignItems: 'center',
        justifyContent: 'center' }}>
                <Text style={{color: COLORS.white, ...FONTS.h1 }}>
                    {isAtraso ? 'Sim' : 'Não'}
                </Text>
                <Switch
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    trackColor={{false: 'darkred', true:'green'}}
                    thumbColor={isAtraso ? 'grey' : 'white'}
                    onValueChange={toggleAtraso}
                    value={isAtraso}
                />
                </View>
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
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        >
        <LinearGradient
            colors={["#000", "#222"]}
            style={{ flex: 1 }}
        >   
        <ScrollView>
            {renderHeader()}
            {renderSwitch()}
            {renderEntries()}
            {renderButton()}
                                  
        </ScrollView>
        </LinearGradient> 
        </KeyboardAvoidingView>
    )
}

export default Entries;
