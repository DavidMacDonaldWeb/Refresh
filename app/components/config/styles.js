import { Platform } from 'react-native';

import colours from './colours';

export default {
    colours,
    text:{
    color: colours.black,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    },

};
