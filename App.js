import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import RestaurantItem from './src/components/RestauranItem'
import restaurants from './assets/data/restaurants.json'
import HomeScreen from './src/screens/HomeScreen'
import RestaurantDetailPage from './src/screens/RestaurantDetailPage'
import DishDetailScreen from './src/screens/DishDetailScreen'
import Basket from './src/screens/Basket'
import OrderScreen from './src/screens/OrdersScreen'
import OrderDetail from './src/screens/OrderDetail'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation'

export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator/>
        <StatusBar style='auto' />
    </NavigationContainer>
  )
}


