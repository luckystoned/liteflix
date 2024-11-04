import styled from 'styled-components';

export const DropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.light};
  position: relative;
  z-index: 2;
  & > div {
    display: flex;
    align-items: center;
    gap: 1ch;
    margin-left: 1ch;
    cursor: pointer;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`;

export const ArrowIcon = styled.img`
  margin-top: -5px;
  &.open {
    transform: rotate(180deg);
  }
`;

export const DropDownModal = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: absolute;
  top: calc(100% + 20px);
  right: 0;
  background-color: ${(props) => props.theme.colors.dark};
  width: 100%;
  padding: 25px;
  opacity: 0;
  transform: translateY(-20px);
  transition: 0.3s ease 0s;
  &.open {
    opacity: 1;
    transform: translateY(0);
  }
  & > li {
    cursor: pointer;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 240px;
    &::after {
      content: '';
      position: absolute;
      top: -5px;
      right: 25px;
      background-color: ${(props) => props.theme.colors.dark};
      transform: rotate(45deg);
      aspect-ratio: 1/1;
      width: 12px;
      height: auto;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.35);
  }
`;
