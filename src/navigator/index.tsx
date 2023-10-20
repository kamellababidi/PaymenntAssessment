import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native';
import { useFlipper } from '@react-navigation/devtools';

import { HomeScreen } from '@screens/home/home.screen';
import { FirstDetailsScreen } from '@screens/first-details/first-details.screen';
import { SecondDetailsScreen } from '@screens/second-details/second-details.screen';
import { ErrorScreen } from '@screens/error/error.screen';

import { IApplicationStackParamList } from '@models/navigation.model';

import { GLOBAL_STYLE } from '@constants/styles.constant';

const Stack = createStackNavigator<IApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaView style={GLOBAL_STYLE.safeArea}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FirstDetails" component={FirstDetailsScreen} />
          <Stack.Screen name="SecondDetails" component={SecondDetailsScreen} />
          <Stack.Screen name="Error" component={ErrorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
