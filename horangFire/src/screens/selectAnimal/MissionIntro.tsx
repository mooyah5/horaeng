import React, {useState, useEffect} from 'react';
import {color, font} from '../../styles/colorAndFontTheme';

import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Alert,
  BackHandler,
  ImageSourcePropType,
  Animated,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  section1: {
    flex: 4,
  },
  section2: {
    flex: 4,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
  },
  section3: {
    flex: 10,
    paddingHorizontal: 24,
  },
  section4: {
    flex: 3,
    paddingHorizontal: 24,
  },
  backgroundColor: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  missionBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  missionText: {
    paddingHorizontal: 30,
    fontFamily: font.beeBold,
    fontSize: 20,
    color: color.BROWN_47,
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImage: {
    width: '70%',
    height: '80%',
  },
  characterName: {
    textAlign: 'center',
    fontFamily: font.beeBold,
    fontSize: 30,
    color: color.BROWN_47,
  },
  image1: {
    flex: 1,
    marginBottom: 5,
  },
  container: {
    marginTop: '10%',
    flex: 0.9,
  },
  btnContainer: {
    flex: 0.1,
    marginBottom: '5%',
    borderWidth: 1,
    borderColor: 'white',
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
  navigation: StackNavigationProp<ParamListBase, 'MissionIntro'>;
  route: any;
}

interface ANIMALIMAGE {
  name: string;
  image1: ImageSourcePropType;
  image2: ImageSourcePropType;
  image3: ImageSourcePropType;
  image4: ImageSourcePropType;
  image5: ImageSourcePropType;
  image6: ImageSourcePropType;
}

const animalImage: ANIMALIMAGE[] = [
  {
    name: 'tiger',
    image1: require('../../assets/image/missionIntro/72ppi/tiger1.png'),
    image2: require('../../assets/image/missionIntro/72ppi/tiger2.png'),
    image3: require('../../assets/image/missionIntro/72ppi/tiger3.png'),
    image4: require('../../assets/image/missionIntro/72ppi/tiger4.png'),
    image5: require('../../assets/image/missionIntro/72ppi/tiger5.png'),
    image6: require('../../assets/image/missionIntro/72ppi/tiger6.png'),
  },
  {
    name: 'bird',
    image1: require('../../assets/image/missionIntro/72ppi/bird1.png'),
    image2: require('../../assets/image/missionIntro/72ppi/bird2.png'),
    image3: require('../../assets/image/missionIntro/72ppi/bird3.png'),
    image4: require('../../assets/image/missionIntro/72ppi/bird4.png'),
    image5: require('../../assets/image/missionIntro/72ppi/bird5.png'),
    image6: require('../../assets/image/missionIntro/72ppi/bird6.png'),
  },
  {
    name: 'elephant',
    image1: require('../../assets/image/missionIntro/72ppi/elephant1.png'),
    image2: require('../../assets/image/missionIntro/72ppi/elephant2.png'),
    image3: require('../../assets/image/missionIntro/72ppi/elephant3.png'),
    image4: require('../../assets/image/missionIntro/72ppi/elephant4.png'),
    image5: require('../../assets/image/missionIntro/72ppi/elephant5.png'),
    image6: require('../../assets/image/missionIntro/72ppi/elephant6.png'),
  },
  {
    name: 'turtle',
    image1: require('../../assets/image/missionIntro/72ppi/turtle1.png'),
    image2: require('../../assets/image/missionIntro/72ppi/turtle2.png'),
    image3: require('../../assets/image/missionIntro/72ppi/turtle3.png'),
    image4: require('../../assets/image/missionIntro/72ppi/turtle4.png'),
    image5: require('../../assets/image/missionIntro/72ppi/turtle5.png'),
    image6: require('../../assets/image/missionIntro/72ppi/turtle6.png'),
  },
  {
    name: 'penguin',
    image1: require('../../assets/image/missionIntro/72ppi/penguin1.png'),
    image2: require('../../assets/image/missionIntro/72ppi/penguin2.png'),
    image3: require('../../assets/image/missionIntro/72ppi/penguin3.png'),
    image4: require('../../assets/image/missionIntro/72ppi/penguin4.png'),
    image5: require('../../assets/image/missionIntro/72ppi/penguin5.png'),
    image6: require('../../assets/image/missionIntro/72ppi/penguin6.png'),
  },
];

const MissionIntro = ({navigation, route}: Props) => {
  const {params} = route;
  // const characterName = params.animalName;
  // const selectedCharacterSpecies = params.selectedCharacterSpecies;
  const selectedCharacterId = params.selectedCharacterId;
  const num = selectedCharacterId - 1;
  const [next, setNext] = useState<number>(0);

  const value1 = new Animated.Value(0)
  const value2 = new Animated.Value(0)
  const value3 = new Animated.Value(0)
  const value4 = new Animated.Value(0)

  const orderPlus = () => {
    setNext(prev => prev + 1);
    Animated.timing(value1, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false
    }).start();
    Animated.timing(value2, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false
    }).start();
    Animated.timing(value3, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false
    }).start();
    Animated.timing(value4, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false
    }).start();
  };


  useEffect(() => {
    Animated.timing(value1, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, [value1])
  useEffect(() => {
    Animated.timing(value2, {
      toValue: 1,
      duration: 2000,
      delay:3000,
      useNativeDriver: false
    }).start();
  }, [value2])
  useEffect(() => {
    Animated.timing(value3, {
      toValue: 1,
      duration: 2000,
      delay:6000,
      useNativeDriver: false
    }).start();
  }, [value3])
  useEffect(() => {
    Animated.timing(value4, {
      toValue: 1,
      duration: 500,
      delay:8000,
      useNativeDriver: false
    }).start();
  }, [value4])

  const handleNextPage = () => {
    if (next === 0) {
      return (
        <View style={styles.container}>
          <View style={styles.image1}>
            <Animated.Image source={animalImage[num].image1} style={[styles.innerImage, {opacity:value1}]} />
          </View>
          <View style={styles.image1}>
            <Animated.Image source={animalImage[num].image2} style={[styles.innerImage, {opacity:value2}]}/>
          </View>
          <View style={styles.image1}>
            <Animated.Image source={animalImage[num].image3} style={[styles.innerImage, {opacity:value3}]} />
          </View>
          <TouchableOpacity onPress={() => orderPlus()}>
            <Animated.Text style={[styles.btnStyle, {opacity:value4}]}>NEXT ></Animated.Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (next === 1) {
      return (
        <View style={styles.container}>
          <View style={styles.image1}>
            <Animated.Image source={animalImage[num].image4} style={[styles.innerImage, {opacity:value1}]} />
          </View>
          <View style={styles.image1}>
            <Animated.Image source={animalImage[num].image5} style={[styles.innerImage, {opacity:value2}]} />
          </View>
          <View style={styles.image1}>
            <Animated.Image source={animalImage[num].image6} style={[styles.innerImage, {opacity:value3}]} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Animated.Text style={[styles.btnStyle, {opacity:value4}]}>MISSION START!</Animated.Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert('성냥팔이 호랭이', '앱을 종료하시겠습니까?', [
        {
          text: '취소',
          onPress: () => null,
        },
        {text: '확인', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.backgroundColor}>
      {handleNextPage()}
    </SafeAreaView>
  );
};

export default MissionIntro;
