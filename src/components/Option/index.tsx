import React from 'react';

import { Container, Name, ImgIcon } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../../styles/colors';

interface OptionProps {
  name: string
  icon?: any
  imgIcon?: any
}

function Option({name, icon, imgIcon}: OptionProps) {
  return (
    <Container activeOpacity={0.6}>
      {/* {icon ? <Icon name={icon} size={23} color={colors.white}/> : <ImgIcon source={imgIcon} />}
      <Name>{name}</Name> */}
    </Container>
  );
};

export default Option;
