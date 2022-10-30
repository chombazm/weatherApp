import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import { ColumnContainer } from '../../components/ColumnContainer';
import { ColumnPast } from '../../components/ColumnPast';
import { MainHeader } from '../../components/Header';
import { HeroComp } from '../../components/HeroComp';
import { StatsLabel } from '../../components/StatsLabel';
import { styles } from './styles';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          paddingHorizontal: 30,
          paddingBottom: 60,
          ...Platform.select({
            android: {
              paddingTop: 60,
            },
          }),
        }}>
        {/* <MainHeader /> */}
        <HeroComp />

        <StatsLabel />

        <ColumnContainer />

        <ColumnPast />
      </ScrollView>
    </SafeAreaView>
  );
};
