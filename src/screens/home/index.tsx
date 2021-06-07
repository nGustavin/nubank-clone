import { SimpleLineIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import Logo from '../../assets/logo/newLogo.png';
import CardLogo from '../../assets/master.png';
import SettingsIcon from '../../assets/settings.png';
import Tabs from '../../components/Tabs';
import fonts from '../../styles/fonts';
import { Balance, BalanceValue, Card, CardName, Container, Header, Help, Main, NameContainer, Settings, Title, TitleContainer } from './styles';



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
                        <BalanceValue>R$13.795,76</BalanceValue>
                    </Balance>
                    <Help>Do que precisa?</Help>
                </Main>
               <Tabs/>
                    
               
            </Container>
    )
}

const styles = StyleSheet.create({
    environmentList: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 30,
      },

      plants: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center'
      }
})

export default Home