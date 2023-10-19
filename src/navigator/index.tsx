import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native';
import { HomeScreen } from '@screens/home/home.screen';
import { useFlipper } from '@react-navigation/devtools';
import { IApplicationStackParamList } from '@models/navigation.model';
import { GLOBAL_STYLE } from '@constants/styles.constant';

const Stack = createStackNavigator<IApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaView style={GLOBAL_STYLE.fill}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;