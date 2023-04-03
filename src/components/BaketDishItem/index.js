import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BasketDishItem({ basketDish }) {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.quantity}>2</Text>
        <Text style={{ fontWeight: 'bold' }}>{basketDish.name}</Text>
        <Text style={{ marginLeft: 'auto' }}>
          {basketDish.price}
          {' $'}
        </Text>
      </View>
      <View style={styles.separator} />
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantity: {
    marginRight: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 20,
  },
})
