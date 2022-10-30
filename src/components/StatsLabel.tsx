import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';
import { LoactionPin, Notification } from '../../assets/icons';

export const StatsLabel = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
    paddingHorizontal: 30,
    backgroundColor: colors.dark,
    opacity: 0.3,
  },
});
