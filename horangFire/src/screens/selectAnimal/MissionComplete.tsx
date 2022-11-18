import React, {useEffect} from 'react';
import {font} from '../../styles/colorAndFontTheme';

import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageSourcePropType,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  container: {
    marginTop: '10%',
    flex: 0.9,
  },
  image1: {
    flex: 1,
    marginBottom: 5,
  },
  innerImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  btnStyle: {
    color: 'white',
    fontFamily: font.beeBold,
    fontSize: 30,
    borderColor: 'white',
    alignSelf: 'center',
    marginTop: '5%',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'MissionComplete'>;
  route: any;
}

interface ANIMALIMAGE {
  name: string;
  image1: ImageSourcePropType;
  image2: ImageSourcePropType;
  image3: ImageSourcePropType;
}

const animalImage: ANIMALIMAGE[] = [
  {
    name: 'tiger',
    image1: require('../../assets/image/missionOut/tigerOut1.png'),
    image2: require('../../assets/image/missionOut/tigerOut2.png'),
    image3: require('../../assets/image/missionOut/tigerOut3.png'),
  },
  {
    name: 'bird',
    image1: require('../../assets/image/missionOut/birdOut1.png'),
    image2: require('../../assets/image/missionOut/birdOut2.png'),
    image3: require('../../assets/image/missionOut/birdOut3.png'),
  },
  {
    name: 'elephant',
    image1: require('../../assets/image/missionOut/elephantOut1.png'),
    image2: require('../../assets/image/missionOut/elephantOut2.png'),
    image3: require('../../assets/image/missionOut/elephantOut3.png'),
  },
  {
    name: 'turtle',
    image1: require('../../assets/image/missionOut/turtleOut1.png'),
    image2: require('../../assets/image/missionOut/turtleOut2.png'),
    image3: require('../../assets/image/missionOut/turtleOut3.png'),
  },
  {
    name: 'penguin',
    image1: require('../../assets/image/missionOut/elephantOut1.png'),
    image2: require('../../assets/image/missionOut/elephantOut2.png'),
    image3: require('../../assets/image/missionOut/elephantOut3.png'),
  },
];

const MissionComplete = ({navigation, route}: Props) => {
  const {params} = route;
  const characterSpecies = params.characterSpecies;
  const num = characterSpecies - 1;

  const value1 = new Animated.Value(0);
  const value2 = new Animated.Value(0);
  const value3 = new Animated.Value(0);
  const value4 = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(value1, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(value2, {
      toValue: 1,
      duration: 2000,
      delay: 3000,
      useNativeDriver: false,
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(value3, {
      toValue: 1,
      duration: 2000,
      delay: 6000,
      useNativeDriver: false,
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(value4, {
      toValue: 1,
      duration: 500,
      delay: 8000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <View style={styles.container}>
        <View style={styles.image1}>
          <Animated.Image
            source={animalImage[num].image1}
            style={[styles.innerImage, {opacity: value1}]}
          />
        </View>
        <View style={styles.image1}>
          <Animated.Image
            source={animalImage[num].image2}
            style={[styles.innerImage, {opacity: value2}]}
          />
        </View>
        <View style={styles.image1}>
          <Animated.Image
            source={animalImage[num].image3}
            style={[styles.innerImage, {opacity: value3}]}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SelectAnimal')}>
          <Animated.Text style={[styles.btnStyle, {opacity: value4}]}>
            NEW!
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MissionComplete;
