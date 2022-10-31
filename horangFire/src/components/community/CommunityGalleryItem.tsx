import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const {width} = Dimensions.get('window');
const WIDTH = (width - 78) / 3;

const styles = StyleSheet.create({
  imageBox: {
    // backgroundColor: 'red',
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
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

const CommunityGalleryItem = ({navigation}: any) => {
  return (
    <TouchableOpacity
      style={styles.imageWrap}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('CommunityDetail')}
      // navigation={navigation}
    >
      <View style={styles.imageItem}>
        <Image
          style={styles.image}
          source={
            require('../../assets/image/temp.png')
            // uri: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjZfMTY3/MDAxNTU2MjU4NzExMDE3.O0keTMsgmc_5JHmmAHAFt5_8r0J83Hjbf9sENpY2fGEg.GW_eIVy_pVFNc7VQFfhSBY3Tm6B9Jwma2k5_4qmMHTIg.JPEG.iamkowepo/yaytg521092.jpg?type=w800',
          }
        />
      </View>
    </TouchableOpacity>
  );
};

export default CommunityGalleryItem;
