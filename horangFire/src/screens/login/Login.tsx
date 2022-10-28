import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

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

const Login = ({navigation}: any) => {
  return (
    <ImageBackground source={require('../../assets/image/intro.png')}>
      <View style={styles.body}>
        <View style={styles.section_1}></View>
        <View style={styles.section_2}>
          <Image
            source={require('../../assets/image/logoText.png')}
            style={styles.title}
          />
        </View>
        <View style={styles.section_3}></View>
        <View style={styles.section_4}>
          <TouchableOpacity
            style={styles.loginBox}
            onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/image/kakaoLogin.png')}
              style={styles.loginButton}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.section_5}></View>
      </View>
    </ImageBackground>
  );
};

export default Login;
