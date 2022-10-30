import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../../assets/colors';
import { Calender } from '../../assets/icons';
const RainDrops = require('../../assets/images/Big-rain-drops.png');
const CloudLightning = require('../../assets/images/cloud-lightning.png');

export const ColumnPast = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tranparentFX} />

      <View style={styles.header}>
        <View style={styles.flexRow}>
          <Text style={styles.textMain}>Next Forecast</Text>
          {/* <Text style={styles.textMainSub}>Oct, 30</Text> */}
          <Calender />
        </View>
        <View style={styles.flexCol}>
          <View style={styles.colSubs}>
            <Text style={styles.textMainSub}>Monday</Text>
            <Image source={RainDrops} />
            <View style={styles.flexInsideCol}>
              <Text style={styles.mxText}>
                31 <Text style={{ fontSize: 10 }}>°C</Text>
              </Text>
              <Text style={[styles.mxText, { opacity: 0.4 }]}>
                10 <Text style={{ fontSize: 10 }}>°C</Text>
              </Text>
            </View>
          </View>
          <View style={styles.colSubs}>
            <Text style={styles.textMainSub}>Tuesday</Text>
            <Image source={CloudLightning} resizeMode="contain" />
            <View style={styles.flexInsideCol}>
              <Text style={styles.mxText}>
                31 <Text style={{ fontSize: 10 }}>°C</Text>
              </Text>
              <Text style={[styles.mxText, { opacity: 0.4 }]}>
                10 <Text style={{ fontSize: 10 }}>°C</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexInsideCol: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCol: {
    width: '100%',
    // display: 'flex',
    marginTop: 20,
    // flexDirection: 'row',
    // backgroundColor: 'red',
  },
  colSubs: {
    // width: '25%',
    // height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'lavender',
    marginTop: 10,
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    width: '100%',
    height: 200,
    marginTop: 100,
    paddingTop: 20,
    position: 'relative',
    // backgroundColor: 'lavender',
  },
  tranparentFX: {
    borderRadius: 20,
    width: '100%',
    height: 250,
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
  mxText: {
    color: colors.light,
    fontSize: 14,
    marginHorizontal: 5,
  },
});
