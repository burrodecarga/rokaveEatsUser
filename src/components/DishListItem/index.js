import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function DishListItem({ dish }) {
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=>navigation.navigate('Dish',dish.id)} style={styles.container}>
      <View style={{ flex:1 }}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>{dish.price} $</Text>
      </View>
      {dish.image && <Image source={{ uri:dish.image }} style={styles.image}/>}
    </Pressable>
  )
}

styles = StyleSheet.create({
container:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  marginVertical:10,
  marginHorizontal:10,
  paddingVertical:10,
  paddingHorizontal:20,
  backgroundColor: 'lightgrey',
  borderColor:'red',
  borderWidth:1,
  borderRadius:20
},
name:{
  fontWeight:'600',
  fontSize:17,
  letterSpacing:0.5
},
description:{
  color:'gray',
  marginVertical:10
},
price:{
  fontSize:16
},
image:{
  height:100,
  width:100,
  aspectRatio:1
}
})
