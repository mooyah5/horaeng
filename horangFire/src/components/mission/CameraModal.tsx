import {StyleSheet, View, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Btn from '../common/Btn_long';
import {PermissionsAndroid} from 'react-native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setMainFile, reset} from '../../store/mission';

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    flex: 1,
  },
  btns: {
    // flexDirection: 'column',
    // flex: 0.5,
  },
  btn: {
    paddingVertical: 10,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
  },
});

const CameraModal = ({navigation}: any) => {
  const dispatch = useDispatch();

  // 권한 부여 =======
  const checkGranted = async () => {
    try {
      const grantedcamera = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
          buttonNeutral: 'Ask me Later',
        },
      );
      const grantedstorage = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
          buttonNeutral: 'Ask me Later',
        },
      );

      if (
        grantedcamera === PermissionsAndroid.RESULTS.GRANTED &&
        grantedstorage === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('ss');
      } else {
        console.log('permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    checkGranted(); // 권한 확인
  }, []);

  function showGallary() {
    //  사용자 앨범 접근
    launchImageLibrary({}, res => {
      //   const formdata = new FormData();
      //   formdata.append('file', res.assets[0].uri);
      //   console.log(res.assets[0]);
      // 취소 버튼을 누르지 않으면
      if (!res.didCancel && res) {
        // setFileImage(res.assets[0].uri); // 사진을 누르면
        dispatch(setMainFile({mainFile: res.assets[0].uri}));
        navigation.navigate('MainMission');
      }
    });
  }

  const takePicture = async () => {
    // const res = launchCamera({mediaType: 'photo', cameraType: 'back'});
    // if (!(await res).didCancel && res) {
    //   console.log('11');
    //   dispatch(setFile({file: res.assets[0].uri}));
    //   navigation.navigate('MainMission');
    // }

    launchCamera({mediaType: 'photo', cameraType: 'back'}, res => {
      if (!res.didCancel && res) {
        dispatch(setMainFile({mainFile: res.assets[0].uri}));
        navigation.navigate('MainMission');
      }
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <Btn txt="갤러리에서 선택" clickEvent={showGallary} />
        </View>
        <View style={styles.btn}>
          <Btn txt="직접 사진 찍기" clickEvent={takePicture} />
        </View>
        <View style={styles.btn}>
          <Btn txt="뒤로 돌아가기" clickEvent={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
};

export default CameraModal;
