import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { MainHeader } from '../../components/Header';
import { HeroComp } from '../../components/HeroComp';
import { StatsLabel } from '../../components/StatsLabel';
import { styles } from './styles';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 30 }}>
        <MainHeader />
        <HeroComp />

        <StatsLabel />
      </View>
    </SafeAreaView>
  );
};
