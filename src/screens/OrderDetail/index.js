import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import orders from '../../../assets/data/orders.json'
import styles from '../RestaurantDetailsScreen/styles'
import BasketDishItem from '../../components/BaketDishItem'

export default function OrderDetailHeader() {
  const order = orders[0]
  return (
    <>
      <View style={[styles.page]}>
        <Image
          source={{ uri: order.Restaurant.image }}
          style={style.image}
          resizeMode='cover'
        />
        <View style={style.bg}>
          <View style={styles.container}>
            <Text style={styles.title}>{order.Restaurant.name}</Text>
            {/* <Text style={styles.subtitle}>
              Envío {order.Restaurant.deliveryFee.toFixed(2)}$ {'  Tiempo: '}
              {order.Restaurant.minDeliveryTime}-
              {order.Restaurant.maxDeliveryTime} minutos
            </Text> */}
          </View>
          <Text style={style.menuTitle}>Detalles del Pedido</Text>
        </View>
          <OrderDetail/>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Ordenar</Text>
          </View>
      </View>
    </>
  )
}

const OrderDetail = () => {
  return (
    <FlatList
    style={{ margin:20 }}
    showsVerticalScrollIndicator={false}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  )
}

const style = StyleSheet.create({
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: '#185c07',
    borderWidth: 1,
    backgroundColor: '#d2f386',
  },
  bg: {
    backgroundColor: '#c5bebe',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#c5b4b4',
  },

})
