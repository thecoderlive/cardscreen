import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Statements from './Statements'

const Card = () => (
<ScrollView style={styles.card} showsVerticalScrollIndicator={false}>
<Text style={styles.main_title}>{item.main_title}</Text>
<Text style={styles.bank_name}>{item.bank_name}</Text>
<Text style={styles.bank_name_tilted}>{item.bank_name_tilted}</Text>
<Text style={styles.card_number}>{item.card_number}</Text>
<Text style={styles.card_holder}>{item.card_holder}</Text>
<Image
    style={styles.card_icon}
    source={{uri: item.card_icon}}
   />
<Statements item={item.statements}/>
</ScrollView>
)

export default Card;

const styles = StyleSheet.create({
    'main_title': {
        'color': '#050505',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'bank_name': {
        'color': '#060505',
        'fontSize': 18,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'fontStyle': 'italic'
    },
    'bank_name_tilted': {
        'color': '#060505',
        'fontSize': 20,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 30
    },
    'card_number': {
        'color': '#060505',
        'fontSize': 16,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'card_holder': {
        'color': '#050505',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'card_icon': {
        'width': '8vw',
        'height': '8vwvw',
        'margin': 5
    }
});