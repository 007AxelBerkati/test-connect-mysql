/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

function App(): JSX.Element {
  const [data, setdata] = useState([]);

  const getData = async () => {
    await fetch('http://192.168.1.8:8080/users/users')
      .then(response => response.json())
      .then(data => console.log(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text> alo</Text>
    </SafeAreaView>
  );
}

export default App;
