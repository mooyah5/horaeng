import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import Btn from '../../components/common/Btn_short';
import imagesPath from '../../assets/image/constants/imagesPath';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import api from '../../api/api_controller';
import NoticeItem from '../../components/community/NoticeItem';
import CommunityGalleryItem from '../../components/community/CommunityGalleryItem';

// style
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  text: {
    fontFamily: font.beeBold,
    fontSize: 100,
    color: color.BLACK_3A,
    textAlign: 'center',
  },
  body: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },
  box1: {
    flex: 1,
  },
  box2: {
    flex: 4,
    zIndex: 1,
    paddingTop: 60,
    paddingBottom: 80,
  },
  midTitle: {
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
    fontSize: 50,
    paddingBottom: 12,
    paddingTop: 0,
    textAlign: 'center',
  },
  contents: {
    width: '100%',
    backgroundColor: 'blue',
  },

  btns: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    alignItems: 'flex-start',
    zIndex: 2,
  },

  // dropdown
  textContainer: {
    fontSize: 24,
    fontFamily: font.beeBold,
    color: color.BROWN_78,
  },
  container: {
    alignItems: 'center',
    zIndex: 100,
  },
  bottom: {
    fontSize: 50,
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
  },
  row: {
    flexDirection: 'column',
  },
  dropDownStyle: {
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 100,
  },
  tab: {
    backgroundColor: color.MODAL_SUB,
    color: color.BACK,
    zIndex: 30,
    borderRadius: 10,
    marginVertical: 2,
    paddingHorizontal: 10,
    width: 120,
    alignItems: 'center',
  },

  // Contents
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

// Types

interface valueType {
  id: number;
  name: string;
}

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Community'>;
}
interface Community {
  id: number;
  charactersId: number;
  userId: string;
  userCharacterId: number;
  content: string;
  imgUrl: string;
  createDate: number;
}
interface Notice {
  id: number;
  userId: string;
  title: string;
  content: string;
  createDate: string;
}

