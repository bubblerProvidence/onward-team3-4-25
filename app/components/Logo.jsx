"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import QRScanner from './QRScanner';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin-bottom: 200px;
  position: relative;
`;

const BubbleTitle = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 96px;
  font-weight: bold;
  color: white;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: 4px;
  margin-bottom: 20px;
  position: relative;
  
  &::before {
    content: 'FitFusion';
    position: absolute;
    left: 0;
    top: 0;
    color: rgba(255, 255, 255, 0.2);
    z-index: -1;
    filter: blur(16px);
  }
`;

const Slogan = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
  margin-bottom: 150px;
  font-style: italic;
`;

const ColumnsContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 100px;
  position: relative;
  top: 100px;
  width: 100%;
  justify-content: center;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Column = styled.div`
  width: 250px;
  height: 300px;
  border: 5px solid white;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ShirtContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
`;

const SmallBoxesContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const SmallBox = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid white;
  border-radius: 8px;
  background: ${props => {
    if (props.$isActive) {
      return props.$color || 'white';
    }
    return 'rgba(255, 255, 255, 0.1)';
  }};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
    opacity: 0.9;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  mix-blend-mode: multiply;
`;

const StyledImage = styled(Image)`
  width: 90%;
  height: 90%;
  object-fit: cover;
  object-position: center 30%;
  transform: scale(1.5);
  mix-blend-mode: multiply;
  filter: contrast(1.1) brightness(0.9);
  transition: opacity 0.3s ease;
`;

const ScanButton = styled.button`
  background: #FF0000;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #CC0000;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const PriceTag = styled.div`
  background: white;
  color: #333;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
`;

const PriceSymbol = styled.span`
  color: #FF0000;
  margin-right: 4px;
