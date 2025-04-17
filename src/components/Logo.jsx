import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  position: relative;
`;

const VRHeadset = styled.div`
  width: 120px;
  height: 80px;
  background: linear-gradient(45deg, #4a90e2, #6a5acd);
  border-radius: 20px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 20px;
    background: #333;
    top: 30px;
    border-radius: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    top: 20px;
    left: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const Clothing = styled.div`
  position: absolute;
  width: 60px;
  height: 40px;
  background: #ff6b6b;
  top: 60px;
  left: 30px;
  transform: rotate(-15deg);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #ff6b6b;
    top: -10px;
    left: 20px;
    border-radius: 50%;
  }
`;

const Title = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
  text-align: center;
  background: linear-gradient(45deg, #4a90e2, #6a5acd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <VRHeadset>
        <Clothing />
      </VRHeadset>
      <Title>FitFusion</Title>
    </LogoContainer>
  );
};

export default Logo; 