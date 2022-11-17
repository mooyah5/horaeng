import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {font} from '../../styles/colorAndFontTheme';
import {Community} from '../community/CommunityContent';

const {width} = Dimensions.get('window');
const diaryHeight = ((width - 88) / 3) * 0.8;

const styles = StyleSheet.create({
  diaryItem: {width: '100%', alignItems: 'center'},
  image: {width: '50%', height: diaryHeight, resizeMode: 'contain'},
  text: {fontFamily: font.beeBold, fontSize: 20},
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'ListOfDiaries'>;
  day: number;
  diary: Community;
}

const DiaryItem = ({navigation, day, diary}: Props) => {
  const goDiaryDetail = () => {
    navigation.navigate('DiaryDetail', {diary: diary, day: day});
  };

  return (
    <TouchableOpacity style={styles.diaryItem} onPress={goDiaryDetail}>
      <Image
        source={require('../../assets/image/icon/diaryItem.png')}
        style={styles.image}
      />
      <Text style={styles.text}>{day}일차</Text>
    </TouchableOpacity>
  );
};

export default DiaryItem;
