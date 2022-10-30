import { StyleSheet, View, Text, Image } from 'react-native';
import { colors } from '../../assets/colors';
const heroImage = require('../../assets/images/Sun-cloud-angled-rain.png');

export const HeroComp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={heroImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.tmpText}>28</Text>
        <Text style={styles.degree}>°C</Text>
      </View>
      <View style={styles.centerBox}>
        <Text style={styles.subText}>Precipitations</Text>
        <View style={[styles.flexRow, { width: 200 }]}>
          <Text style={styles.subText}>Max: 31 °C</Text>
          <Text style={styles.subText}>Min: 25 °C</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    // backgroundColor: 'lavender',
    // marginTop: 15,
  },
  centerBox: {
    display: 'flex',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: colors.dark,
  },
  subText: {
    color: colors.light,
    fontSize: 20,
  },
  tmpText: {
    fontSize: 60,
    // fontWeight: 'bold',
    color: colors.light,
  },
  degree: {
    fontSize: 20,
    color: colors.light,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
