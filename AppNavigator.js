import { createStackNavigator } from 'react-navigation';
import Login from './componentes/Login';
import Principal from './componentes/Principal';

const AppNavigator = createStackNavigator({
  Home: { screen: Login },
  Principal: { screen: Principal},
});

export default AppNavigator;