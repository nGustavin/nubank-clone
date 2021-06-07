import React from 'react';

import { Icon, Container, Name } from './styles';

interface OptionProps {
  name: string
  icon: any
}

function Option({name, icon}: OptionProps) {
  return (
    <Container activeOpacity={0.6}>
      <Icon source={icon}/>
      <Name>{name}</Name>
    </Container>
  );
};

export default Option;
