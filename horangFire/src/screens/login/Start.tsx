import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  body: {width: '100%', height: '100%'},
  section_1: {flex: 1},
  section_2: {flex: 4, alignItems: 'center'},
  section_3: {flex: 2},
  section_4: {flex: 6},
  section_5: {flex: 2, alignItems: 'center'},
  title: {height: '100%', width: '90%', resizeMode: 'contain'},
  start: {height: '100%', width: '50%', resizeMode: 'contain'},
});

const Start = () => {
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
        <View style={styles.section_4} />
        <View style={styles.section_5}>
          <Image
            source={require('../../assets/image/start.png')}
            style={styles.start}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Start;
