import styled from 'styled-components'

export const DropZoneScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 90%;
  height: 80px;
  padding: 15px;
  border: 2px dashed ${(props) => props.theme.colors.light};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 600px;
    height: 100px;
  }
`
