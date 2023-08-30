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
    const response = await fetch('http://localhost:8080/users/users').then(
      res => res.json(),
    );

    setdata(response);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text> alo</Text>
    </SafeAreaView>
  );
}

export default App;
