import { createStackNavigator } from '@react-navigation/stack';
import restaurants from '../../assets/data/restaurants.json'
import HomeScreen from '../screens/HomeScreen'
// import RestaurantItem from './src/components/RestauranItem'
// import RestaurantDetailPage from './src/screens/RestaurantDetailPage'
// import DishDetailScreen from './src/screens/DishDetailScreen'
// import Basket from './src/screens/Basket'
// import OrderScreen from './src/screens/OrdersScreen'
// import OrderDetail from './src/screens/OrderDetail'


const Stack = createStackNavigator()

const RootNavigator = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default RootNavigator