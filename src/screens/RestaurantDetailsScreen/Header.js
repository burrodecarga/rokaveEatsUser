import { Image, Text, View } from 'react-native'
import styles from './styles'
const RestaurantHeader = ({restaurant})=>{
  return (
  <>
   <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode='cover'
      />     
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>Envío{' '}
          {restaurant.deliveryFee}$ {'  Tiempo: '}
          {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutos
        </Text>
      </View>
      <Text style={styles.menuTitle}>Menu</Text>
  </>
   
  
  )
}

export default RestaurantHeader;