`;

const Logo = () => {
  const [currentShirt, setCurrentShirt] = useState('black'); // 'black', 'white', or 'orange'
  const [showHood, setShowHood] = useState(false);
  const [showPink, setShowPink] = useState(false);
  const [showPinkBack, setShowPinkBack] = useState(false);
  const [showWhiteJeans, setShowWhiteJeans] = useState(false);
  const [showWhiteShoe, setShowWhiteShoe] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [showVR, setShowVR] = useState(false);

  const switchShirt = (color) => {
    setCurrentShirt(color);
  };

  const toggleHood = () => {
    if (showPink) {
      setShowPinkBack(!showPinkBack);
    } else {
      setShowHood(!showHood);
    }
  };

  const togglePink = () => {
    setShowPink(!showPink);
    setShowHood(false);
    setShowPinkBack(false);
  };

  const toggleJeans = () => {
    setShowWhiteJeans(!showWhiteJeans);
  };

  const toggleShoe = () => {
    setShowWhiteShoe(!showWhiteShoe);
  };

  const getShirtImage = () => {
    switch(currentShirt) {
      case 'white':
        return "/White_Shirt.png";
      case 'orange':
        return "/OrangeShirt.png";
      default:
        return "/Black_Shirt.png";
    }
  };

  const getShirtPrice = () => {
    return '15.00';
  };

  const handleEnterVR = () => {
    setShowVR(true);
    // Here you would typically load your VR environment
    console.log('Entering VR world...');
  };

  return (
    <LogoContainer>
      <BubbleTitle>FitFusion</BubbleTitle>
      <Slogan>Fusion your fit, virtually perfect.</Slogan>
      <ScanButton onClick={() => setShowScanner(true)}>
        Scan QR Code
      </ScanButton>
      <ColumnsContainer>
        <ColumnWrapper>
          <Column>
            <ShirtContainer>
              <StyledImage
                src={getShirtImage()}
                alt={`${currentShirt} Shirt`}
                width={250}
                height={300}
                priority
                style={{ 
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
                }}
              />
            </ShirtContainer>
          </Column>
          <PriceTag>
            <PriceSymbol>$</PriceSymbol>
            {getShirtPrice()}
          </PriceTag>
          <SmallBoxesContainer>
            <SmallBox 
              $isActive={currentShirt === 'black'}
              $color="black"
              onClick={() => switchShirt('black')}
            />
            <SmallBox 
              $isActive={currentShirt === 'white'}
              $color="white"
              onClick={() => switchShirt('white')}
            />
            <SmallBox 
              $isActive={currentShirt === 'orange'}
              $color="#FF6B00"
              onClick={() => switchShirt('orange')}
            />
          </SmallBoxesContainer>
        </ColumnWrapper>
        <ColumnWrapper>
          <Column onClick={toggleHood}>
            <ImageContainer>
              <StyledImage
                src="/hdd.PNG"
                alt="HDD"
                width={250}
                height={300}
                style={{ 
                  opacity: (showHood || showPink) ? 0 : 1, 
                  transition: 'opacity 0.5s ease' 
                }}
              />
              <StyledImage
                src="/hodd.png"
                alt="Hood"
                width={250}
                height={300}
                style={{ 
                  position: 'absolute',
                  opacity: showHood ? 1 : 0,
                  transition: 'opacity 0.5s ease'
                }}
              />
              <StyledImage
                src="/pink.png"
                alt="Pink Hoodie"
                width={250}
                height={300}
                style={{ 
                  position: 'absolute',
                  opacity: (showPink && !showPinkBack) ? 1 : 0,
                  transition: 'opacity 0.5s ease'
                }}
              />
              <StyledImage
                src="/pinkbackhoodie.png"
                alt="Pink Back Hoodie"
                width={250}
                height={300}
                style={{ 
                  position: 'absolute',
                  opacity: (showPink && showPinkBack) ? 1 : 0,
                  transition: 'opacity 0.5s ease'
                }}
              />
            </ImageContainer>
          </Column>
          <SmallBoxesContainer>
            <SmallBox 
              $isActive={showPink}
              $color="#FF69B4"
              onClick={togglePink}
            />
          </SmallBoxesContainer>
        </ColumnWrapper>
        <ColumnWrapper>
          <Column>
            <ImageContainer>
              <StyledImage
                src="/blkc.png"
                alt="Black Jeans"
                width={250}
                height={300}
                priority
                style={{ 
                  transform: 'scale(1.2)',
                  opacity: showWhiteJeans ? 0 : 1,
                  transition: 'opacity 0.5s ease'
                }}
              />
              <StyledImage
                src="/qrjeans.png"
                alt="QR Jeans"
                width={250}
                height={300}
                style={{ 
                  position: 'absolute',
                  transform: 'scale(1.2)',
                  opacity: showWhiteJeans ? 1 : 0,
                  transition: 'opacity 0.5s ease'
                }}
              />
            </ImageContainer>
          </Column>
          <SmallBoxesContainer>
            <SmallBox 
              $isActive={showWhiteJeans}
              $color="white"
              onClick={toggleJeans}
            />
          </SmallBoxesContainer>
        </ColumnWrapper>
        <ColumnWrapper>
          <Column>
            <ImageContainer>
              <StyledImage
                src="/idfk.png"
                alt="Shoe"
                width={250}
                height={300}
                priority
                style={{ 
                  transform: 'scale(1.2)',
                  opacity: showWhiteShoe ? 0 : 1,
                  transition: 'opacity 0.5s ease'
                }}
              />
              <StyledImage
                src="/whiteshoe.png"
                alt="White Shoe"
                width={250}
                height={300}
                style={{ 
                  position: 'absolute',
                  transform: 'scale(1.2)',
                  opacity: showWhiteShoe ? 1 : 0,
                  transition: 'opacity 0.5s ease'
                }}
              />
            </ImageContainer>
          </Column>
          <SmallBoxesContainer>
            <SmallBox 
              $isActive={showWhiteShoe}
              $color="#FF0000"
              onClick={toggleShoe}
            />
          </SmallBoxesContainer>
        </ColumnWrapper>
      </ColumnsContainer>
      {showScanner && (
        <QRScanner 
          onClose={() => setShowScanner(false)} 
          onEnterVR={handleEnterVR}
        />
      )}
    </LogoContainer>
  );
};

export default Logo; 