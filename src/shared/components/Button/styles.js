import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  flex: ${({ flex }) => flex || 1}
  justify-content: center;
  background-color: ${({ color }) => color || 'pink'};
  border-radius: ${({ borderRadius }) => borderRadius || 5}px;
  margin-right: ${({ marginRight }) => marginRight || 0}px;
  margin-left: ${({ marginLeft }) => marginLeft || 0}px;
`;

export const Label = styled.Text`
  color: ${({ textColor }) => textColor || 'pink'};
  font-size: ${({ fontSize }) => fontSize || 20}px;
  margin: ${({ textMargin }) => textMargin || 0}px;
  text-align: center;
`;
