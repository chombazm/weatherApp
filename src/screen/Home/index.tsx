import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { LandingContainer } from '../../components/LandingCard';
import { styles } from './styles';
const wallPaperImage = require('../../../assets/images/pexels-pixabay-86695.jpg');

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{}}
        resizeMode="cover"
        style={styles.headerContainer}>
        <Text style={styles.headerText}>Weather</Text>
      </ImageBackground>

      <LandingContainer />
    </SafeAreaView>
  );
};
