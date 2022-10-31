import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {font} from '../../styles/colorAndFontTheme';

const {width} = Dimensions.get('screen');
const frameSize = (width - 48) / 3 - 20;

const styles = StyleSheet.create({
  frame: {alignItems: 'center', paddingHorizontal: 10, paddingBottom: 20},
  image: {width: frameSize, height: frameSize, resizeMode: 'contain'},
  topText: {fontFamily: font.beeBold, fontSize: 15, paddingBottom: 10},
  bottomText: {fontFamily: font.beeBold, fontSize: 18},
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Collection'>;
}

const CollectionPhotoFrame = ({navigation}: Props) => {
  return (
    <TouchableOpacity
      style={styles.frame}
      onPress={() => navigation.navigate('CollectionDetail')}>
      <Text style={styles.topText}>2022년 10월 20일</Text>
      <Image
        style={styles.image}
        source={require('../../assets/image/PhotoFrame.png')}
      />
      <Text style={styles.bottomText}>[벵갈호랑이]</Text>
      <Text style={styles.bottomText}>한나</Text>
    </TouchableOpacity>
  );
};

export default CollectionPhotoFrame;
