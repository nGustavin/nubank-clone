import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
    height: 150px;
    margin: 10% 0%;
`

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 20, paddingRight: 30 },
    showsHorizontalScrollIndicator: false,
})`

`

export const TabItem = styled.TouchableOpacity`
    width: 105px;
    height: 130px;
    background: ${colors.foreground};
    border-radius: 21px;
    margin-left: 10px;
    align-items: flex-start;
    justify-content: space-between;
    elevation: 9;
    padding: 20px;
`

export const TabText = styled.Text`
    align-self: flex-start;
    font-size: 12px;
    color: #FFF;
    font-family: ${fonts.light};
    
`