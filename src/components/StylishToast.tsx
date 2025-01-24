import Toast from 'react-native-root-toast';
import {StyleSheet} from 'react-native';

import COLORS from '../styles/colors';

const StylishToast = (message: string) => {
  // Show the toast
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM - 75,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: COLORS.dark,
    textColor: COLORS.white,
    containerStyle: styles.toastContainer,
    textStyle: styles.toastText,
  });
};

const styles = StyleSheet.create({
  toastContainer: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: COLORS.listBackground,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  toastText: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Arial',
    textAlign: 'center',
  },
});

export default StylishToast;
