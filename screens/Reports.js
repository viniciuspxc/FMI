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
import { COLORS, SIZES, FONTS, icons, images, Profiles, Categories, styles, EntriesList } from "../constants"


function renderHeader(){
    return(
        <View style={styles.headerView}>
            <Text style={{
        color: COLORS.white, ...FONTS.largeTitle}}>
                Estatísticas e Relatórios
            </Text>
        </View>
    )
}

function renderGraph(){
    return(
        <View style={{alignItems: 'center',
        justifyContent: 'center'}}>
            
            <Image
                    source={icons.wallet}
                    resizeMode="contain"
                    style={{
                        width: 200,
                        height: 200,
                        tintColor: COLORS.white,
                    }}
                />
        </View>
    )
}

function RenderCategories( {data}){
    return(
        <TouchableOpacity style={{
            flexDirection: 'row',
            marginTop: SIZES.padding * 2,
            alignItemsArr: 'flex-start',
            justifyContent: 'flex-start',                    
        }}
        onPress={() => console.log("Filtrar categoria: "+data.name)}
        >
            <Text style={styles.categories}>  {data.name}  </Text>

        </TouchableOpacity>
        
    )
}

function renderSelectCategories(){
    return(
        <View style={{ Flex: 1,
            flexDirection: 'row',
            marginTop: SIZES.padding * 1,
            marginStart: SIZES.padding * 2,
            alignItemsArr: 'flex-start',
            justifyContent: 'flex-start',
                                  
        }}>
        <Text style={{
        color: COLORS.white, ...FONTS.title}}>
            Categorias:  
        </Text>
        <View style={{ Flex: 1,
            height: 100,
            flexDirection: 'row',
            marginTop: SIZES.padding * 1,
            marginStart: SIZES.padding * 2,
            alignItemsArr: 'flex-start',
            justifyContent: 'flex-start',
                                  
        }}>
        <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        data={Categories.Categories}
        renderItem={ ({item}) => <RenderCategories data={item}
        keyExtractor={(item) => String(item.id)}
        />}
        />
        </View>
        </View>
    )
}

function RenderMovements( {data}){
    if(data.type == 1)
    return(
        <TouchableOpacity style={{
            flexDirection: 'row',
            marginTop: SIZES.padding * 1.5,
            marginStart: SIZES.padding * 2,
            alignItems: 'stretch',
            justifyContent: 'flex-start',                     
        }}
        onPress={() => console.log("Abrir lançamento id: "+data.id)}
        >
            <Text style={styles.income}>   {data.id}. {data.label} {data.currency} {data.value}   </Text>
        </TouchableOpacity>
    ) 
    else 
    return(
        <TouchableOpacity style={{
            flexDirection: 'row',
            marginTop: SIZES.padding * 1.5,
            marginStart: SIZES.padding * 2,
            alignItems: 'stretch',
            justifyContent: 'flex-start',                     
        }}
        onPress={() => console.log("Abrir lançamento id: "+data.id)}
        >
            <Text style={styles.outcome}>   {data.id}. {data.label} {data.currency} {data.value}   </Text>
        </TouchableOpacity>
    )
}

const Reports = () => {
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
            {renderGraph()}
            {renderSelectCategories()}

            <Text style={{
        color: COLORS.white, ...FONTS.title,marginStart: SIZES.padding*2}}>
                Relatórios:
            </Text>
            <FlatList style={styles.list}
            data={EntriesList.EntriesList}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={true}
            renderItem={ ({item}) => <RenderMovements data={item}
            />}
            />
        </View>
        </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default Reports;