import React, {useState} from 'react';
// import { View } from 'react-native';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import imagesPath from '../../assets/image/constants/imagesPath';

const styles = StyleSheet.create({
  photo: {
    backgroundColor: 'rgba(255, 247, 234, 0.69)',
    borderRadius: 20,
    width: '65%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    overflow: 'hidden',
  },
  photoTxt: {
    fontFamily: font.beeBold,
    fontSize: 16,
    textAlign: 'center',
    color: color.BROWN_47,
  },
  preview: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function ImagePicker() {
  const [fileImage, setFileImage] = useState('');
  const clickEvent = () => {
    console.log('zz');
  };

  //   async function takeImageHandler() {
  //     const result = await launchCamera({
  //       mediaType: 'photo',
  //       cameraType: 'back',
  //       saveToPhotos: false,
  //       quality: 0.5,
  //     });
  //     console.log(result);
  //   }

  function showPicker() {
    //  사용자 앨범 접근
    launchImageLibrary({}, res => {
      //   const formdata = new FormData();
      //   formdata.append('file', res.assets[0].uri);
      //   console.log(res.assets[0]);

      // 취소 버튼을 누르면
      if (!res.didCancel) {
        // 사진을 누르면
        setFileImage(res.assets[0].uri);
      } else {
        console.log('취소!'); // 취소 누를시
      }
    });
  }

  return (
    <TouchableOpacity style={styles.photo} onPress={showPicker}>
      {fileImage === '' && (
        <Text style={styles.photoTxt}>
          사진을 업로드하면 {'\n'} 추가 포인트를 받을 수 있어!{'\n'}
          (? 버튼으로 자세한 사항을 확인해봐!)
        </Text>
      )}
      {fileImage !== '' && (
        <Image style={styles.preview} source={{uri: fileImage}} />
      )}

      {/* {!isMain && (
        <Text style={styles.photoTxt}>
          공통 미션에는 {'\n'} 사진 업로드가 필수야!{'\n'}
          (? 버튼으로 자세한 사항을 확인해봐!)
        </Text>
      )} */}
    </TouchableOpacity>
  );
}
export default ImagePicker;
