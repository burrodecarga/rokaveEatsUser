import React from 'react'
import { FlatList, Text, View } from 'react-native'
import orders from '../../../assets/data/orders.json'
import OrderListItem from '../../components/OrderListItem'

export default function OrderScreen() {
  return (
    <View style={{ flex:1,with:'100%', padingTop:50 }}>
      <FlatList
      data={orders}
      renderItem={({item})=><OrderListItem order={item}/>}
      />
    </View>
    
  )
}
