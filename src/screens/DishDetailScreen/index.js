import { React, useState } from 'react'
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons'


export default function DishDetailScreen() {
  const dish = restaurants[0].dishes[0]

  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(0)
  

  const onMinus = ()=>{
     if(quantity >1) setQuantity(quantity - 1)
     setTotal(quantity * dish.price)
  }

  const onPlus = ()=>{
    setQuantity(quantity + 1)
  }

 const getTotal = ()=>{
  let subtotal= dish.price * quantity
  return subtotal.toFixed(2)
 }

  return (
    <SafeAreaView>
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
        <View style={styles.button}>
          <Text style={styles.buttonText}>Cantidad:{' '}{quantity} {' items    '}
          &#8226; {'     '} total : {getTotal()}{' $'}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 30,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: '5/3',
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: 'grey',
  },
  price: {
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 30,
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
