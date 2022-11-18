import {Platform, StyleSheet, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Btn from '../common/Btn_long';
import {PermissionsAndroid} from 'react-native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setFile} from '../../store/mission';

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
  useEffect(() => {
    if (Platform.OS === 'android') {
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
      checkGranted();
    } // 권한 확인
  }, []);

  function showGallary() {
    //  사용자 앨범 접근
    launchImageLibrary({}, res => {
      // 취소 버튼을 누르지 않으면
      if (!res.didCancel && res && res.assets) {
        console.log(res + '======');
        console.log(typeof res.assets[0]);
        const mission = {
          file: res.assets[0].uri,
          type: res.assets[0].type,
          name: res.assets[0].fileName,
        };
        dispatch(setFile(mission));
        navigation.goBack();
      }
    });
  }

  const takePicture = async () => {
    launchCamera({mediaType: 'photo', cameraType: 'back'}, res => {
      if (!res.didCancel && res && res.assets) {
        const mission = {
          file: res.assets[0].uri,
          type: res.assets[0].type,
          name: res.assets[0].fileName,
        };
        dispatch(setFile(mission));
        // navigation.goBack();
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
