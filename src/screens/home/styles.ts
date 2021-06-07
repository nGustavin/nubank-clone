import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.SafeAreaView`
    background: ${colors.background};
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    padding: 20% 0%;
`
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 13%;
`

export const Settings = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    background: ${colors.foreground};
    align-items: center;
    justify-content: center;
    elevation: 2;
`

export const Main = styled.View`
    width: 100%;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 5%;
    padding: 0 8%;
`
export const Card = styled.TouchableOpacity`
    width: 100%;
    height: 191px;
    background: ${colors.foreground};
    border-radius: 21px;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5% 7%;
    flex-direction: row;
    elevation: 9;
    margin-bottom: 8%;
`

export const NameContainer = styled.View`
    width: 60%;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-end;
`

export const CardName = styled.Text`
    color: ${colors.white};
    font-family: ${fonts.regular};
    font-size: 24px;
    
`
export const Balance = styled.View`
    width: 100%;
    height: 120px;
    background: ${colors.foreground};
    border-radius: 21px;
    elevation: 9;
    align-items: flex-start;
    justify-content: space-between;
    padding: 5% 7%;


`
export const TitleContainer = styled.View`
    width: 100%;
    height: 40%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

`
export const Title = styled.Text`
    font-family: ${fonts.regular};
    color: ${colors.white};
    
`
export const BalanceValue = styled.Text`
    color: ${colors.white};
    font-family: ${fonts.regular};
    font-size: 35px;
`
export const Help = styled.Text`
    color: ${colors.white};
    font-family: ${fonts.regular};
    font-size: 15px;
    margin-top: 15%;
    padding: 0px 0px 0px 5%;
`
export const Footer = styled.ScrollView`
  
`