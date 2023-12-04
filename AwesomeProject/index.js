/**
 * @format
 */
import {setCustomText} from 'react-native-global-props';

import {AppRegistry} from 'react-native';
import App from './navigation/Petalokasiobjek';
import {name as appName} from './app.json';

// Set the default font for the entire application
const customTextProps = {
  style: {
    fontFamily: 'Poppins-Regular', // Change to the desired Poppins font variant
  },
};

// Add Poppins Semibold and Poppins Bold to the font family
const customTextPropsWithBold = {
  ...customTextProps,
  style: {
    ...customTextProps.style,
    fontWeight: 'bold', // You can also use '600' for Semibold and 'bold' for Bold
  },
};

setCustomText(customTextPropsWithBold); // Use setCustomText only once and pass the final configuration

AppRegistry.registerComponent(appName, () => App);
