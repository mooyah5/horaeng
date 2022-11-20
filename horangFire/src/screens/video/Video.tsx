import {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Btn from '../../components/common/Btn_short';
import {font} from '../../styles/colorAndFontTheme';

const VideoScreen = ({navigation, route}: any) => {
  const {next} = route.params;
  const [isReady, setIsReady] = useState<boolean>(false);

  const moveNextScreen = () => {
    navigation.navigate(next);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://drive.google.com/u/0/uc?id=1ctIlLtiimJZwnGQCNHjml51P3w28icLZ&export=download',
        }}
        style={styles.fullScreen}
        paused={false}
        resizeMode={'contain'}
        onLoad={() => {
          setIsReady(true);
        }}
        repeat={false}
        onEnd={() => {
          moveNextScreen();
        }}
      />
      {!isReady && <Text style={styles.loading}>로딩중입니다</Text>}
      <View style={styles.nextButton}>
        <Btn txt="건너뛰기" clickEvent={moveNextScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loading: {fontFamily: font.beeBold, fontSize: 30, color: 'white'},
  nextButton: {
    position: 'absolute',
    width: 100,
    height: 50,
    bottom: 100,
    right: 20,
  },
});

export default VideoScreen;
