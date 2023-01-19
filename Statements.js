import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const statementsItem = ({ item }) => (
<View style={styles.statements_item}>
<Text style={styles.date}>{item.date}</Text>
<Text style={styles.month}>{item.month}</Text>
<Text style={styles.price}>{item.price}</Text>
<Image
    style={styles.top_arrow}
    source={{uri: item.top_arrow}}
   />
<Text style={styles.about_statement}>{item.about_statement}</Text>
</View>
  );

const Statements = ({ item }) => (
<FlatList
    style={styles.statements}
    data={item}
    renderItem={statementsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Statements;

const styles = StyleSheet.create({
    'date': {
        'color': '#030202',
        'fontSize': 20,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'month': {
        'color': '#666060',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'price': {
        'color': '#080707',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'top_arrow': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5
    },
    'about_statement': {
        'color': '#4d4747',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'marginBottom': 10
    }
});