import { React, useState } from 'react'
import { Image, Pressable,  StyleSheet, Text, View } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


export default function DishDetailScreen() {
  const dish = restaurants[0].dishes[0]

  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(0)
  const navigation = useNavigation()
  

  const onMinus = ()=>{
     if(quantity >1) setQuantity(quantity - 1)
     let subtotal= dish.price * quantity
     setTotal(subtotal.toFixed(2))
  }

  const onPlus = ()=>{
    setQuantity(quantity + 1)
    let subtotal= dish.price * quantity
    setTotal(subtotal.toFixed(2))
  }

 
  return (
   
      <View style={styles.page}>
      {dish.image && <Image source={{ uri:dish.image }} style={styles.image}/>}
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <Text style={styles.price}>{dish.price} $</Text>
        <View style={styles.separator} />
        <View style={styles.row}>
          <AntDesign name='minuscircle' size={40} color='black' onPress={onMinus}/>
          <Text style={styles.quantity}>{quantity}</Text>
          <AntDesign name='pluscircle' size={40} color='black' onPress={onPlus}/>
        </View>
        <Text style={styles.info}>{' '}{quantity} {' items    '}
          &#8226; {'     '} total : {total}{' $'}</Text>
        <Pressable onPress={()=>navigation.navigate('Basket')} style={styles.button}>
          <Text style={styles.buttonText}>Ordernar</Text>
        </Pressable>
      </View>
      
   
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: '5/2',
   },
  name: {
    fontSize: 18,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
  },
  price: {
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 30,
  },
  info:{
    textAlign:'center',
    marginTop:20,
    fontWeight:'bold',
    fontSize:16,
    color:'grey',
  },
  button: {
    backgroundColor: '#c43535',
    color:'white',
    marginTop:'auto',
    padding:20,
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'lightgreen'
  },
  buttonText: {
    color:'white',
  }
})
