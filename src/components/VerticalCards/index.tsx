import { ReactNode } from 'react';
import React from 'react'
import { Text } from 'react-native';

import { Container } from './styles';

interface VerticalCardsProps {
  children?: ReactNode;
}

function VerticalCards({ children }: VerticalCardsProps) {
  return (
    <Container>
      <Text>VerticalCards</Text>
      {children}
    </Container>
  );
};

export default VerticalCards;
