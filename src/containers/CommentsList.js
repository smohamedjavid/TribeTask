import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {comment, getPost} from '../constants/URLs';
import Post from '../components/Post';

export default SplashScreen = props => {
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCommentsList();
  }, []);

  const fetchCommentsList = () => {
    setIsLoading(true);
    return fetch(comment)
      .then(response => response.json())
      .then(responseJson => {
        let groupPostCommentsData = responseJson
          .reduce(function(acc, curr) {
            let findIndex = acc.findIndex(function(item) {
              return item.postId === curr.postId;
            });
            if (findIndex === -1) {
              let newPost = {};
              newPost['postId'] = curr.postId;
              newPost['comments'] = [];
              newPost['comments'].push(curr);
              acc.push(newPost);
            } else {
              acc[findIndex].comments.push(curr);
            }
            return acc;
          }, [])
          .sort((a, b) => (a.comments.length > b.comments.length ? -1 : 1))
          .slice(0, 5);

        fetchPostFromSortedGroupedData(groupPostCommentsData);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchPostFromSortedGroupedData = sortedGroupedData => {
    let finalData = [];
    sortedGroupedData.forEach((post, index) => {
      let url = getPost(post.postId);
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          finalData.push({
            postId: post.postId,
            comments: post.comments,
            post: responseJson,
          });
          if (index === sortedGroupedData.length - 1) {
            setPostsList(finalData);
            setIsLoading(false);
          }
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator animating={true} color="#d3e2a1" size="large" />
      ) : (
        <FlatList
          data={postsList}
          keyExtractor={item => `${item.postId}`}
          renderItem={({item, index}) => (
            <Post key={index} item={item} index={index} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});
