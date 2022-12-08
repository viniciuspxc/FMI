import React from "react";
import{
    View,
    Text
} from "react-native"

const list = [
    {
        id:1,
        label:'boleto',
        valuer: '300,00',
        date: '17/09/2022',
        type: 0
    },
    {
        id:2,
        label:'boleto',
        valuer: '350,00',
        date: '17/09/2022',
        type: 0
    },
    {
        id:3,
        label:'boleto',
        valuer: '1600,10',
        date: '17/09/2022',
        type: 1
    }
]

function RenderMovements( {data}){
    return(
        <View>
            <Text style={styles.list}>{data.date}</Text>
        </View>
    )
}

const Reports = () => {
    return(
        <View>
            <Text>Reports</Text>

            <FlatList style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({item}) => <RenderMovements data={item}
            style={styles.list}
            />}
            />
        </View>
    )
}

export default Reports;