import { React, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons'
import BasketDishItem from '../../components/BaketDishItem'


export default function Basket() {
  const restaurant = restaurants[0]

  

  return (
    <SafeAreaView>
      <View style={styles.page}>
      {restaurant.image && <Image source={ require('../../../assets/platos.jpg') } style={styles.image}/>}
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.description}>Su Pedido</Text>
        <View style={styles.separator} />

        <FlatList
        data={restaurant.dishes}
        renderItem={({item}) =><BasketDishItem  basketDish={item}/>}
        />
       
        <View style={styles.button}>
          <Text style={styles.buttonText}>Cantidad:{' '} {' items    '}
          &#8226; {'     '} total : {' $'}</Text>
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
    height:'30%',
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
    backgroundColor: '#18b8aa',
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
