import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const GreyScreen =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.main}>
                GreyScreen
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D2D7D3'
    },
    main:{
        foneSize:20
    }
})

export default GreyScreen