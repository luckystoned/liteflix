
import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.dark};
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: 0.3s ease-in 0s;
  opacity: 0;

  &.open {
    opacity: 1;
    z-index: 5;
  }
`;

export const UploadModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 72px;
  position: relative;
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.dark};
  width: 100%;
  height: 100vh;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 750px;
    height: 440px;
    gap: 48px;
  }
`;

export const Header = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.typography.sizes.lg + 2};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.sizes.lg};
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;

  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const InputTitle = styled.input`
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid white;
  width: 90%;
  text-align: center;
  padding-bottom: 10px;

  &:active,
  &:focus {
    outline: 0;
    border-bottom: 1px solid white;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 250px;
  }
`;

export const UploadButton = styled.button`
  width: 90%;
  background-color: ${props => props.theme.colors.gray};
  padding: 20px 0;

  &.uploaded {
    background-color: ${props => props.theme.colors.light};
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 250px;
  }
`;