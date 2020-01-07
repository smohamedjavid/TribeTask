import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Comment from './Comment';

export default Post = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <View style={styles.postInfo}>
        <Text style={styles.title}>{item.post.title}</Text>
        <Text style={styles.body}>{item.post.body}</Text>
      </View>
      <Text style={styles.comments}>Comments:</Text>
      {item.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    marginBottom: 8
  },
  postInfo:{
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 2,
    marginBottom: 8
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 8,
  },
  body: {
    fontSize: 15,
    marginBottom: 8,
  },
  comments: {
    marginBottom: 8,
    fontWeight: '700',
    fontSize: 16
  },
});
