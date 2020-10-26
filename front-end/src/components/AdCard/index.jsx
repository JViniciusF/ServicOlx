import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList, TouchableHighlight, Image } from 'react-native';
import { styles } from './styles.js';


export default function AdCard({ props }) {

    return (
        <View style={styles.container}>
            <TouchableHighlight 
                style={styles.card}>
                <Image style={styles.tinyLogo}
                    source={{
                        uri: props.img,
                    }}
                />
            </TouchableHighlight>
            <View style={styles.title}>
                <Text>{props.name}</Text>
            </View>
        </View>
    )
}