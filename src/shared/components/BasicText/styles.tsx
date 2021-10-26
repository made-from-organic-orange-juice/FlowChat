import styled from 'styled-components/native';

export const BasicText = styled.Text`
  color: ${({ textColor }) => textColor || 'white'};
  font-size: ${({ fontSize }) => fontSize || '13'}px;
`;
