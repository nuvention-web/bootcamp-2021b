import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView} from 'react-native';

const ScheduleCall = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Please Select the family member and time.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});

export default ScheduleCall;