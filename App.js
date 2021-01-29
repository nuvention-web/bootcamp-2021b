import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SharedCalendar from './screens/SharedCalendar';
import ScheduleCall from './screens/ScheduleCall';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SharedCalendarScreen"
                      component={SharedCalendar}
                      options={{ title: 'Calendar'}}
        />
        <Stack.Screen name="ScheduleCallScreen"
                      component={ScheduleCall}
                      options={{ title: 'Schedule a call'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
