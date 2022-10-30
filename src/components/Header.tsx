import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../assets/colors';
import { LoactionPin, Notification } from '../../assets/icons';

export const MainHeader = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.flexRow, { width: 100 }]}>
        <LoactionPin size={18} />
        <Text style={styles.mdHeader}>Lusaka</Text>
      </View>

      <View>
        <Notification />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mdHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.light,
  },
});
