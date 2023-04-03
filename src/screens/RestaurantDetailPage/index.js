import { Text, View, Image, FlatList, StyleSheet } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import DishListItem from '../../components/DishListItem'
import Header from './Header'
import { Ionicons } from "@expo/vector-icons";
import styles from './styles'



export default function RestaurantDetailPage() {
  const restaurant = restaurants[0]
  return (
    <View style={styles.page}>
      <FlatList
         ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  )
}