const Community = ({navigation}: Props) => {
  // Datas
  const data: valueType[] = [
    {id: 0, name: '전체'},
    {id: 1, name: '뱅갈호랑이'},
    {id: 2, name: '오목눈이'},
    {id: 3, name: '아프리카코끼리'},
    {id: 4, name: '바다거북이'},
    {id: 5, name: '펭귄'},
  ];
  const [isNotice, setIsNotice] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [selectedItem, setSelectedItem] = useState<valueType>(data[0]);
  const [communityData, setCommunityData] = useState<Community[]>([]);
  const [lastId, setLastId] = useState<number>(-1);
  const [noticeData, setNoticeData] = useState<Notice[]>([]);
  const [allDataLength, setAllDataLength] = useState<number>(12);
  const [dataLength, setDataLength] = useState<number>(12);
  const [loading, setLoading] = useState<boolean>(false);

  // When Toggle Button Clicked
  const onSelectedItem = (val: valueType, i: number) => {
    console.log(i, '번을 클릭했어요!!!!!!!!!!');
    setCommunityData([]); // 커뮤니티 데이터 초기화
    setSelectedItem(val); // 선택한 동물 지정 => useEffect(selectedITem) 실행 => 커뮤니티 불러오기
    setShowOption(false); // 토글 접기
    setIsNotice(false); // 공지사항 미선택 (title 변화용)
    setLastId(-1);
  };

  // 공지사항 버튼
  const noticeHandle = () => {
    setIsNotice(true); // title '공지사항'으로 보여주기 위함
    setShowOption(false); // 동물 선택 토글이 열려있다면 닫기
    setSelectedItem(data[0]); // 동물 선택 '전체'로 초기화해놓기
  };

  // 동물별 커뮤니티 불러오기 axios
  const getCommunityAnimalsAll = async (character_id: number) => {
    setLoading(true);
    try {
      console.log(character_id, '번 동물 axios');
      const response = await api.community.getCommunityAnimalsAll(
        character_id,
        lastId,
      );
      setCommunityData(prev => [...prev, ...response.data]);
      setDataLength(response.data.length);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  // 전체 커뮤니티 불러오기 axios
  const getCommunityAll = async () => {
    setLoading(true);
    try {
      const response = await api.community.getCommunityAll(lastId);
      setCommunityData(prev => [...prev, ...response.data]);
      console.log('a', response.data);
      console.log('b', ...communityData);
      setAllDataLength(response.data.length);
      console.log('전체 ', response.data.length, '개 불러옴');
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  // 공지사항 불러오기 axios
  const getNoticeAll = async () => {
    try {
      const response = await api.notice.getNoticeAll();
      setNoticeData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('last', lastId);
    getNoticeAll();
    // 전체 버튼을 클릭 - 전체 커뮤니티 불러오기
    if (selectedItem.id === 0) {
      getCommunityAll();
      // 동물별 버튼을 클릭 - 동물별 커뮤니티 불러오기
    } else if (selectedItem.id >= 1) {
      getCommunityAnimalsAll(selectedItem.id);
    }
  }, [selectedItem, lastId]);

  // 스크롤 하단에 닿았을 때
  const onEndReached = () => {
    if (selectedItem.id === 0) {
      if (!loading && allDataLength % 12 === 0) {
        // 로딩중이 아닐 경우, 불러온 리스트의 마지막 요소 아이디를 변화
        setLastId(communityData[communityData.length - 1].id);
      }
    } else {
      // 동물 선택 시
      console.log(dataLength);
      if (!loading && dataLength % 12 === 0) {
        // 로딩중이 아닐 경우, 불러온 리스트의 마지막 요소 아이디를 변화
        setLastId(communityData[communityData.length - 1].id);
      }
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/image/commuBack.png')}>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.box1}>
            <View style={styles.container}>
              <Text style={styles.bottom}>Community</Text>
              <View style={styles.row}>
                <Text>
                  {/* 드랍 박스 */}
                  <TouchableOpacity
                    style={styles.dropDownStyle}
                    activeOpacity={0.8}
                    onPress={() => {
                      setShowOption(!showOption);
                    }}>
                    <Text style={styles.textContainer}>
                      {selectedItem?.name}
                    </Text>
                    <Image
                      style={{
                        transform: [{rotate: showOption ? '180deg' : '0deg'}],
                      }}
                      source={imagesPath.icDropDown}
                    />
                  </TouchableOpacity>
                  <Text>
                    <Text style={styles.textContainer}> | </Text>
                    <TouchableOpacity onPress={noticeHandle}>
                      <Text style={styles.textContainer}>공지사항</Text>
                    </TouchableOpacity>
                  </Text>
                </Text>
                {showOption && (
                  <View style={styles.tab}>
                    {data &&
                      data.map((val, i) => {
                        return (
                          <TouchableOpacity
                            key={String(i)}
                            onPress={() => onSelectedItem(val, i)}>
                            <Text style={styles.textContainer}>
                              {selectedItem ? val.name : '전체'}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                  </View>
                )}
              </View>
            </View>
          </View>

          <View style={styles.box2}>
            {/* 소제목 (동물 이름 혹은 공지사항) */}
            <Text style={styles.midTitle}>
              {isNotice ? '공지사항' : selectedItem.name}
            </Text>

            {/* 공지 혹은 커뮤니티 리스트 */}
            <View style={styles.contentContainer}>
              {isNotice ? (
                <View>
                  {/* 공지 리스트 */}
                  <FlatList
                    // style={styles.tableNotice}
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
                  {/* 커뮤니티 리스트 */}
                  <FlatList
                    style={styles.tableBox}
                    data={communityData}
                    renderItem={item => (
                      <CommunityGalleryItem
                        navigation={navigation}
                        item={item.item}
                      />
                    )}
                    key={'communityFlatlist'}
                    numColumns={3}
                    onEndReached={onEndReached} // 스크롤이 하단에 닿았을 때 실행
                    onEndReachedThreshold={0} // 어느정도 닿았는지
                    ListFooterComponent={
                      // 로딩 중일 때 하단에 보여줄 로딩스피너
                      loading && (
                        <View style={styles.loaderStyle}>
                          <ActivityIndicator size="small" color="aaa" />
                        </View>
                      )
                    }
                  />
                </View>
              )}
            </View>
          </View>
          <View style={styles.btns}>
            <Btn
              txt="이전으로"
              clickEvent={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Community;
