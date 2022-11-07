import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CommunityGalleryItem from '../../components/community/CommunityGalleryItem';
// import NoticeItem from '../../components/community/NoticeItem';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
  navigation: any;
  isNotice: boolean;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 100,
  },
  tableBox: {
    flex: 1,
  },
});

const CommunityContent = ({navigation}: Props) => {
  // const [isNotice, setIsNotice] = useState(false);
  // const [noticeData, setNoticeData] = useState<number[]>([
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  // ]);
  const [imageData, setImageData] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);
  return (
    <>
      <View style={styles.container}>
        {/* {isNotice ? (
          <FlatList
            data={imageData}
            renderItem={item => (
              <CommunityGalleryItem navigation={navigation} />
            )}
            numColumns={3}
            key={null}
          />
        ) : (
          <FlatList
            style={styles.tableBox}
            data={noticeData}
            renderItem={item => <NoticeItem navigation={navigation} />}
            key={null}
          />
        )} */}
        <FlatList
          data={imageData}
          renderItem={() => <CommunityGalleryItem navigation={navigation} />}
          numColumns={3}
          key={null}
        />
      </View>
    </>
  );
};

export default CommunityContent;
