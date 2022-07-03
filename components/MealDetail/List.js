import { View,Text,StyleSheet } from 'react-native'

function List({data}) {
    return data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
           <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
    ))
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginVertical: 4,
        marginHorizontal:12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color:'#351401',
        textAlign: 'center'
    }
})