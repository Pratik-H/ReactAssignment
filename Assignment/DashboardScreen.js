import React, { Component } from 'react';
import { Text, Alert, Button, View, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, FlatList , Dimensions} from 'react-native';

export default class DashboardScreen extends Component {

    render() {
        return (
            <View style={styles.viewContainer}>
                <Image style={styles.logoImage} source={require('../resources/neosoft_logo.png')} ></Image>
               <FlatList
                    data={animaldata}
                    renderItem={({item}) => (
                        <Image style={styles.itemContainer} source={item.value} ></Image>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={numColumns} />
            </View>
        );
    }
}

const animaldata = [
    {id: 'a', value: require('../resources/1.jpeg')},
    {id: 'b', value: require('../resources/2.jpg')},
    {id: 'c', value: require('../resources/3.jpeg')},
    {id: 'd', value: require('../resources/4.jpg')} 
  ];
  const numColumns = 2;
  const size = Dimensions.get('window').width/numColumns;
  const styles = StyleSheet.create({
      viewContainer:{
        marginTop: 60,
        alignItems : 'center'
      },
    itemContainer: {
      width: size,
      height: size,
      margin:5
    },
    item: {
      flex: 1,
      margin: 3,
      backgroundColor: 'lightblue',
    },
   
    imageWrapper: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        resizeMode: 'stretch',
    },
    logoImage: {
        width: "60%",
        height: "12%",
        alignItems: 'center',
   },
  });

