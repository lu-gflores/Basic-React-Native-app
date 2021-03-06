import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import {uuidv4, uuid} from 'uuidv4'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'milk'},
    {id: uuid(), text: 'bread'},
    {id: uuid(), text: 'eggs'},
    {id: uuid(), text: 'donuts'},

  ]);

  const addItem = (text) => {
    if(!text) {
      Alert.alert('Error', 'Please Enter an item' , {
        text: 'Ok'
      })
    } else{
      setItems(prevItems => {
        //takes all items 
        return [{id: uuid(), text}, ...prevItems]
      })
    }
    
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({item}) => (
       <ListItem item={item} deleteItem={deleteItem}/>
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
