import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../assets/colors';
import { MapPin } from '../../assets/icons';

export const LandingContainer = () => {
  console.log('chomba chanda');
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.headerMd}>
          <View style={styles.headerMc}>
            <View>
              <MapPin fill="#fff" />
            </View>
            <Text style={styles.headerText}>Lusaka</Text>
          </View>
          <Text style={styles.bodyText}>Sat, 29 October 5:12 pm</Text>
        </View>
      </View>
      <View style={styles.containerBody}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: colors.lightDark,
    borderRadius: 20,
    padding: 20,
  },
  containerHeader: {},
  containerBody: {},
  headerText: {
    fontSize: 24,
    color: colors.light,
    fontWeight: 'bold',
  },
  headerMd: {
    // backgroundColor: 'lavender',
  },
  headerMc: {
    width: 110,
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyText: {
    fontSize: 18,
    color: colors.grey,
  },
});
