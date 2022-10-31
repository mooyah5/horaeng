import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import imagesPath from '../../assets/image/constants/imagesPath';
import {valueType} from '../../screens/community';
import {color, font} from '../../styles/colorAndFontTheme';
// import { SCREEN_WIDTH } from '../../assets/image/constants/index';

interface Props {
  data: valueType[];
  value: valueType;
  onSelect: React.Dispatch<valueType>;
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    fontFamily: font.beeBold,
    color: color.BROWN_78,
    // textAlign: 'center',
  },
  dropDownStyle: {
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 100,
  },
  tab: {
    backgroundColor: 'white',
    zIndex: 30,
    borderRadius: 10,
    marginVertical: 2,
    paddingHorizontal: 10,
    width: 90,
  },
});

const DropDown = ({navigation, data, value, onSelect}: Props) => {
  const [showOption, setShowOption] = useState(false);

  const onSelectedItem = (val: valueType) => {
    setShowOption(false);
    onSelect(val);
    // console.log(val);
    // console.log(SCREEN_WIDTH)
  };
  return (
    <>
      <View>
        <Text>
          {/* 드랍 박스 */}
          <TouchableOpacity
            style={styles.dropDownStyle}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Community');
              setShowOption(!showOption);
            }}>
            <Text style={styles.container}>
              {value ? value?.name : '동물 고르기'}
            </Text>
            <Image
              style={{
                transform: [{rotate: showOption ? '180deg' : '0deg'}],
              }}
              source={imagesPath.icDropDown}
            />
          </TouchableOpacity>
          <Text>
            <Text style={styles.container}> | </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Notice')}>
              <Text style={styles.container}>공지사항</Text>
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
                    onPress={() => onSelectedItem(val)}>
                    <Text style={styles.container}>{val.name}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        )}
      </View>
    </>
  );
};

export default DropDown;
