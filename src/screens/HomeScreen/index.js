import { FlatList, StyleSheet, View } from 'react-native'
import RestaurantItem from '../../components/RestauranItem'
import restaurants from '../../../assets/data/restaurants.json'

export default function HomeScreen() {
  return (
     <View style={styles.page}>
    <FlatList
    data={restaurants}
    renderItem={({item}) =><RestaurantItem restaurant={item}/>}
    keyExtractor={item => item.id}
    showVerticalScrollIndicator={false}
     />  
    </View> 

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page:{
    padding:10
  }
})
