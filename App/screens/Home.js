import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green
  },
  text: {
    textAlign: 'center',
    color: colors.offWhite,
    fontStyle: 'normal',
    fontSize: 20
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.green} />
      <View style={styles.body}>
        <Text style={styles.text}>Hello DigiVet World</Text>
      </View>
    </SafeAreaView>
  );
};
