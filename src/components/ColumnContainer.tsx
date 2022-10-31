import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';
import { CloudMoon, CloudSun } from '../../assets/icons';
import { Reading, Readings } from '../../types';

export const ColumnContainer = ({ currentStats }: Readings) => {
  return (
    <View style={styles.container}>
      <View style={styles.tranparentFX} />

      <View style={styles.header}>
        <View style={styles.flexRow}>
          <Text style={styles.textMain}>Today</Text>
          <Text style={styles.textMainSub}>Oct, 30</Text>
        </View>
        <View style={styles.flexRow}>
          {currentStats.map((reading, index) => (
            <HourlyReading key={index} {...reading} />
          ))}
          {/* <View style={styles.timeSat}>
            <View style={styles.flexInside}>
              <Text style={styles.mdText}>31 °C</Text>
              <CloudSun />
              <Text style={styles.mdText}>15:00</Text>
            </View>
          </View>

          <View style={styles.timeSat}>
            <View style={styles.flexInside}>
              <Text style={styles.mdText}>30 °C</Text>
              <CloudSun />
              <Text style={styles.mdText}>16:00</Text>
            </View>
          </View>

          <View
            style={[
              styles.timeSat,
              { borderColor: colors.light, borderWidth: 1 },
            ]}>
            <View style={styles.flexInside}>
              <Text style={styles.mdText}>28 °C</Text>
              <CloudMoon />
              <Text style={styles.mdText}>17:00</Text>
            </View>
          </View>

          <View style={styles.timeSat}>
            <View style={styles.flexInside}>
              <Text style={styles.mdText}>28 °C</Text>
              <CloudSun />
              <Text style={styles.mdText}>18:00</Text>
            </View>
          </View> */}
        </View>
      </View>
    </View>
  );
};

const HourlyReading = ({ icon, label, value }: Reading) => {
  return (
    <View style={styles.timeSat}>
      <View style={styles.flexInside}>
        <Text style={styles.mdText}>{value}</Text>
        {icon}
        <Text style={styles.mdText}>{label}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    width: '100%',
    height: 200,
    marginTop: 20,
    paddingTop: 20,
    position: 'relative',
    // backgroundColor: 'lavender',
  },
  tranparentFX: {
    borderRadius: 20,
    width: '100%',
    height: 270,
    backgroundColor: colors.dark,
    opacity: 0.3,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  header: {
    width: '100%',
    // height: 20,
    paddingHorizontal: 20,
    color: colors.light,
  },
  textMain: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 'bold',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: '#333',
  },
  textMainSub: {
    color: colors.light,
    fontSize: 18,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeSat: {
    display: 'flex',
    marginTop: 30,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: c,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    // width: 100,
    paddingVertical: 20,
    // height: 100,
    // borderColor: colors.light,
    // borderWidth: 1,
    borderRadius: 20,
  },
  scaleReading: {
    color: colors.light,
    fontSize: 14,
    marginLeft: 5,
  },
  flexInside: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  mdText: {
    color: colors.light,
    fontSize: 20,
  },
});
