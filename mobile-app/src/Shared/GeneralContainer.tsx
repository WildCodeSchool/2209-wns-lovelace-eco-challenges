import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const MainContainer = ({children}:any) => {
  return (
    <View style={styles.container}>
      {children}
      
      <View style={styles.footer}/>
    </View>
  )
}

export default MainContainer

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        paddingTop:46
    },
    footer: {
      width:"100%",
      height:25,
      backgroundColor:"#3B8574",
      position:"absolute",
      bottom:0
    }
})