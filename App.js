import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
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
    })
  }

  return (
    <View style={styles.container}>
      <Header />
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
