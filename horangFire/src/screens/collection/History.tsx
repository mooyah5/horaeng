import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';
import api from '../../api/api_controller';
import {selectUser} from '../../store/user';
import {selectCharacter} from '../../store/character';
import {color, font} from '../../styles/colorAndFontTheme';
import Character from './CharacterClass';
import AnimalPopUp from './AnimalPopUp';

const {width, height} = Dimensions.get('window');

const RANGE = {
  left: 0,
  right: width - 118,
  top: 0,
  bottom: (height - 70) * (16 / 57) - 50,
};

const CHARACTER_IMAGE = {
  1: {
    left: require('../../assets/image/character/72ppi/tiger3.png'),
    right: require('../../assets/image/character/72ppi/tiger3.png'),
  },
  2: {
    left: require('../../assets/image/animals/left/bird_level3_left.gif'),
    right: require('../../assets/image/animals/right/bird_level3_right.gif'),
  },
  3: {
    left: require('../../assets/image/animals/left/elephant_level3_left.gif'),
    right: require('../../assets/image/animals/right/elephant_level3_right.gif'),
  },
  4: {
    left: require('../../assets/image/animals/left/turtle_level3_left.gif'),
    right: require('../../assets/image/animals/right/turtle_level3_right.gif'),
  },
  5: {
    left: require('../../assets/image/animals/left/penguin_level3_left.gif'),
    right: require('../../assets/image/animals/right/penguin_level3_right.gif'),
  },
};

const styles = StyleSheet.create({
  body: {width: '100%', height: '100%'},
  area: {width: '100%', height: '100%'},
  section1: {flex: 5, flexDirection: 'row'},
  section2: {flex: 6, justifyContent: 'flex-end'},
  section3: {flex: 16},
  section4: {flex: 4},
  section5: {
    flex: 16,
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section6: {flex: 10},

  // 상단 버튼영역
  button_area: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button_empty_area: {flex: 3},
  button_image: {resizeMode: 'contain'},
  button_text: {fontFamily: font.beeBold, fontSize: 24, paddingHorizontal: 5},

  // 타이틀 영역
  title: {fontFamily: font.beeBold, fontSize: 50, textAlign: 'center'},

  // 동물 영역
  animalBox: {
    position: 'absolute',
  },
  animal: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  selected: {
    ...Platform.select({
      ios: {
        shadowColor: 'red',
        shadowOpacity: 1,
        shadowOffset: {width: 1, height: 1},
      },
      android: {
        // TODO 안드로이드 그림자 추가 방법 찾아보기
        elevation: 5,
      },
    }),
  },
  animalName: {
    color: color.WHITE,
    fontFamily: font.beeBold,
    alignSelf: 'center',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 1,
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Collection'>;
}

const History = ({navigation}: Props) => {
  const user = useSelector(selectUser);
  const character = useSelector(selectCharacter);
  const [myAnimalList, setMyAnimalList] = useState<Character[]>([]);

  const [selectAnimal, setSelectAnimal] = useState<number | null>(null);

  const handleBackButton = () => {
    navigation.navigate('Home');
  };

  const initialSetting = async () => {
    const response = await api.history.getHistory(user.id);

    if (response.data?.grownList) {
      const list: Character[] = [];
      for (const animal of response.data.grownList) {
        const new_animal = new Character(animal, RANGE);
        list.push(new_animal);
      }
      setMyAnimalList(() => list);
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    initialSetting();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setMyAnimalList(prev => {
        return prev.map(animal => {
          const new_x = animal.x + animal.velocity * animal.direction.base;
          const new_y = animal.y + animal.velocity * animal.direction.height;
          if (
            animal.range.left < new_x &&
            new_x < animal.range.right &&
            animal.range.top < new_y &&
            new_y < animal.range.bottom
          ) {
            animal.x = new_x;
            animal.y = new_y;

            if (animal.x < 0) {
              animal.x = 0;
            } else if (animal.x > animal.range.right) {
              animal.x = animal.range.right;
            }

            if (animal.y < 0) {
              animal.y = 0;
            } else if (animal.y > animal.range.bottom) {
              animal.y = animal.range.bottom;
            }
          } else {
            animal.velocity = Math.max(Math.random(), 0.5);

            const isXMinus = Math.random() < 0.5 ? -1 : 1;
            const isYMinus = Math.random() < 0.5 ? -1 : 1;

            animal.direction.base = Math.random() * isXMinus;
            animal.direction.height = Math.random() * isYMinus;
          }
          return animal;
        });
      });
    }, 100);
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/image/background/collection_background.png')}
      style={styles.body}>
      <SafeAreaView style={styles.body}>
        <View style={styles.section1}>
          <TouchableOpacity
            style={styles.button_area}
            onPress={handleBackButton}>
            <Image
              style={styles.button_image}
              source={require('../../assets/image/leftArrow.png')}
            />
            <Text style={styles.button_text}>뒤로가기</Text>
          </TouchableOpacity>
          <View style={styles.button_empty_area} />
        </View>
        <View style={styles.section2}>
          <Text style={styles.title}>
            {myAnimalList.length * 3 + (character?.count ? character.count : 0)}
            일간 지구를 지켰어!
          </Text>
        </View>

        <View style={styles.section3}>
          {typeof selectAnimal === 'number' ? (
            <AnimalPopUp
              animal={myAnimalList[selectAnimal]}
              navigation={navigation}
              setSelectAnimal={setSelectAnimal}
            />
          ) : null}
        </View>
        <View style={styles.section4} />
        <View style={styles.section5}>
          {myAnimalList.map((item, index) => {
            return (
              <Pressable
                key={item.id}
                onPress={() => setSelectAnimal(index)}
                style={[
                  styles.animalBox,
                  {top: item.y, left: item.x, zIndex: Math.floor(item.y)},
                ]}>
                <Text style={styles.animalName}>{item.nickname}</Text>
                {item.direction.base < 0 ? (
                  <Image
                    source={CHARACTER_IMAGE[item.character_id].left}
                    style={[
                      styles.animal,
                      selectAnimal === index ? styles.selected : null,
                    ]}
                  />
                ) : (
                  <Image
                    source={CHARACTER_IMAGE[item.character_id].right}
                    style={[
                      styles.animal,
                      selectAnimal === index ? styles.selected : null,
                    ]}
                  />
                )}
              </Pressable>
            );
          })}
        </View>
        <View style={styles.section6} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default History;
