import React from 'react';
import { Text, Pressable } from 'react-native';
import { colors, styles } from '../Styles';

interface Props {
  title: string;
  active: number;
  index: number;
  onPress: Function;
}

const ListItemAtom = (props: Props) => {
  const { title, active, index, onPress } = props;
  return (
    <Pressable style={[ styles.listItemAtomContainer, {
      backgroundColor: (active === index) ? colors.lightOrange : colors.transparent,
    }]}
    onPress={()=>onPress(index)}
    >
      <Text style={[styles.listItemAtomText, {
        color: (active === index) ? colors.darkOrange : colors.white
      }]}>{title}</Text>
    </Pressable>
  );
};

export default ListItemAtom;