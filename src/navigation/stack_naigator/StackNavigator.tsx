import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'features/home/screen/Home';
import Welcome from 'features/welcome/screens/Welcome';
import { ROUTE_NAME } from 'navigation/constant/constant';
import { RootStackParamList } from 'navigation/types';
import React from 'react';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={ROUTE_NAME.Welcome}
      component={Welcome}
      options={{ presentation: 'transparentModal', headerShown: false, animation: 'fade' }}
    />
    <RootStack.Screen
      name={ROUTE_NAME.Home}
      component={Home}
      options={{ presentation: 'transparentModal', headerShown: false, animation: 'fade' }}
    />
  </RootStack.Navigator>
);

export default StackNavigator;
