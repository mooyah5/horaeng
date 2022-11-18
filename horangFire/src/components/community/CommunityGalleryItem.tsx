import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Community} from './CommunityContent';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const {width} = Dimensions.get('window');
const WIDTH = (width - 78) / 3;

const styles = StyleSheet.create({
  imageBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  imageWrap: {},
  imageItem: {
    borderRadius: 20,
    // shadowColor: 'gray',
    // shadowRadius: 0.25,
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 6,
    overflow: 'hidden',
    width: WIDTH,
    height: WIDTH,
    margin: 5,

    // elevation: 3, // 안드로이드 그림자
  },
  image: {
    // flex: 1,
    width: '100%',
    height: '100%',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Community'>;
  item: Community;
}

const CommunityGalleryItem = ({navigation, item}: Props) => {
  // useEffect(() => {
  //   console.log('사진 하나하나', item);
  // }, [item]);

  return (
    <TouchableOpacity
      style={styles.imageWrap}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('CommunityModal', {id: item.id})}>
      <View style={styles.imageItem}>
        <Image
          style={styles.image}
          source={require('../../assets/image/temp.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CommunityGalleryItem;
