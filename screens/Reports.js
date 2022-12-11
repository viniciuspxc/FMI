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
    Dimensions
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images, Profiles, styles, EntriesList } from "../constants"
import {
    LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart
  } from "react-native-chart-kit";

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

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

function renderGraph({data}){
    return(
        <View style={{marginHorizontal: 10, alignItems: 'center',
        }}>
  <LineChart
    data={{
        labels: ["17/09/2022", "20/09/2022", "25/09/2022"],
        datasets: [
          {
            data: [-300.00, -650.00, 950.1],
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
          }
        ],
    }}
    fromZero={true}
    width={500} // from react-native
    height={300}
    yAxisLabel="R$"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#000",
      backgroundGradientFrom: "#222",
      backgroundGradientTo: "#222",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 20
      },
      propsForDots: {
        r: "6",
        strokeWidth: "3",
        stroke: "#000"
      }
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
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
            <Text style={styles.income}>   {data.id}. {data.label} {data.currency} {data.value}  {'\n'}   {data.date}  </Text>
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
            <Text style={styles.outcome}>   {data.id}. {data.label} {data.currency} {data.value}  {'\n'}   {data.date}  </Text>
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
        <View style={{marginHorizontal:2}}>
            {renderHeader()}
            {renderGraph(EntriesList.EntriesList)}
            
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