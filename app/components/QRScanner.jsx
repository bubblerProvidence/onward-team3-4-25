"use client";

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Html5QrcodeScanner } from 'html5-qrcode';

const ScannerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ScannerTitle = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const ScannerBox = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: #FF0000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #CC0000;
    transform: scale(1.05);
  }
`;

const VRTransition = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  color: white;
  font-size: 24px;
  text-align: center;
`;

const LoadingBar = styled.div`
  width: 300px;
  height: 10px;
  background: #333;
  border-radius: 5px;
  margin-top: 20px;
  overflow: hidden;
`;

const LoadingProgress = styled.div`
  height: 100%;
  background: #FF0000;
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

const QRScanner = ({ onClose, onEnterVR }) => {
  const [isScanning, setIsScanning] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const scannerRef = useRef(null);

  useEffect(() => {
    if (isScanning) {
      const scanner = new Html5QrcodeScanner(
        "qr-reader",
        {
          fps: 10,
          qrbox: { width: 250, height: 250 }
        },
        false
      );

      scanner.render(onScanSuccess, onScanFailure);
      scannerRef.current = scanner;

      return () => {
        if (scannerRef.current) {
          scannerRef.current.clear();
        }
      };
    }
  }, [isScanning]);

  const onScanSuccess = (decodedText) => {
    if (decodedText.includes('fitfusion-vr')) {
      setIsScanning(false);
      startVRTransition();
    }
  };

  const onScanFailure = (error) => {
    // Handle scan failure
    console.warn(`QR Code scan failed: ${error}`);
  };

  const startVRTransition = () => {
    setIsTransitioning(true);
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onEnterVR();
        }, 500);
      }
    }, 30);
  };

  const handleClose = () => {
    if (scannerRef.current) {
      scannerRef.current.clear();
    }
    onClose();
  };

  return (
    <>
      {isTransitioning ? (
        <VRTransition>
          <h2>Entering VR World...</h2>
          <LoadingBar>
            <LoadingProgress progress={progress} />
          </LoadingBar>
        </VRTransition>
      ) : (
        <ScannerContainer>
          <ScannerTitle>Scan QR Code to Enter VR World</ScannerTitle>
          <ScannerBox id="qr-reader" />
          <CloseButton onClick={handleClose}>Close Scanner</CloseButton>
        </ScannerContainer>
      )}
    </>
  );
};

export default QRScanner; 