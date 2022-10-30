import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';
import {
  Humidity,
  LoactionPin,
  Notification,
  Rain,
  Wind,
} from '../../assets/icons';
import { Readings, Reading } from '../../types';

export const StatsLabel = ({ currentStats }: Readings) => {
  return (
    <View style={styles.container}>
      <View style={styles.tranparentFX} />
      <View style={styles.colBar}>
        {currentStats.map((reading, index) => (
          <StatusDisplay key={index} {...reading} />
        ))}
      </View>
    </View>
  );
};

const StatusDisplay = ({ icon, value }: Reading) => {
  return (
    <View style={styles.flexRow}>
      {icon}
      <Text style={styles.scaleReading}>{value}</Text>
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
    marginTop: 20,
    position: 'relative',
    // backgroundColor: 'lavender',
  },
  tranparentFX: {
    borderRadius: 20,
    width: '100%',
    height: 50,
    backgroundColor: colors.dark,
    opacity: 0.3,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  colBar: {
    paddingHorizontal: 20,
    width: '100%',
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // backgroundColor: 'red',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scaleReading: {
    color: colors.light,
    fontSize: 14,
    marginLeft: 5,
  },
});
