import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import CommunityGalleryItem from './CommunityGalleryItem';
import {FlatList} from 'react-native-gesture-handler';
import api from '../../api/api_controller';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import NoticeItem from './NoticeItem';

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Community'>;
  isNotice: boolean;
  charactersId: number;
  communityDataReal: Community[];
  lastCommunityDataId: string;
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    width: '100%',
  },
  tableBox: {
    flex: 1,
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});

export interface Community {
  id: number;
  charactersId: number;
  userId: string;
  userCharacterId: number;
  content: string;
  imgUrl: string;
  createDate: number;
}

export interface Notice {
  id: number;
  userId: string;
  title: string;
  content: string;
  createDate: string;
}

const CommunityContent = ({
  navigation,
  isNotice,
  charactersId,
  communityDataReal,
}: Props) => {
  const [noticeData, setNoticeData] = useState<Notice[]>([]);

  const getNoticeAll = async () => {
    try {
      const response = await api.notice.getNoticeAll();
      setNoticeData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNoticeAll();
  }, []);

  useEffect(() => {
    getNoticeAll();
  }, [charactersId]);

  const onEndReached = () => {
    console.log('load more items');
  };

  const loading = () => {
    return (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="small" color="aaa" />
      </View>
    );
  };

  return (
    <>
      <View style={styles.contentContainer}>
        {isNotice ? (
          <View>
            <FlatList
              data={noticeData}
              renderItem={item => (
                <NoticeItem navigation={navigation} item={item.item} />
              )}
              numColumns={1}
              key={'noticeFlatlist'}
            />
          </View>
        ) : (
          <View>
            <FlatList
              style={styles.tableBox}
              data={communityDataReal}
              renderItem={item => (
                <CommunityGalleryItem
                  navigation={navigation}
                  item={item.item}
                />
              )}
              key={'communityFlatlist'}
              numColumns={3}
              onEndReached={onEndReached}
              onEndReachedThreshold={0}
              ListFooterComponent={loading}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default CommunityContent;
