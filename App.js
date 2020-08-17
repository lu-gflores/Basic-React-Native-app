import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import {uuidv4, uuid} from 'uuidv4'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'milk'},
    {id: uuid(), text: 'bread'},
    {id: uuid(), text: 'eggs'},
    {id: uuid(), text: 'donuts'},

  ]);
  return (
    <View style={styles.container}>
      <Header/>
      <FlatList data={items} renderItem={({item}) => (
       <ListItem item={item}/>
      )}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
  },

})
export default App;
