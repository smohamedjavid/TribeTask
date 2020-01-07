import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('CommentsList');
    }, 800);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f1f1'},
  text: {fontSize: 16, fontWeight: '700'},
});
