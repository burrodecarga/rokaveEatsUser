import { FlatList, StyleSheet, View } from 'react-native'
import RestaurantItem from '../../components/RestauranItem'

export default function HomeScreen({restaurants}) {
  return (
    <View style={styles.container}>
     <View style={styles.page}>
    <FlatList
    showVerticalScrollIndicator={false}
    data={restaurants}
    renderItem={({item}) =><RestaurantItem restaurant={item}/>} />  
    </View> 
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
