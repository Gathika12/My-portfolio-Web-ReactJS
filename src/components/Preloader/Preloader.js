// components/Preloader/Preloader.js

import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;

const PreloaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0F1624;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: ${({ isLoaded }) => (isLoaded ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${({ isLoaded }) => (isLoaded ? 'none' : 'all')};
`;

const Spinner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  div {
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    animation: ${bounce} 1.4s infinite ease-in-out both;
  }
  div:nth-child(1) {
    animation-delay: -0.32s;
  }
  div:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

const Preloader = ({ isLoaded }) => (
  <PreloaderWrapper isLoaded={isLoaded}>
    <Spinner>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  </PreloaderWrapper>
);

export default Preloader;
