import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={stylesSearch.activityContainer}>
        <ActivityIndicator
            size={50}
            color='grey'
        />
        <Text>Cargando...</Text>
    </View>
  )
}
const stylesSearch = StyleSheet.create({
    activityContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default Loading