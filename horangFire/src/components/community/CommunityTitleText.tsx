import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDown from './DropDown';
import {color, font} from '../../styles/colorAndFontTheme';
import {valueType} from '../../screens/community';

interface Props {
  title: string;
  data: valueType[];
  value: valueType;
  onSelect: React.Dispatch<valueType>;
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 100,
  },
  top: {
    fontSize: 24,
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
  },

  bottom: {
    fontSize: 50,
    fontFamily: font.beeBold,
    color: color.BLACK_3A,
  },
  brown: {
    fontSize: 24,
    fontFamily: font.beeBold,
    color: color.BROWN_78,
  },
  row: {
    flexDirection: 'row',
  },
});

const CommunityTitleText = ({
  navigation,
  title,
  value,
  data,
  onSelect,
}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.bottom}>{title}</Text>
        <View style={styles.row}>
          <View>
            <DropDown
              navigation={navigation}
              value={value}
              data={data}
              onSelect={onSelect}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default CommunityTitleText;
