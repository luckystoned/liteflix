import styled from 'styled-components';

export const Text = styled.span<{ $weight?: string; $size?: string }>`
  color: white;
  font-weight: ${(props) => props.$weight || 'normal'};
  font-size: ${(props) => props.$size || '1rem'};
`;
