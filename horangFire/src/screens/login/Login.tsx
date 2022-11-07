import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
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
import api from '../../api/api_controller';
import {selectUser, User} from '../../store/user';
import {useDispatch, useSelector} from 'react-redux';
import {setUserObject} from '../../store/user';
import {setMyCharacter} from '../../store/character';

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Login'>;
}

const Login = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const user: User = useSelector(selectUser);

  const signInWithKakao = async (): Promise<void> => {
    try {
      await login();
      await getProfileId();
    } catch (err) {
      console.error(err);
    }
  };

  const getProfileId = async (): Promise<void> => {
    try {
      const profileResult = await getKakaoProfile();
      const response = await api.auth.login(profileResult.id);
      const token = response.headers.token;

      await saveDataInLocalStorage('id', profileResult.id);
      await saveDataInLocalStorage('token', token);

      getUserData();
    } catch (err) {
      console.error(err);
    }
  };

  const getUserData = async () => {
    /**
     * 로그인 돼있는지 확인하고 로그인 돼있으면
     * 키우는 동물 있으면 홈으로, 없으면 동물선택
     * 로그인 안 돼있으면 로그인 페이지 유지
     */

    // const isLoggedIn = await getDataInLocalStorage('token');

    const profileId = await getDataInLocalStorage('id');
    if (profileId) {
      const response = await api.user.getUserInfo(profileId);
      dispatch(setUserObject({user: response.data}));
    }

    // 프로필 id(토큰)이 없으면 그냥 로그인 페이지 유지
  };

  const getNowUserCharacter = async (id: string) => {
    const response = await api.character.getNowUserCharacter(id);

    if (response.data.userCharacter) {
      dispatch(setMyCharacter(response.data.userCharacter));
      navigation.navigate('Home');
    } else {
      navigation.navigate('SelectAnimal');
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (user?.id) {
      try {
        getNowUserCharacter(user.id);
      } catch (err) {
        console.error(err);
      }
    }
  }, [user]);

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
