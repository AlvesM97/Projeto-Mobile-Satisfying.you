/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ModalPopUp from './src/views/pop_up';
import recuperar_senha from './src/views/recuperar_senha';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => recuperar_senha);
