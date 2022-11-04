import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  login,
  getProfile as getKakaoProfile,
} from '@react-native-seoul/kakao-login';
import {
  getDataInLocalStorage,
  saveDataInLocalStorage,
} from '../../store/AsyncService';

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Login'>;
}

const Login = ({navigation}: Props) => {
  const [result, setResult] = useState<string>('');
  const [profile, setProfile] = useState<string>('');
  const [val, setVal] = useState<string | null>(null);

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      setResult(JSON.stringify(token));
      getProfile();
    } catch (err) {
      console.log('Login Error');
    }
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profileResult = await getKakaoProfile();
      setProfile(profileResult.id);
    } catch (err) {
      console.log('Profile error');
    }
  };

  useEffect(() => {
    const saveAndGetData = async () => {
      await saveDataInLocalStorage('id', profile);
      const data = await getDataInLocalStorage('id');
      setVal(data);
    };

    if (profile) {
      saveAndGetData();
    }
  }, [profile]);

  useEffect(() => {
    if (val) {
      console.log(val);
    }
  }, [val]);

  return (
    <ImageBackground source={require('../../assets/image/intro.png')}>
      <View style={styles.body}>
        <View style={styles.section_1} />
        <View style={styles.section_2}>
          <Image
            source={require('../../assets/image/logoText.png')}
            style={styles.title}
          />
        </View>
        <View style={styles.section_3} />
        <View style={styles.section_4}>
          <TouchableOpacity
            style={styles.loginBox}
            onPress={() => signInWithKakao()}>
            <Image
              source={require('../../assets/image/kakaoLogin.png')}
              style={styles.loginButton}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.section_5} />
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {width: '100%', height: '100%'},
  section_1: {flex: 2},
  section_2: {flex: 8, alignItems: 'center'},
  section_3: {flex: 1},
  section_4: {flex: 3, alignItems: 'center'},
  section_5: {flex: 16},
  title: {height: '100%', width: '90%', resizeMode: 'contain'},
  loginBox: {height: '100%', width: '60%'},
  loginButton: {height: '100%', width: '100%', resizeMode: 'contain'},
});
