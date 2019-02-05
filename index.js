/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import HelloWorldApp from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloWorldApp);
