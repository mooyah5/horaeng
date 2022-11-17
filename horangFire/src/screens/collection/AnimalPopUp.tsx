import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dispatch} from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {font} from '../../styles/colorAndFontTheme';
import Character from './CharacterClass';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  // 동물 정보 영역
  pop_up_background: {marginHorizontal: 25, marginVertical: 35, height: '100%'},
  pop_up_box: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  pop_up_section1: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 40,
  },
  pop_up_section2: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 40,
  },
  pop_up_section3: {
    flex: 5,
    flexDirection: 'row',
    paddingHorizontal: 40,
    alignItems: 'center',
  },

  pop_up_name: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
  pop_up_bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    width: (width - 168) / 2,
    height: '100%',
  },

  pop_up_font: {fontFamily: font.beeBold, fontSize: 20},
  pop_up_subfont: {fontFamily: font.beeBold, fontSize: 14},

  pop_up_btn: {
    position: 'absolute',
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },

  x_button: {
    position: 'absolute',
    top: 0,
    right: 20,
    width: 30,
    height: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

interface Props {
  animal: Character;
  navigation: StackNavigationProp<ParamListBase, 'Collection'>;
  setSelectAnimal: Dispatch<number | null>;
}

const animalType = {
  1: '벵갈호랑이',
  2: '오목눈이',
  3: '아프리카코끼리',
  4: '바다거북이',
  5: '펭귄',
};

const AnimalPopUp = ({animal, navigation, setSelectAnimal}: Props) => {
  const handleCancelButton = () => {
    setSelectAnimal(null);
  };

  const handleOpenDiariesButton = () => {
    navigation.navigate('ListOfDiaries', {characterId: animal.id});
  };

  const handleOpenDetailButton = () => {
    navigation.navigate('InfoOfAnimal', {id: animal.character_id});
  };

  return (
    <View style={styles.pop_up_background}>
      <Image
        source={require('../../assets/image/optionBox.png')}
        style={styles.pop_up_box}
      />

      <View style={styles.pop_up_section1}>
        <View style={styles.pop_up_name}>
          <Text style={styles.pop_up_subfont}>이름</Text>
          <Text style={styles.pop_up_font}>{String(animal.nickname)}</Text>
        </View>
        <View style={styles.pop_up_name}>
          <Text style={styles.pop_up_subfont}>종류</Text>
          <Text style={styles.pop_up_font}>
            {animalType[animal.character_id]}
          </Text>
        </View>
      </View>
      <View style={styles.pop_up_section2}>
        <View style={styles.pop_up_name}>
          <Text style={styles.pop_up_subfont}>생성 날짜</Text>
          <Text style={styles.pop_up_font}>{String(animal.created_date)}</Text>
        </View>
        <View style={styles.pop_up_name}>
          <Text style={styles.pop_up_subfont}>다 키운 날짜</Text>
          <Text style={styles.pop_up_font}>
            {String(animal.completed_date)}
          </Text>
        </View>
      </View>
      <View style={styles.pop_up_section3}>
        <TouchableOpacity
          style={styles.pop_up_bottom}
          onPress={handleOpenDiariesButton}>
          <Image
            source={require('../../assets/image/btn_long.png')}
            style={styles.pop_up_btn}
          />
          <Text style={styles.pop_up_font}>일지 보기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pop_up_bottom}
          onPress={handleOpenDetailButton}>
          <Image
            source={require('../../assets/image/btn_long.png')}
            style={styles.pop_up_btn}
          />
          <Text style={styles.pop_up_font}>자세히 보기</Text>
        </TouchableOpacity>
      </View>
      <Pressable style={styles.x_button} onPress={handleCancelButton}>
        <Image
          source={require('../../assets/image/xButton.png')}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
};

export default AnimalPopUp;
