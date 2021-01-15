import React from 'react';
import {Text} from 'react-native';
import {Colors} from '../src/Themes';

export const TextComponent = ({
  children,
  color,
  size,
  lineHeight,
  weight,
  style,
  onPress,
  font,
  numberOfLines,
  letterSpacing,
}) => {
  return (
      <Text
        numberOfLines={numberOfLines || 0}
        style={{
          fontFamily: `${font || 'Roboto'}-${weight ? weight : 'Regular'}`,
          color: color || Colors.white,
          fontSize: size || 14,
          lineHeight: lineHeight || null,
          letterSpacing: letterSpacing,
          ...style
        }}
        onPress={onPress}
      >
        {children}
      </Text>
  );
};
