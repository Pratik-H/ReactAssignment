/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Assignment
import Splash from './Assignment/SplashScreen'
import SignupScreen from './Assignment/SIgnupScreen'
import DashboardScreen from './Assignment/DashboardScreen'

AppRegistry.registerComponent(appName, () => DashboardScreen);
