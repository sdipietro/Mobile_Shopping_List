import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
// import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random().toString(36).substr(2, 9), text: 'Milk'},
    {id: Math.random().toString(36).substr(2, 9), text: 'Eggs'},
    {id: Math.random().toString(36).substr(2, 9), text: 'Bread'},
    {id: Math.random().toString(36).substr(2, 9), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = (text) => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
    } else {
      setItems(prevItems => {
        return [{id: Math.random().toString(36).substr(2, 9), text}, ...prevItems]
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
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
  }
})

export default App;
