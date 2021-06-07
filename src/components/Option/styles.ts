import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.TouchableOpacity`
    width: 110px;
    height: 137px;
    elevation: 9;
    background: ${colors.foreground};
    border-radius: 21px;
    padding: 6%;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 3%;
`

export const ImgIcon = styled.Image`
    width: 28px;
    height: 28px;
`

export const Name = styled.Text`
    font-family: ${fonts.light};
    color: ${colors.white};
    font-size: 13px;
`
