import styled, { keyframes } from 'styled-components';

// Define the fadeIn animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for LeftSection with fading animation
export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  animation: ${fadeIn} 2s ease-out forwards;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`;
