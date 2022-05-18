import type { Color } from 'react-native-mechanic-map';

export default {
  randomColor: (): Color => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },
};
