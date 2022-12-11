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
    ScrollView,
    toFixed
    
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS, SIZES, FONTS, icons, images, Profiles, styles } from "../constants"

const Home = ({navigation}) => {
    const [modalVisible, setModalVisible] = React.useState(false)
    const[isProfile, setProfile] = React.useState('Selecionar Perfil');
    const[isSaldo, setSaldo] = React.useState('###');
    const[isCurrency, setCurrency] = React.useState();
    const toggleProfile = ({data}) =>{
    setModalVisible(false)
    setCurrency(data.currency);
    setSaldo(String(data.value.toFixed(2)))
    setProfile(data.name)}

    function renderProfile() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: SIZES.padding * 6,
                    marginStart: SIZES.padding * 6,
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
                     ...FONTS.h1 }}>
                        {isProfile}
                </Text>
            </TouchableOpacity>
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
                    onPress={() => console.log("Saldo")}
                >
                    <Text style={styles.TextHomeButton}>
                            Saldo:
                    </Text>
                        <View style={{height: 45,
                            width: 250,   
                            backgroundColor: "#999",    
                            borderRadius: SIZES.radius / 1,
                            alignItems: 'center',
                            justifyContent: 'space-evenly' }}>                    
                        <Text style={styles.TextHomeButton}
                            selectionColor={COLORS.white}
                        >
                        {isCurrency} {isSaldo}
                        </Text>
                        
                   </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.HomeButton}
                    onPress={() => navigation.navigate("Entries")}
                >
                    <Text style={styles.TextHomeButton}>
                            Lançamentos e Despesas
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.HomeButton}
                    onPress={() => navigation.navigate("Goals")}
                >
                    <Text style={styles.TextHomeButton}>
                            Metas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.HomeButton}
                    onPress={() => navigation.navigate("Reports")}
                >
                    <Text style={styles.TextHomeButton}>
                            Estatísticas e Relatórios
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.HomeButton}
                    onPress={() => navigation.navigate("ProfileTransfer")}
                >
                    <Text style={styles.TextHomeButton}>
                            Transferência entre Perfís
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.HomeButton}
                    onPress={() => navigation.navigate("Configs")}
                >
                    <Text style={styles.TextHomeButton}>
                            Configurações
                    </Text>
                </TouchableOpacity>
            </View>
            
        )
    }


    function RenderProfiles( {data}){
        return(
            <TouchableOpacity style={{
                flexDirection: 'row',
                marginTop: SIZES.padding * 2,
                alignItems: 'center',
                justifyContent: 'center',                      
            }}
            onPress={() => toggleProfile({data})}
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
                    <View style={{ flex: 1, backgroundColor: "#111", alignItems: 'center', justifyContent: 'center'}}>
                           
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
                                        ...FONTS.title }}>
                                Selecione um perfil:
                                </Text>

                                <FlatList
                                    data={Profiles.Profiles}
                                    keyExtractor={(item) => String(item.id)}
                                    
                                    showsVerticalScrollIndicator={false}
                                    renderItem={ ({item}) => <RenderProfiles data={item}
                                    style={styles.list}
                                    />}
                                >
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
                    </View>
                </TouchableWithoutFeedback>  
            </Modal>
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
            <ScrollView style={{ flex: 1 }}
            >   
                {renderProfile()}
                {renderButton()}

            </ScrollView>
        </LinearGradient>
        {renderChangeProfile()}
    </KeyboardAvoidingView>
)
}
export default Home;
