import { useNavigation } from '@react-navigation/native'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function RestaurantItem({ restaurant }) {
const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate("Restaurant", { id: restaurant.id })
  }
  return (
    <>
      <Pressable
      onPress={onPress}
      style={styles.restaurantContainer}>
        <Image source={{ uri: restaurant.image }} style={styles.image} />
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>
              {restaurant.deliveryFee}$ {'  '}
              {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutos
            </Text>
          </View>
          <View style={styles.rating}><Text >{restaurant.rating}</Text></View>
        </View>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: '5/3',
    marginBottom: 5,
  },
  title: {
    textAlign: 'justify',
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'grey',
  },
  row:{
    flexDirection:'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft:'auto',
    borderRadius:20,
    width:30,
    height:30,
    backgroundColor:'lightgrey',
    alignItems:'center',
    justifyContent:'center',

  }
})
