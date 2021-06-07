import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Pix from '../../assets/options/pix.png';
import {
    Container, TabItem, TabsContainer, TabText
} from './styles';

export default function Tabs(){
    return(
        <Container>
            <TabsContainer scrollEventThrottle={16}>
                <TabItem activeOpacity={0.6}>
                    <Image source={Pix} style={{width: 23, height: 23}}/>
                    <TabText> Pix </TabText>
                </TabItem>

                <TabItem activeOpacity={0.6}>
                    <Icon name="barcode-outline" size={23} color="#FFF"/>
                    <TabText> Pagar </TabText>
                </TabItem>

                <TabItem activeOpacity={0.6}>
                    <Icon name="chevron-down-circle-outline" size={23} color="#FFF"/>
                    <TabText> Depositar </TabText>
                </TabItem>

                <TabItem activeOpacity={0.6}>
                    <Icon name="chevron-up-circle-outline" size={23} color="#FFF"/>
                    <TabText> Transferir </TabText>
                </TabItem>

                <TabItem activeOpacity={0.6}>
                    <Icon name="person-add-outline" size={23} color="#FFF"/>
                    <TabText> Indicar amigos </TabText>
                </TabItem>

                <TabItem activeOpacity={0.6}>
                    <Icon name="card-outline" size={23} color="#FFF"/>
                    <TabText> Cartão Virtual </TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}