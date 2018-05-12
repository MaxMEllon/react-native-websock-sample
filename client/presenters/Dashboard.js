import React from 'react';
import styled from 'styled-components/native'
import { Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const Dashboard = ({ navigation }) => (
  <Container>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
  </Container>
)

Dashboard.navigationOptions = {
  title: 'Dashboard',
}

export default Dashboard
