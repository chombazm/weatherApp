import { SafeAreaView, ScrollView, Platform } from 'react-native';
import { ColumnContainer } from '../../components/ColumnContainer';
import { ColumnPast } from '../../components/ColumnPast';
import { HeroComp } from '../../components/HeroComp';
import { StatsLabel } from '../../components/StatsLabel';
import { styles } from './styles';

import { currentStats, dailyHourlyStats } from '../../../Data';

// const;
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
        <HeroComp />

        <StatsLabel currentStats={currentStats} />

        <ColumnContainer currentStats={dailyHourlyStats} />

        <ColumnPast />
      </ScrollView>
    </SafeAreaView>
  );
};
