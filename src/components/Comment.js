import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default Comment = ({comment}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{comment.name}</Text>
      <Text style={styles.email}>{comment.email}</Text>
      <Text style={styles.body}>{comment.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 2,
    marginBottom: 8
  },
  name:{
    fontWeight: '700',
    marginBottom: 4,
  },
  email:{
    marginBottom: 4,
    color: 'grey'
  },
  body: {
    fontSize: 14,
    marginBottom: 8,
  }
});
