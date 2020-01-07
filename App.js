
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SplashScreenPage from './src/containers/SplashScreen';
import CommentsListPage from './src/containers/CommentsList';

const StackApp = createStackNavigator({
  SplashScreen: {
    screen: SplashScreenPage,
    navigationOptions:{
      header: null
    }
  },
  CommentsList: {
    screen: CommentsListPage,
    navigationOptions: {
      title: 'Posts'
    }
  }
},{
  initialRouteName: 'SplashScreen'
}
);

export default createAppContainer(StackApp);