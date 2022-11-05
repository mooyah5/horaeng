import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
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
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterName: {
    fontFamily: font.beeBold,
    fontSize: 40,
    color: color.BROWN_47,
  },
  missionTitle: {
    fontFamily: font.beeBold,
    fontSize: 20,
    color: color.BROWN_47,
  },
  missionInner: {
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BROWN_47,
  },
  missionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section1: {
    borderColor: 'red',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section3: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImage: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
});

const OnboardingItem = ({item, navigation}: any) => {
  const {width} = useWindowDimensions();
  const [selectedCharacterId, setCharacterId] = useState('');
  const setMissionFun = (id: string, name: string, species: string) => {
    setCharacterId(id);
    navigation.navigate('AnimalNameForm', {
      selectedCharacterId: id,
      selectedCharacterName: name,
      selectedCharacterSpecies: species,
    });
  };
  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.section1}>
        <Text style={styles.characterName}>{item.name}</Text>
      </View>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={styles.section3}>
        <Image source={item.backImage} style={styles.backImage} />
        <TouchableOpacity
          onPress={() => setMissionFun(item.id, item.name, item.species)}
          style={styles.missionContainer}>
          <Text style={styles.missionTitle}>MISSION START!</Text>
          <Text style={styles.missionInner}>{item.mission}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingItem;
