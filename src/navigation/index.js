import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {
  Foundation,
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import OrdersScreen from '../screens/OrdersScreen'
import OrderDetail from '../screens/OrderDetail'
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen'
import DishDetailScreen from '../screens/DishDetailScreen'
import Basket from '../screens/Basket'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeTabs' component={HomeTabs} />
    </Stack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator()

const HomeTabs = () => {
  const color = '#000'
  return (
    <Tab.Navigator
      activeColor='#6E36DF'
      inactiveColor='#C0ADDD'
      barStyle={{ backgroundColor: '#0B2ECA' }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Ordernes'
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='clipboard-list'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-alt' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Restaurants' component={HomeScreen} />
      <HomeStack.Screen name='Restaurant' component={RestaurantDetailsScreen} />
      <HomeStack.Screen name='Dish' component={DishDetailScreen} />
      <HomeStack.Screen name='Basket' component={Basket} />
    </HomeStack.Navigator>
  )
}

const OrdersStack = createNativeStackNavigator()

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="Order" component={OrderDetail} />
    </OrdersStack.Navigator>
  );
};


export default RootNavigator
