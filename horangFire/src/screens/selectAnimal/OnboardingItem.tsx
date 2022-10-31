import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';

const styles = StyleSheet.create({
  text: {
    fontFamily: font.beeBold,
    fontSize: 20,
    color: color.BROWN_47,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  characterName: {
    fontFamily: font.beeBold,
    fontSize: 40,
    color: color.BROWN_47,
  },
  backImage: {
    width: 250,
    height: 95,
  },
  missionTitle: {
    fontFamily: font.beeBold,
    fontSize: 20,
    color: color.BROWN_47,
    position: 'relative',
    ...Platform.select({
      ios: {
        top: -75,
      },
      android: {
        top: -80,
      },
    }),
  },
  missionInner: {
    fontFamily: font.beeBold,
    fontSize: 40,
    color: color.BROWN_47,
    position: 'relative',
    ...Platform.select({
      ios: {
        top: -75,
      },
      android: {
        top: -84,
      },
    }),
  },
  missionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const OnboardingItem = ({item, navigation}: any) => {
  const {width} = useWindowDimensions();
  const [selectedMission, setMission] = useState('');
  const setMissionFun = (name: string) => {
    setMission(name);
    navigation.navigate('AnimalNameForm');
  };
  return (
    <View style={[styles.container, {width}]}>
      <View>
        <Text style={[styles.characterName]}>{item.name}</Text>
      </View>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <Image source={item.backImage} style={styles.backImage} />
      <TouchableOpacity
        onPress={() => setMissionFun(item.name)}
        style={styles.missionContainer}>
        <Text style={styles.missionTitle}>MISSION START!</Text>
        <Text style={styles.missionInner}>{item.mission}</Text>
      </TouchableOpacity>
      <Text style={styles.text}></Text>
    </View>
  );
};

export default OnboardingItem;
