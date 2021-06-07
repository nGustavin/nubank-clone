import React from 'react';
import { Image, Text } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Logo from '../../assets/logo/newLogo.png';
import CardLogo from '../../assets/master.png';
import SettingsIcon from '../../assets/settings.png';
import Option from '../../components/Option';

import Pix from '../../assets/options/pix.png';
import BarCode from '../../assets/options/barCode.png';
import Deposit from '../../assets/options/deposit.png';

import fonts from '../../styles/fonts';

import { Balance, BalanceValue, Card, CardName, Container, Footer, Header, Help, Main, NameContainer, Settings, Title, TitleContainer } from './styles';

const Home = () => {
    return(
            <Container>
                <StatusBar style="auto"/>
                <Header>
                    <Image source={Logo} style={{width: 85, height: 85, marginLeft: -18}}/>
                    <Settings>
                        <Image source={SettingsIcon} style={{width: 27, height: 27}}/>
                    </Settings>
                </Header>
                <Main>
                    <Card activeOpacity={0.8}>
                         <NameContainer>
                            <CardName>Gustavo</CardName>
                        </NameContainer>
                        <Text style={{fontFamily: fonts.regular, color: "#ffffff88", marginTop: 10, marginLeft: "-120%", fontSize: 16}}>GOLD</Text>
                        <Image source={CardLogo} style={{width: 68, height: 38.25}}/>
                    </Card>
                    <Balance>
                        <TitleContainer>
                            <Title>Saldo disponível</Title>
                            <SimpleLineIcons name="wallet" size={24} color="white" />
                        </TitleContainer>
                        <BalanceValue>R$13795,76</BalanceValue>
                    </Balance>
                    <Help>Do que precisa?</Help>
                </Main>
                <Footer>
                    <Option icon={Pix} name="Fazer um pix"/>
                    <Option icon={BarCode} name="Pagar um boleto"/>
                    <Option icon={Deposit} name="Fazer um depósito"/>
                </Footer>
            </Container>
    )
}

export default Home