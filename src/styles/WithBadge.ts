import styled from 'styled-components';

export const WithBadge = styled.div`
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    right: 2px;

    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 50%;

    aspect-ratio: 1/1;
    width: 9px;
    height: auto;
  }
`;
