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
import {selectCharacter, setMyCharacter} from '../../store/character';

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'Login'>;
}

const Login = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const user: User = useSelector(selectUser);
  const character = useSelector(selectCharacter);

  const signInWithKakao = async (): Promise<void> => {
    try {
      await login();
      await getProfileId();
    } catch (err) {
      console.error(err);
    }
  };

  const ownLogin = async (id: string) => {
    try {
      const response = await api.auth.login(id);
      const token = response.headers.token;

      await saveDataInLocalStorage('token', token);

      getUserData();
    } catch (err) {
      console.error(err);
    }
  };

  const getProfileId = async (): Promise<void> => {
    try {
      const profileResult = await getKakaoProfile();

      if (profileResult?.id) {
        await saveDataInLocalStorage('id', profileResult.id);
        await ownLogin(profileResult.id);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getUserData = async () => {
    const token = await getDataInLocalStorage('token');
    const kakaoId = await getDataInLocalStorage('id');

    if (token && kakaoId) {
      try {
        const response = await api.user.getUserInfo(kakaoId);
        dispatch(setUserObject({user: response.data}));
      } catch {
        await ownLogin(kakaoId);
      }
    }
  };

  const getNowUserCharacter = async (id: string) => {
    const response = await api.character.getNowUserCharacter(id);

    if (response.data.userCharacter) {
      dispatch(setMyCharacter({character: response.data}));
      navigation.navigate('Home');
    } else {
      navigation.navigate('SelectAnimal');
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (user?.id && !character) {
      try {
        getNowUserCharacter(user.id);
      } catch (err) {
        console.error(err);
      }
    }
  }, [user]);

  return (
    <ImageBackground source={require('../../assets/image/login_screen.png')}>
      <View style={styles.body}>
        <View style={styles.section_1} />
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
  section_1: {flex: 11},
  section_4: {flex: 3, alignItems: 'center'},
  section_5: {flex: 16},
  title: {height: '100%', width: '90%', resizeMode: 'contain'},
  loginBox: {height: '100%', width: '60%'},
  loginButton: {height: '100%', width: '100%', resizeMode: 'contain'},
});
