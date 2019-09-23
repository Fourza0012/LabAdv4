
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipcodeScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen
}, {
    initialRouteName: 'Weather',
    initialRouteParams: { zipcode: '90110' }
  });
export default createAppContainer(RootStack);
