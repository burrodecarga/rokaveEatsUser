import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function OrderListItem({order}) {
  let bg=false  
  if(order.status=='NEW'){bg=true}
  return (
    <View  style={[styles.container, {backgroundColor: bg? '#f3b8b8':'#b0e4a9'}]}>
      <Image  source={{ uri: order.Restaurant.image }}
        style={{ width: 75, height: 75, marginRight: 5 }}/>
    <View>
      <Text>{order.Restaurant.name}</Text>
      <Text>2 items . 45 $</Text>
      <Text>hace 2 días . status:pendiente</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    margin: 10, alignItems: "center",
    paddingHorizontal:15,
    paddingVertical:12,
    borderRadius:20,
    borderColor: '#000',
    borderWidth:1,
  }
})
